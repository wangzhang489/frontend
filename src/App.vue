<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <!--      <a href class="navbar-brand" @click.prevent>bezKoder</a>-->
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home"/>
            Home
          </router-link>
        </li>
        <!--        <li class="nav-item">-->
        <!--          <router-link to="/tutorials" class="nav-link">-->
        <!--            Tutorials-->
        <!--          </router-link>-->
        <!--        </li>-->

        <!--        <li class="nav-item">-->
        <!--          <router-link to="/books" class="nav-link">-->
        <!--            Books-->
        <!--          </router-link>-->
        <!--        </li>-->
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/add" class="nav-link">
            Add
          </router-link>
        </li>
<!--        <li class="nav-item">-->
<!--          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>-->
<!--        </li>-->
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus"/>
            Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt"/>
            Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user"/>
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt"/>
            LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
  <!--  <v-app>-->
  <!--    <v-app-bar app dark>-->
  <!--      <div class="d-flex align-center mr-2">-->
  <!--        bezKoder-->
  <!--      </div>-->

  <!--      <v-btn to="/tutorials" text>-->
  <!--        Tutorials-->
  <!--      </v-btn>-->

  <!--      <v-btn to="/add" text>-->
  <!--        Add-->
  <!--      </v-btn>-->
  <!--    </v-app-bar>-->

  <!--    <v-main>-->
  <!--      <router-view />-->
  <!--    </v-main>-->
  <!--  </v-app>-->
</template>

<script>
export default {
  name: "app",
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
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
