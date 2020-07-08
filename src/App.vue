<template>
  <div class="min-h-screen pb-16" id="app">
    <Header />
    <main class="max-w-5xl mx-auto py-8">
      <router-view />
    </main>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style>
body {
  background: #f7fafc;
}
</style>