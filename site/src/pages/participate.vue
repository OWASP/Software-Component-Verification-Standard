<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col">
        <div class="flex flex-col mb-2 text-ui-primary">
          <h1 class="text-4xl font-black border-none">
            Participation
          </h1>

          <p>Welcome to the community. SCVS encourages individual and corporate participation and is open to anyone with an interest in measuring and improving software software supply chain assurance.</p>
          <h3 class="text-1xl font-black border-none" style="margin-top:3rem">
            Slack
          </h3>
          <p>
            The SCVS project utilizes the OWASP Slack workspace. Anyone interested in SCVS or software supply chain assurance is encouraged to participate.
          </p>
          <ul>
            <li><a class="border-b border-dashed border-ui-primary text-ui-primary" href="https://owasp.slack.com/channels/project-scvs">#project-scvs</a></li>
            <li><a class="border-b border-dashed border-ui-primary text-ui-primary" href="https://owasp.org/slack/invite">Invite</a></li>
          </ul>


          <h3 class="text-1xl font-black border-none" style="margin-top:3rem">
            GitHub
          </h3>
          <p>
            The SCVS standard and the BOM Maturity Model are developed in the open on GitHub.
          </p>
          <ul>
            <li><a class="border-b border-dashed border-ui-primary text-ui-primary" href="https://github.com/OWASP/Software-Component-Verification-Standard">https://github.com/OWASP/Software-Component-Verification-Standard</a></li>
          </ul>


          <h3 class="text-1xl font-black border-none" style="margin-top:3rem">
            Meetings
          </h3>
          <p>
            The SCVS project conducts bi-weekly meetings where we advance the standard and related efforts.
          </p>
          <ul>
            <li><a class="border-b border-dashed border-ui-primary text-ui-primary" href="https://drive.google.com/file/d/1lS4oDgWFORbhobYfsdsG-T071sjMEmzn/view">Calendar Invite</a></li>
          </ul>

        </div>
      </div>
    </div>
  </Layout>
</template>

<script>

export default {

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
