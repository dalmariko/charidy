<template>
<div class="ownershortinfo">
  <h3>{{info.name}}</h3>
  <h4>{{info.title}}</h4>
</div>
</template>

<script>
export default {
  name: 'OwnersShortInfo',
  props: ['info']
}
</script>

<style scoped lang="scss">
.ownershortinfo{
  width: 100%;
  height: 180px;
  background-color: brown;
  margin: 10px 0;
}
</style>
