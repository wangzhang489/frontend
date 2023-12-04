<template>
  <div class="container">
    <!--    <header class="jumbotron">-->
    <!--      <h3>-->
    <!--        <strong>{{ currentUser.username }}</strong> Profile-->
    <!--      </h3>-->
    <!--    </header>-->
    <!--    <p>-->
    <!--      <strong>Token:</strong>-->
    <!--      {{ currentUser.accessToken.substring(0, 20) }} ...-->
    <!--      {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}-->
    <!--    </p>-->
    <!--    <p>-->
    <!--      <strong>Id:</strong>-->
    <!--      {{ currentUser.id }}-->
    <!--    </p>-->
    <p>
      <strong>Username:</strong>
      {{ currentUser.username }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{ role }}</li>
    </ul>
    <v-row align="center" class="list px-3 mx-auto">
<!--      &lt;!&ndash; Search Section &ndash;&gt;-->
<!--      <v-col cols="12" md="8">-->
<!--        <v-text-field v-model="title" label="Search by Title"></v-text-field>-->
<!--      </v-col>-->
<!--      <v-col cols="12" md="4">-->
<!--        <v-btn small @click="searchTitle">Search</v-btn>-->
<!--      </v-col>-->
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
                </v-card>
              </router-link>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
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
  </div>
</template>

<script>
// import UserService from '../services/user.service';
import BookDataService from "@/services/BookDataService";

export default {
  name: 'Profile',
  data() {
    return {
      books: [],
      title: "",
      content: '',
      totalPages: 0,
      currentPage: 1,
      page: 0,
      count: 0,
      pageSize: 4,
      searchTitle: "",
      headers: [
        {text: "ID", sortable: false, value: "id"},
        {text: "Title", align: "start", sortable: false, value: "title"},
        {text: "Author", value: "author", sortable: false},
        {text: "Status", value: "status", sortable: false},
        {text: "Actions", value: "actions", sortable: false},
      ],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    this.retrieveBooks();
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

      BookDataService.getmy(params)
          .then((response) => {
            const {books, totalItems} = response.data;
            this.books = books;
            this.count = totalItems;

            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveBooks();
    },
    handlePageChange(value) {
      this.page = value;
      this.retrieveBooks();
    },

    editBook(id) {
      this.$router.push({name: "book-details", params: {id: id}});
    },

    deleteBook(id) {
      BookDataService.delete(id)
          .then(() => {
            this.refreshList();
          })
          .catch((e) => {
            console.log(e);
          });
    }
  }
};
</script>