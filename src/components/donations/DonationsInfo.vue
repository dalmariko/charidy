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
    justify-content: center;

  }

  .fild {
    font-family: 'VitoLight', serif;
    font-size: 1rem;
    text-transform: uppercase;
    color: #acadb6;
    margin-bottom: .8rem;
  }

  %fildfooter {
    font-family: 'OpenSansSemiBold', serif;
    font-size: 1.6rem;
  }

  .rased {
    @extend %fildfooter;
    color: #107598;
  }

  .donors {
    @extend %fildfooter;
    color: #00d39a;
  }

  .date {
    @extend %fildfooter;
    color: #ffb968;
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

</style>
