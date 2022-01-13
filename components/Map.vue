<template >
    <section class="py-24">
        <!-- map section -->
        <div aria-labelledby="offices-heading">
            <div class="px-4 sm:px-0">
                <h2
                    id="offices-heading"
                    class="text-xl font-extrabold text-warm-gray-900 uppercase"
                >Our offices</h2>
                <p
                    class="mt-6 text-lg text-warm-gray-500 max-w-3xl"
                >We are located in the following areas.</p>
            </div>
        </div>
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-0 w-full">
            <div class="grid grid-cols-2 gap-6 shadow-lg">
                <img
                    src="https://www.google.com/maps/api/staticmap?center=PRJ9+RXF,Nairobi+City&markers=size:mid%7Ccolor:red%7CParklands+Office+Suites,PRJ9+RXF,Nairobi+City&size=640x640&key=AIzaSyDK2nQSZikTNy5twBFSiS9WqY7oujkCVwo"
                    class="w-full col-span-2 sm:col-span-1 h-96 object-cover overflow-hidden"
                />
                <div class="w-full col-span-2 sm:col-span-1">
                    <div v-for="office in offices" :key="office.id">
                        <div class="mb-8 px-3">
                            <h3 class="text-lg font-medium text-warm-gray-900">{{ office.city }}</h3>
                            <p class="mt-2 text-base text-warm-gray-500">
                                <span
                                    v-for="line in office.address"
                                    :key="line"
                                    class="block pr-2 text-gray-500"
                                >{{ line }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
const offices = [
    { id: 1, city: 'Nairobi', address: ['+254-773-147-666', '1st Floor Office Suites Building, Block A', 'Parklands Road, Nairobi, Kenya'] },
    { id: 2, city: 'Mombasa', address: ['+254-701-777-300',] },
]
export default {
    data() {
        return {
            offices
        }
    },



}
</script>
<style>
</style>