<template>
    <div>
        <TransitionRoot as="template" :show="menuShow">
        <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="hideMenu">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div class="px-4 pt-5 pb-2 flex">
                <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" @click="hideMenu">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                </div>

                <!-- Links -->
                <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                    <TabList class="-mb-px flex px-4 space-x-8">
                    <Tab as="template" v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }">
                        <button :class="[selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium']">
                        {{ category.name }}
                        </button>
                    </Tab>
                    </TabList>
                </div>
                <TabPanels as="template">
                    <TabPanel v-for="category in navigation.categories" :key="category.name" class="px-4 py-6 space-y-12">
                    <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                        <div v-for="item in category.featured" :key="item.name" class="group relative">
                        <div class="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                            <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                        </div>
                        <a :href="item.href" class="mt-6 block text-sm font-medium text-gray-900">
                            <span class="absolute z-10 inset-0" aria-hidden="true" />
                            {{ item.name }}
                        </a>
                        <p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
                        </div>
                    </div>
                    </TabPanel>
                </TabPanels>
                </TabGroup>

                <div class="border-t border-gray-200 py-6 px-4 space-y-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                    <a :href="page.href" class="-m-2 p-2 block font-medium text-gray-900">{{ page.name }}</a>
                </div>
                </div>




            </div>
            </TransitionChild>
        </Dialog>
        </TransitionRoot>
    </div>
</template>

<script >
import {
  Dialog,
  DialogOverlay,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,

} from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'

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

export default {
  components: {
    Dialog,
    DialogOverlay,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  props: {
      menuShow: Boolean
  },
  data() {
      return {
          navigation
      }
  },
  methods: {
      hideMenu() {
          console.log('kitu imefanyhika')
          this.$emit('close')
      }
  }
}



</script>