import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//Props son los parametros que se pasa, porps.name es el nombre que se pone en la
// tag de html como name={"xyz"}
    //Destructuring  ES6
    /*Cuando tenemos una propiedad con un numbre y la queremos asignar a una constante con el mismo nombre*/ 
    //El elemento city de dentro de props

const Location = ({city}) => (

    <div className="locationCont">
        <h1>
            {
                city.split(",")[0]
            }
        </h1>
    </div>
    
);

Location.propTypes = {
    city : PropTypes.string.isRequired,
}
export default Location;