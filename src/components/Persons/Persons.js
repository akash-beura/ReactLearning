import React, { Component } from 'react';
import Person from '../Persons/Person/Person';


class Persons extends Component {

    state = {

    }


    // static getDerivedStateFromProps(props, state) {
    //     console.log("Persons.JS getDerivedStateFromProps is called", state);
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Persons.JS shouldComponentUpdate is called");
        if (nextProps.persons !== this.props.persons)
            return true;
        else
            return false;
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("Persons.JS getSnapshotBeforeUpdate is called");
    //     return { "message": "snapshot" };
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("Persons.JS componentDidUpdate is called");
    // }




    render() {
        console.log("Persons.JS render is called");
        return this.props.persons.map((person, personIndex) => {
            return <Person name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.clicked(personIndex)}
                key={person.id} />
        })
    }

    componentDidMount() {
        
    }


}



export default Persons;

