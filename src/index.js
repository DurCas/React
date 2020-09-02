//VIDEO 1 - Pàgina 16

      // const element = document.createElement('h1')
      // element.innerText = "Hola React"

      // const container = document.getElementById('root')
      // container.appendChild(element)

//import React from 'react'
//import ReactDom from 'react-dom'

//VIDEO 2 - Pàgina 17

      // const element = <h1>Hello React II</h1>
      // const container = document.getElementById('root')

      //Render assigna un element a un espai
      //ReactDOM.render(__què__,__on__)
      //ReactDOM.render(h1, root)
      //ReactDom.render(element, container)

//VIDEO 3 - Pàgina 19

      //JSX permet combinar lògica i esturctura en un mateix component
      //Ens permet combinar variables amb constants
      /*
      function formatName(user){
        if(user){
          return user.firstName + "!!!" + user.lliga;
        }
        return "usuari desconegut."
      }

      const user = {
        firstName: "Penya",
        lliga: "ACB",
        escut: "https://static.acb.com/img/e/53/16/1453195579.png"
      } 

      //Element amb més d'una etiquet html es fa amb parèntesi
      const element = (
        <div>
          <h1>{formatName(user)}</h1>
          <img src={user.escut} width="200px" height="200px" />
        </div>
      )
      const container = document.getElementById('root')

      ReactDom.render(element, container)
      */

//COMPONENTS:
  //Cicle de vida: Muntatge

        //constructor(props)
        /**
         * S'executa quan es fa una instància d'un component.
         * Serveix per:
         *  · Inicialitzar l'estat del component
         *  · Enllaçar esdeveniments
         *  · Setejar les variables globals
         */

        //componentWillMount()
        /**
         * S'executa abans de muntar un component.
         * Ens permet:
         *  · Modificar l'estat d'un component
         *  · No podrem fer crides a API's
         *  · No podrem fer subscripcions a esdeveniments
         * El component no es mostra al DOM
         */

        //render()
        /**
         * Agafem les propietats, l'estat i el context i es crea la vista del component.
         *  · Ha de ser una funció pura
         *  · Aquí no es pot modificar l'estat
         * El component ja es pot mostrar al DOM
         */

        //render()
        /**
         * S'executa quan el component ja s'ha renderitzat. Moment per:
         *  · Fer crides a API's
         *  · Realitzar subscripcions a esdeveniments
         *  · Modificar l'estat
         */


  //Cicle de vida: Actualització
    // Aquesta fase pot produir-se múltiples vegades o bé cap. 
    // Succeeix quan alguna dada del component es modifica

        //componentWillReceiveProps(nextProps)
        /**
         * S'executa quan el compnent rep noves propietats.
         * Ens serveix per realitzar canvis en els estats.
         */
                
        //shouldComponentUpdate(nextProps, nextState)
        /**
         * Aquesta funcioó s'executa abans d'actualitzar un component.
         * Podem validar si volem renderitzar o no el component.
         */
                
        //componentWillUpdate(nextProps, nextState)
        /**
         * S'executarà una vegada el mètode shouldComponentUpdate(nextProps, nextState) ens hagi tornat TRUE.
         * Ens permet realitzar quasevol tipus de prepareació abans que s'actualitzi la intefície.
         */

        //render()
         /**
          * Quan s'actualitza la intefície necessitem tornar a cridar render()
          */

        //componentDidUpdate(prevProps, prevState)
         /**
          * A la finalització de l'actualització trobem el mètode homòleg a componentDidMount().
          */

  //Cicle de vida: Desmuntatge
        //componentWillUnmunt()
        /**
         * S'utlitza per fer la "neteja" abans de desmuntar un component
         * Permet:
         * Deixar d'escoltar esdeveniments
         * Deixar de subscriure's a un WebSocket
         * Cancel·lar peticions http
         */
  
  //Cicle de vida: Control d'errors
        //componentDidCatch()
        /**
         * S'executa al detectar un error en renderitzar un component en el moment de muntatge.
         * 
         */

/**
 * Diferència entre comptonent de tipus classe i un de funcional:
 * Classe: Permeten tenir propietats, atributs i estats diferents. Permet més dinamisme. Class a JS.
 * Funcional: Més estatic. Function a JS. No treballen amb el cicle de vida del component
 */

//VIDEO 4:
/**
 * Creem una carpeta components dins de src
 */

//Pas 3: Cridar Card.js al nostre index.js
import React from 'react'
import ReactDom from 'react-dom'
// import Card from './components/Card'
// import Welcome from './components/Welcome'
//Pas 1 de ReactRouter
//import IndexMenu from './pages/indexMenu'
import App from './components/App'

const container = document.getElementById('root')

//Pas 4: Posem en el (__què__ la nostra Card amb etiqueta html)
//Pas 5: Posem atributs
//Pas 6. Que el component a Card.js vingui aquí
//Pas 7: Importar Welcome.js
//Cridem a Welcome.js -> Component funciona
//Cridem a Card.js -> Component de tipus classe
ReactDom.render(
                // <div>
                //   <Welcome
                //     username="Pau"
                //   />

                //   <Card 
                //     title       = "Llistat de pel·lícules"
                //     description = "Llistat de totes les pel·lícules vistes durant el confinament"
                //     image       = "movies.png"
                //     bgColor     = "#a42514"
                //   />
                // </div>

                //Pas 1 de ReactRouter
                //<IndexMenu />
                //Assoiem un component de tipus funcional
                <App />,container)

//Una pàgina-> Component format per més d'un component
//A l'índex que només hi hagués un component
//Creem src > pages 
//A index.js vull mostrar indexMenu.js


//ReactRouter creacio dinàmica de URLs i poder-hi associar uns components o uns altres