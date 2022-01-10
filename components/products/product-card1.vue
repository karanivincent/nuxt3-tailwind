<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="bg-white">
        <div class="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6">
                <div v-for="product in products" :key="product.id" class="group relative">
                    <div
                        class="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80"
                    >
                        <img
                            :src="product.imageSrc"
                            :alt="product.imageAlt"
                            class="w-full h-full object-center object-cover"
                        />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">
                        <nuxt-link :to="`/products/${product.slug}`">
                            <span class="absolute inset-0" />
                            {{ product.name }}
                        </nuxt-link>
                        <!-- <NuxtLink  :href="product.href">
                            {{ product.name }}
                        </NuxtLink>-->
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                    <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
                </div>
            </div>

            <div class="mt-8 text-sm md:hidden">
                <a href="#" class="font-medium text-green-600 hover:text-green-500">
                    Shop the collection
                    <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        products: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    setup() {
        return {
        }
    },
}
</script>