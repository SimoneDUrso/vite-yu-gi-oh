<script>
import { store } from '../../store';

export default {
    props:{
        data: Object
    },

    data(){
        return{
            store,
        }
    }
}
</script>

<template>
        <div class="text-white bg-dark p-2">
            Found ........ cards
        </div>
        <div class="container">
            <div class="row">
                <div class="content" v-for="card in store.CharactersList">
                        <img :src="img.image_url" alt="" v-for="img, index in card.card_images" class="img-fluid">
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .container{
        height: 800px;
        .row{
            height: 100%;

            .content{
                border: 1px dashed black;
                margin: 10px 10px;
                width: calc(100% / 5 - 20px);
                height: 300px;
            }
        }
    }
</style>