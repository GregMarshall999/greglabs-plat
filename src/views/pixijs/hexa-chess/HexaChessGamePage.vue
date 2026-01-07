<template>
  <section class="hexa-chess-page">
    <h1 class="hexa-chess-title">Hexa Chess (PixiJS Playground)</h1>
    <div ref="pixiContainer" class="pixi-container"></div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { Application } from 'pixi.js'
import {
  BOARD_CONFIG,
  calculateHexagonSpacing,
  generateBoard,
  centerBoard
} from '@/helper/pixijs/hexa-chess/board.helper.js'

const pixiContainer = ref(null)
let app = null

onMounted(async () => {
  if (!pixiContainer.value) return

  app = new Application()

  await app.init({
    resizeTo: pixiContainer.value,
    background: '#1e1e2f',
    antialias: true,
  })

  pixiContainer.value.appendChild(app.canvas)

  // Generate board
  const spacing = calculateHexagonSpacing(BOARD_CONFIG.hexSize)
  const board = generateBoard(BOARD_CONFIG, spacing)
  
  // Center board on canvas
  centerBoard(board, spacing, app.renderer.width, app.renderer.height, BOARD_CONFIG)

  // Add all hexagons to stage
  board.forEach(hex => app.stage.addChild(hex))
})

onBeforeUnmount(() => {
  if (app) {
    app.destroy(true, { children: true })
    app = null
  }
})
</script>

<style scoped>
.hexa-chess-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  height: 100vh;
  box-sizing: border-box;
}

.hexa-chess-title {
  margin: 0;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.pixi-container {
  flex: 1;
  min-height: 0;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: radial-gradient(circle at top, #2a2a40, #11111a);
  overflow: hidden;
}
</style>