
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComprarEntradaComponent from './components/ComprarEntradaComponent'
import EventosComponent from './components/EventosComponent'
import MisEntradasComponent from './components/MisEntradasComponent'

export const EventosRoutes =()=> (
    <Router>
        <Switch>
            <Route exact path="/" component={EventosComponent} />
            <Route path="/comprarEntradas/:id" component={ComprarEntradaComponent} />
            <Route path="/misEntradas" component={MisEntradasComponent}/>
        </Switch>
    </Router>
)