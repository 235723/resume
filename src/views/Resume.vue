<template>
  <div class="resume-div">
    <v-head></v-head>
    <div class="content">
      <v-base-info></v-base-info>
      <v-content></v-content>
    </div>
    <v-foot></v-foot>
  </div>
</template>

<script>
  import head from "@/components/head.vue";
  import baselnfo from "@/components/baselnfo.vue";
  import content from "@/components/content.vue";
export default {
  name: 'Resume',
  components: {
    "v-head": head,
    "v-base-info": baselnfo,
    "v-content": content,
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
 .resume-div {
    font-size: 14px;
    line-height: 1.5;
    overflow: auto;
    padding-top: 0px;
 }
 .content {
  width: 1200px;
  margin: 50px auto;
 }
</style>