<template>
    <div class="catalog-wrapper">
        <catalog-main/>
        <catalog-cart/>
    </div>
</template>

<script>
import CatalogMain from './CatalogMain.vue'
import CatalogCart from './CatalogCart.vue'
export default {
    name: 'CatalogWrapper',
    components:{
        CatalogMain,
        CatalogCart
    },
    props:{},
    data(){
        return{
        
        }
    },
    computed:{

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