<template>
    <main class="tetris-game-page">
        <h1>Tetris</h1>

        <div 
            ref="canvasContainer" 
            class="game-container"
        >
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Application, Graphics } from 'pixi.js';

// Canvas container ref
const canvasContainer = ref(null);

// PixiJS Application instance
let app = null;

// Game constants
const COLS = 10;
const ROWS = 20;
const ASPECT_RATIO = COLS / ROWS; // 0.5 (width:height)

// Game state
const gameState = ref({
    grid: new Array(ROWS).fill(null).map(() => new Array(COLS).fill(0)),
    score: 0,
    level: 1,
    lines: 0,
    currentPiece: null,
    gameOver: false
});

// Graphics containers
let gridGraphics = null;
let boardGraphics = null;

// Initialize PixiJS Application
const initPixiApp = () => {
    if (!canvasContainer.value) return;

    // Calculate responsive dimensions
    const container = canvasContainer.value;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Calculate canvas size maintaining aspect ratio
    let canvasWidth, canvasHeight;
    if (containerWidth / containerHeight > ASPECT_RATIO) {
        // Container is wider than needed, fit to height
        canvasHeight = containerHeight;
        canvasWidth = canvasHeight * ASPECT_RATIO;
    } else {
        // Container is taller than needed, fit to width
        canvasWidth = containerWidth;
        canvasHeight = canvasWidth / ASPECT_RATIO;
    }

    // Create PixiJS Application
    app = new Application();
    
    app.init({
        width: canvasWidth,
        height: canvasHeight,
        backgroundColor: 0x1a1a2e,
        antialias: true,
        resolution: window.devicePixelRatio || 1,
        autoDensity: true
    }).then(() => {
        // Mount the canvas to the container
        canvasContainer.value.appendChild(app.canvas);
        
        // Create graphics containers
        boardGraphics = new Graphics();
        gridGraphics = new Graphics();
        
        app.stage.addChild(boardGraphics);
        app.stage.addChild(gridGraphics);
        
        // Draw the game board
        drawGameBoard();
        drawGrid();
    });
};

// Draw game board background
const drawGameBoard = () => {
    if (!boardGraphics || !app) return;

    boardGraphics.clear();
    
    // Draw board background with fill
    boardGraphics.rect(0, 0, app.screen.width, app.screen.height);
    boardGraphics.fill(0x0f0f1e);
    
    // Draw border with stroke
    boardGraphics.rect(0, 0, app.screen.width, app.screen.height);
    boardGraphics.stroke({ width: 2, color: 0x4a4a6a });
};

// Draw grid lines
const drawGrid = () => {
    if (!gridGraphics || !app) return;

    gridGraphics.clear();
    
    // Calculate cell size
    const cellWidth = app.screen.width / COLS;
    const cellHeight = app.screen.height / ROWS;
    
    // Set stroke style for grid lines
    gridGraphics.stroke({ width: 1, color: 0x2a2a3e, alpha: 0.5 });
    
    // Draw vertical lines
    for (let col = 0; col <= COLS; col++) {
        const x = col * cellWidth;
        gridGraphics.moveTo(x, 0);
        gridGraphics.lineTo(x, app.screen.height);
    }
    
    // Draw horizontal lines
    for (let row = 0; row <= ROWS; row++) {
        const y = row * cellHeight;
        gridGraphics.moveTo(0, y);
        gridGraphics.lineTo(app.screen.width, y);
    }
};

// Handle window resize
const handleResize = () => {
    if (!app || !canvasContainer.value) return;

    const container = canvasContainer.value;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Calculate new canvas size maintaining aspect ratio
    let canvasWidth, canvasHeight;
    if (containerWidth / containerHeight > ASPECT_RATIO) {
        canvasHeight = containerHeight;
        canvasWidth = canvasHeight * ASPECT_RATIO;
    } else {
        canvasWidth = containerWidth;
        canvasHeight = canvasWidth / ASPECT_RATIO;
    }

    // Resize the application
    app.renderer.resize(canvasWidth, canvasHeight);
    
    // Redraw board and grid
    drawGameBoard();
    drawGrid();
};

// Initialize on mount
onMounted(() => {
    initPixiApp();
    window.addEventListener('resize', handleResize);
});

// Cleanup on unmount
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
    
    if (app) {
        app.destroy(true, { children: true, texture: true });
        app = null;
    }
    
    if (canvasContainer.value?.firstChild) {
        canvasContainer.value.firstChild.remove();
    }
});
</script>

<style scoped>
.tetris-game-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    min-height: 100vh;
    background-color: #0a0a14;
    color: #ffffff;
}

.tetris-game-page h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    text-align: center;
}

.game-container {
    width: 100%;
    max-width: 400px;
    aspect-ratio: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a2e;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.game-container canvas {
    display: block;
    max-width: 100%;
    max-height: 100%;
}
</style>