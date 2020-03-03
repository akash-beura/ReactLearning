import React, { Component } from 'react';
import style from './Person.module.css';
import Aux from '../../../hoc/Auxilliary';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';


class Person extends Component {

    

    constructor(props) {
        super(props);
        this.elementRef = React.createRef();
        this.state = ({

        });
    }


    static getDerivedStateFromProps(props, state) {
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }


    render() {
        return (
            <Aux className = {style.Person}>
                <h3 onClick={this.props.click}>I'am {this.props.name} and I am {this.props.age} years old.</h3>
                <h3>{this.props.children}</h3>
                Input name: <input type="text"
                    onChange={this.props.changed}
                    ref={this.elementRef}
                    value={this.props.name} />
            </Aux>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return null;
    }

    componentDidUpdate() {
        this.elementRef.current.focus();  
    }
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}

export default withClass(Person,style.Person);