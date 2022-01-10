<template >
    <div class="px-12 sm:px-10 py-20 flex flex-col mx-auto max-w-sm sm:max-w-3xl">
        <div class="py-4 sm:py-0">
            <p class="text-gray-900 text-opacity-80 text-xl uppercase">
                Our
                <span class="text-green-600">Partners</span>
            </p>
        </div>
        <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(partner, index) in partners" :key="index">
                <CardsCompany :logo="partner.logo" :name="partner.name" :details="partner.details" />
            </div>
        </div>
    </div>
</template>
<script>

const partners = [
    {
        logo: '../assets/pictures/hplogo.png',
        name: 'Hewlett-Packard',
        details: 'Our vision is to create technology that makes life better for everyone, everywhere — every person, every organization, and every community around the globe. This motivates us — inspires us — to do what we do. To engineer experiences that amaze. '
    },
    {
        logo: '../assets/logos/doblelogo.png',
        name: 'Doble',
        details: 'Founded in 1920, Doble Engineering Company ensures reliable, safe and secure power for all. We do this by providing comprehensive diagnostics and engineering expertise for the energy industry.'
    },
    {
        logo: '../assets/logos/drapertoolslogo.svg',
        name: 'Det-Tronics',
        details: 'Established in 1919, Draper Tools is a supplier of quality trade, professional and diy tools.'
    },
    {
        logo: '../assets/logos/det-tronics-logo.png',
        name: 'Hewlett-Packard',
        details: 'We protect property and people with hi-tech fire and gas safety solutions delivered with certified standards and quality.'
    },
    {
        logo: '../assets/logos/ge.png',
        name: 'General Electric',
        details: 'The General Electric Company (GE) is an American multinational company. For more than 125 years, GE has invented the future of industry. Today, GE is best known for its work in the Power, Renewable Energy, Aviation and Healthcare industries.'
    },
    {
        logo: '../assets/logos/dilologo.png',
        name: 'Dilo',
        details: 'For over 50 years, customers around the world have valued DILO as an important partner for professional and emission-free gas handling.  Our core value of innovation helps us develop solutions which offer you safety, economic efficiency, and a technological advantage.'
    },
    {
        logo: '../assets/logos/tydenbrookslogo.png',
        name: 'TydenBrooks',
        details: 'With roots going back to the 1870s when our founder E.J. Brooks transitioned from being a lead toy maker in New York City to the first security seal manufacturer in America, we have been committed to producing competitively priced, high quality, customizable security seals. '
    },
    {
        logo: '../assets/logos/bsb.gif',
        name: 'BS&B',
        details: 'BS&B Safety Systems is a global company with manufacturing locations all over the world. We provide the premier network of sales and distribution outlets with coverage of all areas from a local perspective.'
    }
]
export default {
    data() {
        return {
            partners
        }
    },

}
</script>
<style >
</style>