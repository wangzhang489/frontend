<template>
  <div v-if="currentBook" class="book-details py-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img :src="currentBook.img" alt="Book Cover" contain></v-img>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <h2>{{ currentBook.title }}</h2>
          <p><strong>Author:</strong> {{ currentBook.author }}</p>
          <p><strong>Format:</strong> {{ currentBook.bookformat }}</p>
          <p><strong>ISBN:</strong> {{ currentBook.isbn }}</p>
          <p>
            <strong>Genre:</strong>
            <v-chip v-for="(genre, index) in currentBook.genre.split(',')" :key="index" class="mr-2" outlined>
              {{ genre.trim() }}
            </v-chip>
          </p>
          <p><strong>Pages:</strong> {{ currentBook.pages }}</p>
          <p><strong>Rating:</strong> {{ currentBook.rating }}</p>
          <p><strong>Reviews:</strong> {{ currentBook.reviews }}</p>
          <p><strong>Status:</strong> {{ currentBook.published ? "Published" : "Pending" }}</p>
          <p><strong>Description:</strong> {{ currentBook.description }}</p>
        </v-col>
      </v-row>

      <v-divider class="my-5"></v-divider>

      <v-row>
        <v-col cols="12">
          <v-btn v-if="currentBook.published" @click="updatePublished(false)" color="primary" small class="mr-2">
            UnPublish
          </v-btn>
          <v-btn v-else @click="updatePublished(true)" color="danger" small class="mr-2">
            Publish
          </v-btn>
          <v-btn color="danger" small class="mr-2" @click="deleteBook">
            Delete
          </v-btn>
          <v-btn color="danger" small @click="updateBook">
            Update
          </v-btn>
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

    updateBook() {
      BookDataService.update(this.currentBook.id, this.currentBook)
          .then((response) => {
            console.log(response.data);
            this.$router.push({ name: "books" });
          })
          .catch((e) => {
            console.log(e);
          });
    },

    deleteBook() {
      BookDataService.delete(this.currentBook.id)
          .then((response) => {
            console.log(response.data);
            this.$router.push({ name: "books" });
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.getBook(this.$route.params.id);
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
