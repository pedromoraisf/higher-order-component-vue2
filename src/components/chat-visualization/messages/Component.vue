<template>
  <section>
    <div v-for="({ date, from, text }, $index) in receivedData" :key="$index">
      <b>[{{ date }}] - {{ from }}</b> - {{ text }}
    </div>
  </section>
</template>

<script>
export default {
  props: ["receivedData"]
};
</script>
