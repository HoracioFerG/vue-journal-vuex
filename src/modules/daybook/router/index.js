export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layout/DayBookLayout.vue'),
    children:[
        {
            path:':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "noEntry" */ '@/modules/daybook/views/EntryView.vue'),
        },
        {
            path: '',
            name:'no-entry',
            component: () => import(/* webpackChunkName: "noEntry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        }
    ]
}