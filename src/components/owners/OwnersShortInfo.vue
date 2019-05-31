<template>
<div class="ownershortinfo">
    <img :src="require(`@/assets/images/${info.foto}`)" :alt='info.tittle'>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 190px;
  background-color: #ffffff;
  margin: 10px 0;
  word-wrap: break-word;
}
  img{
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    object-fit:cover;
  }

    h3{
      width: 75%;
      text-align: center;
      font-family: 'OpenSansBold', sans-serif;
      font-size: 18px;
      color:#414359;
      margin-top: 17px;
      margin-bottom: 15px;
      text-overflow:clip;
      &:hover {
        color: #107598;
      }
      &:active{
        color: #107598;
      }
      &:link{
        color: #107598;
      }
    }
    h4{
      width: 75%;
      text-align: center;
      font-family: 'OpenSansLight', sans-serif;
      font-size: 12px;
      color:#414359;
      height: 30px;
      overflow-y: hidden;
    }

</style>
