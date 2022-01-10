<!-- This example requires Tailwind CSS v2.0+ -->
<style>
.nav-transparent {
    @apply bg-opacity-70;
}
</style>
<template>
    <div>
        <div
            ref="mynav"
            class="fixed transition bg-gray-900 duration-500 inset-x-0 top-0 z-40 text-white"
        >
            <navigation-navbar />
        </div>
        <div class="pt-24 pb-20 px-20 text-gray-900">
            <div class="prose">
                <h1>About us</h1>
                <p
                    class="text-gray-900/70 max-w-sm"
                >Synergy Power Systems Ltd. was incorporated in February 2007. Synergy Power Systems are Just - In - time Suppliers of a wide range of power tools, computers and accessories, lighting, electric motors, compressors, generators & other electrical products from leading manufacturers.</p>
                <div class="flex gap-6">
                    <nuxt-link
                        to="/contact"
                        class="bg-green-600 hover:bg-green-700 text-white font-bold no-underline px-6 py-1.5 rounded-lg"
                    >Contact Us</nuxt-link>

                    <nuxt-link
                        to="/products"
                        class="no-underline bg-white border-2 border-purple-600 hover:bg-purple-600 hover:text-white text-purple-600 font-bold px-6 py-1.5 rounded-lg"
                    >See Our Products</nuxt-link>
                </div>
            </div>

            <div class="flex gap-8 pt-14">
                <div class="prose">
                    <h5 class="font-bold">OUR STORY</h5>
                    <h1>Who are we?</h1>
                    <p
                        class="text-gray-900/70"
                    >Synergy Power Systems Limited isa mid-sized company based in Nairobi Kenya. The company was established in the year 2006 and is comprised of 100% local shareholding. Based on our mantra of Managing Energy, Synergy Power Systems strives to meet clients' needs through high quality products, competitive prices and by maintaining a customer-centeredapproach that placesthe clientat the focusof everything we do.</p>
                    <p
                        class="text-gray-900/70"
                    >Synergy Power Systems Limited focuses on all-round utility product and service Distribution, Process Control Systems and Parts, Asset Management and Maintenance: Industrial Hazard Safety Solutions and Mitigation Systems, Diagnostic Test Equipment's and Consulting Services for Apparatus Condition Assessment within the East Africa Region.</p>
                    <p
                        class="text-gray-900/70"
                    >We have experience in local and regional markets with a capability of handling technical and highly priced projects. Our network spans from Energy Sector to Industrial, Oil &Gas, Water and Technology Sectorswho form the bulk of our client entities. Having a well-knit network, Synergy Power Systems, is well positioned to attend to the customer requirementsat therighttimeand withan extracapabilityto offer tailormade solutions.</p>
                    <p
                        class="text-gray-900/70"
                    >Thecompany hasexperience withinternational distributorshipagreements having established one regional exclusive distribution agreement, eight exclusive distribution agreements locally and a further 14 non- exclusive agency representations for the local and regional markets. We have designed functional teams for each portfolio to ensure that each of them is adequately represented and marketed for growth for both company and the principles we represent.</p>
                </div>
                <div class="mt-20 flex flex-col gap-6">
                    <div class="rounded overflow-hidden">
                        <img src="/pictures/electricity-poles1.jpg" alt="about us" class="w-full" />
                    </div>
                    <div class="rounded overflow-hidden">
                        <img src="/pictures/power-plant2.jpg" alt="about us" class="w-full" />
                    </div>
                </div>
            </div>
            <div class="prose pt-14">
                <h1 class>Our strategic foresight</h1>
            </div>
            <div class="pt-8 flex justify-between gap-8">
                <div class="prose">
                    <h3 class="text-green-600">Core values</h3>
                    <ul>
                        <li>Integrity</li>
                        <li>Accountability</li>
                        <li>Transparency</li>
                        <li>Humility</li>
                        <li>Sustainable Development</li>
                        <li>Quality of life</li>
                    </ul>
                </div>
                <div class="prose">
                    <h3 class="text-green-600">Our Mission</h3>
                    <p>
                        To provide our clients relevant, timely and quality Products and Services which driven by the
                        need for Energy Management towards a SustainableFuture.
                    </p>

                    <h3 class="text-green-600">Our Vision</h3>
                    <p>To be the premier solutions provider for Energy Management in the Eastern Africa Region</p>
                </div>
            </div>
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
                "use strict"; if (window.pageYOffset >= 20) {

                    myNav.classList.add("nav-transparent");
                } else {

                    myNav.classList.remove("nav-transparent");
                }
            };
        },

    },

}
</script>