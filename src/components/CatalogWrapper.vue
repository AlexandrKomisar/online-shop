<template>
    <div class="catalog-wrapper">
        <router-view></router-view>
        <!-- <catalog-main/>
        <catalog-cart 
            v-if="CART.length"
            :cart_data="CART"
        /> -->
    </div>
</template>

<script>
// import CatalogMain from './CatalogMain.vue';
// import CatalogCart from './CatalogCart.vue';
import {mapGetters} from 'vuex';
export default {
    name: 'CatalogWrapper',
    // components:{
    //     CatalogMain,
    //     CatalogCart
    // },
    props:{},
    data(){
        return{
        
        }
    },
    computed:{
        ...mapGetters([
            'CART'
        ])
    },
    methods:{},
    watch:{},
    mounted(){
        console.log('100')
    }
}
</script>

<style lang="scss">
.catalog-wrapper{
    width: 900px;
    margin: 0 auto;
}
</style>