<template >
    <div class="px-12 sm:px-20 py-20 flex flex-col mx-auto prose sm:prose-2xl">
        <div class="py-4 sm:py-0">
            <p class="text-gray-900 text-opacity-80 text-xl uppercase">
                <span class="text-green-600">Who</span> We Are
            </p>
        </div>

        <div class="font-light text-gray-500 max-w-3xl mt-4 sm:mt-0 mx-auto text-lg">
            <p>Synergy Power Systems Ltd. was incorporated in February 2007. Synergy Power Systems are Just - In - time Suppliers of a wide range of power tools, computers and accessories, lighting, electric motors, compressors, generators & other electrical products from leading manufacturers. Having well knitted connections with reputable international companies, Synergy Power Systems Ltd. is able to supply any electrical requirement in the shortest possible time.</p>
            <p>The varied product range permits a high degree of flexibility and the introduction of new products for better safety and modern design helps to adapt to the changing circumstances.</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style >
.expanding-line {
    height: 2px;
    width: 40%;
    animation-name: stretch;
    animation-duration: 2.5s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-play-state: running;
}

@keyframes stretch {
    0% {
        transform: scale(0.8);
        background-color: #ccc;
    }

    100% {
        background-color: #ccc;
    }
}
</style>