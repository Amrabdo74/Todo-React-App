import React from "react";
import "../../index.css"
const Todo = (props) => {
    const { items, deletitems } = props;
    let length = items.length;
    const listitems = length ? (items.map(item => {
        return (
            <div key={item.id} >
                <span >{item.name}</span>
                <span>{item.age}</span>
                <span className="click" onClick={() => deletitems(item.id)}>&times;</span>

            </div>
        )

    })) : (

        <p>There is no item to show </p>
    )

    return (
        <div className="todoheader">
            <div  >
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>

            </div>
            {listitems}
        </div>

    )


}
export default Todo;