import HomePage from './components/HomePage'
import AboutUsPage from './components/AboutUsPage'
import PostPage from './components/PostPage'
import PostsPage from './components/PostsPage'
import Userspage from './components/Userspage'
import UsersHomePage from './components/users/UsersHomePage.vue'
import UsersViewPage from './components/users/UsersViewPage.vue'


const routes =[
    {path: "/", component: HomePage},
    {path: "/about", component: AboutUsPage},
    {path: "/posts", component: PostsPage},
    {path: "/posts/:id", component: PostPage, props: true},
    {path: "/users", component: Userspage,children:[
        {path: "",component:UsersHomePage},
        {path: ":id",component:UsersViewPage, props: true}
    ]}
]

export default routes;