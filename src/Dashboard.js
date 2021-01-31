/**
 * Author: Guilherme Cardoso
 * E-mail: gchicoper@gmail.com
 * Github: @oshogun 
 */

import * as React from "react";
import {Card, CardContent, CardHeader} from '@material-ui/core';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <Card>
        <CardHeader title="Bem Vindo!" />
        <CardContent>
            Bem vindo ao sistema de gerenciamento de funcionários e tarefas.
        </CardContent>
    </Card>
);