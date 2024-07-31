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
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div>
                        <CardSection :data="CharactersList"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main{
        height: 100vh;
        background-color: rgb(197, 130, 5);
        padding-top: 50px;

        .container{
            height: 600px;
            background-color: white;
        }

        .col-12{
            padding: 20px;
        }
    }
</style>