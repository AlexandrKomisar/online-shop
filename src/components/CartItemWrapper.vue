<template>
    <div class="cart-item-wrapper">
        <catalog-cart-item
            v-for="(item, index ) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
    </div>
    <div class="Cart-item-wrapper__total">
        <p class="Cart-item-wrapper__total">
        Total: {{cartTotalCost}}</p>
    </div>
</template>

<script>
import CatalogCartItem from './CatalogCartItem.vue';
import {mapActions} from 'vuex';

export default {
    name : 'CatalogItemWrapper',
    components: {
        CatalogCartItem
    },
    props: {
        cart_data:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        ...mapActions([
          'DELETE_FROM_CART'  
        ]),
        deleteFromCart(index){
            this.DELETE_FROM_CART(index)
        }  
    },
    computed: {
        cartTotalCost(){
            let result = [];
            for(let item of this.cart_data){
                result.push(item.price * item.quantity);
            }
            result = result.reduce(function(sum, el){
               return sum +  el
            })
            return result
        }
    }
}
</script>

<style lang="scss">

</style>