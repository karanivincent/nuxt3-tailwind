<template >
    <div>
        <div>
            <!-- <iframe
				title="map"
				width="100%"
				height="670"
				style="border:0"
				loading="lazy"
				allowfullscreen
				:src="'https://www.google.com/maps/api/staticmap?center=PRJ9+RXF,Nairobi+City&key=' + google_api">
            </iframe>-->
        </div>

        <button @click="wachatu">Wachatu</button>
    </div>
</template>
<script>
export default {
    // methods: {
    //     wachatu() {
    //         console.log('mbona sasa?')
    //         console.log('created', process.env.VUE_APP_GOOGLE_MAPS_KEY);
    //     },
    // },

    setup() {


        const google_api =  process.env.VUE_APP_GOOGLE_MAPS_KEY;

        return {
            google_api,
            wachatu
        }
    }

}
</script>
<style>
</style>