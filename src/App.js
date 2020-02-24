import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';


 
class App extends Component {

  state = {
    persons: [
      { id: "dssd", name: "Max", age: 21 },
      { id: "dssd32", name: "Manu", age: 22 },
      { id: "dssd322", name: "Stephanie", age: 23 }
    ],
    otherState: "Some other value ",
    showPersons: false
  }


  nameChangeHandler = (event, id) => {

    // find the person index
    const personIndex = this.state.persons.findIndex(person => {
      return person.id == id
    })

    // copy the person to another object
    const updatedPerson = {
      ...this.state.persons[personIndex]
    }

    ///update the name
    updatedPerson.name = event.target.value;

    // updated the array
    const updatedPersons = [...this.state.persons];

    updatedPersons[personIndex] = updatedPerson;

    this.setState({
      persons: updatedPersons
    })
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHander = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }

  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ":hover": {
    //     backgroundColor: "lightGreen"
    //   }
    // }

    let persons = null;
    if (this.state.showPersons) {
      // style.backgroundColor = 'red';
      // style[":hover"] = {
      //   backgroundColor: "orange"
      // }
      persons = (
        <div>
          {
            this.state.persons.map((person, personIndex) => {
              return <Person name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                click={() => this.deletePersonHander(personIndex)}
                key={person.id} />
            })
          }
        </div>
      );
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("1");
    }
    if (this.state.persons.length <= 1) {
      classes.push("red");
    }

    return (
      <div className="App">
        <h1 className={classes.join(" ")}>Basic React Application</h1>
        <button className="button" onClick={this.togglePersonHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }

}

export default App;
