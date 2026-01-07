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

  // Board configuration
  const hexSize = 30
  const hexColors = [0xffffff, 0x808080, 0x000000] // white, grey, black
  const borderColor = 0x666666

  // Function to draw a hexagon (flat-top orientation, pointy end on left)
  const drawHexagon = (color) => {
    const hex = new Graphics()
    const points = []
    
    // Calculate 6 vertices of a hexagon (flat-top orientation, pointy-left)
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i + Math.PI // Start from left (pointy end)
      const x = Math.cos(angle) * hexSize
      const y = Math.sin(angle) * hexSize
      points.push(x, y)
    }
    
    hex.poly(points)
      .fill({ color })
      .stroke({ width: 2, color: borderColor })
    
    return hex
  }

  // Calculate hexagon spacing (for flat-top hexagons)
  const hexWidth = hexSize * 2 // Width of a flat-top hexagon
  const hexHeight = hexSize * Math.sqrt(3) // Height of a flat-top hexagon
  const verticalSpacing = hexHeight // Vertical spacing between hexagons
  const horizontalSpacing = hexWidth * 0.75 // Horizontal offset for hex grid

  // Generate hexagonal board
  // Leftmost column: 6 hexagons, increasing to center: 11 hexagons, then mirror
  const board = []
  const centerCol = 5 // Column with 11 hexagons (0-indexed)
  const totalCols = 11 // 0-10 columns

  for (let col = 0; col < totalCols; col++) {
    // For columns 6-10, mirror columns 4-0 (column 5 is center, not mirrored)
    const mirroredCol = col > centerCol ? (totalCols - 1 - col) : col
    
    // Calculate number of hexagons in this column
    // Column 0: 6, Column 1: 7, ..., Column 5: 11 (center), then mirror
    let hexagonsInCol
    if (col <= centerCol) {
      hexagonsInCol = 6 + col
    } else {
      // Mirror: use the same count as the mirrored column
      hexagonsInCol = 6 + mirroredCol
    }

    // Calculate starting row offset to center the column vertically
    const maxHexagons = 11 // Maximum hexagons in center column
    const startRow = Math.floor((maxHexagons - hexagonsInCol) / 2)

    // Determine starting color for this column
    // For columns 6-10, use the same color pattern as the mirrored column
    // Column 0: white-grey-black, Column 1: grey-black-white, Column 2: black-white-grey, then cycles
    const colorStartIndex = mirroredCol % 3

    for (let row = 0; row < hexagonsInCol; row++) {
      // Color pattern:
      // Column 0 (0): white-grey-black -> (0 + row) % 3
      // Column 1 (1): grey-black-white -> (1 + row) % 3
      // Column 2 (2): black-white-grey -> (2 + row) % 3
      const colorIndex = (colorStartIndex + row) % 3

      const color = hexColors[colorIndex]

      // Create hexagon
      const hex = drawHexagon(color)

      // Calculate position
      // In a hexagonal grid, even columns need to be shifted down by one hexagon
      const colOffset = (col % 2 === 0) ? verticalSpacing/2 : 0
      const x = col * horizontalSpacing
      const y = (startRow + row) * verticalSpacing + colOffset

      hex.x = x
      hex.y = y

      board.push(hex)
    }
  }

  // Center the board on the canvas
  const boardWidth = totalCols * horizontalSpacing
  const boardHeight = 11 * verticalSpacing // Height based on center column
  const offsetX = (app.renderer.width - boardWidth) / 2
  const offsetY = (app.renderer.height - boardHeight) / 2

  board.forEach(hex => {
    hex.x += offsetX
    hex.y += offsetY
    app.stage.addChild(hex)
  })
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