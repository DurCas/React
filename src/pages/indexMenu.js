import React from 'react'

import Card from '../components/Card'
//import Card2 from '../components/Card2'
import Welcome from '../components/Welcome'

//Creo com si fos un component
class indexMenu extends React.Component{
    //En el render copiem el que hi havia a index.js > ReactDom.reader
    render(){
        return(<div>
            <Welcome
              username="Pau"
            />

            <Card 
              title       = "Llistat de pel·lícules"
              description = "Llistat de totes les pel·lícules vistes durant el confinament"
              image       = "movies.png"
              bgColor     = "#a42514"
              path        = "/movies/list"
            />
            

            <Card
              title       = "Afegir pel·lícules"
              description = "Formulari per afegir una nova pel·lícula"
              image       = "addmovie.png"
              bgColor     = "#A47114"
              path        = "/movies/add"
            
            />

            <Card
              title       = "Pel·lícules que vull veure"
              description = "Formulari per afegir pel·lícules que voldré veure en un futur"
              image       = "video.png"
              bgColor     = "#0D6B53"
              path        = "/movies/wishlist"
            
            />
          </div>)
    }
}

export default indexMenu