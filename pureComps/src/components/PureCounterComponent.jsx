import React, { PureComponent } from 'react'

export class PureCounterComponent extends PureComponent {
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
    console.log('This is Pure Component');
    return (
      <div>PureCounterComponent
        <p>{this.state.count}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleClick}>Counter</button>
      </div>
    )
  }
}

export default PureCounterComponent