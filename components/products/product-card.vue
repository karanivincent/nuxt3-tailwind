

<template>
    <div>
        <div class="pt-8 pb-16 sm:pb-24">
            <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="my-8">
                    <div class="flex justify-between">
                        <h1 class="text-2xl font-medium text-gray-900">{{ product.name }}</h1>
                    </div>
                </div>
                <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                    <div
                        v-if="product.imageSrc !== ''"
                        class="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-6 lg:row-start-1 lg:row-span-1"
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

                    <div
                        v-for=" item in product.details"
                        :key="item.id"
                        class="mt-10 col-span-12 lg:col-span-6"
                    >
                        <h2 class="text-sm font-medium text-gray-900">{{ item.title }}</h2>

                        <div class="mt-4 prose prose-sm text-gray-500" v-html="item.description" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


const products = [

    {
        id: 1,
        slug: 'cable-fault',
        name: 'Cable Fault',
        category: 'cable-fault',
        imageSrc: '../pictures/cable-fault-location.jpg',
        // imageSrc: '../',
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
        imageSrc: '../pictures/Circuit-breaker-test.jpg',
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
        slug: 'electrical-tester',
        name: 'Electrical Tester',
        category: 'test-equipment',
        imageSrc: '../pictures/earth-testers.jpg',
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
        category: 'gas',
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
        category: 'gas',
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
        category: 'gas',
        imageSrc: '../pictures/sf6-product-range.png',
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
    {
        id: 9,
        slug: 'gas-refilling',
        category: 'gas',
        name: 'Gas refilling and evacuating devices For reliable refilling of SF6 gas by overpressure',
        imageAlt: 'Gas Refilling',
        imageSrc: '',


        details: [

            {
                title: 'SF6 gas refilling device',
                description: `
                <p>
                3-393-R001  <br>
                Portable with rubber hose and coupling DN8 and DN20 <br>
                3-393-R002 <br>
                Portable in a case with rubber hose and couplings DN8 and DN20 <br>
                The handy devices allow filling of electrical equipment with SF6 gas directly from the bottle by overpressure. The primary gauge of the pressure reducer displays the bottle pressure in bar, the secondary gauge indicates the desired filling pressure to be set easily by means of the handle. The bottle pressure can be reduced to the desired filling pressure by the integrated pressure reducer. <br>
                </p>
                <h3>
                Other features:
                </h3>
                <ul>
                    <li>
                    Self-closing couplings for emission-free gas handling
                    </li>
                    <li>
                    Available as accessories for the world’s most commonly used bottle connections
                    </li>
                </ul>
            `,
            },
            {
                title: 'Evacuating and refilling device',
                description: `
                <div>
                3-001-4-R002
                Mobile as cylinder cart
                3-001-4-R022 with electronic weighing scales 0 – 120 kg
                Mobile as cylinder cart
                In practice, the device covers two important functions. The integrated vacuum pump is the core component of the device. This vacuum pump evacuates the air down to < 1 mbar so that no air/gas mixture is produced during the subsequent filling process. The well proven DILO coupling principle ensures safe handling without emission.
                Using the 3-001-4-R022 version the filling weight can be registered comfortably by means of a weighing scale. The weight is indicated on the illuminated display which switches off automatically if the scales are not used for a certain time. Thanks to the tare function high precision quantification of gas inputs and outputs is possible.
                <h3> Other features </h3>
                <ul>
                    <li>
                    Stable frame
                    </li>
                    <li>
                    Accuracy of the weighing scales ±20 g, 10 g increments
                    </li>
                    <li>
                    Integrated serial interface for data exchange or monitoring
                    </li>
                    <li>
                    No emissions by self-closing couplings
                    </li>
                    <li>
                    Available as accessories for the world’s most commonly used bottle connections
                    </li>
                    <li>
                    Hose reel
                    </li>

                </ul>
                </div>

                `
            }

        ],
    },
    {
        id: 10,
        slug: 'sf6-service-carts',
        category: 'gas',
        name: 'SF6 service carts',
        imageAlt: 'SF6 service carts',
        imageSrc: '',


        details: [

            {
                title: '',
                description: `
                <div>

                The highest degree of performance and efficiency are the most important criteria for your investment decisions when purchasing SF6 service carts. But how can you objectively justify your decision process by comparable performance times?

                Previously, the nominal output of pumps and compressors was frequently compared to obtain a scale based on technical data. But that is a poor comparison, since a whole SF6 service cart is greater than the sum of its parts. The efficient functional interaction of all components over a real time period is the critical criterion.

                DILO identified this lack from the customer’s point of view. This is why DILO, in addition to equipment safety, had the pe

                rformance data of its SF6 service carts approved by TÜV SÜD.


                Under the supervision of an expert from TÜV SÜD, the following SF6 service carts (representing the entire product range) were tested:

                <ul>
                <li>
                B143R11 – Mini Series
                </li>
                L030R01 – Piccolo Series
                  <li>
                  B057R03 – Compact Series
                </li>
                  <li>
                  L057R01 – Economy Series
                </li>
                  <li>
                  L170R01 – Mega Series
                </li>
                </ul>
                </div>
            `,
            },
            {
                title: 'Micro Series (B160R92)',
                description: `
                <div>
                <p>
                This unit of the Micro series has been constructed in such a way that all functions can be carried out fully automated:

                </p>
                <ul>
                    <li>
                     Recovery and storage of SF6 in an internal or external storage vessel with automatic switch-off when reaching the adjustable final vacuum.
                    </li>
                    <li>
                    Automatic purification of the SF6 gas during the recovery and filling process.
                    </li>
                    <li>
                    Filling via pressure reducer by overflowing or by means of the compressor (automatic switchover) from an internal or external storage vessel with automatic switch-off when reaching the adjustable filling pressure.
                    </li>
                    <li>
                    Evacuation of air with automatic switch-off when reaching the adjustable final vacuum.
                    </li>
                 </ul>
                 <p>
                 The device has been specially designed for very small gas quantities and is ideally suited for applications, such as SF6 gas handling on medical devices (MRI Scanners) or electron microscopes.
                    </p>
                <p> Other features</p>
                <ul>
                <li>
                Device for gaseous storage of SF6 gas
                </li>
                <li>
                Final vacuum 3 mbar
                </li>
                <li>
                Internal storage tank (capacity: 2 l)
                </li>
                <li>
                Menu Navigation via the 5.7″ coloured touch screen
                </li>
                </ul>


                </div>

                `
            },
            {
                title: 'Mini Series as portable version with individual components',
                description: `
            <p>
            The Mini Series is perfectly suited for gas handling of small gas compartments and gas reclaiming to < 5 mbar. This series even exceeds the IEC directives which are in effect and can compete with the more powerful series. We recommend using this series for small gas quantities.

            Oilfree compressors allow gas handling without contamination by oil residues. The handy Mini Series stores the gas in liquid form and consists of the following individual components which can be assembled as complete unit:
            </p>
            `
            },
            {
                title: 'Prefilter unit (pe 10 bar)',
                description: `
            B077R11

            For adsorption of moisture, solid and gaseous decomposition products.
            `
            },
            {
                title: 'Portable vacuum pump unit (10 m³/h, < 1 mbar)',
                description: `
            B078R06

            For evacuation of air
            `
            },
            {
                title: 'Vacuum compressor unit (3,3 m³/h)',
                description: `
            B093R30

            For recovery of SF6 gas down to 5 mbar in conjunction with the compressor
            `
            },
            {
                title: 'Compressor unit (1,6 m³/h)',
                description: `
            B095R12

            For liquid SF6 storage
            `
            },
            {
                title: ' Operating panel for Mini Series',
                description: `
            B132R01

            For easy handling of individual components
            For more detailed information please refer to our
            `
            },
            {
                title: ' Small service cart ',
                description: `
            <p>
            B143R11

            The compact and mobile unit meets all requirements for efficient gas handling in the medium voltage range. Compact design and ergonomic aspects have been a guideline for its construction. Compared with the large devices – all necessary functions are integrated including gas purification via dry filter and particle filters and gas storage in liquid form.

            The gas is recovered to a final vacuum of < 5 mbar and thus outranges the ICE directives by far. The integrated dry running compressors prevent the SF6 gas from being contamination by oil. All values for the gas recovery, evacuation and filling process are displayed on the panel.
            Other features:
            </p>
            <ul>
            <li>
            Device for liquid storage of SF6 gas

            </li>
            <li>
            SF6 gas recovery down to < 5 mbar

            </li>
            <li>
            Semi-automatic control and 2.8″ operating panel

            </li>
            <li>
            Residual gas recovery down to 5 or 1 mbar during filter change

            </li>
            <li>
            Reduction to transport pressure as integrated special function

            </li>
            <li>
            All versions are available with tanks which can be assembled under the device with CE marking also available with SQL and ASME approval

            </li>
            </ul>

            `
            },
            {
                title: ' Piccolo Series ',
                description: `
            <p>
            L030R01

            The L030 model of the Piccolo Series has been specially designed for modern switchgear with small gas compartments. Due to its compact construction this device fits conveniently onto a euro pallet for transport and is easily manoeuvrable even in the very narrow passage ways of gas insulated switchgear.

            The L030 maintenance device is equipped with a compact but high capacity compressor which enables SF6 reclaiming up to < 5 mbar – a value outperforming current IEC regulations by far. A smart device for “smart grids”.
            Other features:
            </p>
            <ul>
            <li>
            Device for liquid storage of SF6 gas

            </li>
            <li>
            SF6 gas recovery down to < 5 mbar

            </li>
            <li>
            Semi-automatic control and 2.8″ operating panel

            </li>
            <li>
            Residual gas recovery down to 5 or 1 mbar during filter change

            </li>
            <li>
            Reduction to transport pressure as integrated special function

            </li>
            <li>
            All versions are available with tanks which can be assembled under the device with CE marking also available with SQL and ASME approval

            </li>
            </ul>

            `
            }, {
                title: ' Compact Series ',
                description: `
            <p>
           B057R.. / B058R..

            This robust series comprises several versions allowing gaseous and liquid SF6 storage. SF6 gas can be recovered to a final vacuum of < 5 mbar or 1 mbar and exceeds IEC 62271-4 regulations by far.

            All devices of this type series are equipped with a semi-automatic control and are easy to operate: The functions are selected by means of a 3-way ball valve and a selector switch. The pressure units (bar/mbar, kPa or psi/torr) can be chosen on the operating panel.

            The Compact Series is the perfect choice in case a robust and user-friendly device is required for maintenance works on high voltage switchgear.
            Other features:
            </p>
            <ul>
            <li>
            Device for liquid storage of SF6 gas

            </li>
            <li>
            SF6 gas recovery down to < 5 mbar

            </li>
            <li>
            Semi-automatic control and 2.8″ operating panel

            </li>
            <li>
            Residual gas recovery down to 5 or 1 mbar during filter change

            </li>
            <li>
            Reduction to transport pressure as integrated special function

            </li>
            <li>
            All versions are available with tanks which can be assembled under the device with CE marking also available with SQL and ASME approval

            </li>
            </ul>

            `
            },


        ],
    },
    {
        id: 11,
        slug: 'sf6-storage-tanks',
        category: 'gas',
        name: 'SF6 Storage Tanks',
        imageAlt: 'SF6 Storage Tanks',
        imageSrc: '',


        details: [

            {
                title: 'SF6 gas storage tanks',
                description: `
                <div>

                These tanks offer sufficient volume to store or withdraw even large gas quantities in gaseous or liquid form – special feature of this type series: for withdrawal of liquid gas, the entire gas content can be withdrawn all at once without having to heat the tank.SF6 gas storage tankB176R02

                The tanks are equipped with digital weighing scales. These weighing scales enable to determine the filling weight with an accuracy of ± 500 g, thus facilitating considerably the SF6 gas monitoring and the registration of the gas quantities in accordance with the EU directives.
                Other features:

                <ul>
                <li>
                    Available with a storage volume of 300 l, 600 l or 1,000 l
                </li>
                    For liquid or gaseous storage or withdrawal of gas
                  <li>
                    Digital weighing scales (measuring accuracy ± 0.5 kg)
                </li>
                  <li>
                  Discharge of the weighing system for transportation is not required
                </li>
                  <li>
                Additional tool box for hoses and accessories
                    </li>
                    <li>
                        Stable frame with driving rod
                    </li>
                    <li>
                    Steerable and fixing rollers for comfortable transportation
                    </li>
                    <li>
                        Max. operating overpressure 50 bar
                    </li>
                    <li>
                        Version in accordance with EC 97/23 pressure equipment directive ASME and SQL approval are available as Option
                    </li>
                </ul>
                </div>
            `,
            },

        ],
    },
    {
        id: 12,
        slug: 'sf6-accessories',
        category: 'gas',
        name: 'SF6 Accessories',
        imageAlt: 'SF6 Accessories',
        imageSrc: '',


        details: [

            {
                title: 'Oilfree suction pump units',
                description: `
                <div>

                The mobile suction pump allows upgrading old SF6 maintenance devices. Thus it is possible to recover the SF6 gas from the gas compartment to a final vacuum of 1 mbar by connecting in series the mobile suction pump.
                Other features:

                <ul>
                <li>
                    Separate electric control
                </li>
                    Three different versions or pump performances are available
                  <li>
                    Self-closing couplings for emission-free gas handling
                </li>
                  <li>
                  Digital vacuum indication (0 – 400 mbar)
                </li>
                  <li>
                Steerable and fixing rollers for comfortable handling

                    </li>
                    <li>
                        Different wrenches are available as accessories
                    </li>
                </ul>
                </div>
            `,
            },
            {
                title: ' B131R41 – 15 m³/h',
                description: `
                <div>
                Final vacuum ‹ 1 mbar
                DILO couplings DN20
                550 x 430 x 800 mm, 80 kg
                Operating voltage: AC 200-240 V, 50/60 Hz
                </div>
                `
            },
            {
                title: 'B131R13 – 35 m³/h ',
                description: `
                <div>
                Final vacuum ‹ 1 mbar


                DILO couplings DN20, DN40

                730 x 550 x 980 mm, 132 kg

                Operating voltage: AC 220 – 240 V, 50/60 Hz
                </div>
                `
            },
            {
                title: ' B131R61 – 100 m³/h',
                description: `
                <div>
                    Final vacuum ‹ 1 mbar

                    DILO couplings DN20, DN40

                    1.060 x 740 x 1.230 mm, 230 kg

                    Operating voltage: AC 380 – 480 V, 50/60 Hz
                </div>
                `
            },
            {
                title: ' Retrofit kit for suction pumps',
                description: `
                <div>
                Z788R..

                In case a mobile unit is not your preferred choice, it is also possible to install suction pumps in an existing service cart to be able to reclaim gas in accordance with the IEC 62271 regulation. For more detailed information please contact us indicating the following details:
                <ul>
                <li>
                Type
                </li>
                <li>

                Year of construction
                </li>
                <li>
                Commission number
                </li>
                <li>
                Working hours
                </li>
                </ul>

                </div>
                `
            },
            {
                title: ' Stowage units for hoses',
                description: `
                <div>
                <h3>
                Hose reel with spring balancer
                </h3>
                Stationary unit for wall assembly

                B174R10 – Hose reel with spring balancer
                with abrasion-proof 10 m long rubber hose DN20 and
                coupling tongue part DN20

                B174R15 – Hose reel with spring balancer
                with abrasion-proof 15 m long rubber hose DN20 and
                coupling tongue part DN20

                The useful tool has been specially adapted to customer requirements in GIS production areas to keep hoses tidy. Therefore these practical accessories allow quick hose installation in GIS production to have everything neat and clean.

                The hose reel can easily be mounted and enables convenient reeling and unreeling of the desired hose length. Its optional holder can be swivelled in both directions. The integrated gastight rotary feedthrough ensures that no SF6 gas escapes into the atmosphere.


                Other features:
                <ul>
                <li>
                Stable steel frame, ready for wall assembly
                </li>
                <li>
                Abrasion-proof rubber hose (GS1020) with surface coating
                </li>
                <li>
                Equipped with DN20 connection
                </li>
                <li>
                Gastight rotary feedthrough
                </li>
                <li>
                Comfortable reeling and unreeling of the desired hose length
                </li>
                <li>
                Adjustable reel up force
                </li>
                <li>
                Hinge swivelling in both directions (available as option)
                </li>
                <li>
                Different hose lengths are available
                </li>
                </ul>

                </div>
                `
            },
            {
                title: 'Hose reel ',
                description: `
                <div>
                Mobile unit for hose reeling

                Z446R04
                Hose reel for three gas compartment hoses

                Z446R06
                Hose reel for six gas compartment hoses

                Z446R05
                Hose reel for eight gas compartment hoses

                The hose reel has been specially designed for optimising SF6 gas handling and for keeping hoses tidy in GIS production. The hose distributor allows to connect several gas compartments at the same time which can be treated by means of an SF6 maintenance device.

                As the unit is equipped with four steerable rollers it can easily be transported to the desired location. The hose reel is of robust construction and can store up to eight hoses.

                Other features:
                <ul>
                <li>
                Stable steel frame
                </li>
                <li>
                Steerable rollers allow easy transport
                </li>
                <li>
                With 3, 6 or 8 DN20 hoses available as option
                </li>
                <li>
                DN40 connecting hose to gas handling plant
                </li>
                <li>
                Different hose lengths are available
                </li>
                </div>
                `
            },
            {
                title: '',
                description: `
            In addition to the stowage units, we offer you the DN20 Quick coupling. A useful aid in all fields of application where hoses have to be frequently loosened and reconnected.
            `
            }

        ],
    },
    {
        id: 13,
        slug: 'sf6-monitoring-devices',
        category: 'gas',
        name: 'SF6 Monitoring Devices',
        imageAlt: 'SF6 Monitoring Devices',
        imageSrc: '',


        details: [

            {
                title: '',
                description: `
                <div>

                Devices for monitoring SF6 gas quantities

                For recording of SF6 gas consumption rates DILO offers different devices for easy and comfortable monitoring.


                </div>
            `,
            },
            {
                title: ' Mass flow measuring system',
                description: `
                <div>
               B152R41
                For recording gas quantities from and to the circuit breaker

                With this device, gas monitoring is just that simple. Gas quantities which are filled in and recovered are registered and can be transferred to a computer. The system displays the current mass flow as well as the total mass. It is also equipped with an additional meter which can be reset, add and subtract the gas quantity. Thus, the SF6 gas monitoring is very easy.

                Other features:
                <ul>
                <li>
                System can be wall or table mounted
                </li>
                <li>
                Coupling groove part DN20
                </li>
                <li>
                Measuring accuracy for gases: 0.50 % ± 0.1 kg/h
                </li>
                <li>
                PC-Hart modem with PC interface cable (available as option)
                </li>
                <li>
                Indication in kg, optionally in lbs
                </li>
                </ul>
                </div>
                `
            },
            {
                title: 'Weighing scales ',
                description: `
                <div>
                K091R54

                The weighing scales have been developed specially for large containers used for example in GIS production or in large substations. The weighing range of the device is up to 2,000 kg. The determined weight is indicated on the display immediately.

                The integrated serial interface is a special feature allowing data communication with other DILO devices. Thus, not only the weight can be read on the service cart, but the recovery process can alsobe stopped via the DILO service cart after having reached the provided filling weight. Furthermore, the data can also be transmitted to the laptop or to special monitoring software. There is no easier way of SF6 monitoring.

                Other features:
                <ul>
                <li>
                Weighing range: up to 2,000 kg with tare function
                </li>
                <li>
                Serial interface
                </li>
                <li>
                Digit increment: 0,2 kg
                </li>
                <li>
                Weight indication reversible from kg to lbs
                </li>
                <li>
                Release of the weighing system is not necessary for transportation
                </li>
                </ul>
                </div>
                `
            },
            {
                title: ' Electronic bottle scales',
                description: `
                <div>
                   K091R65 (Standard)
                    Digital display with battery compartment (IP54)

                    K091R67 (Comfort)
                    Digital display with internal rechargeable batteries (IP65)
                    Integrated serial interface for data exchange or monitoring

                    The electronic bottle scales allow quick and easy determination of the filling quantity of a gas bottle. The large weighing platform and the supporting chain provide additional stability of the gas bottle.

                    The weight is indicated on the illuminated display which switches off automatically if the scales are not used for a certain time. Thanks to the tare function gas inputs and outputs can be quantified exactly. The bottle scales can be folded comfortably and compactly in one step after use.

                    Technical data:
                    <ul>
                    <li>
                    Weighing range: up to 120 kg with tare function
                    </li>
                    <li>
                    Digit increment: 10 kg
                    </li>
                    <li>
                    Accuracy: ± 20 g
                    </li>
                    <li>
                    Weight indication reversible from kg to lbs
                    </li>
                    </ul>
                </div>
                `
            },
            {
                title: ' Weighing unit for “SF6 Monitoring Manager”',
                description: `
                <div>
                This weighing unit is a useful tool for the SF6 gas bottle management in connection with the „SF6 Monitoring Manager“, a specially developed database software.

                The quantity of SF6 stored in gas bottles is precisely determined by means of electronic scales, incoming and outgoing gas vessels are identified by means of the integrated barcode scanner. The required bar code labels can be printed on site with the optional label printer.

                Gas quantities being filled or withdrawn are registered by the weighing unit and are allocated to the corresponding storage location or customer location via the computer tablet.

                This unit also enables the registration of the gas quality (e. g. new gas or reuse gas). Its difference is immediately registered in the database. Thus it is possible to survey the gas quantities employed at any time and any location. This considerably simplifies annual reporting in accordance with the CE 1493/2007 directive.

                Other features:
                <ul>
                <li>
                Stable frame
                </li>
                <li>
                Accuracy of the electronic weighing unit ±0.1 kg
                </li>
                <li>
                Network independent by Li-Ion battery operation
                </li>
                <li>
                10“ tablet computer with database connection
                </li>
                <li>
                2D capable cordless barcode scanner with Bluetooth interface
                </li>
                <li>
                Optional thermal transfer printer for durable labelling of gas bottles (option)
                </li>
                </ul>

                </div>
                `
            },


        ],
    },
    {
        id: 14,
        slug: 'sf6-gas-measuring-device',
        category: 'gas',
        name: 'SF6 Gas Measuring Devices',
        imageAlt: 'SF6 Gas Measuring Devices',
        imageSrc: '',


        details: [

            {
                title: 'A range for all requirements',
                description: `
                <div>

               Measuring instruments are used to monitor ambient air, trace leaks and to measure the SF6 quality of electrical operating equipment.

            The SF6 gas must always be pure since humidity and toxic or corrosive decomposition products in circuit breakers impair the insulating properties of the gas.

            The gas quality has to be monitored in accordance with the F-gas Regulation (EU) 517/2014. The IEC 60480 directive also stipulates the limit values for the re-use of SF6 gas.

            It is absolutely necessary to know the gas quality before carrying out maintenance works on a circuit breaker in order to be able to decide on preparation, re-use or disposal of the SF6 gas.

            The essential quality criteria for SF6 gas in circuit breakers are as follows:
            <ul>
            <li>
            Humidity (dew point)
            </li>
            <li>
            Decomposition products
            </li>
            <li>
            Gas purity in %
            </li>
            </ul>
            DILO offers a complete range of measuring devices for all applications including: room monitoring systems, leak detectors, measuring devices to determine the SF6 quality as well as relevant accessories for simple on-site measurement and retrofit kits for old measuring devices.
                </div>
            `,
            },
            {
                title: ' SF6-LeakPointer',
                description: `
                <div>
               3-033-R002

                The cordless battery-operated device measures in six sensitivity levels within a very short response time. The device switches automatically to the next higher level of sensitivity for detection of larger leaks.

                It is possible to switch over the device to the most sensitive measuring range by simply pressing the corresponding key. The SF6 concentration is displayed next to the indication of the measuring range by an LED bar display and an audible signal.

                Other features:
                <ul>
                <li>
                Quick response time
                </li>
                <li>
                Low “Recovery” time
                </li>
                <li>
                Automatic switching over to levels of sensitivity
                </li>
                <li>
                Detection of leaks of up to 5 g / year
                </li>
                <li>
                Single-handed operation
                </li>
                <li>
                Battery-operated
                </li>
                <li>
                Temperature-compensated
                </li>
                </ul>
                </div>
                `
            },
            {
                title: 'SF6 Multi-Analyser ',
                description: `
                <div>
               3-038-R… without return system
                3-308R-R… with gas return system

                This multi-functional device allows the determination of up to six quality parameters with only one measurement:
                <ul>
                <li>
                SF6 concentration (%)
                </li>
                <li>
                Moisture concentration
                </li>
                <li>
                SO2 concentration (ppmv)
                </li>
                <li>
                OPTION: HF concentration, H2S concentration, CO concentration (in ppmv each)
                </li>
                </ul>
                The SF6 Multi Analyser is a user and maintenance-friendly device which guarantees high measuring accuracy.

                First of all, the gas is checked for decompositions products. If critical SO2 values are determined the measurement can be interrupted. In case of contaminated SF6 the complete measuring gas can be recovered from the internal vessel. Thus, any contamination of the other sensors is avoided and the functionality of the device is ensured.

                If the sensors have to be calibrated they can easily be exchanged by the operator on site. The device is immediately ready for use without loss of time based on the “Plug & Play“ principle.

                Other features:
                <ul>
                <li>
                No emissions of measuring gas
                </li>
                <li>
                Data transmissionto USB stick
                </li>
                <li>
                Modular interchangeability of the sensors
                </li>
                <li>
                Adjustable user languages: DE, GB, FR, ES, IT, PT, CZ, PL, CN
                </li>
                <li>
                Easy handling and menu guidance via colour touch screen (5.7″)
                </li>
                <li>
                Results of up to 100 measurements can be stored with name, date and time
                </li>
                <li>
                Trolley for comfortable transportation (3-038R-R… version)
                </li>
                </ul>

                Example: Moisture sensor as exchange module
                </div>
                `
            },
            {
                title: ' SF6 Air Sensor',
                description: `
                <div>
                  3-026-R115

                    The device even detects smallest SF6 concentrations and displays the current measuring values permanently. For the operating personnel it is absolutely necessary to know that no radioactive source is used. Therefore no special measures must be taken during operation.

                    The SF6 Air Sensor guarantees a quick reaction time. Furthermore, there is no cross sensitivity to moisture and unaffected by background

                    Indoor SF6 monitoring device
                    contamination and the measuring result remains constant. Parameters for warning messages and alarm tripping are freely configurable.

                    Other features:
                    <ul>
                    <li>
                    Measuring range: 0 to 1,500 ppmv SF6
                    </li>
                    <li>
                    High longtime stability
                    </li>
                    <li>
                    No maintenance and consumables are required
                    </li>
                    <li>
                    Indication of the measuring value via LCD on the front of the device
                    </li>
                    <li>
                    Air pressure compensated
                    </li>
                    <li>
                    Analogous and serial interface
                    </li>
                    </ul>
                    Important note: The device can only be used together with the SF6 Network Monitor. It cannot be operated autonomously.
                </div>
                `
            },
            {
                title: ' Discharge gas collecting bag',
                description: `
                <div>
                B151R95

                This bag is a simple and cost-effective system for collecting measuring gas in case it cannot be returned directly into the circuit breaker. Its handling is very easy: Connect the bag with the hose included in the scope of supply to the measuring device.

                The discharge gas collecting bag allows collecting the SF6 from up to 25 measurements. The gas can be removed by means of any service cart. When using this system no SF6 is released into the atmosphere. It is light, practical and environmentally friendly.


                Other features:
                <ul>
                <li>
                52 l capacity
                </li>
                <li>
                Light folding bag for comfortable transportation
                </li>
                <li>
                Integrated safety valve (pe = 100 mbar)
                </li>
                <li>
                Self-closing miniature couplings
                </li>
                </ul>

                Note: All DILO measuring devices equipped with a gas return system can be connected to the discharge gas collecting bag (see leaflets of the SF6 measuring devices).

                </div>
                `
            },


        ],
    },
    {
        id: 15,
        slug: 'sf6-valve',
        category: 'gas',
        name: 'SF6 valves & couplings',
        imageAlt: 'SF6 valves & couplings',
        imageSrc: '',


        details: [

            {
                title: 'DILO SF6 valves and couplings',
                description: `
                <div>

               Are you looking for pressure and vacuum tight valves and couplings for SF6 gas use? DILO is the right choice! We offer the largest range of products worldwide. Whether for medium voltage switchgear, high voltage switchgear or gas-insulated lines (GIL) our products always meet your requirements.

                When using the DILO coupling system a leak rate of better than 1 x 10-8 mbar l/sec. is achieved corresponding to less than 1 cm³ in 3 years.

                The DILO seal principle prevents the loss of SF6 gas and moisture from penetrating the SF6 gas system. DILO couplings will eliminate the loss of SF6 gas by incorrect gas handling. Thanks to their reliability, quality and durability DILO couplings are the world’s most widely used connecting system for SF6 switchgear.
                </div>
            `,
            },
            {
                title: ' Advantages of application',
                description: `
                <div>
                <ul>
                <li>
               Self-closing coupling system
                </li>
                <li>
                Pressure and vacuum-tight even when coupling and uncoupling
                </li>
                <li>
                Permanent tightness even when frequently connected and disconnected
                </li>
                <li>
                Applicable up to PN 64 bar
                </li>
                <li>
                Suitable for temperatures from -40 °C to +80 °C
                </li>
                <li>
                Direct connection to DILO service carts without adapter
                </li>
                <li>
                Available in different materials even for outdoor switchgear
                </li>
                </ul>
                </div>
                `
            },
            {
                title: 'Approvals and tests ',
                description: `
                <div>
                <ul>
                <li>
              Certification according to ISO 9001:2008
                </li>
                <li>
                HP0 approval as pressure equipment manufacturer
                </li>
                <li>
                Production control in accordance with EC 97/23 regulations
                </li>
                </ul>
                </div>
                `
            },
            {
                title: 'Unlimited diversity',
                description: `
                <div>
                DILO’s range of couplings, adapters and transition pieces is diverse and does not leave much to be desired.

                The delivery programme comprises:
                <ul>
                <li>
                Couplings available in DN6 to DN40 nominal diameters with different flange shapes, screw-in versions or as plug-in couplings
                </li>
                <li>
                Soldering unions, screw-in stubs and gauge connections for gas tight piping
                </li>
                <li>
                Ball valves in different versions and pressure ranges
                </li>
                <li>
                Pressure and vacuum-tight rubber and wire braided hoses in different nominal diameters, lengths and finishes
                </li>
                <li>
                Transition pieces and adapters for different nominal diameters
                </li>
                <li>
                Connections for SF6 gas cylinders
                </li>
                <li>
                Distribution panels and piping as well as customer specific special solutions
                </li>
                </ul>
                Here you can download the overall catalogue “DILO SF6 valves and couplings”.
                </div>
                `
            },
            {
                title: ' Discharge gas collecting bag',
                description: `
                <div>
                B151R95

                This bag is a simple and cost-effective system for collecting measuring gas in case it cannot be returned directly into the circuit breaker. Its handling is very easy: Connect the bag with the hose included in the scope of supply to the measuring device.

                The discharge gas collecting bag allows collecting the SF6 from up to 25 measurements. The gas can be removed by means of any service cart. When using this system no SF6 is released into the atmosphere. It is light, practical and environmentally friendly.


                Other features:
                <ul>
                <li>
                52 l capacity
                </li>
                <li>
                Light folding bag for comfortable transportation
                </li>
                <li>
                Integrated safety valve (pe = 100 mbar)
                </li>
                <li>
                Self-closing miniature couplings
                </li>
                </ul>

                Note: All DILO measuring devices equipped with a gas return system can be connected to the discharge gas collecting bag (see leaflets of the SF6 measuring devices).

                </div>
                `
            },


        ],
    },
    {
        id: 16,
        slug: 'sf6-leak-testing-units',
        category: 'sf6-leak-testing-units',
        name: 'SF6 Leak Testing Units',
        imageAlt: 'SF6 Leak Testing Units',
        imageSrc: '',


        details: [

            {
                title: 'Automated leakage measurement on serial components',
                description: `
                <div>

               DILO builds SF6 leak testing units for integral leak measurement using SF6 gas in various sizes – from around 50 l to approx. 50,000 l.

                The integral and automated leakage measurement on serial components and assemblies is the proven strength of these systems. Even the smallest leaks are detected quickly and reliably.

                We always manufacture the systems according to customer specifications while focussing on a user and maintenance-friendly configuration. We exclusively use hermetically sealed components which do not allow emissions into the environment.

                To ensure an optimal workflow, the system design is always adjusted to the customer’s production environment.
                The test system delivers the total leakage rate of the test object as a measurement result within a few minutes.

                </div>
            `,
            },
            {
                title: ' Focus on customer requirements',
                description: `
                <div>
               Accompanying project management by a project manager from the first conception meeting until delivery of the system is a matter of course.
                We take care of the installation and commissioning as well as accompanying training at the customer’s premises.
                And even after delivery we won’t leave you in the lurch. We offer maintenance contracts as well as various options for remote maintenance for rapid troubleshooting.
                </div>
                `
            },
            {
                title: 'Testing under vacuum ',
                description: `
                <div>
                <h3>Model range “LeakScanner SV” – from S to XXL</h3>
               Vacuum testing of smaller components   (without gas handling)

                This model range with a chamber volume of approx. 50 – 500 l is the ideal solution for testing smaller components where gas handling can take place outside the test chamber.

                Vacuum testing of larger components  (with or without integrated gas handling)

                We manufacture standard systems of this model range with a chamber volume of 500 l to approx.10,000 l. We recommend this model range where larger components need to be tested or where integrated gas handling in the test chamber is required. In this case, the test objects are filled with SF6 in the chamber. Gradual evacuation and filling of the test objects is also possible in order to avoid an inadmissible differential pressure between the test object and chamber.

                An advantage for users in the field of energy technology: when testing SF6-filled control system components, SF6 can remain in the test object after testing. This makes the SF6 test method an interesting alternative to the known helium leak test in the field of GIS production as it is not necessary to recover the test gas from the test chamber after completion of the test process. As a consequence, the SF6 test method has a shorter handling time per test unit.
                </div>
                `
            },
            {
                title: 'Testing under atmospheric pressure',
                description: `
                <div>
                <h3>“LeakScanner SA” model range</h3>
                DILO’s range of couplings, adapters and transition pieces is diverse and does not leave much to be desired.

                The delivery programme comprises:
                With atmospheric test chambers it is not necessary to evacuate air before the test process.

                Test chambers of this construction type can be manufactured at significantly lower cost with a significantly larger volume than vacuum chambers. We build these chambers with a chamber volume of up to 50 m³ as standard. This allows for reliable testing of even larger units and assemblies.

                However, we also recommend atmospheric testing when delicate, vacuum-sensitive components such as devices with touch screens need to be tested for their leak tightness.

                This system configuration also allows the filling of the test objects with SF6 gas in the test chamber and subsequent recovery of the gas. However, with atmospheric pressure, the test duration is on average 10 – 30 times longer as the increase in concentration for atmospheric pressure is significantly lower.
                </div>
                `
            },
            {
                title: ' Individual solutions ready for use',
                description: `
                <div>
               Possible designs:
                <ul>
                <li>
                Vacuum chambers or atmospheric test chambers
                </li>
                <li>
                Chambers with or without integrated SF6 gas handling
                </li>
                <li>
                Double units
                </li>
                <li>
                Small and large chambers as one work unit
                </li>
                <li>
                Combined systems with a vacuum and an atmospheric test chamber
                </li>
                </ul>
                As only one control cabinet/laser measurement system is required, even for double units or combined systems, the cost effectiveness of this system design is particularly high.
                </div>
                `
            },


        ],
    },
    {
        id: 17,
        slug: 'graphite-disks',
        category: 'safety-systems',
        name: 'Graphite Disks',
        imageAlt: 'Graphite Disks',
        imageSrc: '',


        details: [


            {
                title: '',
                description: `
                <div>
                <p>
                BS&B range of SAF-T-GRAF.
                </p>
                <p>
            Graphite Disks are manufactured from a pure block of graphite. It can withstand almost any aggressive chemical attack through superior manufacturing process which achieves wide range of sizes, superior corrosion resistance, low and high operating temperatures.
            </p>
            </div>
                `
            },



        ],
    },
    {
        id: 18,
        slug: 'rupture-disks',
        category: 'safety-systems',
        name: 'Rupture Disks',
        imageAlt: 'Rupture Disks',
        imageSrc: '',


        details: [


            {
                title: '',
                description: `
                <div>
                <p>
                Synergy Power Systems Limited represents BS&B Safety Systems the original rupture disk (bursting disc) manufacturer. BS&B has been shaping the growth of pressure relief devices for many decades.
                </p>
                <p>
                As the originators of the Rupture Disk (Bursting Disc), BS&B Safety Systems are best suited to finding the safest solution to your pressure problem with established products or custom made designs.
                </p>
            </div>
                `
            },

        ],
    },
    {
        id: 19,
        slug: 'portable-solar-lantern',
        category: 'solar',
        name: 'Portable Solar Lanterns',
        imageAlt: 'Portable Solar Lanterns',
        imageSrc: '',


        details: [

            {
                title: 'JS 30 MOB',
                description: `
                <div>
                <p>
                Portable Lantern – Ideal for A Family of 5
                </p>
                <ul>
                <li>
                Duration: 8 Hours of Light on Full Battery
                </li>
                <li>
                Mobile Phone Charging: 40 minutes of talktime PLUS 7-8 hours of light
                </li>
                <li>
                Light Output: 8-10 Lux (45-50 lumens)
                </li>
                <li>
                Solar Panel: In-built PV Panel (100 % Portable)
                </li>
                <li>
                No. of LEDs: 30 LEDs
                </li>
                <li>
                Battery: NiMH Rechargeable (2 year life)
                </li>
                <li>
                Dimensions: 31cm x 21cm x 21cm
                </li>
                <li>
                Dual Mode (Nightlamp) : 20+ hours of light
                </li>
                <li>
                Warranty: 1 Year Manufacturer’s Warranty
                </li>
                </ul>

            </div>
                `
            },
            {
                title: 'JS 20 MOB',
                description: `
            <p>
            Portable Lantern – Ideal for A Family of 3
            </p>
            <ul>
            <li>
            Duration: 7-8 hours of light
            </li>
            <li>
            Mobile Phone Charging: 30 minutes of talktime PLUS 5-6 hours of light
            </li>
            <li>
            Light Output: 7-8 Lux (30-40 lumens)
            </li>
            <li>
            Solar Panel: In-built PV Panel (100 % Portable)
            </li>
            <li>
            No. of LEDs: 20 LEDs
            </li>
            <li>
            Battery: NiMH Rechargeable (2 year life)
            </li>
            <li>
            Dimensions: 28cm x 18cm x 18cm
            </li>
            <li>
            Dual Mode (Nightlamp) : 12+ hours of light
            </li>
            <li>
            Warranty: 1 Year Manufacturer’s Warranty
            </li>
            </ul>
            `

            },
            {
                title: 'JS 12',
                description: `
            <p>
            Portable Lantern – Ideal for Individual Use
            </p>
            <ul>
            <li>
            Duration: 5-6 hours of light
            </li>
            <li>
            Light Output: 6-7 Lux (25-30 lumens)
            </li>
            <li>
            Solar Panel: In-built PV Panel (100 % Portable)
            </li>
            <li>
            No. of LEDs: 12 LEDs
            </li>
            <li>
            Battery: NiMH Rechargeable (2 year life)
            </li>
            <li>
            Dimensions: 28cm x 18cm x 18cm
            </li>
            <li>
            Dual Mode (Nightlamp) : 10+ hours of light
            </li>
            <li>
            Warranty: 1 Year Manufacturer’s Warranty
            </li>
            </ul>
            `
            }

        ],
    },
    {
        id: 20,
        slug: 'solar-emergency-lights',
        category: 'solar',
        name: 'Solar Emergency Lights',
        imageAlt: 'Solar Emergency Lights',
        imageSrc: '',


        details: [

            {
                title: 'II- 9F',
                description: `
                <div>
                <p>
               Emergency Light – Ideal for Disaster Relief Kits & Individual Use
                </p>
                <ul>
                <li>
                Duration: 4-5 hours of light
                </li>
                <li>
                Dual Mode (Flasher): 7-8 hours
                </li>
                <li>
                Light Output: 5-6 Lux (20-25 lumens)
                </li>
                <li>
                Solar Panel: In-built PV Panel (100 % Portable)
                </li>
                <li>
                No. of LEDs: 9 SMD LEDs
                </li>
                <li>
                Battery: NiMH Rechargeable (2 year life)
                </li>
                <li>
                Dimensions: 23cm x 10cm x 10cm
                </li>
                <li>
                Warranty: 1 Year Manufacturer’s Warranty
                </li>
                </ul>

            </div>
                `
            },
            {
                title: 'II- 9MF',
                description: `
            <p>
            Emergency Light – Ideal for Disaster Relief Kits & Individual Use
            </p>
            <ul>
            <li>
            Duration: 5-6 hours of light
            </li>
            <li>
            Mobile Phone Charging: 30 minutes of talktime PLUS 4-5 hours of light
            </li>
            <li>
            Dual Mode (Flasher): 10+ hours
            </li>
            <li>
            Light Output: 6-7 Lux (25-30 lumens)
            </li>
            <li>
            Solar Panel: Separate PV Panel
            </li>
            <li>
            No. of LEDs: 9 SMD LEDs
            </li>
            <li>
            Battery: NiMH Rechargeable (2 year life)
            </li>
            <li>
            Dimensions: 23cm x 10cm x 10cm
            </li>
            <li>
            Warranty: 1 Year Manufacturer’s Warranty
            </li>
            </ul>
            `
            }

        ],
    }





]
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'


export default {
    props: {
        product_slug: {
            type: String,
            default: '',
        }
    },
    components: {
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
    },
    computed: {
        product: function () {
            let product = products.find(product => product.slug === this.product_slug);
            return product
        },


    },



}
</script>