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
  .ownermoreinfo {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 30px 70px rgba(27, 29, 33, 0.06);
    border-radius: 6px;
  }

  %container{
    width: 70%;
    margin-left: 44px;
  }
  %flexrow{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  $color:#414359;

  img {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
  }

  .head {
    @extend %flexrow;
    margin-bottom: 10px;
  }

  .ownerdata {
    @extend %container;
    @extend %flexrow;
  }

  .foto {
  }

  .title {
    h3 {
      font-family: 'VitoBold', sans-serif;
      font-size: 16px;
      color: $color;
    }
    h4 {
      font-family: 'VitoLight', sans-serif;
      font-size: 14px;
      color: $color;
    }
  }

  .quotes {
    width: 120px;
    height: 120px;
    background-image: url("~/assets/images/quotes.svg");
    background-position: center;
    background-size: cover;
  }

  .descriptions {
      @extend %container;
    p {
      font-family: 'VitoLight', sans-serif;
      font-size: 14px;
      color: $color;
    }
  }

</style>
