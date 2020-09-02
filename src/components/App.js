import React from 'react'
import IndexMenu from '../pages/indexMenu'
import MoviesList from '../pages/MoviesList'
import MoviesAdd from '../pages/MoviesAdd'
import MoviesWishlist from '../pages/MoviesWishlist'
//Hem d'importar tant BrowserRouter com rOUTE
import { BrowserRouter, Route } from 'react-router-dom'

function App(props){
    //Ens analitza la ruta, si la ruta es Index ens mostra IndexMenu
    //Recordar de importar els dos documents que estem declarant
    //Per no associar les dos URLs
    //Afegir l'atribut excat
    return(<BrowserRouter>
    
            <Route exact path="/" component={IndexMenu} />
            <Route exact path="/movies/list" component={MoviesList} />
            <Route exact path="/movies/add" component={MoviesAdd} />
            <Route exact path="/movies/wishlist" component={MoviesWishlist} />

            </BrowserRouter>)
}

export default App