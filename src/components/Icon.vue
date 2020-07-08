<template>
  <div>
    <v-icon :name="icon" :class="getClassname" />
  </div>
</template>
<script>
export default {
  computed: {
    getClassname: function() {
      switch (this.size) {
        case "small":
          return "icon--sm";
          break;
        case "medium":
          return "icon--md";
          break;
        case "large":
          return "icon--lg";
          break;
      }
    },
  },
  props: {
    icon: {
      required: true,
      type: String,
    },
    size: {
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
};
</script>
<style>
.icon--sm {
  width: 18px;
  height: 18px;
}

.icon--md {
  width: 24px;
  height: 24px;
}

.icon--lg {
  width: 32px;
  height: 32px;
}
</style>
