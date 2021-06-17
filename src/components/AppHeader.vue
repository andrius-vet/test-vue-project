<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-200 to-blue-400 text-yellow-50 px-4 py-2"
  >
    <router-link
      v-for="item in list"
      :key="item.to"
      class="mx-2"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button v-if="isLoggedIn" class="mx-2 float-right" @click="logout">
      Logout
    </button>
    <button v-else class="mx-2 float-right" @click="openLogin">Login</button>
  </nav>
</template>

<script>
import firebase from '../utilities/firebase';

export default {
  data() {
    return {
      list: [
        { title: 'Cars', to: '/cars' },
        { title: 'Calendar', to: '/calendar' },
        { title: 'Markdown', to: '/markdown' },
        { title: 'Slider', to: '/slider' },
        { title: 'Calculator', to: '/calculator' },
        { title: 'Modal', to: '/reusable-modal' },
        { title: 'Chat', to: '/chat' },
        { title: 'UserCrud', to: '/user-crud' },
         { title: 'Tensorflow', to: '/tensorflow' },
         { title: 'ToDo', to: '/todo' }
      ]
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      if (this.$route.meta.middleware) this.$router.push('/');
      // .then((res) => {})
      // .catch((e) => {});
    },
    openLogin() {
      this.$store.commit('setLoginModal', true);
    }
  }
};
</script>

<style></style>
