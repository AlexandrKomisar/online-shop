<template>
    <div class="catalog">
        <h2>Catalog</h2>
        <div class="catalog__list">
            <CatalogItem
                v-for="product in products"
                :key ="product.article"
                :product_data="product"
                @sendArticle="showArticle"
            />
        </div>
        </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'

export default {
    name: 'CatalogMain',
    components:{
        CatalogItem,
    },
    data(){
        return {
            products:[
                {image:'1.jpg',
                 name: "T-shirt",
                 price: 1500,
                 article: "T1",
                 available: true,
                 category: "Male",
                 quantity: 1
                },
                 {image:'2.jpg',
                 name: "T-shirt",
                 price: 1300,
                 article: "T2",
                 available: true,
                 category: "Male",
                 quantity: 1
                },
                 {image:'3.jpg',
                 name: "T-shirt",
                 price: 1000,
                 article: "T3",
                 available: true,
                 category: "Male",
                 quantity: 2
                }
            ]
        }
    },
    methods:{
        showArticle(data){
            console.log(data)
        }
    }
}
</script>

<style lang="scss">
.catalog {
    padding-top: 60px;
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
}
</style>