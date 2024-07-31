<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { store } from './store';

export default {
  components:{
    Header,
    Main,
  },

  data(){
    return{
      store,
    }
  },

  methods:{
    getCharactersList(){
      axios.get(store.apiUrl).then((result) => {
        store.charactersList = result.data
      })
    },
  }
}
</script>
<template>
  <div>
    <Header />
    <Main />
  </div>
</template>
<style lang="scss">
  
</style>
