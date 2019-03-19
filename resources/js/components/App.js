import React, { Component,Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Index from './index/Index'
import Paket from './index/paket/Paket'



    const globalState = {
      paketRedux :[
        { 
          "id":"paketinstan",
          "title":"Paket Instan",
          "src":"/images/instan.png",
          "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi eligendi consequuntur iste consequatur animi soluta cum illo explicabo veritatis nisi eaque dicta assumenda repellendus! Sunt molestias similique a consequatur."
        },
        { 
          "id":"paketbulanan",
          "title":"Paket Bulanan",
          "src":"/images/kalender.png",
          "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi eligendi consequuntur iste consequatur animi soluta cum illo explicabo veritatis nisi eaque dicta assumenda repellendus! Sunt molestias similique a consequatur."
        },
        { 
          "id":"paketgroup",
          "title":"Paket Group",
          "src":"/images/group.png",
          "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi eligendi consequuntur iste consequatur animi soluta cum illo explicabo veritatis nisi eaque dicta assumenda repellendus! Sunt molestias similique a consequatur."
        },
        { 
          "id":"paketintensif",
          "title":"Paket Intensif",
          "src":"/images/intensif.png",
          "desc":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, modi eligendi consequuntur iste consequatur animi soluta cum illo explicabo veritatis nisi eaque dicta assumenda repellendus! Sunt molestias similique a consequatur."
        }
      ] 
      
    }

    //reducer
    const rootReducer = (state = globalState,action) =>{
      return state;
    }


    //store
    const storeRedux = createStore(rootReducer);

    class App extends Component {
      render () {
        return (
          <BrowserRouter>
            <Fragment>
              <Route path="/" exact component={Index}/>
              <Route path="/:paket" component={Paket}/>
            </Fragment>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<Provider store={storeRedux}><App /></Provider>, document.getElementById('app'))