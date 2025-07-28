<template>
    <div class="container">

        <h1 class="title-band">Shopping Cart</h1>

        <div class="cart-container">
            <ul class="product-list">
                <li v-for="(product, index) in products" :key="product.id" :class="{ zebra: index % 2 === 0 }">
                    <span class="product-name">{{ truncateName(product.name) }}</span>
                    <span class="product-price">${{ displayFullNumericPrice(product.price) }}</span>
                    <span class="quantity-controls">
                        <button @click="decreaseQuantity(product)" :disabled="!canDecreaseQuantity(product.quantity)">-</button>
                        <span>{{ product.quantity }}</span>
                        <button @click="increaseQuantity(product)">+</button>
                    </span>
                    <span class="product-total">${{ displayFullNumericPrice(product.price * product.quantity) }}</span>
                </li>
            </ul>

            <div class="cart-total">
                <span>Total:</span>
                <span>${{ displayFullNumericPrice(total) }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";

const products = ref([
    { id: 1, name: "Mouse - Logitech MX Master 3S", price: 9220, quantity: 1 },
    { id: 2, name: "Keyboard - Logitech MX Keys", price: 7990, quantity: 1 },
    {
        id: 3,
        name: "WebCam - Logitech HD Pro Webcam C920",
        price: 6890,
        quantity: 1,
    },
]);

const total = computed(() => {
    return Math.round(
        products.value.reduce((acc, product) => acc + product.price * product.quantity, 0)
    );
});

const truncateName = name => {
    return name.length > 30 ? name.substring(0, 20) + "..." : name;
};

const displayFullNumericPrice = price => {
    if(price === 0) {
        return "0,00";
    }

    let numericPrice = `${price / 100}`;

    if(numericPrice.includes(".") && numericPrice.split(".")[1].length === 1) {
        numericPrice += "0";
    }

    return numericPrice;
};

const canDecreaseQuantity = quantity => {
    return quantity > 0;
};

function increaseQuantity(product) {
    product.quantity += 1;
}

function decreaseQuantity(product) {
    product.quantity -= 1;
}
</script>

<style scoped>

.container {
    gap: 0;
}

.title-band {
    align-self: center;
    background-color: #394855;
    border-radius: 10px 10px 0 0;
    border: 1px solid #394855;
    padding: .5em;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.cart-container {
    align-self: center;
    background-color: #1a2438;
    border-radius: 0 0 10px 10px;
    border: 1px solid #394855;
    padding: 2em;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-list {
    margin-bottom: 4em;
    display: flex;
    flex-direction: column;
    gap: .1em;
}

.product-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
    border-radius: 8px;
}

.product-list li.zebra {
    background-color: #2c3c56;
}

.product-name {
    flex: 2;
}

.product-price {
    flex: 0.5;
    text-align: right;
}

.quantity-controls {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
}

.quantity-controls button {
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    width: 28px;
    height: 28px;
    font-size: 16px;
    cursor: pointer;
    margin: 0 10px;

    &:hover {
        background-color: #1162e6;
    }

    &:disabled {
        cursor: not-allowed;
    }
}

.quantity-controls span {
    min-width: 20px;
    text-align: center;
}

.product-total {
    flex: 0.5;
    text-align: right;
    font-weight: bold;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 22px;
    font-weight: bold;
}
</style>
