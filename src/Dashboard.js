import * as React from "react";
import {Card, CardContent, CardHeader} from '@material-ui/core';

export default () => (
    <Card>
        <CardHeader title="Bem Vindo!" />
        <CardContent>
            Bem vindo ao sistema de gerenciamento de funcionários e tarefas.
        </CardContent>
    </Card>
);