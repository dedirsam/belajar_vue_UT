<template>
  <div class="container">
    <p>{{ $route.params.bahasaPage }}</p>
    <ol>
      <li v-for="(prg, index) in proglang" :key="index">{{ prg }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "BahasaPage",
  data() {
    return {
      proglang: [
        "Java",
        "C++",
        "Python",
        "PHP",
        "JavaScript",
        "Ruby",
        "Swift",
        "Go",
        "Rust",
        "Kotlin",
      ],
    };
  },
};
</script>
<style scoped>
.container {
  width: 50%; /* Atur lebar container */
  margin: auto; /* Pusatkan container di tengah halaman */
  text-align: left; /* Rata kiri untuk teks */
}

p {
  font-size: 1.2em;
  font-weight: bold;
}

ol {
  padding-left: 20px; /* Tambahkan padding untuk daftar */
}

li {
  margin-left: 5px; /* Kurangi jarak antara angka dan teks */
}

.button-group {
  margin-top: 10px; /* Tambahkan jarak atas untuk tombol */
}

button {
  margin-right: 10px; /* Menambahkan jarak antar tombol */
  background-color: rgb(72, 122, 80); /* Warna latar tombol */
  color: rgb(17, 241, 65); /* Warna teks tombol */
  border: none; /* Hilangkan border */
  padding: 10px 15px; /* Padding dalam tombol */
  border-radius: 5px; /* Membuat sudut tombol melengkung */
  cursor: pointer; /* Ubah kursor menjadi pointer saat hover */
}
</style>
