import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ovners: [],
    donations: []
  },
  mutations: {
    loadOvners (state, ovners) {
      state.ovners = ovners
    },
    loadDonations (state, donations) {
      state.donations = donations
    }
  },
  actions: {
    loadOvners (context, payload) {
      let ov = [
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
      ]
      context.commit('loadOvners', ov)
    },
    loadDonations (context, payload) {
      let don = [
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
      ]
      context.commit('loadDonations', don)
    }
  },
  getters: {
    getOvners: state => state.ovners,
    getDonations: state => state.donations
  }
})
