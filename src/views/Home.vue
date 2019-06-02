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
    width: 75%;
  }

  .video {
    width: 75%;
  }

  .donations {
    width: 85%;
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
