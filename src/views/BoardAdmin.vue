<template>
  <div class="container">

<!--    <v-row align="center" class="list px-3 mx-auto">-->
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
      <v-col cols="12" sm="12" lg="12">
        <v-card class="mx-auto" tile>
          <v-card-title>Books</v-card-title>
          <v-data-table
              :headers="headers"
              :items="books"
              hide-default-footer
          >
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editBook(item.id)">mdi-pencil</v-icon>
              <v-icon small @click="deleteBook(item.id)">mdi-delete</v-icon>
            </template>
          </v-data-table>
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
  name: 'Admin',
  data() {
    return {
      content: '',
      books: [],
      title: "",
      searchTitle: "",
      headers: [
        { text: "ID", sortable: false, value: "id" },
        { text: "Title", align: "start", sortable: false, value: "title" },
        { text: "Author", value: "author", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
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
    refreshList() {
      this.retrieveBooks();
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

    // getDisplayBook(book) {
    //   return {
    //     id: book.id,
    //     title: book.title.length > 30 ? book.title.substr(0, 30) + "..." : book.title,
    //     description: book.description.length > 30 ? book.description.substr(0, 30) + "..." : book.description,
    //     status: book.published ? "Published" : "Pending",
    //   };
    // },
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

<style>
.list {
  max-width: 750px;
}
</style>
