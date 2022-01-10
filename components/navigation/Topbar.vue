<template>
    <div class="bg-green-700">
        <div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <div class="flex items-center space-x-6">
                <a href="tel:+254-20-802-4848" class="flex space-x-2 text-gray-800">
                    <PhoneIcon class="h-6 w-6" />
                    <span>+254-20-802-4848</span>
                </a>
                <a href="tel:+254-20-802-4848" class="flex space-x-2 text-gray-800">
                    <PhoneIcon class="h-6 w-6" />
                    <span>+254-20-802-4848</span>
                </a>
                <a href="mailto:info@synergypwrsystems.co.ke" class="flex space-x-2 text-gray-800">
                    <MailIcon class="h-6 w-6" />
                    <span>info@synergypwrsystems.co.ke</span>
                </a>
            </div>

            <div class="flex items-center space-x-6">
                <a
                    href="#"
                    class="text-sm font-medium text-gray-800 hover:text-gray-100"
                >Open Mon - Sat: 7:00 - 16:30</a>
            </div>
        </div>
    </div>
</template>

<script>
import { PhoneIcon, MailIcon } from '@heroicons/vue/solid'
export default {
    components: {
        PhoneIcon,
        MailIcon
    }



}
</script>

<style>
</style>