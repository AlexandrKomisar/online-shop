<template>
    <div class="catalog-item">
        <div>
            <img :src="require('../assets/images/' + product_data.image)" alt="img">
        </div>
        <p class="catalog-item__name">{{product_data.name}}</p>
        <p class="catalog-item__price">{{product_data.price}} UAH</p>
        <button 
            class="catalog-item__btn"
            @click="addToCart"
        >add to cart</button>
        </div>
</template>

<script>
export default {
    name: 'CatalogItem',
    components:{},
    props:{
        product_data:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        addToCart(){
            this.$emit('addToCart', this.product_data)   
        }
    }
}
</script>