<!-- AdminPage.vue -->
<template>
    <div>
        <product-list :products="products" @edit="editProduct" @delete="deleteProduct" />
        <product-form :product="editedProduct" :editing="editing" @add="addProduct" @update="updateProduct" />
    </div>
</template>

<script>
    import ProductList from '../components/ProductList.vue';
    import ProductForm from '../components/FormAdmin.vue';

    export default {
        components: {
            ProductList,
            ProductForm,
        },
        data() {
            return {
            products: [
                { id: 1, name: 'Product 1', price: 100 },
                { id: 2, name: 'Product 2', price: 150 },
                // Add more products as needed
            ],
            editedProduct: null,
            editing: false,
            };
        },
        methods: {
            editProduct(product) {
                this.editedProduct = product;
                this.editing = true;
            },
            deleteProduct(productId) {
                this.products = this.products.filter((product) => product.id !== productId);
            },
            addProduct(newProduct) {
                this.products.push({ ...newProduct, id: this.products.length + 1 });
                this.clearForm();
            },
            updateProduct(updatedProduct) {
                const index = this.products.findIndex((product) => product.id === updatedProduct.id);
                if (index !== -1) {
                    this.products.splice(index, 1, updatedProduct);
                    this.clearForm();
                }
            },
            clearForm() {
                this.editedProduct = null;
                this.editing = false;
            },
        },
    };
</script>