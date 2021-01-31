/**
 * Author: Guilherme Cardoso
 * E-mail: gchicoper@gmail.com
 * Github: @oshogun 
 */


import * as React from "react";
import { Admin, Resource} from 'react-admin';
import { UserList, UserEdit, UserCreate, UserShow } from './users';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import {TodoList, TodoEdit, TodoCreate, TodoShow} from './todos';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import portugueseMessages from 'ra-language-portuguese';
import { createMuiTheme } from '@material-ui/core/styles';

// Superior dark theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
      MuiButton: {
          textPrimary : {
              color: 'white'
          }
      },
      RaReferenceField: {
            link: {
                color: 'cyan'
            }
      }
  }
});

// Connect to backend API 
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// i18n support
const i18nProvider = polyglotI18nProvider(() => portugueseMessages, 'pt');

// Main app instantiation
const App = () => (
<Admin theme={theme} dashboard={Dashboard} authProvider={authProvider} 
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
