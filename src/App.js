// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser, ShowGuesser} from 'react-admin';
import { UserList, UserEdit, UserCreate, UserShow } from './users';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import {TodoList, TodoEdit, TodoCreate, TodoShow} from './todos';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import portugueseMessages from 'ra-language-portuguese';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const i18nProvider = polyglotI18nProvider(() => portugueseMessages, 'pt');
const App = () => (
<Admin dashboard={Dashboard} authProvider={authProvider} 
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}>
    <Resource name="users" 
        list={UserList} icon={UserIcon}
        options={{label:'Funcionários'}}
        edit={UserEdit}
        create={UserCreate}
        show={UserShow}/>
    <Resource name="todos" options={{label:'Tarefas'}}
        list={TodoList} 
        edit={TodoEdit}
        create={TodoCreate}
        show={TodoShow}/>
</Admin>
);

export default App;
