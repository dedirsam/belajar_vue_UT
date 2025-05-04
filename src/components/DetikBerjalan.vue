<template>
  <div class="container">
    <p>Detik Berjalan: {{ counter }}</p>
    <div class="button-group">
      <CustomButton :text="'Balik String'" :onClick="reverseStr" />
      <button v-on:click="onOff">{{ aksi }}</button>
    </div>
    <p v-if="terlihat">{{ pesan }}</p>
    <ol>
      <li v-for="mk in daftarMK" v-bind:key="mk.text">{{ mk.text }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "DetikBerjalan",
  components: {
    CustomButton: {
      props: {
        text: {
          type: String,
          required: true,
        },
        onClick: {
          type: Function,
          required: true,
        },
      },
      template: `
        <button
          :style="{
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer'
          }"
          @click="onClick"
        >
          {{ text }}
        </button>
      `,
    },
  },
  data() {
    return {
      counter: 0,
      pesan: "Universitas Terbuka",
      terlihat: true,
      aksi: "Sembunyikan",
      daftarMK: [
        { text: "Pemrograman Web" },
        { text: "Pemrograman Berorientasi Objek" },
        { text: "Basis Data" },
        { text: "Sistem Operasi" },
        { text: "Jaringan Komputer" },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  methods: {
    reverseStr() {
      this.pesan = this.pesan.split("").reverse().join("");
    },
    onOff() {
      this.terlihat = !this.terlihat;
      this.aksi = this.terlihat ? "Sembunyikan" : "Tampilkan";
    },
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
