import * as React from "react";
import {
    List,
    SimpleList,
    ReferenceField,
    TextField,
    ImageField,
    UrlField,
} from 'react-admin';


export const PhotoList = props => (
    <List {...props}>
        <SimpleList rowClick="edit">
            <ImageField source="thumbnailUrl" />
            
        </SimpleList>
    </List>
);