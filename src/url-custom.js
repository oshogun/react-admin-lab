/**
 * Author: Guilherme Cardoso
 * E-mail: gchicoper@gmail.com
 * Github: @oshogun 
 */

import * as React from "react";

// Custom URL Field to fit the dark theme

const styles = {
    color:'cyan'
};

const CustomUrlField = ({ record = {}, source }) =>
    <a href={record[source]} style={styles}>
        {record[source]}
    </a>;



    
export default CustomUrlField;
