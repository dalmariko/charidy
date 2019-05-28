<template>

  <div class="container">
    <OwnerMoreInfo/>
    <div class="">
      <VideoPreview/>
    </div>

    <div class="" v-for="donate in donations">
      <DonationsInfo/>
    </div>

    <div class="" v-for="ovner in ovners">
      <OwnersShortInfo/>
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
    data () {
      return {
        donations: [
          {
            rased: 122.457,
            donors: 200,
            date: '2 June 2016',
          },
          {
            rased: 122.457,
            donors: 200,
            date: '2 June 2016',
          },
          {
            rased: 122.457,
            donors: 200,
            date: '2 June 2016',
          },
          {
            rased: 122.457,
            donors: 200,
            date: '2 June 2016',
          },
        ],
        ovners: [
          {
            name: 'Sandra',
            foto: '',
            title: 'asdasdasdasdasdas',
            descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda',
          },
          {
            name: 'Sandra',
            foto: '',
            title: 'asdasdasdasdasdas',
            descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda',
          },
          {
            name: 'Sandra',
            foto: '',
            title: 'asdasdasdasdasdas',
            descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda',
          },
          {
            name: 'Sandra',
            foto: '',
            title: 'asdasdasdasdasdas',
            descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda',
          },
          {
            name: 'Sandra',
            foto: '',
            title: 'asdasdasdasdasdas',
            descriptions: 'asdfasdasdasd asdasd asdasdasdasd asdasdasd asdasd asdasdasda s asdasdasdasda',
          },
        ]
      }
    },
    components: {
      OwnerMoreInfo,
      OwnersShortInfo,
      VideoPreview,
      DonationsInfo,
    }
  }
</script>

<style scoped lang="scss">
  .container {
    min-width: 300px;
    max-width: 1360px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
