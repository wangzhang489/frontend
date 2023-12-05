<template>
  <div v-if="currentBook" class="book-details py-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>{{ currentBook.title }}</h2>
          <p><strong>Author:</strong> {{ currentBook.author }}</p>
          <p><strong>Format:</strong> {{ currentBook.bookformat }}</p>
          <p>
            <strong>Genre:</strong>
            <v-chip v-for="(genre, index) in currentBook.genre.split(',')" :key="index" class="mr-2" outlined>
              {{ genre.trim() }}
            </v-chip>
          </p>
          <p><strong>Total Price:</strong> {{ currentBook.price }}</p>
          <p v-if="showAdminBoard"><strong>Status:</strong> {{ currentBook.published ? "Published" : "Pending" }}</p>
        </v-col>
      </v-row>

      <v-divider class="my-5"></v-divider>
      <p><strong>The Total Priceis :</strong> {{ currentBook.price }}.00.  <strong>Do you want to check out?</strong></p>
      <v-row>
        <v-col cols="12">
          <div v-if="currentUser">
            <v-btn color="danger" small @click="buyBook">
              Check Out
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div v-else>
    <p>Please click on a Book...</p>
  </div>
</template>

<script>
import BookDataService from "../services/BookDataService";

export default {
  name: "book",
  data() {
    return {
      currentBook: null,
    };
  },
  methods: {
    getBook(id) {
      BookDataService.get(id)
          .then((response) => {
            this.currentBook = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },

    updatePublished(status) {
      var data = {
        id: this.currentBook.id,
        title: this.currentBook.title,
        description: this.currentBook.description,
        published: status,
      };

      BookDataService.update(this.currentBook.id, data)
          .then((response) => {
            this.currentBook.published = status;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    buyBook() {
      var data = {
        userid: this.currentUser.id,
        bookid: this.currentBook.id,
      };
      BookDataService.buybook(data)
          .then((response) => {
            // this.book.id = response.data.id;
            console.log(response.data);
            if (response.data.status === "OK") {
              this.$router.push('/profile');
            }
          })
          .catch((e) => {
            console.log(e);
          });
    },

    deleteBook() {
      BookDataService.delete(this.currentBook.id)
          .then((response) => {
            console.log(response.data);
            this.$router.push({name: "books"});
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.getBook(this.$route.params.id);
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    }
  },
};
</script>

<style scoped>
.book-details {
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

.book-details v-img {
  max-width: 100%;
}
</style>
