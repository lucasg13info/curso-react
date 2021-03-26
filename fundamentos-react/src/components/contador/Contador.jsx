import React, {Component} from 'react'

class Contador extends Component{

        state = {
            numero: this.props.numeroInicial
        };

        constructor(props){
            super(props)

            this.inc = this.inc.bind(this)
            
        }
    
        inc(){
            this.setState({
                numero: this.state.numero +1
            })
        }
    render() {
        return(
            <div>
                <h2>Contador</h2>
                <h3> { this.state.numero } </h3>
                <button onClick={this.inc}> + </button>
            </div>
            
        )
    }

}


export default Contador