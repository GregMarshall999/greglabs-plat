const medLevel = 'med-level';

const routes = [
    {
        path: `/${medLevel}/movies`,
        name: `${medLevel}-movies`,
        meta: {
            projectGroup: medLevel,
        },
        component: () => import('@/views/med-level/MoviesPage.vue')
    },
    {
        path: `/${medLevel}/movie/:id`,
        name: `${medLevel}-movie-details`,
        meta: {
            projectGroup: medLevel,
        },
        component: () => import('@/views/med-level/MovieDetailsPage.vue'),
        props: true
    }, 
    {
        path: `/${medLevel}/countdown`,
        name: `${medLevel}-countdown`,
        meta: {
            projectGroup: medLevel,
        },
        component: () => import('@/views/med-level/CountdownPage.vue')
    },
    {
        path: `/${medLevel}/shopping-cart`,
        name: `${medLevel}-shopping-cart`,
        meta: {
            projectGroup: medLevel,
        },
        component: () => import('@/views/med-level/ShoppingCartPage.vue')
    },
    {
        path: `/${medLevel}/tic-tac-toe`,
        name: `${medLevel}-tic-tac-toe`,
        meta: {
            projectGroup: medLevel,
        },
        component: () => import('@/views/med-level/TicTacToePage.vue')
    },
    {
        path: `/${medLevel}/aquarium`,
        name: `${medLevel}-aquarium`,
        meta: {
            projectGroup: medLevel,
        },
        component: () => import('@/views/med-level/AquariumPage.vue')
    },
    {
        path: `/${medLevel}/quiz`,
        name: `${medLevel}-quiz`,
        meta: {
            projectGroup: medLevel,
        },
        component: () => import('@/views/med-level/QuizPage.vue')
    },
    {
        path: `/${medLevel}/task`,
        name: `${medLevel}-task`,
        meta: {
            projectGroup: medLevel,
        },
        component: () => import('@/views/med-level/TaskPage.vue')
    }
]

export default routes;