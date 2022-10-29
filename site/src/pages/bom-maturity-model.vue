<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col">
        <div class="flex flex-col mb-2 text-ui-primary">
          <h1 class="text-4xl font-black border-none">
            BOM Maturity Model
          </h1>
          <p>SCVS is developing a model in which bill of materials can be evaluated for a wide range of capabilities. The model will allow users to:</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
    const title = 'Participate in the OWASP Software Component Verification Standard';
    const description = 'SCVS encourages individual and corporate participation and is open to anyone with an interest in measuring and improving software software supply chain assurance';

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
