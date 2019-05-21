<template>
  <v-layout column wrap class="pa-2 container">
    <v-flex>
      <v-form>
        <v-text-field
          v-model="articleUrl"
          label="文章地址"
          required
        ></v-text-field>
      </v-form>
    </v-flex>
    <v-flex shrink>
      <div class="btn-wrapper">
        <v-btn block color="primary" @click="onClick">下一步</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: function() {
    return {
      articleUrl:
        'https://www.oschina.net/news/106799/the-struggles-of-an-open-source-maintainer'
    }
  },
  created() {},
  methods: {
    onClick() {
      this.$router.push({
        name: 'editor',
        params: {
          articleUrl: this.articleUrl
        }
      })
    }
  }
})
</script>

<style scoped>
.container {
  height: 100%;
}
.btn-wrapper {
  text-align: center;
}
</style>
