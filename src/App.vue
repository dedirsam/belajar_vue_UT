<template>
  <img alt="Vue logo" src="./assets/logo.png" class="logo" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <nav id="nav">
    <!-- <router-link to="/HomePage" class="nav-link">Home</router-link> -->
    <router-link :to="{ name: 'HomePage' }" class="nav-link">Home</router-link>
    <router-link to="/Aboutpage" class="nav-link">About</router-link>
    <router-link
      :to="{
        name: 'JurusanPage',
        params: { jurusanPage: 'Jurusan Sistim Informasi' },
      }"
      class="nav-link"
    >
      Jurusan
    </router-link>
    <router-link to="/DetikBerjalan" class="nav-link"
      >Detik Berjalan</router-link
    >
    <router-link
      :to="{
        name: 'BahasaPage',
        params: { bahasaPage: 'Bahasa Pemrograman' },
      }"
      class="nav-link"
      >Bahasa Pemrograman</router-link
    >
    <router-link
      :to="{
        name: 'KondisionalPage',
        params: { angka: 85, bagus: true },
      }"
      class="nav-link"
      >Kondisional</router-link
    >
    <router-link
      :to="{
        name: 'EvenhandlerPage',
        params: { evenhandlerPage: 'Event Handler' },
      }"
      class="nav-link"
      >Even Handler</router-link
    >
  </nav>

  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin-top: 0; /* Hapus margin atas */
  padding-top: 0; /* Hapus padding atas */
}

.logo {
  width: 50px;
  height: auto;
  margin-top: 0; /* Hapus margin atas pada logo */
}

#nav {
  display: flex;
  justify-content: left;
  background-color: #2c3e50; /* Warna latar belakang */
  padding: 10px 20px; /* Padding untuk ruang di dalam nav */
  border-radius: 8px; /* Membuat sudut melengkung */
  margin-bottom: 20px; /* Jarak bawah */
}

.nav-link {
  color: white; /* Warna teks */
  text-decoration: none; /* Hilangkan garis bawah */
  margin: 0 15px; /* Jarak antar link */
  font-size: 1.2em; /* Ukuran teks */
  font-weight: bold; /* Teks tebal */
  transition: color 0.3s ease; /* Animasi transisi warna */
}

.nav-link:hover {
  color: #f39c12; /* Warna teks saat hover */
}
</style>
