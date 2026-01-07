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

  // Simple blank scene example: a centered hexagon placeholder
  const hex = new Graphics()
    .circle(0, 0, 80)
    .fill({ color: 0xffcc00, alpha: 0.2 })
    .stroke({ width: 2, color: 0xffcc00, alpha: 0.8 })

  hex.x = app.renderer.width / 2
  hex.y = app.renderer.height / 2

  app.stage.addChild(hex)
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