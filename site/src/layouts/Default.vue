<template>
  <div class="font-sans antialiased text-ui-typo bg-ui-background">
    <div class="flex flex-col justify-start min-h-screen">

      <header
        ref="header"
        class="sticky top-0 z-10 w-full border-b bg-ui-background border-ui-border"
        @resize="setHeaderHeight"
      >
        <LayoutHeader />
      </header>

      <main class="container relative flex flex-wrap justify-start flex-1 w-full bg-ui-background">

        <aside
          v-if="hasSidebar"
          class="sidebar"
          :class="{ 'open': sidebarOpen }"
          :style="sidebarStyle"
        >
          <div v-if="taxonomy === true" class="w-full pb-16 bg-ui-background">
            <TaxonomyTree />
          </div>
          <div v-else class="w-full pb-16 bg-ui-background">
            <Sidebar @navigate="sidebarOpen = false" />
          </div>
        </aside>

        <div
          class="w-full pb-24"
          :class="{'pl-0 lg:pl-12 lg:w-3/4': hasSidebar}"
        >
          <slot />
        </div>

      </main>

        <Footer/>
    </div>

    <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
      <button class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white" @click="sidebarOpen = ! sidebarOpen">
        <XIcon v-if="sidebarOpen" />
        <MenuIcon v-else />
      </button>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from "@/components/Sidebar";
import TaxonomyTree from "../components/TaxonomyTree";
import LayoutHeader from "@/components/LayoutHeader";
import Footer from "@/components/Footer";
import { MenuIcon, XIcon } from 'vue-feather-icons';

export default {
  components: {
    Sidebar,
    TaxonomyTree,
    LayoutHeader,
    Footer,
    MenuIcon,
    XIcon
  },
  props: {
    taxonomy: Boolean
  },
  data() {
    return {
      headerHeight: 0,
      sidebarOpen: false
    }
  },
  watch: {
    sidebarOpen: function(isOpen) {
      document.body.classList.toggle('overflow-hidden', isOpen);
    }
  },
  methods: {
    setHeaderHeight() {
      this.$nextTick(() => {
        this.headerHeight = this.$refs.header.offsetHeight;
      });
    }
  },
  computed: {
    sidebarStyle() {
      return {
        top: this.headerHeight + 'px',
        height: `calc(100vh - ${this.headerHeight}px)`
      }
    },
    hasSidebar() {
      return (this.$page && this.headerHeight > 0) || this.taxonomy === true;
    }
  },
  mounted() {
    this.setHeaderHeight();
  },
  metaInfo() {
    return {
      meta: [
        {
          key: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://scvs.owasp.org/social-card.jpg',
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://scvs.owasp.org/social-card.jpg',
        },
        {
          key: 'twitter:site',
          name: 'twitter:site',
          content: '@OWASP_SCVS',
        }
      ]
    }
  }
};
</script>

<style lang="scss">
:root {
  --color-ui-background: #F4F5FA;
  --color-ui-typo: #111F36;
  --color-ui-sidebar: #ffffff;
  --color-ui-border: #BBC9DC;
  --color-ui-primary: #007BE3;
  --color-ui-highlight: #0064B6;
  --color-ui-inner-wasp: #555658;
}

html[lights-out] {
  --color-ui-background: #101827;
  --color-ui-typo: #f7fafc;
  --color-ui-sidebar: #2d3748;
  --color-ui-border: #2d3748;
  --color-ui-primary: #44AAFF;
  --color-ui-highlight: #FE9536;
  --color-ui-inner-wasp: #97989B;

  pre[class*="language-"],
  code[class*="language-"] {
    @apply bg-ui-border;
  }
}

* {
  /*
  transition-property: color, background-color, border-color;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
   */
}

h1,
h2,
h3,
h4 {
  @apply leading-snug font-black mb-4 text-ui-typo;

  &:hover {
    a::before {
      @apply opacity-100;
    }
  }

  a {
    &::before {
      content: "#";
      margin-left: -1em;
      padding-right: 1em;
      @apply text-ui-primary absolute opacity-0 float-left;
    }
  }
}

h1 {
  @apply text-4xl;
}

h2 {
  @apply text-2xl;
}

h3 {
  @apply text-xl;
}

h4 {
  @apply text-lg;
}

a:not(.active):not(.text-ui-primary):not(.text-white) { @apply text-ui-typo }

p,
ol,
ul,
pre,
strong,
blockquote {
  @apply mb-4 text-base text-ui-typo;
}

.content {
  a {
    @apply text-ui-primary underline;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply -mt-12 pt-20;
  }
    
  h2 + h3,
  h2 + h2,
  h3 + h3 {
    @apply border-none -mt-20;
  }

  h2,
  h3 {
    @apply border-b border-ui-border pb-1 mb-3;
  }

  ul {
    @apply list-disc;

    ul {
      list-style: circle;
    }
  }

  ol {
    @apply list-decimal;
  }

  ol,
  ul {
    @apply pl-5 py-1;

    li {
      @apply mb-2;

      p {
        @apply mb-0;
      }

      &:last-child {
        @apply mb-0;
      }
    }
  }
}

blockquote {
  @apply border-l-4 border-ui-border py-2 pl-4;

  p:last-child {
    @apply mb-0;
  }
}

code {
  @apply px-1 py-1 text-ui-highlight bg-ui-sidebar font-mono border-b border-r border-ui-border text-sm rounded;
}

pre[class*="language-"] {
  @apply max-w-full overflow-x-auto rounded;

  & + p {
    @apply mt-4;
  }

  & > code[class*="language-"] {
    @apply border-none leading-relaxed;
  }
}

header {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
}

table {
  @apply text-left mb-6;

  th {
    @apply text-ui-highlight;
  }

  td, th {
    @apply py-3 px-4;
    &:first-child {
      @apply pl-0;
    }
    &:last-child {
      @apply pr-0;
    }
  }

  tr {
    @apply border-b border-ui-border;
    &:last-child {
      @apply border-b-0;
    }
  }
}

.tree-arrow.has-child:after {
  border: 1.5px solid var(--color-ui-primary) !important;
  border-left: 0 !important;
  border-top: 0 !important;
}

.sidebar {
  @apply fixed bg-ui-background px-4 inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-auto transition-all z-40;
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }

  @screen lg {
    @apply w-1/4 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0;
    transform: translateX(0);
  }
}
</style>
