
import React from 'react';
import './App.scss';

const Header = ()=>{
    return (
        <header className="words-app">
            <h1>
                words-app-react-land
            </h1>
        </header>
    )
}

const Footer = ()=>{
    return (
        <footer>
            my cool footer
        </footer>
    )
}

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    increase = e =>{
        this.setState({count:this.state.count + 1})    
    }
    decrase = e =>{
        this.setState({count:this.state.count -1})
    }
    render(){
        return(
            <div>
                <button onClick ={this.increase} ></button>
                <button onClick ={this.decrase} ></button>
                <h2>{this.state.count} </h2>
                </div>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header>
                    <Footer>
                        <Main/>
                    </Footer>
                </Header>
            </React.Fragment>
        )
    }
}
export default App