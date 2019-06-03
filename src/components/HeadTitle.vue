<template>
<h1>{{titles}}</h1>
</template>

<script>
export default {
  name: 'HeadTitle',
  props: {
    titles: String
  }
}
</script>

<style scoped lang="scss">
  $sm: 568px;
  $md: 768px;
  $lg: 992px;
  $hug: 1200px;
  $mamut: 1360px;

  @mixin media($arg) {
    @media screen and (min-width: $arg) {
      @content;
    }
  }

h1 {
  font-family: 'VitoBold',sans-serif;
  margin-top: 132px;
  margin-bottom: 40px;
  font-size: 33px;
  line-height: 45px;
  text-align: center;
  color: #414359;
}

@include media($lg){
  h1 {
    margin-top: 211px;
    margin-bottom: 110px;
    font-size: 70px;
    line-height: 86px;
  }
}

</style>
