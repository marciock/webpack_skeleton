import {Router} from './router';
import {NewElement} from './elements';

import Home from '../views/Home.html'
import Contatos from '../views/Contatos.html'


const routes=[
    {
     pathName:'/',
     viewName:Home
    },
    {
    pathName:'/contatos',
    viewName:Contatos
    }

]
export default  Router(routes)
