<template>
  <!-- Top navigation -->
  <!-- Secondary navigation -->
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div class="h-20 flex items-center justify-between">
          <!-- Logo (lg+) -->
          <div class="hidden lg:flex-1 lg:flex lg:items-center">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img class="h-16 w-auto" src="~/assets/logos/synergylogo.svg" alt />
            </a>
          </div>

          <div class="hidden h-full lg:flex">
            <!-- Flyout menus -->

            <div class="h-full flex justify-center space-x-8">
              <nuxt-link
                v-for="page in navigation.pages"
                :key="page.name"
                :to="page.href"
                class="flex items-center text-sm font-medium hover:text-green-600 transition-colors"
              >{{ page.name }}</nuxt-link>
            </div>
          </div>

          <!-- Mobile menu and search (lg-) -->
          <div class="flex-1 flex items-center lg:hidden">
            <button type="button" class="-ml-2 p-2 t" @click="mobileMenuOpen = true">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Search -->
            <a href="#" class="ml-2 p-2">
              <span class="sr-only">Search</span>
              <SearchIcon class="w-6 h-6" aria-hidden="true" />
            </a>
          </div>

          <!-- Logo (lg-) -->
          <a href="#" class="lg:hidden">
            <span class="sr-only">Workflow</span>
            <img src="~/assets/logos/synergylogo.svg" alt class="h-8 w-auto" />
          </a>

          <div class="flex-1 flex items-center justify-end"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const navigation = {

  pages: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },

  ],
}
import {
  PopoverGroup,
  Popover,
  PopoverButton,
  PopoverPanel,


} from '@headlessui/vue'
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
} from '@heroicons/vue/outline'

export default {
  components: {
    PopoverGroup,
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
  },
  data() {
    return {
      navigation
    }
  },


}
</script>

<style>
</style>