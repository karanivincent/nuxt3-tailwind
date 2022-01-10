<script lang="ts" >
import './assets/tailwind.scss'



</script>


<template>
  <div class="bg-white">
    <main class="bg-gray-100">
      <NuxtPage />
    </main>
    <footer class="bg-gray-800" aria-labelledby="footer-heading">
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss">
// body {
//   @apply bg-gray-50 dark:bg-gray-800;
// }
.global-text {
  @apply text-gray-900 dark:text-gray-50;
}
</style>