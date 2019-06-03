<template>
  <div class="ownermoreinfo">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in allinfo" :key="item.id">
        <div class="head ">
          <div class="ownerdata">
            <div class="foto">
              <!--              <img :src="require(`@/assets/images/${allinfo.foto}`)" :alt='allinfo.tittle'>-->
              <img>
            </div>
            <div class="title">
              <h3>{{item.name}}</h3>
              <h4>{{item.title}}</h4>
            </div>
          </div>
          <div class="quotes"></div>
        </div>
        <div class="descriptions ">
          <p>{{item.descriptions}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'OwnerMoreInfo',
  props: ['allinfo'],
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        initialSlide: 0,
        slidesPerView: 1,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev'
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

  .ownersInfoSliderButtons {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;

    .round {
      background-color: #107598;
      width: 41.56px;
      height: 41.56px;
      border-radius: 50%;

      &:first-of-type {
        margin-right: 16px;
      }

      .button-prev,
      .button-next {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .swiper-button-disabled {
        background-color: #9bc5d5;
        width: 41.56px;
        height: 41.56px;
        border-radius: 50%;
      }
    }
  }

  .ownermoreinfo {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 30px 70px rgba(27, 29, 33, 0.06);
    border-radius: 6px;
    padding-top: 5.6rem;
    padding-bottom: 1.2rem;
  }

  %container {
    width: 95%;
  }

  %flexrow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  %quotesANDfotoWidth {
    width: 80px;
    height: 80px;
  }

  $color: #414359;

  img {
    display: block;
    @extend %quotesANDfotoWidth;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
    border: 1px solid black;
  }

  .head {
    @extend %flexrow;
    margin-bottom: 1rem;
  }

  .ownerdata {
    @extend %container;
    @extend %flexrow;
  }

  .foto {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }

  .title {
    width: 70%;
    word-wrap: break-word;

    h3 {
      font-family: 'VitoBold', sans-serif;
      font-size: 2rem;
      line-height: 26px;
      color: $color;
    }

    h4 {
      font-family: 'VitoLight', sans-serif;
      line-height: 24px;
      font-size: 1.6rem;
      color: $color;
    }
  }

  .quotes {
    display: none;
    @extend %quotesANDfotoWidth;
    /*background-image: url("~/assets/images/quotes.svg");*/
    background-position: center;
    background-size: cover;
    background-color: #ff5555;
  }

  .descriptions {
    @extend %container;
    margin: 0 auto;
    word-wrap: break-word;

    p {
      font-family: 'VitoLight', sans-serif;
      font-size: 1.8rem;
      line-height: 30px;
      color: $color;
    }

  }

  @include media($lg) {

    .ownermoreinfo {
      padding-top: 2rem;
    }

    %container {
      width: 70%;
      margin-left: 44px;
    }
    %flexrow {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    %quotesANDfotoWidth {
      width: 80px;
      height: 80px;
    }

    $color: #414359;

    img {
      display: block;
      @extend %quotesANDfotoWidth;
      border-radius: 50%;
      cursor: pointer;
      object-fit: cover;
    }

    .head {
      @extend %flexrow;
      margin-bottom: 1rem;
    }

    .ownerdata {
      @extend %container;
      @extend %flexrow;
    }

    .foto {
      width: 30%;
    }

    .quotes {
      display: block;
    }

  }

</style>
