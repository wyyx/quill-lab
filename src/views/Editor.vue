<template>
  <div class="container pa-0">
    <v-tabs fixed-tabs>
      <v-tab> 编辑 </v-tab>
      <v-tab> 预览 </v-tab>
    </v-tabs>
    <v-layout class="white editor-wrapper" row wrap>
      <v-flex>
        <div id="editor" ref="editor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in nam
          nostrum nulla dolores accusantium quod expedita a voluptatem maxime.
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Quill from 'quill'

import { parseArticle } from '../utils/parse-article.util'

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
      editor: {} as Quill
    }
  },

  components: {},
  created() {
    console.log('editor articleUrl', this.articleUrl)
    parseArticle(this.articleUrl).then(res => {
      console.log('TCL: created -> res', res)
    })
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
