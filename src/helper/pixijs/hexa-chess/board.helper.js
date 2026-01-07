import { Graphics, Text } from 'pixi.js'

// Board configuration constants
export const BOARD_CONFIG = {
  hexSize: 30,
  hexColors: [0xffffff, 0x808080, 0x000000], // white, grey, black
  borderColor: 0x666666,
  hoverColor: 0x4a90e2, // Blue color for hover state
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
  
  // Store hexagon data for hover functionality
  hex.userData = {
    originalColor: color,
    borderColor,
    hexSize,
    points
  }
  
  // Draw the hexagon
  hex.poly(points)
    .fill({ color })
    .stroke({ width: 2, color: borderColor })
  
  // Make hexagon interactive for hover
  hex.eventMode = 'static'
  hex.cursor = 'pointer'
  
  return hex
}

/**
 * Redraws a hexagon with a new fill color
 */
const redrawHexagon = (hex, fillColor) => {
  const { points, borderColor } = hex.userData
  hex.clear()
  hex.poly(points)
    .fill({ color: fillColor })
    .stroke({ width: 2, color: borderColor })
}

/**
 * Sets up hover functionality for a hexagon
 */
export const setupHexagonHover = (hex, hoverColor) => {
  hex.on('pointerenter', () => {
    redrawHexagon(hex, hoverColor)
  })
  
  hex.on('pointerleave', () => {
    redrawHexagon(hex, hex.userData.originalColor)
  })
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
 * Gets the file letter (A-K) from column index
 */
export const getFileLetter = (col) => {
  return String.fromCodePoint(65 + col) // A=65, so A, B, C, ..., K
}

/**
 * Calculates the rank (1-11) for a hexagon
 * Ranks go diagonally from top-left to bottom-right
 * Rank 1: from top-left (A1) to top of F file (F1)
 * Rank 11: from bottom of F file to bottom-right
 */
export const calculateRank = (col, row, startRow, maxHexagons, centerCol) => {
  // Rank is based on the diagonal position
  // Rank 1 includes first hex of columns A-F (row 0 in each column)
  // Rank 2 includes second hex of A-F and first hex of G
  // The pattern continues diagonally
  
  if (col <= centerCol) {
    // Columns A-F: rank = row + 1 (first hex is rank 1, second is rank 2, etc.)
    return row + 1
  } else {
    // Columns G-K: rank continues the diagonal
    // For column G (col 6), first hex (row 0) is on rank 2 (since F's second hex is rank 2)
    // The rank = startRow + row + 1, but we need to adjust for the diagonal
    // Actually, rank = row + (col - centerCol) + 1
    // This makes G1 = rank 2, H1 = rank 3, etc.
    return row + (col - centerCol) + 1
  }
}

/**
 * Creates a text label for a hexagon coordinate
 */
export const createCoordinateLabel = (file, rank, hexSize) => {
  const label = new Text({
    text: `${file}${rank}`,
    style: {
      fontFamily: 'Arial',
      fontSize: Math.max(8, hexSize * 0.25),
      fill: 0x4a90e2,
      align: 'left'
    }
  })
  
  // Position label at top-left corner of hexagon
  // For a flat-top hexagon with pointy end on left, top-left is approximately at:
  // x: -hexSize (left edge), y: -hexSize * sqrt(3)/2 (top edge)
  // Add small padding to keep it inside the hexagon
  const padding = hexSize * 0.1
  label.anchor.set(0, 0) // Top-left anchor
  label.x = -hexSize/2 + padding
  label.y = -hexSize * Math.sqrt(3) / 2 + padding
  
  return label
}

/**
 * Generates all hexagons for the board
 */
export const generateBoard = (config, spacing) => {
  const board = []
  const { centerCol, totalCols, maxHexagons, hexSize, hexColors, borderColor, hoverColor } = config

  for (let col = 0; col < totalCols; col++) {
    const mirroredCol = getMirroredColumn(col, centerCol, totalCols)
    const hexagonsInCol = getHexagonsInColumn(col, centerCol, mirroredCol)
    const startRow = Math.floor((maxHexagons - hexagonsInCol) / 2)
    const colOffset = (col % 2 === 0) ? spacing.vertical / 2 : 0

    for (let row = 0; row < hexagonsInCol; row++) {
      const colorIndex = getColorIndex(mirroredCol, row)
      const color = hexColors[colorIndex]
      const hex = createHexagon(color, hexSize, borderColor)
      
      // Calculate coordinates
      const file = getFileLetter(col)
      const rank = calculateRank(col, row, startRow, maxHexagons, centerCol)
      
      // Store coordinates in userData
      hex.userData.file = file
      hex.userData.rank = rank
      hex.userData.col = col
      hex.userData.row = row
      
      // Create and add coordinate label
      const label = createCoordinateLabel(file, rank, hexSize)
      hex.addChild(label)
      
      // Set up hover functionality
      setupHexagonHover(hex, hoverColor)
      
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

