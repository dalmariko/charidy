<template>
  <b-container>
    <b-row>
      <b-col sm="8">
        <OwnerMoreInfo/>

        <div class="d-flex justify-content-end m-3">
          <VideoPreview/>
        </div>

        <div class="d-flex justify-content-start" v-for="donate in donations">
          <DonationsInfo/>
        </div>
      </b-col>

      <b-col sm="4">
        <div class="d-flex justify-content-center" v-for="ovner in ovners">
          <OwnersShortInfo/>
        </div>
      </b-col>
    </b-row>
  </b-container>
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

</style>
