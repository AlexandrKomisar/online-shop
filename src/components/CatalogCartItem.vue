<template>
    <div class="catalog-cart-item">
      <div class="catalog-cart-item__wrap">
        <img class="catalog-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="img">
      </div>
      <div class="catalog-cart-item__info">
        <p>{{cart_item_data.name}}</p>
        <p>{{cart_item_data.price}}</p>
        <p>{{cart_item_data.article}}</p>
      </div>
      <div class="catalog-cart-item__quantity">
        <p>Qty</p>
        <p>{{ cart_item_data.quantity }}</p>
      </div>
      <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'CatalogCartItem',
    components:{},
    props:{
      cart_item_data:{
        type:Object,
        default(){
            return {}
        }
      }  
    },
    methods: {
      deleteFromCart(){
        this.$emit('deleteFromCart')
      }
    }
}
</script>