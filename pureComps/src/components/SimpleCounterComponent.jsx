import React, { Component } from 'react'

class SimpleCounterComponent extends Component {
    constructor(){
        super();
        this.state={
            count : 0,
            toggle:false
        }
    }

    handleToggle = ()=>{
        this.setState({toggle:!this.state.toggle})
        console.log(this.state.toggle)
    }

    handleClick = () =>{
        if(this.state.toggle == true){
            this.setState({count: this.state.count+1})
        }
    }
  render() {
    console.log("This is Simple Component")
    return (
      <div>SimpleCounterComponent
        
        <p>{this.state.count}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleClick}>Counter</button>
      </div>
    )
  }
}


export default SimpleCounterComponent