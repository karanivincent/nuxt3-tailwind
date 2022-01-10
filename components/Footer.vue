<template>
  <div>
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <!-- <div class="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-medium text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li v-for="item in footerNavigation.company" :key="item.name" class="text-sm">
                  <a :href="item.href" class="text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>-->
          <div class="space-y-12 md:space-y-0 md:gap-8">
            <div>
              <h3 class="text-sm font-medium text-white">Connect</h3>
              <ul role="list" class="mt-6 space-x-6 flex">
                <li v-for="item in footerNavigation.connect" :key="item.name" class="text-sm">
                  <a :href="item.href" class="text-gray-300 hover:text-white">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 md:mt-16 xl:mt-0">
          <h3 class="text-sm font-medium text-white">Sign up for our newsletter</h3>
          <p
            class="mt-6 text-sm text-gray-300"
          >The latest products and deals, sent to your inbox weekly.</p>
          <form @submit.prevent="sendEmail" class="mt-2 flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="customerEmail"
              id="email-address"
              type="text"
              autocomplete="email"
              required
              class="appearance-none min-w-0 w-full bg-white border border-white rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
            />
            <div class="ml-4 flex-shrink-0">
              <button
                type="submit"
                class="w-full bg-emerald-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-green-500"
              >Sign up</button>
            </div>
          </form>
        </div>
      </div>

      <div class="border-t border-gray-800 py-10">
        <p class="text-sm text-gray-400">Copyright &copy; 2021 Synergy Power Systems Ltd.</p>
      </div>
    </div>
  </div>
</template>

<script>
// import emailjs from 'emailjs-com';

const footerNavigation = {

  // company: [
  //   { name: 'Who we are', href: '#' },
  //   { name: 'Press', href: '#' },
  //   { name: 'Careers', href: '#' },
  //   { name: 'Terms & Conditions', href: '#' },
  //   { name: 'Privacy', href: '#' },
  // ],

  connect: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Twitter', href: 'https://www.twitter.com' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rajesh-thakar-6951bb59/?originalSubdomain=ke' },
    { name: 'Facebook', href: 'https://www.facebook.com/pages/Synergy-Power-Systems-Ltd/249612545126042' },
  ],
}
export default {

  data() {
    return {
      customerEmail: '',
      footerNavigation,
    }
  },
  methods: {
    // sendEmail(e) {
    //   console.log(e);

    //   try {
    //     emailjs.sendForm('service_lnd0fm3', 'template_w6dgx1v', e.target,
    //       {
    //         email: this.customerEmail,
    //       })

    //   } catch (error) {
    //     console.log({ error })
    //   }
    //   // Reset form field
    //   this.customerEmail = ''
    // },

  }


}
</script>

<style>
</style>