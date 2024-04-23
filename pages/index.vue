<script setup>
const myData = ref(null);
</script>

<template>
  <div>
    <h1>aic</h1>
    <pre v-if="myData" wrap>
      {{ myData }}
    </pre>
    <div v-else>No data.</div>
  </div>
</template>

<style></style>
