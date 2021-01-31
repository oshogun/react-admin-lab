/**
 * Author: Guilherme Cardoso
 * E-mail: gchicoper@gmail.com
 * Github: @oshogun 
 */

import * as React from 'react';
import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    EmailField,
    Create,
    Edit,
    Show,
    SimpleForm,
    SimpleShowLayout,
    TextInput,
    Filter,
    EditButton
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import CustomUrlField from './url-custom';
import CustomEmailField from './email-custom';

/////////////// Show, Create, Edit and List users////////////////////

export const UserShow = props => (
    <Show title="Visualizar funcionário" {...props}>
        <SimpleShowLayout>
            <TextField source="name" label="Nome"/>
            <TextField source="username" label="Nome de Usuário" />
            <EmailField source="email" />
            <TextField source="address.street" label="Endereço"/>
            <TextField source="phone" label="Telefone"/>
            <TextField source="website" />
        </SimpleShowLayout>
    </Show>
);

export const UserCreate = props => (
    <Create title={"Novo funcionário"} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
        </SimpleForm>
    </Create>
);


export const UserEdit = props => (
    <Edit title={"Editar funcionário"} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" label="Nome"/>
            <TextInput source="username" label="Nome de Usuário" />
            <TextInput source="email" />
            <TextInput source="address.street" label="Endereço" />
            <TextInput source="phone" label="Telefone"/>
            <TextInput source="website" />
        </SimpleForm>
    </Edit>
);


export const UserList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<UserFilter />} {...props}>
            {isSmall ? (
                <SimpleList linkType="show"
                    primaryText={record => record.name} 
                />
             ) : (
                <Datagrid rowClick="show">
                    <TextField source="name" label="Nome"/>
                    <CustomEmailField source="email"  />
                    <TextField source="phone" label="Telefone"/>
                    <CustomUrlField source="website"/>
                    <EditButton/>
                </Datagrid>
             )
            }
        </List>
    );
}

// Filter/search
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Busca" source="q" alwaysOn />
        <TextInput label="E-Mail" source="email" />
        <TextInput label="Telefone" source="phone" />
        <TextInput label="Website" source="website"  />
    </Filter>
);