<template>
  <div class="donationsInfo">
    <div class="donate">
      <div class="filds">
        <p class="fild">rased</p>
        <p class="rased">{{donations.rased}}</p>
      </div>

      <div class="filds">
        <p class="fild">donors</p>
        <p class="donors">{{donations.donors}}</p>
      </div>

      <div class="filds">
        <p class="fild">date</p>
        <p class="date">{{donations.date}}</p>
      </div>

    </div>

    <a href="#" class="donateButton">
      See the campaign
    </a>

  </div>
</template>

<script>
export default {
  name: 'DonationsInfo',
  props: ['donations']
}
</script>

<style scoped lang="scss">

  $sm:568px;
  $md:768px;
  $lg:992px;
  $hug:1200px;
  $mamut:1360px;

  @mixin media($arg) {
    @media screen and (min-width: $arg) {
      @content;
    }
  }

  .donationsInfo {
    background: #FFFFFF;
    box-shadow: 0px 30px 70px rgba(27, 29, 33, 0.06);
    border-radius: 6px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 1.7rem 0;
  }

  .filds {
    margin: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

  }

  .fild {
    font-family: 'VitoLight', serif;
    font-size: 1.4rem;
    line-height: 24px;

    text-transform: uppercase;
    margin-bottom: .8rem;
    color: #414359;

    mix-blend-mode: normal;
    opacity: 0.8;
  }

  %fildfooter {
    font-family: 'OpenSansSemiBold', serif;
    font-size: 1.8rem;
    line-height: 23px;
  }

  .rased {
    @extend %fildfooter;
    color: #107598;
  }

  .donors {
    @extend %fildfooter;
    color: #00D39A;
  }

  .date {
    @extend %fildfooter;
    color: #FFB259;
  }

  .donate{
    display: flex;
    justify-content: space-around;
    flex:2 1 160px;
  }

  .donateButton {
    flex: .5 1 160px;
    margin: 1.1rem;
    display: flex;
    height: 3.6rem;
    align-items: center;
    justify-content: center;
    border-radius: 1.8rem;
    background-color: #ff5555;
    font-family: 'OpenSansBold', serif;
    font-size: 1.4rem;
    color: #fff;

    &:hover {
      background-color: #f26e66;
    }
  }

  @include media($lg){

    .filds {
      margin: 1.1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

    }

    %fildfooter {
      font-family: 'OpenSansSemiBold', serif;
      font-size: 2.2rem;
      line-height: 28px;
    }

    .rased {
      @extend %fildfooter;
      color: #107598;
    }

    .donors {
      @extend %fildfooter;
      color: #00D39A;
    }

    .date {
      @extend %fildfooter;
      color: #FFB259;
    }
  }

</style>
