import * as React from "react";
import {
    Datagrid,
    List,
    Edit,
    Create,
    Show,
    ReferenceField,
    BooleanField,
    TextField,
    SimpleForm,
    SimpleList,
    SelectInput,
    ReferenceInput,
    TextInput,
    BooleanInput,
    SimpleShowLayout,
    Filter
} from 'react-admin';

import { useMediaQuery } from '@material-ui/core';

const TaskTitle = ({ record}) => {
    return <span>Tarefa: {record ? `"${record.title}"` : ''} </span>
}

export const TodoEdit = props => (
    <Edit title={<TaskTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput disabled source="id" />
            <TextInput source="title" label="Tarefa" />
            <BooleanInput source="completed" label="Concluída"/>
        </SimpleForm>
    </Edit>
);


export const TodoCreate = props => (
    <Create title={<TaskTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput disabled source="id" />
            <TextInput source="title" label="Tarefa" />
            <BooleanInput source="completed" label="Concluída"/>
        </SimpleForm>
    </Create>
);


const TodoFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Busca" source="q" alwaysOn />
        <ReferenceInput label="Funcionário" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <BooleanInput label="Concluída" source="completed"/>

        
    </Filter>
);

export const TodoList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<TodoFilter/>}{...props}> 
        { isSmall ? (
            <SimpleList linkType="show"
                primaryText={record => record.title} 
            />
        ) : (
            <Datagrid rowClick="show">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" label="Funcionário" />
            </ReferenceField>
            <TextField source="title" label="Tarefa"/>
            <BooleanField source="completed" label="Concluída" />
        </Datagrid>
        )}  
        </List>
    );
    
};

export const TodoShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <ReferenceField source="userId" reference="users">
                <TextField source="name" label="Funcionário"/>
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" label="Tarefa"/>
            <BooleanField source="completed" label="Concluída" />
        </SimpleShowLayout>
    </Show>
);