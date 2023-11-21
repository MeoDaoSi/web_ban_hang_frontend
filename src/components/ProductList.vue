ProductList.vue
<template>
    <div>
        <h2>Product List</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }} - {{ product.price }}
                <button @click="editProduct(product)">Edit</button>
                <button @click="deleteProduct(product.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['products'],
        methods: {
            editProduct(product) {
                this.$emit('edit', product);
            },
            deleteProduct(productId) {
                this.$emit('delete', productId);
            },
        },
    };
</script>

