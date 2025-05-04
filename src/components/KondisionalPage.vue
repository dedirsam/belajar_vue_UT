<template>
  <label for="angka">Masukkan Nilai:</label>
  <input type="number" id="angka" v-model="angka" />

  <div v-if="angka > 80">Nilai A</div>
  <div v-else-if="angka > 70">Nilai B</div>
  <div v-else-if="angka > 40">Nilai C</div>
  <div v-else-if="angka > 20">Nilai D</div>
  <div v-else>Nilai E</div>
  <div v-show="bagus">Bagus!</div>
</template>
<script>
export default {
  name: "KondisionalPage",
  data() {
    return {
      angka: "()",
      bagus: true,
    };
  },
};
</script>
