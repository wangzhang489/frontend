<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Book</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="book.title"
          :rules="[(v) => !!v || 'Title is required']"
          label="Title"
          required
        ></v-text-field>

        <v-text-field
          v-model="book.auther"
          :rules="[(v) => !!v || 'Description is required']"
          label="Description"
          required
        ></v-text-field>
      </v-form>

      <v-btn color="danger" class="mt-3" @click="saveBook">Submit</v-btn>
    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Submitted successfully!
        </v-card-title>

        <v-card-subtitle>
          Click the button to add new Book.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="danger" @click="newBook">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import BookDataService from "../services/BookDataService";

export default {
  name: "add-book",
  data() {
    return {
      book: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveBook() {
      var data = {
        title: this.book.title,
        description: this.book.description,
      };

      BookDataService.create(data)
        .then((response) => {
          this.book.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newBook() {
      this.submitted = false;
      this.book = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
}
</style>
