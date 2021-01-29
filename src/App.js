// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser, ShowGuesser} from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import {TodoList, TodoEdit, TodoCreate, TodoShow} from './todos';
import Dashboard from './Dashboard';
import authProvider from './authProvider';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
<Admin dashboard={Dashboard} authProvider={authProvider} 
    dataProvider={dataProvider}>
    <Resource name="users" 
        list={UserList} icon={UserIcon}
        options={{label:'Funcionários'}}
        edit={UserEdit}
        create={UserCreate}
        show={ShowGuesser}/>
    <Resource name="todos" options={{label:'Tarefas'}}
        list={TodoList} 
        edit={TodoEdit}
        create={TodoCreate}
        show={TodoShow}/>
</Admin>
);

export default App;
