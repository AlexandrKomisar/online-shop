<template>
    <div class="catalog-cart">
         <router-link :to="{name: 'catalog'}">
            <div class="catalog__link">
                Back to Catalog
            </div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="!CART.length">Кошик пустий</p>
        <cart-item-wrapper
             v-if="CART.length"
            :cart_data="CART"
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import CartItemWrapper from './CartItemWrapper.vue';

export default {
    name: 'CatalogCart',
    components:{
        CartItemWrapper 
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
}
</script>