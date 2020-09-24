<template>
  <div class="computed-properties-exercise container">
    <div class="row">
      <div class="col-12">
        <div class="border p-1">
          <div class="reverse-message">
            <p>Original Message: {{}}</p>
            <p>Computed Reversed Message: {{}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, reactive } from "vue";
export default {
  name: "computed-properties-exercise",
  setup() {
    const state = reactive;
    ({
      message: "Hello World!",
      reversedMessage: computed(() =>
        this.message.split("").reverse().join("")
      ),
    });
    return {
      state,
    };
  },
};
</script>


<style scoped>
</style>