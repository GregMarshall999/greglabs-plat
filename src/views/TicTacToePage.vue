<template>
    <div class="container">
        <h1>Tic-Tac-Toe</h1>

        <h2 v-if="!gameStarted && !gameOver">Click a cell to play !</h2>
        <h2 v-if="gameStarted && !gameOver">Player {{ playerTurn }}'s turn</h2>
        <h2 v-if="gameOver">Player {{ playerTurn }} wins!</h2>

        <div class="board">
            <div v-for="row in 3" :key="row" class="board-row">
                <button 
                    v-for="col in 3" :key="row  + col" 
                    @click="play(row - 1, col - 1)" 
                    @mouseover="hover(row - 1, col - 1)"
                    @mouseleave="unhover(row - 1, col - 1)"
                    class="cell" :class="{ borderBot : row < 3, borderRight : col < 3, green : mark[row - 1][col - 1].value === 'X', orange : mark[row - 1][col - 1].value === 'O' }"
                    :disabled="gameOver"
                >
                    {{ mark[row - 1][col - 1].value }} {{ mark[row - 1][col - 1].hoverValue }}
                </button>
            </div>
        </div>
        
        <button class="reset" @click="resetGame">Reset Game</button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const playerTurn = ref('X');
const gameOver = ref(false);

const mark = ref([
    [{ value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }],
    [{ value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }],
    [{ value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }]
]);

const gameStarted = computed(() => {
    return mark.value.some(row => row.some(cell => cell.value !== ""));
});

const play = (row, col) => {
    mark.value[row][col].value = playerTurn.value;
    mark.value[row][col].canHover = false;
    mark.value[row][col].hoverValue = '';

    if(checkWin()) {
        return;
    }

    if(playerTurn.value === 'X') {
        playerTurn.value = 'O';
    } else {
        playerTurn.value = 'X';
    }
}

const checkWin = () => {
    //check diags
    if(mark.value[0][0].value !== '' && mark.value[0][0].value === mark.value[1][1].value && mark.value[1][1].value === mark.value[2][2].value || 
        mark.value[0][2].value !== '' && mark.value[0][2].value === mark.value[1][1].value && mark.value[1][1].value === mark.value[2][0].value
    ) {
        gameOver.value = true;
        return true;
    }
    
    for(let i = 0; i < 3; i++) {
        //check rows && cols
        if(mark.value[i][0].value !== '' && mark.value[i][0].value === mark.value[i][1].value && mark.value[i][1].value === mark.value[i][2].value ||
            mark.value[0][i].value !== '' && mark.value[0][i].value === mark.value[1][i].value && mark.value[1][i].value === mark.value[2][i].value
        ) {
            gameOver.value = true;
            return true;
        }
    }
}

const resetGame = () => {
    mark.value = [
        [{ value: "", canHover: true }, { value: "", canHover: true }, { value: "", canHover: true }],
        [{ value: "", canHover: true }, { value: "", canHover: true }, { value: "", canHover: true }],
        [{ value: "", canHover: true }, { value: "", canHover: true }, { value: "", canHover: true }]
    ];

    playerTurn.value = 'X';
    gameOver.value = false;
}

const hover = (row, col) => {
    if(mark.value[row][col].canHover && !gameOver.value) {
        mark.value[row][col].hoverValue = playerTurn.value;
    }
}

const unhover = (row, col) => {
    if(mark.value[row][col].canHover && !gameOver.value) {
        mark.value[row][col].hoverValue = '';
    }
}

</script>

<style scoped>

.container {
    align-items: center;
}

.board {
    border: 2px solid #394855;
}

.board-row {
    display: flex;
}

.borderBot {
    border-bottom: 2px solid #394855 !important;
}

.borderRight {
    border-right: 2px solid #394855 !important;
}

.cell {
    min-width: 100px;
    min-height: 100px;
    cursor: pointer;
    background-color: #1a2438;
    border: none;
    color: #2c3c56;
    font-size: 50px;

    &:disabled {
        cursor: not-allowed;
    }
}

.green {
    color: #20ad20;
}

.orange {
    color: #f17e13;
}

.reset {
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: large;
    padding: .5em 1em;
    cursor: pointer;

    &:hover {
        background-color: #1162e6;
    }
}

</style>
