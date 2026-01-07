import { Graphics } from 'pixi.js'

// Board configuration constants
export const BOARD_CONFIG = {
  hexSize: 30,
  hexColors: [0xffffff, 0x808080, 0x000000], // white, grey, black
  borderColor: 0x666666,
  centerCol: 5, // Column with 11 hexagons (0-indexed)
  totalCols: 11, // 0-10 columns
  maxHexagons: 11, // Maximum hexagons in center column
  verticalOffset: 20 // Shift down by pixels
}

/**
 * Creates a hexagon graphic (flat-top orientation, pointy end on left)
 */
export const createHexagon = (color, hexSize, borderColor) => {
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

/**
 * Calculates hexagon spacing for flat-top hexagons
 */
export const calculateHexagonSpacing = (hexSize) => {
  const hexWidth = hexSize * 2
  const hexHeight = hexSize * Math.sqrt(3)
  return {
    width: hexWidth,
    height: hexHeight,
    vertical: hexHeight,
    horizontal: hexWidth * 0.75
  }
}

/**
 * Gets the mirrored column index for columns beyond the center
 */
export const getMirroredColumn = (col, centerCol, totalCols) => {
  return col > centerCol ? (totalCols - 1 - col) : col
}

/**
 * Calculates the number of hexagons in a column
 */
export const getHexagonsInColumn = (col, centerCol, mirroredCol) => {
  if (col <= centerCol) {
    return 6 + col
  }
  return 6 + mirroredCol
}

/**
 * Gets the color index for a specific hexagon position
 */
export const getColorIndex = (mirroredCol, row) => {
  const colorStartIndex = mirroredCol % 3
  return (colorStartIndex + row) % 3
}

/**
 * Calculates the position of a hexagon in the grid
 */
export const calculateHexagonPosition = (col, row, startRow, spacing, colOffset) => {
  const x = col * spacing.horizontal
  const y = (startRow + row) * spacing.vertical + colOffset
  return { x, y }
}

/**
 * Generates all hexagons for the board
 */
export const generateBoard = (config, spacing) => {
  const board = []
  const { centerCol, totalCols, maxHexagons, hexSize, hexColors, borderColor } = config

  for (let col = 0; col < totalCols; col++) {
    const mirroredCol = getMirroredColumn(col, centerCol, totalCols)
    const hexagonsInCol = getHexagonsInColumn(col, centerCol, mirroredCol)
    const startRow = Math.floor((maxHexagons - hexagonsInCol) / 2)
    const colOffset = (col % 2 === 0) ? spacing.vertical / 2 : 0

    for (let row = 0; row < hexagonsInCol; row++) {
      const colorIndex = getColorIndex(mirroredCol, row)
      const color = hexColors[colorIndex]
      const hex = createHexagon(color, hexSize, borderColor)
      
      const position = calculateHexagonPosition(col, row, startRow, spacing, colOffset)
      hex.x = position.x
      hex.y = position.y

      board.push(hex)
    }
  }

  return board
}

/**
 * Centers the board on the canvas
 */
export const centerBoard = (board, spacing, canvasWidth, canvasHeight, config) => {
  const boardWidth = config.totalCols * spacing.horizontal
  const boardHeight = config.maxHexagons * spacing.vertical
  const offsetX = (canvasWidth - boardWidth) / 2
  const offsetY = (canvasHeight - boardHeight) / 2 + config.verticalOffset

  board.forEach(hex => {
    hex.x += offsetX
    hex.y += offsetY
  })
}

