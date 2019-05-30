<template>
  <div class="container">
    <div class="infoBox">

      <div class="mainInfo">

        <div class="owner">
          <OwnerMoreInfo/>
        </div>

        <div class="video">
          <VideoPreview/>
        </div>

        <div class="donations">
          <DonationsInfo v-for="(donate,name,index) in list(donations)" :key="index" :donations="donate"/>
        </div>

      </div>

      <div class="ownersInfo">
        <OwnersShortInfo v-for="(ovner,name,index) in fiveOwners" :key="index" :info="ovner"/>
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
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        },
        {
          name: 'Kasandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        },
        {
          name: 'Wganda',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        },
        {
          name: 'Uganda',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        },
        {
          name: 'Ananda',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        },
        {
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        },
        {
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        },
        {
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        },
        {
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        },
        {
          name: 'Sandra',
          foto: '',
          title: 'asdasdasdasdasdas',
          descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda'
        }
      ]
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
  },
  computed: {
    fiveOwners: function () {
      return this.ovners.filter(function (item, index) {
        return item ? index < 5 : ''
      })
    }

  }
}
</script>

<style scoped lang="scss">
  .container {
    min-width: 300px;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }

  %flex {
    display: flex;
    flex-direction: column;
  }

  .infoBox {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .mainInfo {
    width: 75%;
    @extend %flex;
    .owner {
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
  }

  .ownersInfo {
    width: 20%;
    @extend %flex;
    align-self: center;
  }

</style>
