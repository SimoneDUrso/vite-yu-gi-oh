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
            <div class="col-12" v-for="(card, index) in data" :key="`cs-${index}`">
                <div>
                    ciao
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>