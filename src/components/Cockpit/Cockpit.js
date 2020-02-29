import React,{useEffect} from 'react';
import classes from './Cockpit.module.css';
const Cockpit = (props) => {

    useEffect(()=>{
        console.log("Cockpit.JS -> useEffectCalled...")

        return ()=> {
            console.log("Cockpit.js Unmounting method is called");
        }
    }, []);

    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.bold);
    }
    if (props.personsLength < 1) {
        assignedClasses.push(classes.red);
    }
    

    return (
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(" ")}>Basic React Application</h1>
            <button className={btnClass} onClick={props.clicked}>Toggle Person</button>
        </div>
    );

}

export default React.memo(Cockpit);