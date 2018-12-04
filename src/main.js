import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Produto from "./relogio";

class Principal extends Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/relogio' component={} />
            </Switch>
        )
    }
}
const Home = () => (
    <div>
        <h1>ola</h1>
    </div>
)

export default Principal;