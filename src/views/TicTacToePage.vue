<template>
    <div class="container">
        <h1>Tic-Tac-Toe</h1>

        <div class="difficulty-selection" v-if="!gameStarted">
            <h3>Select Difficulty:</h3>
            <div class="radio-group">
                <label>
                    <input type="radio" name="difficulty" value="pvp" v-model="difficulty" checked>
                    PVP
                </label>
                <label>
                    <input type="radio" name="difficulty" value="easy" v-model="difficulty">
                    PVE - Easy
                </label>
                <label>
                    <input type="radio" name="difficulty" value="hard" v-model="difficulty">
                    PVE - Hard
                </label>
                <label>
                    <input type="radio" name="difficulty" value="impossible" v-model="difficulty">
                    PVE - Impossible
                </label>
            </div>
        </div>

        <h2 v-if="!gameStarted && !gameOver">Click a cell to play !</h2>

        <h2 v-if="difficulty === 'pvp' && gameStarted && !gameOver">Player {{ playerTurn }}'s turn</h2>
        <h2 v-if="difficulty === 'pvp' && gameOver && !draw">Player {{ playerTurn }} wins!</h2>

        <h2 v-if="difficulty !== 'pvp' && gameStarted && !gameOver && computerTurn">Let me think...</h2>
        <h2 v-if="difficulty !== 'pvp' && gameStarted && !gameOver && !computerTurn">Your turn !</h2>
        <h2 v-if="difficulty !== 'pvp' && gameOver && computerTurn && !draw">I win ! An other game ?</h2>
        <h2 v-if="difficulty !== 'pvp' && gameOver && !computerTurn && !draw">You win ! Well played !</h2>
        
        <h2 v-if="gameOver && draw">It's a draw !</h2>

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

const difficulty = ref('pvp');
const playerTurn = ref('X');
const computerTurn = ref(false);
const gameOver = ref(false);
const draw = ref(false);

const mark = ref([
    [{ value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }],
    [{ value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }],
    [{ value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }, { value: "", canHover: true, hoverValue: "" }]
]);

const gameStarted = computed(() => {
    return mark.value.some(row => row.some(cell => cell.value !== ""));
});

const play = (row, col) => {
    if(computerTurn.value) {
        return;
    }

    //play
    mark.value[row][col].value = playerTurn.value;
    mark.value[row][col].canHover = false;
    mark.value[row][col].hoverValue = '';

    //is winning move ?
    if(checkWin()) {
        return;
    }

    //handle next player
    switch(difficulty.value) {
        case 'easy':
            computerEasyMove();
            break;
        case 'hard':
            computerHardMove();
            break;
        case 'impossible':
            break;
        default:
            if(playerTurn.value === 'X') {
                playerTurn.value = 'O';
            } else {
                playerTurn.value = 'X';
            }
            break;
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

    // Check for draw
    let allCellsFilled = true;
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (mark.value[r][c].value === "") {
                allCellsFilled = false;
                break;
            }
        }
        if (!allCellsFilled) break;
    }
    
    if (allCellsFilled) {
        draw.value = true;
        gameOver.value = true;
        return true;
    }
    
    return false;
}

const computerEasyMove = () => {
    computerTurn.value = true;

    // simulate computer thinking
    setTimeout(() => {
        // Find empty cells
        const emptyCells = [];
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (mark.value[r][c].value === "") {
                    emptyCells.push({ row: r, col: c });
                }
            }
        }
                
        // select random cell
        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const { row, col } = emptyCells[randomIndex];
            
            mark.value[row][col].value = 'O';
            mark.value[row][col].canHover = false;
            mark.value[row][col].hoverValue = '';
            
            // did computer win ?
            if (checkWin()) {
                return;
            }
        }

        computerTurn.value = false;
    }, 1000);
}

const computerHardMove = () => {
    computerTurn.value = true;

    // simulate computer thinking
    setTimeout(() => {
        // Find empty cells
        const emptyCells = [];
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (mark.value[r][c].value === "") {
                    emptyCells.push({ row: r, col: c });
                }
            }
        }
        
        let moveFound = false;
        
        // Check if computer has a winning move
        for (const cell of emptyCells) {
            // Temporarily place 'O' to check if computer would win
            mark.value[cell.row][cell.col].value = 'O';
            
            // Check if this would create a win for the computer
            if (checkWin()) {
                // Reset the cell and game state
                mark.value[cell.row][cell.col].value = "";
                gameOver.value = false;
                
                // Make the winning move
                mark.value[cell.row][cell.col].value = 'O';
                mark.value[cell.row][cell.col].canHover = false;
                mark.value[cell.row][cell.col].hoverValue = '';
                moveFound = true;
                break;
            }
            
            // Reset the cell
            mark.value[cell.row][cell.col].value = "";
        }
        
        // If no winning move, check if player is about to win and block
        if (!moveFound) {
            for (const cell of emptyCells) {
                // Temporarily place 'X' to check if player would win
                mark.value[cell.row][cell.col].value = 'X';
                
                // Check if this would create a win for the player
                if (checkWin()) {
                    // Reset the cell
                    mark.value[cell.row][cell.col].value = "";
                    
                    // Block the winning move by placing 'O'
                    mark.value[cell.row][cell.col].value = 'O';
                    mark.value[cell.row][cell.col].canHover = false;
                    mark.value[cell.row][cell.col].hoverValue = '';
                    gameOver.value = false; // don't forget or the game will end
                    moveFound = true;
                    break;
                }
                
                // Reset the cell
                mark.value[cell.row][cell.col].value = "";
            }
        }
        
        // If no winning move or blocking move needed, make a random move
        if (!moveFound && emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            const { row, col } = emptyCells[randomIndex];
            
            mark.value[row][col].value = 'O';
            mark.value[row][col].canHover = false;
            mark.value[row][col].hoverValue = '';
        }
        
        // Check if computer won
        if (checkWin()) {
            return;
        }
        
        computerTurn.value = false;
    }, 1000);
}

const resetGame = () => {
    mark.value = [
        [{ value: "", canHover: true }, { value: "", canHover: true }, { value: "", canHover: true }],
        [{ value: "", canHover: true }, { value: "", canHover: true }, { value: "", canHover: true }],
        [{ value: "", canHover: true }, { value: "", canHover: true }, { value: "", canHover: true }]
    ];

    playerTurn.value = 'X';
    gameOver.value = false;
    computerTurn.value = false;
    draw.value = false;
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

.radio-group {
    display: flex;
    flex-direction: column;
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
