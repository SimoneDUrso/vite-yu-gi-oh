<script>
import CardSection from './partials/CardSection.vue';
import { store } from '../store';
import axios from 'axios';

export default {
    components:{
        CardSection,
    },
    
    data(){
        return{
            store,
        }
    },

    created(){
        this.getArchetype()
    },
    
    methods:{
        getArchetype(){
            axios.get(`${store.apiUrl}${store.apiArchetype}`).then((result) =>{
                for(let i=0; i<10; i++){
                    store.archetypeList.push(result.data[i])
                    console.log(result.data[i])
                }
            })
        }
    }
}
</script>
<template>
    <main>
        <!-- QUI CI VA LA SELECT -->
        <div class="container-select">
            <select class="select-control" name="type" id="type" v-model="store.archetype">
                <option value="">Seleziona il tipo di carta</option>
                <option v-for="archetype, index in store.archetypeList" :key="`al-${index}`" :value="archetype.archetype_name"> {{archetype.archetype_name}} </option>
                
                <!-- <option value="Infernoble Arms">Infernoble Arms</option>
                <option value="Noble Knight">Noble Knight</option>
                <option value="Melodious">Melodious</option>
                <option value="Archfiend">Archfiend</option> -->
            </select>
        </div>
        <div class="bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div>
                            <CardSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    .container-select{
        padding-left: 150px;
        margin-bottom: 30px;
        margin-left: 160px;
    }

    main{
        background-color: rgb(197, 130, 5);
        padding: 50px 150px;

        .bg-white{
        width: 1000px;
        margin: 0 auto;   
        }

        .col-12{
            padding: 20px;
        }
    }
</style>