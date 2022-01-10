<template>
  <!-- Top navigation -->
  <!-- Secondary navigation -->
  <div class="bg-opacity-10 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div class="h-16 flex items-center justify-between">
          <!-- Logo (lg+) -->
          <div class="hidden lg:flex-1 lg:flex lg:items-center">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt
              />
            </a>
          </div>

          <div class="hidden h-full lg:flex">
            <!-- Flyout menus -->
            <PopoverGroup class="px-4 bottom-0 inset-x-0">
              <div class="h-full flex justify-center space-x-8">
                <Popover
                  v-for="category in navigation.categories"
                  :key="category.name"
                  class="flex"
                  v-slot="{ open }"
                >
                  <div class="relative flex">
                    <PopoverButton
                      class="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-white"
                    >
                      {{ category.name }}
                      <span
                        :class="[open ? 'bg-white' : '', 'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200']"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>

                  <transition
                    enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition ease-in duration-150"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <PopoverPanel class="absolute top-full inset-x-0 text-sm text-gray-500">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                      <div class="relative bg-white">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div class="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                            <div
                              v-for="item in category.featured"
                              :key="item.name"
                              class="group relative"
                            >
                              <div
                                class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75"
                              >
                                <img
                                  :src="item.imageSrc"
                                  :alt="item.imageAlt"
                                  class="object-center object-cover"
                                />
                              </div>
                              <a :href="item.href" class="mt-4 block font-medium text-gray-900">
                                <span class="absolute z-10 inset-0" aria-hidden="true" />
                                {{ item.name }}
                              </a>
                              <p aria-hidden="true" class="mt-1">Shop now</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <a
                  v-for="page in navigation.pages"
                  :key="page.name"
                  :href="page.href"
                  class="flex items-center text-sm font-medium text-white"
                >{{ page.name }}</a>
              </div>
            </PopoverGroup>
          </div>

          <!-- Mobile menu and search (lg-) -->
          <div class="flex-1 flex items-center lg:hidden">
            <button type="button" class="-ml-2 p-2 text-white" @click="mobileMenuOpen = true">
              <span class="sr-only">Open menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <!-- Search -->
            <a href="#" class="ml-2 p-2 text-white">
              <span class="sr-only">Search</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>
          </div>

          <!-- Logo (lg-) -->
          <a href="#" class="lg:hidden">
            <span class="sr-only">Workflow</span>
            <img
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt
              class="h-8 w-auto"
            />
          </a>

          <div class="flex-1 flex items-center justify-end">
            <a href="#" class="hidden text-sm font-medium text-white lg:block">Search</a>

            <div class="flex items-center lg:ml-8">
              <!-- Help -->
              <a href="#" class="p-2 text-white lg:hidden">
                <span class="sr-only">Help</span>
                <QuestionMarkCircleIcon class="w-6 h-6" aria-hidden="true" />
              </a>
              <a href="#" class="hidden text-sm font-medium text-white lg:block">Help</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
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
  }

}
</script>

<style>
</style>