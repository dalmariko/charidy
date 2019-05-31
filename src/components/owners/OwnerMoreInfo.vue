<template>
  <div class="ownermoreinfo">

      <div class="head ">
        <div class="container">
          <div class="ownerdata">
            <div class="foto">
              <img :src="require(`@/assets/images/${allinfo.foto}`)" :alt='allinfo.name'>
            </div>
            <div class="name">
              <h3>{{allinfo.name}}</h3>
              <h4>{{allinfo.title}}</h4>
            </div>
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

  img {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    object-fit: cover;
  }

  .head {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 38px;
  }
.ownerdata{
  @extend %container;
}
  .foto {
  }

  .name {

    h3 {
      margin-bottom: 5px;
      font-family: 'VitoBold', sans-serif;
      font-size: 18px;
      line-height: 31px;
      color: #414359;
    }
    h4 {
      font-family: 'VitoLight', sans-serif;
      font-size: 16px;
      line-height: 24px;
      color: #414359;
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
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      color: #414359;
    }
  }

</style>
