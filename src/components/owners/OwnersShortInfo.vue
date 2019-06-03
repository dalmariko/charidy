<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="item in ovners" :key="item.id">
      <!--        <img :src="require(`@/assets/images/${item.foto}`)" :alt='item.title'>-->
      <img>
      <h3>{{item.name}}</h3>
      <h4>{{item.title}}</h4>
    </swiper-slide>
  </swiper>
</template>

<script>

export default {
  name: 'OwnersShortInfo',
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 5,
        spaceBetween: 25,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev'
        },
        breakpoints: {
          320: {
            direction: 'horizontal',
            slidesPerView: 1
          },
          568: {
            direction: 'horizontal',
            slidesPerView: 1
          },
          768: {
            direction: 'horizontal',
            slidesPerView: 3
          }
        }
      }
    }
  },
  computed: {
    ovners () {
      return this.$store.getters.getOvners
    }
  },
  created () {
    this.$store.dispatch('loadOvners')
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
    width: 100%;
    height: 274px;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;
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
      font-size: 2.4rem;
      line-height: 31px;
      color: #414359;
      margin-top: .8rem;
      margin-bottom: 1rem;
      word-wrap: break-word;

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
      height: 3rem;
      text-align: center;
      font-family: 'OpenSansLight', sans-serif;
      font-size: 1.8rem;
      line-height: 26px;
      color: #414359;
      overflow-y: hidden;
    }
  }

  @include media($sm) {
    .swiper-container {
      width: 560px;
      height: 1000px;
    }
  }

  @include media($md) {
    .swiper-container {
      width: 720px;
      height: 1000px;
    }
  }

  @include media($lg) {
    .swiper-container {
      width: 100%;
      height: 1275px;
    }
    .swiper-slide {
      h3 {
        font-size: 1.8rem;
      }

      h4 {
        font-size: 1.3rem;
        height: 4rem;
      }
    }
  }

</style>
