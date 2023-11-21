<!-- ProductForm.vue -->
<template>
    <div>
        <h2>{{ editing ? 'Edit Product' : 'Add Product' }}</h2>
        <form @submit.prevent="submitForm">
            <label for="name">Name:</label>
            <input v-model="product.name" required />

            <label for="price">Description:</label>
            <input v-model="product.description" required />

            <label for="price">Price:</label>
            <input v-model.number="product.price" required />

            <label for="price">Quantity:</label>
            <input v-model.number="product.quantity" required />

            <label for="price">Note:</label>
            <input v-model="product.Note" required />

            <button type="submit">{{ editing ? 'Save Changes' : 'Add Product' }}</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
        editing: Boolean,
    },
    data() {
        return {
            product: {
            name: '',
            price: 0,
            },
        };
    },
    watch: {
        editing() {
            if (this.editing) {
                this.product = { ...this.product };
            } else {
                this.product = { name: '', price: 0 };
            }
        },
    },
    methods: {
        submitForm() {
            if (this.editing) {
                this.$emit('update', this.product);
            } else {
                this.$emit('add', this.product);
            }
        },
    },
};
</script>
