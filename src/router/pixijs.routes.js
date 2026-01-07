export const pixijsRoutes = [
    {
        path: '/pixijs/tetris',
        name: 'pixijs-tetris',
        component: () => import('@/views/pixijs/tetris/TetrisGamePage.vue')
    }, 
    {
        path: '/pixijs/hexa-chess',
        name: 'pixijs-hexa-chess',
        component: () => import('@/views/pixijs/hexa-chess/HexaChessGamePage.vue')
    }
]