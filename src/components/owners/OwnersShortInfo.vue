<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in info" :key="item.id">
        <!--        <img :src="require(`@/assets/images/${item.foto}`)" :alt='item.title'>-->
        <img >
        <h3>{{item.name}}</h3>
        <h4>{{item.title}}</h4>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import Slider from '@/components/Slider.vue'

export default {
  name: 'OwnersShortInfo',
  props: ['info'],
  component: {
    Slider
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 5,
        spaceBetween: 10,
        breakpoints: {
          320: {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
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

  .swiper-container {
    width: 240px;
    height: 190px;
  }

  .swiper-slide{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 190px;
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
      border: 1px solid black;
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

  @include media($lg) {
    .swiper-container {
      width: 240px;
      height: 1000px;
    }
    .swiper-slide{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 240px;
      height: 190px;
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
        border: 1px solid black;
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
  }

</style>
