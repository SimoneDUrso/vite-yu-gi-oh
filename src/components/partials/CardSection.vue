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
                        <img :src="img.image_url" alt="" v-for="(img, index) in card.card_images">
                        <div class="bg-orange">
                            <p>{{ card.name }}</p>
                            
                        </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .container{

        .row{
            height: 100%;

            .content{
                border: 1px dashed black;
                margin-bottom: 20px;
                width: calc(100% / 5);
                text-align: center;

                img{
                    width: 100%;
                }

                .bg-orange{
                    background-color: rgb(197, 130, 5);
                    min-height: 100px;
                }

                p{
                    color: white;
                }
            }
        }
    }
</style>