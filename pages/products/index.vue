<template >
    <div>
        <div
            ref="mynav"
            class="fixed transiton bg-gray-900 duration-500 inset-x-0 top-0 z-40 text-white"
        >
            <navigation-navbar />
        </div>
        <div class="pt-16">
            <ProductsCategory />
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.addScrollWatch();

    },

    methods: {
        addScrollWatch() {
            var myNav = this.$refs.mynav;
            window.onscroll = function () {
                console.log(window.pageYOffset);
                "use strict"; if (window.pageYOffset >= 20) {
                    console.log('above 20')
                    myNav.classList.add("nav-transparent");
                } else {
                    console.log('below 20')
                    myNav.classList.remove("nav-transparent");
                }
            };
        },

    },

}
</script>
<style scoped >
.nav-transparent {
    @apply bg-opacity-70;
}
</style>