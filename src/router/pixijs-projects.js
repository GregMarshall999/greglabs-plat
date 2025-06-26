const routeExtension = '/pixijs-projects';

const pixiRoutes = [
    {
        path: `${routeExtension}/startup`,
        name: 'pixi-startup',
        component: () => import('@/views/pixijs-projects/Startup.vue')
    }
]

export default pixiRoutes;