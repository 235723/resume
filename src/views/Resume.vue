<template>
  <div class="resume-div">
    <v-head></v-head>
    <div class="content">
      <v-base-info></v-base-info>
      <v-content></v-content>
    </div>
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
  display: flex;
  flex-shrink:1;
  flex-direction: column;
 }
 .content {
  display: flex;
  width: 70vw;
  flex-direction: column;
  flex-basis: 600px;
 }
 
@media (max-width: 600px) {
  .content {
        width: 100vw;
    }
  }
</style>