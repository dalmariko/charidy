<template>
  <div class="container">
    <div class="infoBox">

      <div class="mainInfo">
        <div class="ovner">
          <OwnerMoreInfo :allinfo="ovner"/>
        </div>

        <div class="video">
          <VideoPreview/>
        </div>

        <div class="donations">
          <DonationsInfo
            v-for="(donate, name, index) in list(donations)"
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
        <OwnersShortInfo :info="ovners"/>
      </div>

    </div>
  </div>
</template>

<script>
import OwnerMoreInfo from '@/components/owners/OwnerMoreInfo.vue'
import OwnersShortInfo from '@/components/owners/OwnersShortInfo.vue'
import VideoPreview from '@/components/video/VideoPreview.vue'
import DonationsInfo from '@/components/donations/DonationsInfo.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      donations: [
        {
          rased: 122.457,
          donors: 200,
          date: '2 June 2016'
        },
        {
          rased: 122.457,
          donors: 200,
          date: '2 June 2016'
        },
        {
          rased: 122.457,
          donors: 200,
          date: '2 June 2016'
        },
        {
          rased: 122.457,
          donors: 200,
          date: '2 June 2016'
        },
        {
          rased: 122.457,
          donors: 200,
          date: '2 June 2016'
        },
        {
          rased: 122.457,
          donors: 200,
          date: '2 June 2016'
        },
        {
          rased: 122.457,
          donors: 200,
          date: '2 June 2016'
        },
        {
          rased: 122.457,
          donors: 200,
          date: '2 June 2016'
        }
      ],
      ovners: [
        {
          name: 'David Osborn CFRE',
          foto: 'c320ae6bd4bbb7549f6be5803a57180aaa3aa1e6.png',
          title: 'Trusty, Victor Smorgon Chiritable Trust asdasdasda asdasdasd',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        },
        {
          name: 'Kasandra',
          foto: 'ccff91a9d9d1ae6ddf1c2041aa216e8b964ecc52.png',
          title: 'asdasdasdasdasdas',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        },
        {
          name: 'Wganda',
          foto: 'cfe7fa00eecdbb790019ef45c5c2d7bc50125ead.png',
          title: 'Trusty, Victor Smorgon Chiritable Trust',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        },
        {
          name: 'Belinda Bardas',
          foto: 'f757be725a7f67f13520660a248789ac5485b292.png',
          title: 'Trusty, Victor Smorgon Chiritable Trust',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        },
        {
          name: 'Ananda',
          foto: 'cfe7fa00eecdbb790019ef45c5c2d7bc50125ead.png',
          title:
              'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        },
        {
          name: 'Sandra',
          foto: 'cfe7fa00eecdbb790019ef45c5c2d7bc50125ead.png',
          title: 'asdasdasdasdasdas',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        },
        {
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        },
        {
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        },
        {
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        },
        {
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
        }
      ],
      ovner: {
        name: 'David Osborn CFRE',
        foto: 'c320ae6bd4bbb7549f6be5803a57180aaa3aa1e6.png',
        title: 'Trusty, Victor Smorgon Chiritable Trust asdasdasda asdasdasd',
        descriptions:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem delectus dicta est eveniet, excepturi explicabo fuga harum laboriosam minus mollitia non odit placeat quaerat quam quos repellendus saepe vel?'
      }
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
    OwnerMoreInfo,
    OwnersShortInfo,
    VideoPreview,
    DonationsInfo
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
    margin-left: auto;
    margin-right: auto;
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
    .infoBox {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .mainInfo {
      width: 75%;
      display: flex;
      flex-direction: column;
    }

    .ovner {
      width: 70%;
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
      width: 20%;
      display: flex;
      flex-direction: column;
      align-self: center;
    }

  }

</style>
