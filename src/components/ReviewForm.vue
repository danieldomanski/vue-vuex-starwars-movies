<template>
  <transition name="fadeHeight">
    <form
      class="w-full flex flex-col"
      @submit="submitForm"
      :class="isOpened ? 'fadeHeight-enter-active fadeHeight-leave-active mt-8' : 'fadeHeight-enter fadeHeight-leave-to'"
    >
      <label class="text-gray-600 font-bold uppercase text-xs mb-1">Your name</label>
      <input
        v-model="name"
        class="mb-4 h-12 bg-transparent border border-solid active:bg-white pl-4 focus:shadow"
      />
      <label class="text-gray-600 font-bold uppercase text-xs mb-1">Topic</label>
      <input
        v-model="topic"
        class="mb-4 h-12 bg-transparent border border-solid active:bg-white pl-4"
      />
      <label class="text-gray-600 font-bold uppercase text-xs mb-1">Contents</label>
      <textarea
        v-model="message"
        class="mb-4 bg-transparent border border-solid active:bg-white pl-4 pt-3"
      />
      <div
        class="w-full flex items-center"
        :class="!isFormValid ? 'justify-between' : 'justify-end'"
      >
        <p
          class="text-red-500"
          v-show="!isFormValid"
        >We couldn't send your revies. Form is not valid. Take your time to fill fields carefully.</p>
        <button
          class="self-end bg-indigo-500 text-white py-2 px-6 font-bold uppercase mt-6 hover:bg-indigo-400 transition duration-200 ease-in-out"
        >Send</button>
      </div>
    </form>
  </transition>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import * as types from "../store/mutation-types";

export default {
  props: ["isOpened", "toggleForm"],
  data: function() {
    return {
      isFormValid: true
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.getters.inputName;
      },
      set(value) {
        return this.$store.commit(types.UPDATE_NAME, value);
      }
    },
    topic: {
      get() {
        return this.$store.getters.inputTopic;
      },
      set(value) {
        return this.$store.commit(types.UPDATE_TOPIC, value);
      }
    },
    message: {
      get() {
        return this.$store.getters.inputMessage;
      },
      set(value) {
        return this.$store.commit(types.UPDATE_MESSAGE, value);
      }
    }
  },
  methods: {
    submitForm: function(e) {
      e.preventDefault();
      const isValid = this.isFormValidated();

      if (!isValid) {
        this.setIsFormValid(false);
        return;
      }

      this.setIsFormValid(true);

      // handle submitting
      this.addReview(this.$route.params.id);
      this.resetInput();
      this.toggleForm();
    },
    isFormValidated: function() {
      const { name, topic, message } = this;

      if (name && topic && message) {
        return [name, topic, message].every(v => v !== "");
      }

      return false;
    },
    setIsFormValid: function(value) {
      this.isFormValid = value;
    },
    ...mapActions(["addReview"]),
    ...mapMutations({ resetInput: types.RESET_REVIEW_INPUT })
  }
};
</script>
<style>
</style>