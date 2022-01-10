<template >
  <div
    class="h-screen transition-all delay-150 pt-16 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden bg-right-top"
  >
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          class="flex flex-col mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
        >
          <div class="lg:py-24 leading-10 tracking-wide flex-1 flex flex-col justify-between">
            <div>
              <h1
                class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
              >
                <span class="mt-16 block animate__animated animate__slideInLeft">Synergy</span>
                <span class="mt-6 text-gray-200 animate__animated animate__slideInUp">Power</span>
                <span class="ml-4">Systems</span>
              </h1>
              <p
                class="mt-5 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl animate__animated animate__slideInUp"
              >MANAGING ENERGY</p>
            </div>
            <div class="mt-52 sm:mt-12">
              <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                <nuxt-link
                  to="/products"
                  type="button"
                  class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >OUR PRODUCTS</nuxt-link>
                <p class="mt-6 text-sm text-gray-300 sm:mt-4">
                  We have a wide range of electrical products
                  <a
                    href="#"
                    class="font-medium text-white"
                  >terms of service</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <!-- <img
              class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="~/assets/pictures/future.jpg"
              alt
            />-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import 'animate.css';

import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ChevronRightIcon
  }

}
</script>
<style >
</style>
