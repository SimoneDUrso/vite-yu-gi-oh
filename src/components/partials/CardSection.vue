<script>
import { store } from '../../store';

export default {
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
        <div class="text-white bg-dark p-2">
            <span class="fw-bolder">Found {{ store.CharactersList.length }} cards</span>
        </div>
        <div class="container">
            <div class="row p-0 justify-content-between">
                <div class="content px-0" v-for="card in store.CharactersList">
                    <!-- sotto facciamo un altro for per ciclare le immagini -->
                        <img :src="card.card_images[0].image_url" alt="">
                        <div class="bg-orange">
                            <p class="pt-2 fw-bold">{{ card.name }}</p>
                            <p class="text-dark"> {{ card.archetype }} </p>
                        </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .container{
        padding: 0px 7px;

        .row{
            height: 100%;

            .content{
                margin: 0px 5px 20px 5px;
                width: calc(100% / 5 - 20px);
                text-align: center;
                

                img{
                    width: 100%;
                }

                .bg-orange{
                    background-color: rgb(197, 130, 5);
                    min-height: 150px;
                }

                p{
                    color: white;
                }
            }
        }
    }
</style>