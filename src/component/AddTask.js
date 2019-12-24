import React, {Component} from "react";

function AddTask(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input ref={props.ref} onChange={props.addItem}/>
            <input type='submit'/>
        </form>
    );
}

export default AddTask;