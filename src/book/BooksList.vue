<script src="../models/user.js"></script>
<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Search by Title"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchTitle">
        Search
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Books</v-card-title>

        <v-data-table
          :headers="headers"
          :items="books"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editBook(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteBook(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BookDataService from "../services/BookDataService";
export default {
  name: "books-list",
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
  methods: {
    retrieveBooks(page =0, size =10) {
      BookDataService.getAll()
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
          this.books = response.data.map(this.getDisplayBook);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
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

    getDisplayBook(book) {
      return {
        id: book.id,
        title: book.title.length > 30 ? book.title.substr(0, 30) + "..." : book.title,
        description: book.description.length > 30 ? book.description.substr(0, 30) + "..." : book.description,
        status: book.published ? "Published" : "Pending",
      };
    },
  },
  mounted() {
    this.retrieveBooks();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>
