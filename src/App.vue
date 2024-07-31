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

  created(){
    this.getCharactersList();
  },

  methods:{
    getCharactersList(){
      axios.get(store.apiUrl).then((result) => {
        store.CharactersList = result.data.data
        
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
  @use "./styles/generals.scss"

</style>
