<template>
    <div id="wp-products">
        <h2>SẢN PHẨM NỔI BẬT</h2>
        <ul id="list-products">
            <div class="item">
                <img src="@/assets/images/product_1.png" alt="">
                <div class="stars">
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                </div>

                <div class="name">Món Ăn 1</div>
                <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                <div class="price">500.000 VNĐ</div>
            </div>


            <div class="item">
                <img src="@/assets/images/product_2.png" alt="">
                <div class="stars">
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                </div>

                <div class="name">Món Ăn 1</div>
                <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                <div class="price">500.000 VNĐ</div>
            </div>


            <div class="item">
                <img src="@/assets/images/product_3.png" alt="">
                <div class="stars">
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                    <span>
                        <img src="@/assets/images/star.png" alt="">
                    </span>
                </div>

                <div class="name">Món Ăn 1</div>
                <div class="desc">Mô Tả Ngắn Cho Sản Phẩm</div>
                <div class="price">500.000 VNĐ</div>
            </div>

        </ul>
    </div>

</template>

<script>

import ContactCard from "@/components/ContactCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ContactList from "@/components/ContactList.vue";
import ContactService from "@/services/contact.service";

export default {
    components: {
        
    },
    data() {
        
    },
    methods: {
        
    },
    watch: {
        
    },

};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>