import React, { Component } from 'react'
import MenuComponent from './menu'
import { EventoService } from '../services/evento.service'
import { Entrada } from '../domain/entrada.domain'

import { Paper, List, ListItem, ListItemText, Divider, IconButton } from '@material-ui/core'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'



export default class MisEntradasComponent extends Component {
    constructor(props) {
        super(props)
        this.eventoService = new EventoService()
        this.state = { entradas: [] }
    }

    async componentWillMount() {
        try {
            const res = await this.eventoService.allEntradasInstances()
            const entradasJson = await res.json()
            console.log( "ENTRADAS COMPRADAS ", entradasJson)

            this.setState({
                entradas: entradasJson.map((entradaJson) => Entrada.fromJson(entradaJson))
            })
        } catch (e) {
            this.errorHandler(e)
        }
    }

    errorHandler(errorMessage) {
        throw errorMessage
    }

    render() {
        return (
            <div>
                <MenuComponent />
                <Paper>
                    <List component="nav">
                        {this.state.entradas.map((entrada, index) => <EntradaRow entrada={entrada} key={index} service={this.eventoService} />)}
                    </List>
                </Paper>
            </div>
        )
    }
}
export class EntradaRow extends Component {
    componentWillMount() {
        this.setState({
            entrada: this.props.entrada,
        })
        console.log("ENTRADAAAA props", this.props.entrada)
        this.service = this.props.service
    }

    render() {
        const entrada = this.state.entrada
        console.log("ENTRADA ", this.state.entrada)
        return (
            <div>
                <ListItem>
                    <ListItemText primary={this.state.eventoNombre}  />
                    <IconButton color="inherit" aria-label="Menu">
                        {<KeyboardReturnIcon />}
                    </IconButton>
                </ListItem>
                <Divider />
            </div>
        )
    }

    generarError(errorMessage) {
        console.log(errorMessage)
        console.log("state", this.state)
    }
}