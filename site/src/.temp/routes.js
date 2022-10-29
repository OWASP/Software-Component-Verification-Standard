export default [
  {
    path: "/scvs/v2-software-bill-of-materials/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/v6-pedigree-and-provenance/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/v3-build-environment/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/v4-package-management/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/v5-component-analysis/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/v1-inventory/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/using-scvs/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/preface/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/guidance-open-source-policy/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/frontispiece/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/appendix-a-glossary/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/assessment-and-certification/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/appendix-b-references/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/scvs/",
    component: () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/templates/MarkdownPage.vue")
  },
  {
    path: "/participate/",
    component: () => import(/* webpackChunkName: "page--src--pages--participate-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/pages/participate.vue")
  },
  {
    path: "/bom-maturity-model/",
    component: () => import(/* webpackChunkName: "page--src--pages--bom-maturity-model-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/pages/bom-maturity-model.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/steve/Development/OWASP/Software-Component-Verification-Standard/site/src/pages/404.vue")
  }
]

