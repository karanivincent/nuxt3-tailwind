<template>
  <div>
    <NavigationMobile :menu-show="mobileMenuOpen" @close="mobileMenuOpen = false" />
    <!-- Hero section -->
    <div class="relative">
      <!-- Decorative image and overlay -->
      <!-- <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
        <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt="" class="w-full h-full object-center object-cover" />
      </div>-->
      <div aria-hidden="true" class="absolute inset-0" />

      <!-- Navigation -->
      <header class="relative z-10">
        <nav aria-label="Top">
          <div class>
            <!-- <NavigationTopbar /> -->
            <NavigationMain @openMenu="mobileMenuOpen = true" />
          </div>
        </nav>
      </header>
      <!-- <Hero/> -->
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      mobileMenuOpen: false
    }
  },


}
</script>

<style>
</style>