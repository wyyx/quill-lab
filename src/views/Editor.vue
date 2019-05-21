<template>
  <div class="container pa-0">
    <v-tabs fixed-tabs>
      <v-tab> 编辑 </v-tab>
      <v-tab> 预览 </v-tab>
    </v-tabs>
    <v-layout class="white editor-wrapper" row wrap>
      <v-flex>
        <div id="editor" ref="editor" v-html="articleHtml">
          <!-- {{ articleHtml }} -->
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Quill from 'quill'

import { parseArticle } from '../utils/parse-article.util'
import { articleService, articleSourceCode } from '../services/article.service'

const doc = new DOMParser().parseFromString(articleSourceCode, 'text/html')
const tags = doc.querySelectorAll('p')
console.log('TCL: tags', tags)

// console.log('TCL: Quill', Quill)

export default Vue.extend({
  name: 'editor',
  props: {
    articleUrl: {
      type: String
    }
  },
  data: function() {
    return {
      editor: {} as Quill,
      articleHtml: ''
    }
  },

  components: {},
  created() {
    this.articleHtml = articleSourceCode
  },
  mounted() {
    const that: any = this
    this.editor = new Quill(that.$refs.editor, {
      theme: 'snow'
    })
  }
})
</script>

<style scoped>
#editor {
  height: 100%;
}
</style>
