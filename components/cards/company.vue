<template >
    <div
        class="bg-white hover:bg-gray-100 h-80 flex flex-col space-y-4 rounded-lg shadow-xl m-2 p-8"
    >
        <div>
            <img :src="logo" :alt="name" class="h-14" />
        </div>
        <div class="font-bold text-gray-900 text-lg">{{ name }}</div>
        <p class="font-light text-gray-500 line-clamp-6">{{ details }}</p>
    </div>
</template>
<script>
export default {
    props: {
        logo: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        details: {
            type: String,
            default: ''
        }
    }

}
</script>
<style>
</style>