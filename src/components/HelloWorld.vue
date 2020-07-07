<template>
  <div class=" container mx-auto py-10">
    <div
      class="border m-6 rounded-lg  bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
    >
      <div class="sm:flex sm:items-center px-6 py-4">
        <img
          class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          src="https://api.adorable.io/avatars/196/abott@adorable.png"
          alt=""
        />
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <p class="text-xl leading-tight">Jane Doe</p>
            <p class="text-sm leading-tight text-gray-700">
              Software Developer at SpongeBob LLC.
            </p>
          </div>
          <div class="flex flex-wrap">
            <button
              class=" text-xs font-semibold rounded-full px-4 py-1 mx-3  leading-normal bg-white border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Call
            </button>
            <button
              class="  text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
            >
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

