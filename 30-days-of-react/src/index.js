import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName : 'jhon',
            day : 1,
            congratulate : ''
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState.day > 30){
            return false
        }
        return true
    }

    doChallange = () => {
        this.setState({
            day : this.state.day + 1
        })
    }

    componentDidUpdate(prevProps,prevState) {
        console.log('componentdidupdate::::',prevProps,prevState)
        console.log(prevState.day)
        if(prevState.day == 29){
            this.setState({
                congratulate : 'Challange Completed'
            })
        }
    }

    render(){
        console.log(this.state)
        return(
            <div className='App'>
                <h1>React component life cycle update stage</h1>
                <button onClick={this.doChallange}>Do Challange</button>
                <p>Challange day : {this.state.day}</p>
                {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
            </div>
        )
    }
    
}


const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(<App></App>);