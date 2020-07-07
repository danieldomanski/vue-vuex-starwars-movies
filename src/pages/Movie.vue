<template>
  <div>Hello from movie {{ id }} !</div>
</template>
<script>
export default {
  data: function() {
    return {
      //id is name of the dynamic segment we created in router
      id: this.$route.params.id
    };
  }
};
</script>