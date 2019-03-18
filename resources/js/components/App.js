import React, { Component,Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from './index/Index'

    class App extends Component {
      render () {
        return (
          <BrowserRouter>
            <Fragment>
              <Index/>
            </Fragment>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))