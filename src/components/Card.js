//Pas 1: Importar React
import React from 'react'

//Pas 4 importar les imatges i el full d'estils
import movies from '../img/movies.png'
import './styles/Card.css'
//Per importar bootstrap
/**
 * Obrir una terminal nova
 * Escriure npm i bootstrap
 * Per veure si està ben instalat mirar la carpeta node_modules>bootstrap
 * Importar bootstrap
 */
import 'bootstrap/dist/css/bootstrap.css'
 
//Pas 2: Crear una classe amb el mateix nom de l'arxiu que extengui React.Components
//Pas 5: Crear propietats del component a props i fer-les dinàmiques segons la crida que fem
//Pas 7: Mdoficar la imatge i el color dinamicament
//$ -> Per concatenar dins d'un string
//Com que volem que el color sigui dinàmic ho hem d'escriure a l'etiqueta

//Perque la classe no recarregui
import { Link } from 'react-router-dom' 


class Card extends React.Component{

    //Render = Mètode necessari per renderitzar el nostre component a la initerfície
    render(){

        //Pas 8 declarar constant per no repetir this.props
        const {title, description, image, bgColor} = this.props 

        //Retorn el contingut i esstils que nosaltres volem
        //La paraula class es una paraula reservada
        return(
            <Link to={this.props.path} style={{ 
                textDecoration: 'none' 
            }} >
                
                <div className="cardMovies mx-auto mt-3" style={{
                    //No posem claudators perque no estem encadenant, es una propietat d'style
                    backgroundColor: bgColor,
                    opacity: 0.9
                }}>
                    <div>
                        <img src={require(`../img/${image}`)}/>
                    </div>
                    <div className="text">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        )
    }
}
//Pas 3: Cridar Card.js al nostre index.js
export default Card