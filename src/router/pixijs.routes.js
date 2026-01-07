export const pixijsRoutes = [
    {
        path: '/pixijs/tetris',
        name: 'pixijs-tetris',
        component: () => import('@/views/pixijs/tetris/TetrisGamePage.vue')
    }
]