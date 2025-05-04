<template>
  <div class="container">
    <div>
      <p>
        {{ title }}:
        <b v-bind:class="{ active: isactive }">{{ activeLanguage }}</b>
      </p>
    </div>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
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
      title: "Bahasa Pemrograman yang Digunakan",
      isactive: true,
      activeColor: "green",
      fontSize: 55,
      activeLanguage: "Vue + TypeScript", // Bahasa aktif saat ini
      proglang: [
        "Java",
        "C++",
        "Python",
        "PHP",
        "JavaScript",
        "Vue",
        "React",
        "Ruby",
        "Swift",
        "TypeScript",
        "Rust",
        "Kotlin",
        "dll...",
      ],
    };
  },
};
</script>
<style scoped>
.active {
  background: rgb(54, 211, 62);
}
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
</style>
