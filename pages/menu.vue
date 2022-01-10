<template>
    <div class="ml-[400px] w-56 text-right fixed top-16">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    @click="showMenu = !showMenu"
                >
                    Options
                    <ChevronDownIcon
                        class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                    />
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
                                        <ChevronUpIcon
                                            :class="open ? 'transform rotate-180' : ''"
                                            class="w-5 h-5 text-purple-500"
                                        />
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
                                        <ChevronUpIcon
                                            :class="open ? 'transform rotate-180' : ''"
                                            class="w-5 h-5 text-purple-500"
                                        />
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
                                    <DuplicateIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-violet-400"
                                        aria-hidden="true"
                                    />Duplicate
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
                                    <ArchiveIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-violet-400"
                                        aria-hidden="true"
                                    />Archive
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
                                    <TrashIcon
                                        :active="active"
                                        class="w-5 h-5 mr-2 text-violet-400"
                                        aria-hidden="true"
                                    />Delete
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
import { ChevronDownIcon, ChevronUpIcon, ArchiveIcon, DuplicateIcon, PencilIcon, TrashIcon } from '@heroicons/vue/solid'


export default {
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronUpIcon,
        ChevronDownIcon,
        ArchiveIcon,
        DuplicateIcon,
        PencilIcon,
        TrashIcon,
    },
    data() {
        return {
            showMenu: true,
        }
    },
}
</script>
