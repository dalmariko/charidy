<template>
  <div class="container">
    <HeadTitle :titles='headTitle'/>
    <div class="infoBox">

      <div class="mainInfo">

        <div class="ownersInfoSliderButtons">
          <div class="round">
            <div class="button-prev">
              <svg width="10.97" height="18.92" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.1992 19.0562C11.5055 18.75 11.6367 18.4 11.6367 18.0062C11.6367 17.6125 11.5055 17.2187 11.1992 16.9562L4.28672 9.99998L11.1992 3.08747C11.768 2.51872 11.768 1.55623 11.1992 0.987476C10.6305 0.418726 9.66797 0.418726 9.09922 0.987476L1.09297 8.94998C0.524219 9.51873 0.524219 10.4812 1.09297 11.05L9.09922 19.0562C9.66797 19.625 10.6305 19.625 11.1992 19.0562Z"
                  fill="white"/>
              </svg>
            </div>
          </div>
          <div class="round">
            <div class="button-next">
              <svg width="10.97" height="18.92" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.800781 19.0562C0.494531 18.75 0.363281 18.4 0.363281 18.0062C0.363281 17.6125 0.494531 17.2187 0.800781 16.9562L7.71328 9.99998L0.800781 3.08747C0.232031 2.51872 0.232031 1.55623 0.800781 0.987476C1.36953 0.418726 2.33203 0.418726 2.90078 0.987476L10.907 8.94998C11.4758 9.51873 11.4758 10.4812 10.907 11.05L2.90078 19.0562C2.33203 19.625 1.36953 19.625 0.800781 19.0562Z"
                  fill="white"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="ovner">
          <OwnerMoreInfo/>
        </div>

        <div class="video">
          <VideoPreview/>
        </div>

        <div class="donations">
          <DonationsInfo
            v-for="(donate, name, index) in list(allDonates)"
            :key="index"
            :donations="donate"
          />
        </div>

        <div class="ownersInfoSliderButtons">
          <div class="round">
            <div class="button-prev">
              <svg width="10.97" height="18.92" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1992 19.0562C11.5055 18.75 11.6367 18.4 11.6367 18.0062C11.6367 17.6125 11.5055 17.2187 11.1992 16.9562L4.28672 9.99998L11.1992 3.08747C11.768 2.51872 11.768 1.55623 11.1992 0.987476C10.6305 0.418726 9.66797 0.418726 9.09922 0.987476L1.09297 8.94998C0.524219 9.51873 0.524219 10.4812 1.09297 11.05L9.09922 19.0562C9.66797 19.625 10.6305 19.625 11.1992 19.0562Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div class="round">
            <div class="button-next">
              <svg width="10.97" height="18.92"  fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.800781 19.0562C0.494531 18.75 0.363281 18.4 0.363281 18.0062C0.363281 17.6125 0.494531 17.2187 0.800781 16.9562L7.71328 9.99998L0.800781 3.08747C0.232031 2.51872 0.232031 1.55623 0.800781 0.987476C1.36953 0.418726 2.33203 0.418726 2.90078 0.987476L10.907 8.94998C11.4758 9.51873 11.4758 10.4812 10.907 11.05L2.90078 19.0562C2.33203 19.625 1.36953 19.625 0.800781 19.0562Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="ownersInfo">
        <div class="shadows"></div>
        <OwnersShortInfo/>
        <div class="shadows"></div>
      </div>

    </div>
  </div>
</template>

<script>
import HeadTitle from '@/components/HeadTitle.vue'
import OwnerMoreInfo from '@/components/owners/OwnerMoreInfo.vue'
import OwnersShortInfo from '@/components/owners/OwnersShortInfo.vue'
import VideoPreview from '@/components/video/VideoPreview.vue'
import DonationsInfo from '@/components/donations/DonationsInfo.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      headTitle: 'Testimonials'
    }
  },
  methods: {
    list: function (items) {
      return items.filter(function (item, index) {
        return item ? index < 5 : ''
      })
    }
  },
  components: {
    HeadTitle,
    OwnerMoreInfo,
    OwnersShortInfo,
    VideoPreview,
    DonationsInfo
  },
  computed: {
    allDonates () {
      return this.$store.getters.getDonations
    }
  },
  mounted () {
    this.$store.dispatch('loadDonations')
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
    .round{
      background-color: #107598;
      width: 41.56px;
      height: 41.56px;
      border-radius: 50%;
      &:first-of-type{
        margin-right: 16px;
      }

      .button-prev ,
      .button-next {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .swiper-button-disabled{
        background-color: #9bc5d5;
        width: 41.56px;
        height: 41.56px;
        border-radius: 50%;
      }
    }
  }

  .container {
    min-width: 300px;
    max-width: 1024px;
    margin: 0 auto;
  }

  .infoBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mainInfo {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ovner {
    width: 100%;
  }

  .video {
    width: 100%;
  }

  .donations {
    width: 100%;
  }

  .ownersInfo {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @include media($lg) {
    .shadows{
      position: relative;
      z-index: 20;
      width: 100%;
      height: 190px;

      &:first-of-type{
        background: linear-gradient(180deg, #F7FAFE 0%, rgba(255, 255, 255, 0.270078) 100%);
        top: 200px;
      }

      &:last-of-type{
        background: linear-gradient(180deg, #F7FAFE 31.61%, rgba(249, 251, 253, 0.129289) 100%);
        transform: matrix(1, 0, 0, -1, 0, 0);
        bottom: 153px;
      }

    }
    .infoBox {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .mainInfo {
      width: 75%;
      display: flex;
      flex-direction: column;
    }

    .ownersInfoSliderButtons:first-of-type {
      align-self: flex-start;
    }

    .ownersInfoSliderButtons:last-of-type {
      align-self: flex-end;
      margin-right: 280px;
    }

    .ovner {
      width: 85%;
      align-self: flex-start;
    }

    .video {
      width: 75%;
      align-self: flex-end;
      margin-bottom: 75px;
      margin-right: 70px;
    }

    .donations {
      width: 85%;
      align-self: flex-start;
    }

    .ownersInfo {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-self: center;
    }

  }

</style>
