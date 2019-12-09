import HomePage from './components/HomePage'
import AboutUsPage from './components/AboutUsPage'
import PostPage from './components/PostPage'
import PostsPage from './components/PostsPage'
import Userspage from './components/Userspage'
import UsersHomePage from './components/users/UsersHomePage.vue'
import UsersViewPage from './components/users/UsersViewPage.vue'
import NotFoundPage from './components/NotFoundPage.vue'


const routes =[
    {path: "/", component: HomePage, name:"home"},
    {path: "/about", component: AboutUsPage},
    // {path: "/about", component: AboutUsPage, beforeEnter: (to, from, next)=>{ 
    //     console.log('about beforeEnter'); 
    //     next();
    // }},
    {path: "/posts", component: PostsPage},
    {path: "/posts/:id", component: PostPage, props: true,name:"single-post"},
    {path: "/users", component: Userspage,children:[
        {path: "",component:UsersHomePage},
        {path: ":id",component:UsersViewPage, props: true}
    ]},
    // {path:"*",redirect:"/"}
    {path:"*",component:NotFoundPage}
]

export default routes;