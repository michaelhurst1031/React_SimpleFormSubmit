import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
        fullName:''
      }
    }

    handleSubmit = (event) => {
      //event.PreventDefault()
      //console.log("test")
      const data = this.state
      console.log(data)
    }

    handleInputChange = (event) => {
      event.preventDefault()
      // console.log(event)
      // console.log(event.target.name)
      // console.log(event.target.value)
      this.setState({
        [event.target.name]: event.target.value
      })
    }

      render() {
        const {fullName} = this.state
        return (
            <div className="app">
                <h1>Forms and Input</h1>
                <p>First Name is : {fullName}</p>
                <form onSubmit={this.handleSubmit}>
                    <p><input type='text' placeholder='Full Name' value={fullName} name='fullName' onChange={this.handleInputChange} ></input></p>
                    <p><button type='button' onClick={this.handleSubmit} >Send Name</button></p>
                </form>
            </div>
          );
      }
  }


export default App;