<template>
  <div class="ownershortinfo">
    <img :src="require(`@/assets/images/${info.foto}`)" :alt='info.title'>
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
  .ownershortinfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 190px;
    margin: 10px 0;
    word-wrap: break-word;

    background: #FFFFFF;
    box-shadow: 0px 30px 70px rgba(27, 29, 33, 0.130774);
    border-radius: 6px;

    img {
      display: block;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      cursor: pointer;
      object-fit: cover;
    }

    h3 {
      width: 75%;
      text-align: center;
      font-family: 'OpenSansBold', sans-serif;
      font-size: 18px;
      color: #414359;
      margin-top: 17px;
      margin-bottom: 15px;
      text-overflow: clip;

      &:hover {
        color: #107598;
      }

      &:active {
        color: #107598;
      }

      &:link {
        color: #107598;
      }
    }

    h4 {
      width: 75%;
      text-align: center;
      font-family: 'OpenSansLight', sans-serif;
      font-size: 12px;
      color: #414359;
      height: 30px;
      overflow-y: hidden;
    }

    &:first-of-type {
      background: linear-gradient(210deg, #F7FAFE 0%, transparent 70%);
    }

    &:last-of-type {
      background: linear-gradient(380deg, #F7FAFE 30%, transparent 70%);
    }
  }

</style>
