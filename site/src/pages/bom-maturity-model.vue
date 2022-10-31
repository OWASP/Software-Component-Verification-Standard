<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col">
        <div class="flex flex-col mb-2 text-ui-primary">
          <h1 class="text-4xl font-black border-none">
            BOM Maturity Model
          </h1>
          <h3>Coming soon...</h3>

          <p><br/></p>

          <p>SCVS is developing a model in which bill of materials can be evaluated for a wide range of capabilities. The model consists of:</p>
          <ul class="ml-10 list-disc">
            <li>a formal taxonomy of different types of data possible in a bill of materials, independent of BOM format</li>
            <li>a unique identifier, description, and other metadata about each item in the taxonomy</li>
            <li>the level of complexity or difficulty in supporting different types of data</li>
          </ul>

          <p><br/></p>

          <p>The model can be used to evaluate:</p>
          <ul class="ml-10 list-disc">
            <li>Incoming BOMs adhere to organizational policy by supporting the data required by various stakeholders</li>
            <li>BOM generation and consumption tools</li>
            <li>Current and future BOM formats against each other and their alignment to organizational requirements</li>
          </ul>

          <p><br/></p>

          <p>In addition to the taxonomy, the BOM Maturity Model also provides support for profiles, which group multiple
          items in the model together along with weighted importance and other metadata. Organizations may create multiple
          profiles, each specific to various stakeholder requirements, or may opt for a global profile where a single organization
          profile contains all of the required items of the model. This will facilitate:</p>
          <ul class="ml-10 list-disc">
            <li>The creation of a new breed of tools which evaluate BOMs against various profiles so that end users may know what types of analysis can be performed on them</li>
            <li>The adoption of organizational policy, defined in profiles, for what is acceptable and not acceptable for various use cases</li>
          </ul>
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
