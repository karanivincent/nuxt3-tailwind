
<template>
    <div class="bg-gray-50">
        <!-- Mobile filter dialog -->
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="fixed inset-0 flex z-40 sm:hidden" @close="open = false">
                <TransitionChild
                    as="template"
                    enter="transition-opacity ease-linear duration-300"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <TransitionChild
                    as="template"
                    enter="transition ease-in-out duration-300 transform"
                    enter-from="translate-x-full"
                    enter-to="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leave-from="translate-x-0"
                    leave-to="translate-x-full"
                >
                    <div
                        class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto"
                    >
                        <div class="px-4 flex items-center justify-between">
                            <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                            <button
                                type="button"
                                class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                @click="open = false"
                            >
                                <span class="sr-only">Close menu</span>
                                <svg
                                    class="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        <!-- Filters -->
                        <form class="mt-4">
                            <Disclosure
                                as="div"
                                v-for="section in filters"
                                :key="section.name"
                                class="border-t border-gray-200 px-4 py-6"
                                v-slot="{ open }"
                            >
                                <h3 class="-mx-2 -my-3 flow-root">
                                    <DisclosureButton
                                        class="px-2 py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400"
                                    >
                                        <span class="font-medium text-gray-900">{{ section.name }}</span>
                                        <span class="ml-6 flex items-center">
                                            <svg
                                                :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                            ]
                                        </span>
                                    </DisclosureButton>
                                </h3>
                                <DisclosurePanel class="pt-6">
                                    <div class="space-y-6">
                                        <div
                                            v-for="(option, optionIdx) in section.options"
                                            :key="option.value"
                                            class="flex items-center"
                                        >
                                            <input
                                                :id="`filter-mobile-${section.id}-${optionIdx}`"
                                                :name="`${section.id}[]`"
                                                :value="option.value"
                                                type="checkbox"
                                                class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                :for="`filter-mobile-${section.id}-${optionIdx}`"
                                                class="ml-3 text-sm text-gray-500"
                                            >{{ option.label }}</label>
                                        </div>
                                    </div>
                                </DisclosurePanel>
                            </Disclosure>
                        </form>
                    </div>
                </TransitionChild>
            </Dialog>
        </TransitionRoot>

        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="py-10">
                <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Our Products</h1>
            </div>

            <section aria-labelledby="filter-heading" class="border-t border-gray-200 py-6">
                <h2 id="filter-heading" class="sr-only">Product filters</h2>

                <div class="flex items-center justify-end">
                    <button
                        type="button"
                        class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                        @click="open = true"
                    >Filters</button>

                    <div class="hidden sm:flex sm:items-baseline sm:space-x-8">
                        <Popover id="desktop-menu" class="relative z-10 inline-block text-left">
                            <div>
                                <PopoverButton
                                    class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                >
                                    Categories
                                    <svg
                                        class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </PopoverButton>
                            </div>

                            <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                            >
                                <PopoverPanel
                                    v-slot="{ close }"
                                    class="origin-top-right absolute w-48 right-0 mt-2 bg-white rounded-md shadow-2xl p-2 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <ul class="space-y-4">
                                        <li
                                            v-for="category in filters"
                                            :key="category.id"
                                            class="px-2 py-1.5 rounded-lg hover:bg-green-600 hover:text-white"
                                            @click="onSelectCategory(category.id, close)"
                                        >
                                            <button class="w-full">{{ category.name }}</button>
                                        </li>
                                    </ul>
                                </PopoverPanel>
                            </transition>
                        </Popover>
                        <Popover id="desktop-menu" class="relative z-10 inline-block text-left">
                            <div>
                                <PopoverButton
                                    class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                >
                                    Products
                                    <svg
                                        class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </PopoverButton>
                            </div>

                            <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                            >
                                <PopoverPanel
                                    v-slot="{ close }"
                                    class="origin-top-right absolute w-48 right-0 mt-2 bg-white rounded-md shadow-2xl p-2 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <ul class="space-y-4">
                                        <li
                                            v-for="item in secondaryMenu"
                                            :key="item.value"
                                            class="px-2 py-1.5 rounded-lg hover:bg-green-600 hover:text-white"
                                            @click="onSelectItem(item.value, close)"
                                        >
                                            <button class="w-full">{{ item.label }}</button>
                                        </li>
                                    </ul>
                                </PopoverPanel>
                            </transition>
                        </Popover>
                    </div>
                </div>

                <ProductsProductCard :product_slug="selectedProduct" />
            </section>
        </div>
    </div>
</template>

<script>



const filters = [
    {
        id: 'power',
        name: 'Power',
        options: [
            { value: 'high-voltage', label: 'high-voltage', checked: false },
            { value: 'medium-voltage', label: 'medium-voltage', checked: false },

        ],
    },
    {
        id: 'test-equipment',
        name: 'Test Equipment',
        options: [
            { value: 'cable-fault', label: 'Cable Fault', checked: false },
            { value: 'circuit-breaker-test', label: 'Circuit Breaker Test', checked: false },
            { value: 'electrical-tester', label: 'Electrical Tester', checked: false },
            // { value: 'relay-test', label: 'Relay Test', checked: false },
            // { value: 'transformer-test', label: 'Transformer Test', checked: false },
        ],
    },
    {
        id: 'gas',
        name: 'Gas',
        options: [
            { value: 'gas-detection', label: 'Gas Detection', checked: false },
            { value: 'flame-detection', label: 'Flame Detection', checked: false },
            { value: 'gas-refilling', label: 'Gas Refilling And Evacuating Devices', checked: false },
            { value: 'sf6-product-range', label: 'SF6 Product Range', checked: false },
            { value: 'sf6-service-carts', label: 'SF6 Service Carts', checked: false },
            { value: 'sf6-storage-tanks', label: 'SF6 Storage Tanks', checked: false },
            { value: 'sf6-accessories', label: 'SF6 Accessories', checked: false },
            { value: 'sf6-monitoring-devices', label: 'SF6 Monitoring Devices', checked: false },
            { value: 'sf6-gas-measuring-device', label: 'SF6 Gas Measuring Device', checked: false },
            { value: 'sf6-valve', label: 'SF6 Valve & Couplings', checked: false },
            { value: 'sf6-leak-testing-units', label: 'SF6 Leak Testing Units', checked: false },
        ],
    },
    {
        id: 'safety',
        name: 'Safety',
        options: [
            {
                value: 'graphite-disks',
                label: 'Graphite Disks'
            },
            {
                value: 'rupture-disks',
                label: 'Rupture Disks'
            },
        ]
    },
    {
        id: 'solar',
        name: 'Solar',
        options: [
            {
                value: 'portable-solar-lantern',
                label: 'Portable Solar Lantern'
            },
            {
                value: 'solar-emergency-lights',
                label: 'Solar Emergency Lights'
            },
        ]
    }
]

import { ref } from 'vue'
import {
    Dialog,
    DialogOverlay,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

export default {
    components: {
        Dialog,
        DialogOverlay,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        Popover,
        PopoverButton,
        PopoverPanel,
        TransitionChild,
        TransitionRoot,
    },
    data() {
        return {
            checkedCategories: 'high-voltage',
            open: false,
            selectedCategory: 'power',
            selectedItem: '',
            mobileFiltersOpen: false,
            filters,
        }
    },

    computed: {
        secondaryMenu: function () {
            let category = this.filters.find(filter => filter.id === this.selectedCategory);
            return category.options
        },
        selectedProduct: function () {
            let product = null

            if (this.selectedItem === '') {
                product = this.secondaryMenu[0].value
            } else {
                product = this.selectedItem;
            }
            return product

        },
    },
    methods: {

        onCheck(value) {
            while (this.checkedCategories.length) this.checkedCategories.pop()
            this.checkedCategories.push(value)
            this.onFilter()
        },
        onSelectCategory(category, close) {
            close()
            this.selectedCategory = category

        },
        onSelectItem(value, close) {
            close()
            this.selectedItem = value
        }

    },

}
</script>