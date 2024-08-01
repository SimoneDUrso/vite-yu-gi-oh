<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import { store } from './store';
import { computed } from 'vue';

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
    this.getCharactersList(),
    this.getArchetype()
  },

  methods:{
    getCharactersList(){
      let myArchetype = `${store.apiUrl}${store.apiCard}`
    
        if(store.archetype !== ''){
          myArchetype += `&archetype=${store.archetype}`
        }

        axios.get(myArchetype).then((result) => {
        store.CharactersList = result.data.data
        
      })
    },

    getArchetype(){
          axios.get(`${store.apiUrl}${store.apiArchetype}`).then((result) =>{
                  store.archetypeList = result.data
                  console.log(result.data.archetype_name)
          })
      }
  },
  
}
</script>
<template>
  <div>
    <Header />
    <Main @filter="getCharactersList" />
  </div>
</template>

<style lang="scss">
  @use "./styles/generals.scss"

</style>
