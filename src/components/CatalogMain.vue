<template>
    <div class="catalog">
        <h2>Catalog</h2>
        <div class="catalog__list">
            <CatalogItem/>
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