<template>
  <div class="min-h-screen pb-16" id="app">
    <Header />
    <main class="max-w-5xl mx-auto py-8 px-4 lg:px-0">
      <router-view />
    </main>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style>
body {
  background: #f7fafc;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  word-break: break-word;
}
</style>
