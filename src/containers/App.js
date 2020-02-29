import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import styles from './Appp.module.css';
import Aux from '../hoc/Auxilliary';


class App extends Component {

  constructor(props) {
    super(props);
    console.log("App constructor is called");
  }


  static getDerivedStateFromProps(props, state) {
    console.log("App getDerivedStateFromProps is called", state);
    return state;

  }

  componentDidMount() {
    console.log("App.js component did mount called")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js shouldComponentUpdate called");
    return true;

  }

  componentDidUpdate() {
    console.log("App.js componentDidUpdate called")
  }



  state = {
    persons: [
      { id: "dssd", name: "Max", age: 21 },
      { id: "dssd32", name: "Manu", age: 22 },
      { id: "dssd322", name: "Stephanie", age: 23 }
    ],
    otherState: "Some other value ",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  }


  nameChangeHandler = (event, id) => {

    // find the person index
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
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

    this.setState((prevState, props) => {

      return {
        persons: updatedPersons,
        changeCounter: prevState.changeCounter + 1
      }
    });
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

    console.log("App.JS render is called");

    let persons = null;
    if (this.state.showPersons) {

      // We're making use of Persons component, 
      // which takes input as the list of persons, and appends the bind and click function on it.
      persons = (
        <div>
          <Persons
            clicked={this.deletePersonHander}
            changed={this.nameChangeHandler}
            persons={this.state.persons}
          />
        </div>
      );
    }

    return (
      <Aux>
        {this.state.changeCounter}
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit }) }}>Cockpit</button>
        {
          this.state.showCockpit ?
            <Cockpit personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}
              showPersons={this.state.showPersons}
            />
            : null
        }
        {persons}
      </Aux>

    );
  }

}

export default withClass(App, styles.App);
