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
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{ role }}</li>
    </ul>
    <v-row align="center" class="list px-3 mx-auto">
      <!-- Search Section -->
      <v-col cols="12" md="8">
        <v-text-field v-model="title" label="Search by Title"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn small @click="searchTitle">Search</v-btn>
      </v-col>

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

<!--    <v-row align="center" class="list px-3 mx-auto">-->
<!--      <v-col cols="12" md="8">-->
<!--        <v-text-field v-model="title" label="Search by Title"></v-text-field>-->
<!--      </v-col>-->

<!--      <v-col cols="12" md="4">-->
<!--        <v-btn small @click="searchTitle">-->
<!--          Search-->
<!--        </v-btn>-->
<!--      </v-col>-->

<!--      <v-col cols="12" sm="12">-->
<!--        <v-card class="mx-auto" tile>-->
<!--          <v-card-title>Books</v-card-title>-->

<!--          <v-data-table-->
<!--              :headers="headers"-->
<!--              :items="books"-->
<!--              disable-pagination-->
<!--              :hide-default-footer="true"-->
<!--          >-->
<!--            <template v-slot:[`item.actions`]="{ item }">-->
<!--              <v-icon small class="mr-2" @click="editBook(item.id)">mdi-pencil</v-icon>-->
<!--              <v-icon small @click="deleteBook(item.id)">mdi-delete</v-icon>-->
<!--            </template>-->
<!--          </v-data-table>-->
<!--        </v-card>-->
<!--      </v-col>-->
<!--    </v-row>-->
  </div>
</template>

<script>
import UserService from '../services/user.service';
import BookDataService from "@/services/BookDataService";
export default {
  name: 'Profile',
  data() {
    return {
      books: [],
      title: "",
      headers: [
        { text: "ID", sortable: false, value: "id" },
        { text: "Title", align: "start", sortable: false, value: "title" },
        { text: "Author", value: "author", sortable: false },
        { text: "Status", value: "status", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
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
    this.retrieveMyooks();
  },
  methods: {
    retrieveMyooks() {
      UserService.getUserBooks()
          .then((response) => {
            // this.books = response.data.map(this.getDisplayBook);
            this.books = response.data.books;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveBooks();
    },


    searchTitle() {
      BookDataService.findByTitle(this.title)
          .then((response) => {
            // this.books = response.data.map(this.getDisplayBook);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
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