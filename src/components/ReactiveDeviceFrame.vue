<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { ref, watch } from "vue";

const breakpoints = useBreakpoints(breakpointsTailwind);

const smParent = ref<null | HTMLDivElement>(null);
const mdParent = ref<null | HTMLDivElement>(null);
const slotContent = ref<null | HTMLElement>(null);

console.log(breakpoints.active().value);
console.log(breakpoints.smallerOrEqual("sm").value);
console.log(breakpoints.between("sm", "md").value);
console.log(breakpoints.between("md", "lg").value);
</script>

<template>
  <div class="grid grid-cols-1 grid-rows-1 items-stretch">
    <div
      class="mockup-phone"
      v-show="breakpoints.smallerOrEqual('sm').value == true"
    >
      <div class="camera"></div>
      <div class="display h-full">
        <!-- phone-1  -->
        <div ref="smParent" class="artboard artboard-demo phone-1 !h-full">
          <slot />
        </div>
      </div>
    </div>
    <div
      class="mockup-window bg-base-300 border m-4"
      v-show="breakpoints.greater('sm').value == true"
    >
      <div
        ref="mdParent"
        class="bg-base-200 flex justify-center px-4 py-16 flex-grow"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.mockup-window::before {
  box-shadow: red 1.4em 0, orange 2.8em 0, green 4.2em 0;
}
</style>
