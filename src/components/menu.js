import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Usuario } from '../domain/usuario.domain';
import { UsuarioService } from '../services/usuario.service'

import { AppBar, Toolbar, Typography, IconButton, Divider } from '@material-ui/core'
import { List, ListItem, ListItemText, Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false,
            usuario: {}
        }
        this.usuarioService = new UsuarioService()
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }))
    }

    clickMenu = (text) => {
        this.props.history.push(text)
        this.handleDrawerToggle()
    }

    async componentWillMount() {
        try {
            const result = await this.usuarioService.getUsuarioLogueado()
            const usuario = Usuario.fromJson(await result)
            this.setState({
                usuario: usuario,
                plataQueTengo : usuario.plataQueTengo,
                
            })
        } catch (e) {
            this.errorHandler(e)
        }
    }
    errorHandler(errorMessage) {
        throw errorMessage
    }

    render() {
        const usuario = Usuario.fromJson(this.state.usuario)
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerToggle}>
                            {<MenuIcon />}
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Event Os
            </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    container={this.props.container}
                    variant="temporary"

                    open={this.state.mobileOpen}
                    onClose={this.handleDrawerToggle}
                    classes={{

                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}>
                    <div>
                        <div />
                        <Divider />
                        <List>
                            <ListItem>
                                <ListItemText primary={this.state.usuario.nombreDeUsuario} secondary={usuario.email} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={'Saldo: ' + this.state.plataQueTengo} />
                            </ListItem>
                            <ListItem button onClick={() => this.clickMenu('/')}>
                                <AccountCircleIcon />
                                <ListItemText primary='Eventos Interesantes' />
                            </ListItem>
                            <ListItem button onClick={() => this.clickMenu('/misEntradas')}>
                                <AccountBoxIcon />
                                <ListItemText primary='Mis Entradas' />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }

}
export default withRouter(MenuComponent)