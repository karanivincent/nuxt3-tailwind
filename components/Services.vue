
<template>
    <div class="bg-gray-100">
        <div class="px-12 sm:px-10 py-20 flex flex-col mx-auto max-w-sm sm:max-w-3xl">
            <div class="py-6">
                <p class="text-gray-900 text-opacity-80 text-xl uppercase">
                    What we
                    <span class="text-green-600">Do</span>
                </p>
            </div>

            <div
                class="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2"
            >
                <div v-for="feature in features" :key="feature.name" class="flex flex-col">
                    <div class="rounded-lg bg-gray-100 overflow-hidden">
                        <img
                            :src="feature.imageSrc"
                            :alt="feature.imageAlt"
                            class="h-48 w-96 object-cover"
                        />
                    </div>
                    <div class="mt-6 prose sm:prose-2xl">
                        <p class="font-bold text-gray-900 text-lg">{{ feature.name }}</p>
                        <p class="mt-2 text-sm text-gray-500">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const features = [
    {
        name: 'Installation and Support',
        description: 'The application of knowledge, skills, tools and techniques to activities in order to meet the requirements of a project.',
        imageSrc: '../pictures/installation.jpg',
        imageAlt: 'Installation and support.',
    },
    {
        name: 'Transformer Testing',
        description: 'We provide a comprehensive range of services like transformer testing for industrial plants and facilities.',
        imageSrc: '../pictures/transformer.jpg',
        imageAlt: 'Green cardstock box open with 50 cards inside.',
    },
    {
        name: 'Doble DSA',
        description: 'As a leader in our industry, we have always worked to develop advanced technology and innovative methods.',
        imageSrc: '../pictures/board-presentation.jpg',
        imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
    }
]

export default {
    setup() {
        return {
            features,
        }
    },
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