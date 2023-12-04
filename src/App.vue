<template>
  <div id="app">

    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <!--      <a href class="navbar-brand" @click.prevent>bezKoder</a>-->
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home"/>
            The BOOK STORE
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/booklist" class="nav-link">
            BookList
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">
            About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/privacy" class="nav-link">
            Privacy
          </router-link>
        </li>
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
    <template>
      <div z-index="-1">
        <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
        <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
          <template #default="{ hide }">
            <div class="p-3">
              <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <nav class="mb-3">
                <b-nav vertical>
                  <b-nav-item active @click="hide">Active</b-nav-item>
                  <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                  <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
                </b-nav>
              </nav>
              <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
            </div>
          </template>
        </b-sidebar>
      </div>
    </template>
    <div class="container">
      <router-view/>
    </div>
  </div>
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
