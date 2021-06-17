<template>
    <div v-for="card in cardsList" :key="card.title">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="require(`@/assets/images/${card.image}`)" alt="Avatar" style="width:200px;height:200px;">
                </div>
                <div class="flip-card-back">
                    <h1>{{ card.title }}</h1>
                    <p class="truncate-text">{{ card.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ['cards'],
    setup(props) {
        const cardsList = ref(props.cards)
        return { cardsList }
    }
}
</script>

<style>
    /* 
    The flip card container - set the width and height to whatever you want. 
    We have added the border property to demonstrate that the flip itself goes out of the box on hover 
    (remove perspective if you don't want the 3D effect 
    */
    .flip-card {
        background-color: transparent;
        width: 300px;
        height: 200px;
        border: 1px solid #f1f1f1;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 20px;
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card:hover {
        box-shadow: 0 4px 4px 0 #5d8658;
        background-color: #bffcbf;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        border-radius: 20px;
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
        background-color: #f5f5f5;
        color: black;
    }

    /* Style the back side */
    .flip-card-back {
        background-color: #f5f5f5;
        color: grey;
        transform: rotateY(180deg);
    }

    .flip-card-back h1 {
        padding: 5px;
        text-transform: capitalize;
    }

    .truncate-text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;  /* Number of lines displayed before it truncate */
        overflow: hidden;
        padding: 10px 10px 0 10px;
    }
</style>