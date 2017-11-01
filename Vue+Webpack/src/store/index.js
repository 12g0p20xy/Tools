import Vue from 'vue'
import Vuex from 'vuex'
import fetchJsonp from 'fetch-jsonp'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    key: '',
    bookLists: '',
    bookNotes: '',
    result: []
  },

  mutations: {
    updateLists(store, data) {
      store.bookLists = data
    },
    updateNotes(store, data) {
      store.bookNotes = data
    },
    // 搜索
    search(store, obj) {
      store.result = obj.data
      store.key = obj.key
    }
  },

  actions: {

    // 获取书籍信息
    getLists(context, id) {
      fetchJsonp('https://api.douban.com/v2/book/' + id)
        .then(response => 
          response.json()
        )
        .then(json => {
          context.commit('updateLists', json)
        })
        .catch(ex => {
          console.log('读取失败')
        })
    },

    // 获取笔记
    getNotes(context, id) {
      fetchJsonp('https://api.douban.com/v2/book/' + id + '/annotations')
        .then(response => 
          response.json()
        )
        .then(json => {
          context.commit('updateNotes', json)
        })
        .catch(ex => {
          console.log('读取失败')
        })
    },

    // 关键词搜索
    searchKey(context, para) {
      fetchJsonp(`https://api.douban.com/v2/book/search?q=${para.q}&count=${para.count}&start=${para.start}`)
        .then(response => 
          response.json()
        )
        .then(json => {
          context.commit('search', {data: json, key: para.q})
        })
        .catch(ex => {
          console.log('读取失败')
        })
    },

    // tag 搜索
    searchTag(context, para) {
      fetchJsonp(`https://api.douban.com/v2/book/search?tag=${para.tag}&count=${para.count}`)
        .then(response => 
          response.json()
        )
        .then(json => {
          context.commit('search', {data: json, key: para.tag})
        })
        .catch(ex => {
          console.log('读取失败')
        })
    }
  }
  
})