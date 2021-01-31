/**
 * Author: Guilherme Cardoso
 * E-mail: gchicoper@gmail.com
 * Github: @oshogun 
 */

import * as React from "react";


// Custom email field to fit the dark theme

const styles = {
    color:'cyan'
};

const CustomEmailField = ({record = {}, source}) =>
    <a href={'mailto:' + record[source]} style={styles}>
        {record[source]}
    </a>

export default CustomEmailField;