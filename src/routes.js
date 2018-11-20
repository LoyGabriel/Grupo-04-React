
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComprarEntradaComponent from './components/ComprarEntradaComponent'
import EventosComponent from './components/EventosComponent'

export const EventosRoutes =()=> (
    <Router>
        <Switch>
            <Route exact path="/" component={EventosComponent} />
            <Route path="/comprarEntradas" component={ComprarEntradaComponent} />
        </Switch>
    </Router>
)