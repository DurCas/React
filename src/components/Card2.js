import React from 'react'
import addmovie from '../img/addmovie.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom' 


class Card2 extends React.Component{
    render(){
        const {title, description, image, bgColor} = this.props 
        return(
            <Link to={this.props.path} >
                
                <div className="cardMovies mx-auto mt-5" style={{
                    backgroundColor: bgColor
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
export default Card2