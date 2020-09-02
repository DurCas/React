//Aquí en comptes de declarar una classe, declarem una funció
//Retorna un codi html
import React from 'react'

function Welcome(props){
    return(<div className="container mt-5">
        <h2>Hello {props.username}</h2>
        <p>Pel·lícules confinades</p>
    </div>
    )    
}

export default Welcome