<template>
    <div class="ml-[400px] w-56 text-right fixed top-16">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    @click="showMenu = !showMenu"
                >
                    Options
                    <svg
                        class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </MenuButton>
            </div>

            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <div v-show="showMenu">
                    <MenuItems
                        static
                        class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div class="px-1 py-1">
                            <MenuItem as="div" v-slot="{ active }">
                                <Disclosure v-slot="{ open }">
                                    <DisclosureButton
                                        class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                    >
                                        <span>What is your refund policy?</span>
                                        <svg
                                            :class="open ? 'transform rotate-180' : ''"
                                            class="w-5 h-5 text-purple-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </DisclosureButton>
                                    <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        If you're unhappy with your purchase for any reason, email us within
                                        90 days and we'll refund you in full, no questions asked.
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                                    <DisclosureButton
                                        class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                    >
                                        <span>Do you offer technical support?</span>
                                        <svg
                                            :class="open ? 'transform rotate-180' : ''"
                                            class="w-5 h-5 text-purple-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </DisclosureButton>
                                    <DisclosurePanel
                                        class="px-4 pt-4 pb-2 text-sm text-gray-500"
                                    >No.</DisclosurePanel>
                                </Disclosure>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <button
                                    :class="[
                                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                                    ]"
                                >
                                    <svg
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-violet-400"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"
                                        />
                                        <path
                                            d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
                                        />
                                    </svg>
                                    Duplicate
                                </button>
                            </MenuItem>
                        </div>
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button
                                    :class="[
                                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                                    ]"
                                >
                                    <svg
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-violet-400"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                        <path
                                            fill-rule="evenodd"
                                            d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    Archive
                                </button>
                            </MenuItem>
                        </div>

                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button
                                    :class="[
                                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                                    ]"
                                >
                                    <svg
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-violet-400"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    Delete
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </div>
            </transition>
        </Menu>
    </div>,
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'


export default {
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,

    },
    data() {
        return {
            showMenu: true,
        }
    },
}
</script>
