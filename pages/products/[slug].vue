
<style>
.nav-transparent {
    @apply bg-opacity-70;
}
</style>
<template>
    <div class="bg-white">
        <div
            ref="mynav"
            class="fixed transiton bg-gray-900 duration-500 inset-x-0 top-0 z-40 text-white"
        >
            <navigation-navbar />
        </div>
        <div class="pt-24 pb-16 sm:pb-24">
            <div class="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                    <div class="lg:col-start-8 lg:col-span-5">
                        <div class="flex justify-between">
                            <h1 class="text-xl font-medium text-gray-900">{{ product.name }}</h1>
                        </div>
                    </div>

                    <div
                        class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:row-span-3"
                    >
                        <h2 class="sr-only">Images</h2>

                        <div class>
                            <img
                                :src="product.imageSrc"
                                :alt="product.imageAlt"
                                class="mx-auto w-full sm:w-auto sm:h-[500px] lg:block rounded-lg"
                            />
                        </div>
                    </div>

                    <div class="lg:col-span-5">
                        <div v-for=" item in product.details" :key="item.id" class="mt-10">
                            <h2 class="text-sm font-medium text-gray-900">{{ item.title }}</h2>

                            <div
                                class="mt-4 prose prose-sm text-gray-500"
                                v-html="item.description"
                            />
                        </div>

                        <!-- <div class="mt-8 border-t border-gray-200 pt-8">
                            <h2 class="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

                            <div class="mt-4 prose prose-sm text-gray-500">
                                <ul role="list">
                                    <li v-for="item in product.details" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const products = [

    {
        id: 1,
        slug: 'cable-fault',
        name: 'Cable Fault',
        category: 'cable-fault',
        imageSrc: '../assets/pictures/cable-fault-location.jpg',
        imageAlt: "Cable fault image",


        details: [

            {
                title: '',
                description: `
            <p>The good care and life management of cables, of which cable testing figures prominently, can significantly improve a utility’s reliability indices. Therefore, a lot of attention is paid to this large subject.</p>
            <p>As a means to organise what amounts to quite a bit of subject information, cable testing can be separated into categories reflecting the end goal, including:</p>
            <ul>
                <li>
                Cable testing to prove the serviceability of the cable
                </li>
                <li>
                Cable diagnostics to assess the cable’s integrity/health and thereby predict its long-term viability
                </li>
                <li>
                Fault location to efficiently locate the specific failed part of the faulted cable
                </li>
            </ul>
            `,
            },
            {
                title: 'Cable testing and diagnostics',
                description: `
            <p>Cable testing and diagnostics may provide information about the cable’s global condition (e.g.,  the cable’s overall insulation system), and/or reveal localised problems, such as poor splices, terminations, or a specific, localised weak spot in the insulation. High voltage cable tests are carried out to spot any potential failures before they occur and cause disruption to the network.</p>
            <p>Megger cable test equipment provides access to all of the information needed to make informed cable management decisions through the stages of the cable’s use, including:</p>
            <ul>
                <li>
                    After new cables have been installed to reveal any faults that may have been caused by transportation or installation
                </li>
                <li>
                    Following repair in order to reveal any additional weak points in the insulation other than at the fault repaired
                </li>
                <li>
                  Following repair to monitor the quality of the repair
                </li>
                <li>
                    Throughout the life of power cables, such as old PE/XLPE insulation cables to assess aging, particularly water-tree weak points
                </li>
            </ul>
        `,
            },
            {
                title: 'Cable fault location systems',
                description: `
                <p> The cable fault location process has multiple steps and it’s vital that it’s completed as quickly and safely as possible to minimise the time that customers are without supply. We manufacture a wide range of fault location instruments that have been developed to be easy to use. </p>
                <p> Several very popular Megger cable fault locator products, including the EZ Thump, Smart Thump, and T3090, utilise the “E-Tray” interface that is very easy to use, easy to train on, and easy to remember how to use. The EZ Thump in particular is very popular for its ease of use and portability. The E-Tray adds the unique capability to access and operate every function through an innovative and intuitive user interface without the need to make adjustments, and the software suggests the next logical step. </p>
                <p> Why buy from Megger? </p>
                <p> Megger is the pioneer in the cosine rectangular methods which makes the ability to test very long cable lengths practical. Megger has been operating for over 100 years and our SebaKMT brand has over 60 years experience in developing and manufacturing cable test and diagnostic equipment. </p>
                <p> From the most compact reflectometers (TDR) up to customised cable test vans built to customer specifications, we offer our customers a comprehensive product portfolio for all imaginable problems. Take a look at our cable testing and diagnostic equipment below. </p>

        `,
            },

        ],
    },
    //#########################
    {
        id: 2,
        slug: 'high-voltage',
        name: 'High Voltage',
        category: 'high-voltage',
        imageSrc: '',
        imageAlt: "High voltage image",


        details: [

            {
                title: 'Power Transformers up to 765 kV.',
                description: `
                    <ul>
                        <li> Generator Transformers </li>
                        <li>  Autotransformers </li>
                        <li> Reactors upto 400 kV / 120 MVAr </li>
                        <li> Power Plant auxiliary and standby transformers </li>
                        <li> Transformers for substations of backbone and distribution networks  and industrial enterprises </li>
                        <li>  Transformer for DC transmission lines and high-capacity converter substations of time-lines </li>
                    </ul>
            `,
            },
            {
                title: 'Special transformers',
                description: `

            <ul>
                <li>Transformers for metallurgical companies           </li>
                <li>Transformers for railways substations       </li>
                <li> Phase- shifting (phase-inverting) transformers    </li>
                <li>   Line regulating transformers    </li>
                <li> Furnace transformers </li>
                <li>  Testing transformers </li>

            </ul>
        `,
            },

        ],
    },
    {
        id: 3,
        slug: 'medium-voltage',
        name: 'Medium Voltage',
        category: 'medium-voltage',
        imageSrc: '',
        imageAlt: "medium voltage image",


        details: [

            {
                title: 'MV Vacuum Circuit Breakers',
                description: `
                <p>TAVRIDA ELECTRIC proudly presents its world famous series of vacuum circuit breakers with magnetic actuators. TAVRIDA ELECTRIC vacuum circuit breakers have been designed for use in metal-enclosed switchgear utilizing the modern concept of cassette design. The small overall dimensions allow the vacuum circuit breakers to be easily integrated into any type of cassette available on the market. In addition to the primary application, the vacuum circuit breakers can be used for various retrofit projects.</p>

            `,
            },
            {
                title: 'Longitudinal VCB',
                description: `
                <p> The TE-01 Longitudinally mounted vacuum circuit breaker is available in two versions: The  fixed version is ideal for the development of new cubicles as the VCB’s simplified arrangement allows design engineers to create a cubicle with the minimum dimensions possible. The ISM is mounted rigidly in the cubicle. The truck version is designed for the replacement of longitudinally mounted circuit breakers currently in service. It is also intended for application in new cubicles developed for other types of longitudinal circuit breaker when it is not possible to change the original design of the cubicle. </p>
            `,
            },
            {
                title: 'Universal Retrofit Solutions',
                description: `
                <p> Traditionally it used to require months to retrofit a particular MV panel. With TAVRIDA ELECTRIC’s new Universal Retrofit Solutions the retrofit can be done within two weeks regardless switchgear type, origin and location. </p>
            `,
            },
            {
                title: 'Recloser Based Automation Solutions',
                description: `
                <p> Tavrida Electric has accumulated 20 years of experience in solid-insulated recloser technology and is proud to present the Rec series automatic circuit reclosers </p>
            `,
            },
            {
                title: 'Cost effective automation solutions based on Time-Voltage Sectionalizers for Smart Grid up to 40,5kV',
                description: `
                <p> Today Electricity Companies have to constantly keep in mind the financial aspect of while launching a project of network reliability improvement. The investments, into sophisticated equipment in order to increase the reliability of electricity supply, minimize outage time and provide the tools for network control and automation, have to always be balanced with the economic outcomes. The cost breakdown of a typical project of overhead line automation which includes purchase, setting up and programming, installation and commissioning of state-of-the-art equipment is presented below. </p>
            `,
            },
            {
                title: 'One Cycle Interruption',
                description: `
                <p> Electrical workers have chosen the third most dangerous profession according to recent OSHA (the Occupational Safety and Health Administration, USA) statistics. In the USA alone, there are 10 OSHA ‐ reportable arc‐flash incidents involving more than one fatality every day. Studies indicate that up to 80% of all Electrical Worker injuries are not due to shock (passage of electrical current through the body) but due to external burn injuries created by the intense and radiant heat energy of an electrical arc explosion. There is a great deal that can be done to prevent an Arc Flash explosion and to protect personnel if they are exposed to an Arc Flash. </p>
            `,
            },
            {
                title: 'Fast Transfer Switch',
                description: `
                <p> avrida Electric in cooperation with Schweitzer Engineering Laboratories (SEL)*, introduces its Fast Transfer Switch System based on the fast response time of the SEL controller (7‐10ms) and the ultimate characteristics of Tavrida circuit breakers. </p>
            `,
            },
            {
                title: 'MILE MP Series MV Switchgear',
                description: `
                <p> Metal-clad, semi metal-clad, compartmented and cubicle switchgear and controlgear including RMU are all available for primary and secondary distribution. TAVRIDA ELECTRIC supplies both compact substations encased in concrete and sandwich kiosks. </p>
            `,
            },

        ],
    },
    {
        id: 4,
        slug: 'circuit-breaker-test',
        name: 'Circuit Breaker Test',
        category: 'circuit-breaker-test',
        imageSrc: '../assets/pictures/Circuit-breaker-test.jpg',
        imageAlt: "Circuit Breaker Test",


        details: [

            {
                title: 'Circuit breaker test',
                description: `
                <p>Circuit Breakers are one of the critical “safety-valves” of electrical systems and basic maintenance procedures are essential to maintain maximum reliability.</p>
                <p>Effective circuit breaker maintenance requires well-organized, accurate testing. The ability to accurately compare circuit breaker tests with previous test results is essential. It is, therefore, imperative to conduct tests in exactly the same way and under the same conditions as those conducted earlier. Comparison can then provide a clear picture of any deviations and changes, thereby indicating whether or not the circuit breaker should be kept in operation or taken out of service for further investigation.</p>
                <p> Comprehensive, accurate testing also requires analytical tools and efficient reporting. It must be possible to validate test results in detail and then easily compare them with other test results.</p>
                <p> The Programma TM1800 test set, EGIL test set, and CABA Win software program have earned a benchmark reputation in circuit breaker analysis. </p>

            `,
            },

        ],
    },
    {
        id: 5,
        slug: 'electrical-test',
        name: 'Electrical Tester',
        category: 'circuit-breaker-test',
        imageSrc: '../assets/pictures/earth-testers.jpg',
        imageAlt: "Earth Tester",


        details: [

            {
                title: '',
                description: `
                <p>Ground resistance testing covers the testing of earth electrodes and the measurement of soil resistivity. The instrument requirements depend on the range of applications.</p>
                <p>Megger offers top end systems for design and soil surveys as well as tough easy to use testers for field engineers. We have tried to make the testers self checking as much as we can, to allow you to concentrate on collating and understanding the results.</p>
            `,
            },

        ],
    },
    {
        id: 6,
        slug: 'gas-detection',
        name: 'Gas Detection',
        category: 'gas-detection',
        imageSrc: '',
        imageAlt: " Gas Detection",


        details: [

            {
                title: '',
                description: `
            <p> Our full line of hazardous gas detection configurations range from a variety of fixed gas combustible and toxic gas detectors to a complete line of display transmitters, gas controllers, power supplies, and gas control panels. Det-Tronics delivers the flexibility, functionality, and reliability you can depend on.</p>

            `,
            },
            {
                title: 'FlexSight™ LS2000 Line-Of-Sight IR Gas Detector',
                description: `
            <p> The FlexSight LS2000 detects combustible gas between two points with infrared technology, and is certified up to 120 meters.</p>

            `,
            },
            {
                title: 'FLEXSONIC® ACOUSTIC gas LEAK detector',
                description: `
            <p> This industrial-quality detector provides another layer of protection in the harshest environments, detecting leaks instantly under virtually all conditions..
            </p>

            `,
            },
            {
                title: 'COMBUSTIBLE Gases',
                description: `
            <p>
            For the latest in combustible gas detection technology, you can rely on Det​-Tronics to offer you rock-solid performance that requires minimal maintenance and calibration. In addition to our complete line of catalytic product solutions, we have a comprehensive line of infrared product line and accessories.
            </p>
            `,
            },
            {
                title: 'Toxic Gases',
                description: `
            <p>
            No other company provides a more complete line of flame and gas detection solutions than Det-Tronics. Our toxic-gas detection portfolio includes sensor types such as electrochemical, metal oxide semiconductor (MOS), and nanotechnology applied to MOS sensors (NTMOS).            </p>

            `,
            },
            {
                title: 'Universal display',
                description: `
            <p>
                Our latest addition, the FlexVu® Universal Display, provides non-intrusive calibration and configuration for a variety of detectors.
            </p>

            `,
            },
            {
                title: 'GP16 Gas Panel',
                description: `
            <p> Designed to meet life-safety requirements as a combustible or toxic gas controller, the GP16 Gas Panel is a pre-configured EQP System that incorporates combustible and/or toxic gas detectors.</p>

            `,
            },
            {
                title: 'xWatch Surveillance Camera',
                description: `
            <p> Keep personnel out of harm’s way by adding an industrial grade camera to your gas-detection solution. The system can be as simple or as complex as required. Your tailored surveillance system can include real-time viewing, remote monitoring with internet accessibility, and pre/post event recording.</p>

            `,
            },

        ],
    },
    {
        id: 7,
        slug: 'flame-detection',
        name: 'Flame Detection',
        category: 'flame-detection',
        imageSrc: '',
        imageAlt: " Flame Detection",


        details: [

            {
                title: '',
                description: `
                <p>Det-Tronics flame detectors are solutions for applications in which risk to personnel is high and where fire might result in a large loss of equipment.&nbsp; Beyond critical life-safety concerns, our products have proven to minimize total cost of ownership while minimizing false alarms.</p>
                <p>Our industrial and commercial applications include oil and gas pipelines, turbine enclosures, off-shore platforms, Floating Production Storage and Offloading (FPSO) vessels, automotive-manufacturing facilities, aircraft hangers, nuclear facilities, hydrogen-filling stations, and munition plants.</p>
                 <p>Bottom line — no other company offers more flame-detection technologies with wider area coverage, higher false-alarm immunity, reduced response times, and the appropriate global approvals. And to improve ease of use, all X-Series flame detectors have HART-protocol options.</p>
            `,
            },
            {
                title: 'X3301 MULTISPECTRUM INFRARED',
                description: `
                <p>The most versatile and reliable detector in the world is now greatly <a href="http://www.det-tronics.com/ProductCatalog/FlameDetection/Pages/X3301MultispectrumIRFlameDetector.aspx">enhanced</a>. It provides the earliest response to the smallest fires and the highest level of false alarm rejection. Its multi-fuel off-axis detection provides the largest area of coverage,&nbsp;making it an economic choice.</p>
            `,
            },
            {
                title: 'X3302 MultispecTrum infrared',
                description: `
            <p> The X3302 detects hard-to-see hydrogen flames and other non-carbon-based materials without the false alarms associated with traditional technologies. Its 100ft on-axis and 100ft off-axis detection range makes it an ideal solution for hydrogen surveillance by providing four times the coverage than conventional UV technologies.
            </p>

            `,
            },
            {
                title: 'x5200 Ultraviolet infrared',
                description: `
           <p>The X5200 combines a dual-infrared (IR) signal processing of the X9800 with the ultraviolet (UV) sensor of the X2200, providing a high-speed detection solution for applications where spurious UV radiation sources are typically present. This detector can operate in combination mode as a UVIR or in a single mode as a UV or IR.<br>
                </p>
            `,
            },
            {
                title: 'X9800 Single Frequency Infrared',
                description: `
            <p>The X9800’s dual-infrared (IR) signal processing rejects background infrared and maintain&nbsp;its high-speed detection.&nbsp;It is best in&nbsp;applications where&nbsp;high levels of contaminants are present and low maintenance is required.<br></p>
            `,
            },
            {
                title: 'x2200 Ultraviolet',
                description: `
            <p>
                This flame detector’s ultraviolet (UV) sensor has two algorithm settings: one for high-speed and the other for increased false alarm rejection. This provides the same unique high-speed performance that we have always had in with our previous models. Ideal for detecting special fires like metal fires and sulphur.
            </p>

            `,
            },
            {
                title: 'hART® COMMUNICATOR',
                description: `
            <p> A portable and intrinsically safe handheld communicator that may be used to configure and test our X-Series Flame Detectors or any of our other HART devices.</p>

            `,
            },
            {
                title: 'pm-5mpx dual spectrum ir',
                description: `
            <p> This dual infrared flame detector is designed to see both non-hydrocarbon and hydrocarbon fires typical in semiconductor fabrication or gas cabinets. It’s sealed polypropylene enclosure is suitable for explosion-proof, classified areas.</p>

            `,
            },
            {
                title: 'Apollo Smoke and Heat detectors',
                description: `
            <p> These addressable smoke and heat detectors are compatible with the Eagle Quantum Premier® (EQP) safety system via the Addressable Smoke and Heat (ASH) Module.</p>

            `,
            },
            {
                title: 'U5005 Smoke Detector',
                description: `
            <p> U5005 Smoke Detector is a sensitive, yet rugged, state-of-the-art protection device that is designed for classified areas in hazardous industrial and commercials locations.</p>

            `,
            },
            {
                title: 'U5006 Air Duct smoke detector',
                description: `
            <p> This smoke detector uses the technology of the U5005 but is mounted into a fiberglass NEMA 4 enclosure. It is designed to detect the presence of smoke for the primary purpose of controlling blowers and dampers in AC and ventilation systems.</p>

            `,
            },
            {
                title: 'xWatch Surveillance camera',
                description: `
            <p> When combined with a Det-Tronics X-Series flame detector or integrated into an existing detection/surveillance system, the xWatch® camera provides a high-resolution color image with real-time viewing</p>

            `,
            },

        ],
    },
    {
        id: 8,
        slug: 'sf6-product-range',
        name: 'SF6 Product Range',
        category: 'sf6-product-range',
        imageSrc: '../assets/pictures/sf6-product-range.png',
        imageAlt: " SF6 Product Range",


        details: [

            {
                title: 'SF6 UNITS FOR GIS PRODUCTION',
                description: `
                <p>Highest efficiency and uncompromising reliability in GIS production can only be achieved with a partner who combines cost effectiveness, sustainability and state of the art technology.</p>
                <p>This partner is DILO. Since 1967, DILO has been manufacturing solutions for SF6 gas handling and has been known as the leading manufacturer worldwide of gas handling plants covering your requirements in each production process.</p>
                 <p>Reliable, environmentally friendly and cost effective production prevents emissions in both GIS production and during operation. Together with you, DILO analyses the current situation and the desired workflow in order to develop an appropriate zero emissions solution which convinces by its high efficiency.
                For this purpose you receive all process elements from a single source – from the planning and project development to the assembly and training.</p>
                <p> The ideal functioning unit could be either a standalone solution or a complete line unit for large production volumes. Included are central units with storage tanks, any number of connected work stations as well as the control of all processes.</p>
                <p>You can rely on DILO as we are able to adapt your GIS production plant to the modified basic condition offering investment security
                    and confidence.</p>
                <p> This is guaranteed by the high modularity of our solutions and interaction of all DILO components.</p>

            `,
            },

        ],
    },




]


export default {
    components: {
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
    },
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
    setup() {
        const route = useRoute();
        const product = ref(products.find(p => p.slug === route.params.slug));

        return {
            product,

        }
    },
}
</script>