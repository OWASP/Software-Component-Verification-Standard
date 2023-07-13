<template>
  <div class="px-4 pt-8 lg:pt-12">
    <h3 class="text-sm tracking-tight uppercase border-none">
      BOM Maturity Model v1.0 Beta 1
    </h3>
    <ClientOnly>
      <LiquorTree class="text-ui-primary"
                  :data="treeData"
                  @node:selected="onNodeSelected" />
    </ClientOnly>
    <h3 class="text-sm tracking-tight uppercase border-none">
      <a href=""><DownloadIcon size="1.5x" style="display:inline"/><span class="text-ui-primary"> Download Model</span></a>
    </h3>
  </div>
</template>>

<script>
import treeData from "./sidebar-tree.json";
import {DownloadIcon} from "vue-feather-icons";
import MarkdownPage from "../templates/MarkdownPage";

export default {
  components: {
    DownloadIcon,
    LiquorTree: () => import('liquor-tree') // lazy load the component - DO NOT IMPORT normally
  },
  props: {
    width: {
      type: Number,
      default: 40
    }
  },
  data: () => ({
    treeData: treeData
  }),
  methods: {
    onNodeSelected(node) {
      if (node.data && node.data.path) {
        this.$router.push({ path: node.data.path });
        //this.$router.replace({ path: node.data.path.replaceAll(':', '-') });
        //this.$router.push({ path: node.data.path.replaceAll(':', '\:') });
      }
    }
  }
};
</script>

<style lang="scss">
ul.tree-children {
  transition: unset;
}
span.tree-anchor {
  @apply text-ui-primary;
  margin: 0;
  padding: 0;
}
div.tree-content {
  font-size: 0.9rem;
}
li.tree-node.selected > div.tree-content {
  font-weight: bold;
  background-color: inherit;
  @apply border-ui-border;
}
li.tree-node:not(.selected) > div.tree-content:hover {
  background-color: #2D3748 !important;
}
</style>
