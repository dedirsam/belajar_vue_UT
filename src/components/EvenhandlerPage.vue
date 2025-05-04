<template>
  <p>Jumlah klik: {{ jumlahKlik }}</p>
  <button @click="jumlahKlik += 1">Klik untuk menambah 1</button>
  <p>-----------------</p>
  <input v-model="angka1" placeholder="0" @change="hitung" /> x
  <input v-model="angka2" placeholder="0" @change="hitung" /> = {{ hasil1 }}
  <p></p>

  <p></p>
  <input v-model="angka3" placeholder="0" @change="bagi" /> :
  <input v-model="angka4" placeholder="0" @change="bagi" /> = {{ hasil2 }}
  <p></p>
  <button @click="kosongkanForm">Kosongkan Form</button>
</template>

<script>
export default {
  data() {
    return {
      jumlahKlik: 0,
      angka1: "",
      angka2: "",
      angka3: "",
      angka4: "",
      hasil1: 0,
      hasil2: 0,
    };
  },
  watch: {
    angka1: "hitung",
    angka2: "hitung",
    angka3: "bagi",
    angka4: "bagi",
  },
  methods: {
    hitung() {
      this.hasil1 = this.angka1 * this.angka2;
    },
    bagi() {
      this.hasil2 = this.angka3 / this.angka4;
    },
    kosongkanForm() {
      this.angka1 = "";
      this.angka2 = "";
      this.angka3 = "";
      this.angka4 = "";
      this.hasil1 = 0;
      this.hasil2 = 0;
    },
  },
};
</script>
