<template>
  <div class="ownermoreinfo">

      <div class="head ">
          <div class="ownerdata">
            <div class="foto">
              <img :src="require(`@/assets/images/${allinfo.foto}`)" :alt='allinfo.tittle'>
            </div>
            <div class="title">
              <h3>{{allinfo.name}}</h3>
              <h4>{{allinfo.title}}</h4>
            </div>
          </div>
        <div class="quotes"></div>
      </div>

      <div class="descriptions ">
        <p>{{allinfo.descriptions}}</p>
      </div>

  </div>
</template>

<script>
export default {
  name: 'OwnerMoreInfo',
  props: ['allinfo']
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

  .ownermoreinfo {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 30px 70px rgba(27, 29, 33, 0.06);
    border-radius: 6px;
    font-size: 14px;
    padding-top: 1.5rem;
    padding-bottom: 1.2rem;
  }

  %container{
    width: 95%;
  }
  %flexrow{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  %quotesANDfotoWidth{
    width: 80px;
    height: 80px;
  }

  $color:#414359;

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
    width: 80px;
    height: 80px;
  }

  .title {
    width: 70%;
    word-wrap: break-word;
    line-height: 20px;
    h3 {
      font-family: 'VitoBold', sans-serif;
      font-size: 1.6rem;
      color: $color;
    }
    h4 {
      font-family: 'VitoLight', sans-serif;
      font-size: 1.4rem;
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
    line-height: 20px;
    word-wrap: break-word;
    p {
      font-family: 'VitoLight', sans-serif;
      font-size: 14px;
      color: $color;
    }

  }

  @include media($lg) {
    .ownermoreinfo {
      width: 100%;
      background: #FFFFFF;
      box-shadow: 0px 30px 70px rgba(27, 29, 33, 0.06);
      border-radius: 6px;
      font-size: 14px;
      padding-top: 1.5rem;
      padding-bottom: 1.2rem;
    }

    %container{
      width: 70%;
      margin-left: 44px;
    }
    %flexrow{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    %quotesANDfotoWidth{
      width: 80px;
      height: 80px;
    }

    $color:#414359;

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

    .title {
      width: 70%;
      word-wrap: break-word;
      line-height: 20px;
      h3 {
        font-family: 'VitoBold', sans-serif;
        font-size: 1.6rem;
        color: $color;
      }
      h4 {
        font-family: 'VitoLight', sans-serif;
        font-size: 1.4rem;
        color: $color;
      }
    }

    .quotes {
      display: block;
      @extend %quotesANDfotoWidth;
      /*background-image: url("~/assets/images/quotes.svg");*/
      background-position: center;
      background-size: cover;
      background-color: #ff5555;
    }

    .descriptions {
      @extend %container;
      line-height: 20px;
      word-wrap: break-word;
      p {
        font-family: 'VitoLight', sans-serif;
        font-size: 14px;
        color: $color;
      }

    }
  }

</style>
