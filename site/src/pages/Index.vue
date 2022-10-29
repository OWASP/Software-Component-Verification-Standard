<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">

        <h1 class="text-4xl text-center lg:text-5xl">
          Software Component Verification Standard
        </h1>
        <p class="text-2xl font-medium text-center">
          Measure and Improve Software Supply Chain Assurance
        </p>

        <div class="flex justify-center mt-8">
          <g-link
              to="/scvs/"
              class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Get started
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>
      </div>

      <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <BookOpenIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Trusted Guidance
          </h3>
          <p class="text-lg text-left">
            SCVS is trusted by thousands of organizations and has been adopted, in its entirety, by the <a class="border-b border-dashed border-ui-primary text-ui-primary" href="https://csrc.nist.gov/publications/detail/sp/800-218/final">NIST Secure Software Development Framework (SSDF)</a>.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <LayersIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Layered Maturity
          </h3>
          <p class="text-lg text-left">
            SCVS requirements are organized into three layers allowing organizations to gradually adopt and mature software supply chain assurance.
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <UsersIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Community Driven
          </h3>
          <p class="text-lg text-left">
            With guidance from industry experts, SCVS is a community-driven <a class="border-b border-dashed border-ui-primary text-ui-primary" href="https://owasp.org/scvs">OWASP standard</a> which encourages active <g-link class="border-b border-dashed border-ui-primary text-ui-primary" to="/participate/">participation</g-link>.
          </p>
        </div>

      </div>

    </div>
  </Layout>
</template>

<script>
import { ArrowRightCircleIcon, BookOpenIcon, CodeIcon, MoonIcon, UsersIcon, LayersIcon } from 'vue-feather-icons';

export default {
  components: {
    ArrowRightCircleIcon,
    BookOpenIcon,
    CodeIcon,
    MoonIcon,
    UsersIcon,
    LayersIcon
  },

  metaInfo() {
    const title = 'OWASP Software Component Verification Standard';
    const description = 'SCVS allows organizations to measure and improve their software supply chain assurance';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
