<template>
<div class="donationsInfo" >

  <div class="fild">
      <p class="head">rased</p>
    <p class="rased">{{donations.rased}}</p>
    </div>

  <div class="fild">
    <p class="head">donors</p>
    <p class="donors">{{donations.donors}}</p>
  </div>

  <div class="fild">
    <p class="head">date</p>
    <p class="date">{{donations.date}}</p>
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

  .donationsInfo{
  width: 650px;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
    align-items: center;
  margin: 1.7rem 0;
}
  .fild {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .head{
    font-family: 'VitoLight';
    font-size: 1rem;
    text-transform: uppercase;
    color:#acadb6;
    margin-bottom: 1rem ;
  }

  %fildfooter{
    font-family: 'OpenSansSemiBold';
    font-size: 1.6rem;
  }
  .rased{
    @extend %fildfooter;
    color: #107598;
  }
  .donors{
    @extend %fildfooter;
    color:#00d39a;
  }
  .date{
   @extend %fildfooter;
    color: #ffb968;
  }

  .donateButton{
    display: flex;
    height: 36px;
    min-width: 160px;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    background-color:#ff5555;
    flex-shrink: 0;
    font-family: 'OpenSansBold',serif;
    font-size: 1.4rem;
    color: #fff;
    &:hover{
      background-color: #f26e66;
    }
  }

</style>
