<template>
  <div class="container">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
              type="text"
              class="form-control"
              placeholder="Search by title"
              v-model="searchTitle"
              @keyup.enter="searchBooks"
          />
          <div class="input-group-append">
            <button
                class="btn btn-outline-secondary"
                type="button"
                @click="page = 1; retrieveBooks();"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <!-- Book Grid Section -->
      <v-col cols="12" sm="12">
        <v-card class="mx-auto" tile>
          <v-card-title>Books</v-card-title>

          <!-- Grid Section -->
          <v-row>
            <v-col v-for="book in books" :key="book.id" cols="12" md="6" lg="4">
              <!-- Wrap v-img inside router-link -->
              <router-link :to="{ name: 'book-details', params: { id: book.id } }">
                <v-card class="mb-3" max-width="400" height="100%">
                  <v-responsive aspect-ratio="1.5">
                    <v-img :src="book.img" contain></v-img>
                  </v-responsive>
                  <v-card-title class="text-h6">{{ book.title }}</v-card-title>
                  <b-button >View Details</b-button>
                </v-card>
              </router-link>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <div class="col-md-12">
        <b-pagination
            v-model="page"
            :total-rows="count"
            :per-page="pageSize"
            prev-text="Prev"
            next-text="Next"
            @change="handlePageChange"
        ></b-pagination>
      </div>
<!--    </v-row>-->

  </div>
</template>

<script>
import UserService from '../services/user.service';
import BookDataService from "@/services/BookDataService";

export default {
  name: 'Home',
  data() {
    return {
      content: '',
      books: [],
      title: "",
      searchTitle: "",
      headers: [
        {text: "ID", sortable: false, value: "id"},
        {text: "Title", align: "start", sortable: false, value: "title"},
        {text: "Author", value: "author", sortable: false},
        {text: "Status", value: "status", sortable: false},
        {text: "Actions", value: "actions", sortable: false},
      ],
      totalPages: 0,
      currentPage: 1,
      page: 1,
      count: 0,
      pageSize: 25,
      pageSizes: [3, 6, 9],
    };
  },
  methods: {
    getRequestParams(searchTitle, page, pageSize) {
      let params = {};

      if (searchTitle) {
        params["title"] = searchTitle;
      }

      if (page) {
        params["page"] = page - 1;
      }

      if (pageSize) {
        params["size"] = pageSize;
      }

      return params;
    },
    searchBooks() {
      this.page = 1;
      this.retrieveBooks();
    },
    retrieveBooks() {
      const params = this.getRequestParams(
          this.searchTitle,
          this.page,
          this.pageSize
      );

      BookDataService.getAll(params)
          .then((response) => {
            const { books, totalItems } = response.data;
            this.books = books;
            this.count = totalItems;

            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveBooks();
    },
    handlePageChange(value) {
      this.page = value;
      this.retrieveBooks();
    },
    refreshList() {
      this.retrieveBooks();
    },

    editBook(id) {
      this.$router.push({ name: "book-details", params: { id: id } });
    },

    deleteBook(id) {
      BookDataService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    },
    onPageChange(page) {
      this.retrieveBooks(page);
    },

  },
  mounted() {
    UserService.getAdminBoard().then(
        response => {
          this.content = response.data;
        },
        error => {
          this.content =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString();
        }
    );
    this.retrieveBooks();
  }
};
</script>
