<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
const breakpoints = useBreakpoints(breakpointsTailwind);
</script>

<template>
  <div class="grid grid-cols-1 grid-rows-1 items-stretch justify-stretch">
    <div
      class="mockup-phone m-0 animation-enter"
      v-show="breakpoints.smallerOrEqual('sm').value"
    >
      <div class="camera"></div>
      <div class="display h-full">
        <!-- phone-1  -->
        <div class="phone-content min-w-80 w-full !h-full">
          <slot />
        </div>
      </div>
    </div>
    <div
      class="mockup-window bg-base-300 border m-2 animation-enter"
      v-show="breakpoints.greater('sm').value"
    >
      <div class="bg-base-200 flex-grow">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.phone-content {
  border-radius: var(--rounded-box, 1rem);
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
    padding-top: 25px;
}

.mockup-window::before {
  box-shadow: red 1.4em 0, orange 2.8em 0, green 4.2em 0;
}

.animation-enter {
  /* @apply motion-safe:animate-in motion-safe:slide-in-from-bottom motion-safe:fade-in !animation-duration-[1s]; */
}
</style>
