
import React from 'react';
import './App.scss';

const Header = ()=>{
    return (
        <header className="words-app">
            <h1>
                my Counter
            </h1>
        </header>
    )
}

const Footer = ()=>{
    return (
        <footer  >
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
        this.style = {
            higher:{
                color:'green'
            },
            lower : {
                color:'red'
            }
        }
     
    }
    increase = e =>{     
        this.setState({count:this.state.count + 1})    
    }
    decrase = e =>{
        this.setState({count:this.state.count -1})
    }
    checker = ()=>{
        return this.state.count > 0 ? this.style.higher:this.style.lower
    }
    render(){
        return( 
            <div >
                <button style={{backgroundColor:'green'}}onClick ={this.increase} >increase</button>
                <button style={{backgroundColor:'red'}} onClick ={this.decrase} >decrase</button>
                <h2 style={this.checker()}>{this.state.count} </h2>
                </div>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <React.Fragment >
                <Header/>
                <Main/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default App