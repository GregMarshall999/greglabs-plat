<template>
  <section class="hexa-chess-page">
    <h1 class="hexa-chess-title">Hexa Chess (PixiJS Playground)</h1>
    <div ref="pixiContainer" class="pixi-container"></div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { Application, Graphics } from 'pixi.js'

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

  // Function to draw a hexagon
  const drawHexagon = (color, size = 60) => {
    const hex = new Graphics()
    const points = []
    
    // Calculate 6 vertices of a hexagon (pointy-top orientation)
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2 // Start from top
      const x = Math.cos(angle) * size
      const y = Math.sin(angle) * size
      points.push(x, y)
    }
    
    hex.poly(points)
      .fill({ color })
      .stroke({ width: 2, color: 0x666666 })
    
    return hex
  }

  // Create 3 hexagons: white, grey, black
  const whiteHex = drawHexagon(0xffffff)
  const greyHex = drawHexagon(0x808080)
  const blackHex = drawHexagon(0x000000)

  // Position them horizontally centered
  const centerX = app.renderer.width / 2
  const centerY = app.renderer.height / 2
  const spacing = 150

  whiteHex.x = centerX - spacing
  whiteHex.y = centerY

  greyHex.x = centerX
  greyHex.y = centerY

  blackHex.x = centerX + spacing
  blackHex.y = centerY

  app.stage.addChild(whiteHex, greyHex, blackHex)
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
  min-height: 100%;
  box-sizing: border-box;
}

.hexa-chess-title {
  margin: 0;
  font-size: 1.5rem;
}

.pixi-container {
  flex: 1;
  min-height: 400px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: radial-gradient(circle at top, #2a2a40, #11111a);
  overflow: hidden;
}
</style>