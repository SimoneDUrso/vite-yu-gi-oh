<script>
import CardSection from './partials/CardSection.vue';
import { store } from '../store';

export default {
    components:{
        CardSection,
    },
    data(){
        return{
            CharactersList:[]
        }
    }
    
}
</script>
<template>
    <main>
        <!-- QUI CI VA LA SELECT -->
        <div class="bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div>
                            <CardSection :data="CharactersList"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
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