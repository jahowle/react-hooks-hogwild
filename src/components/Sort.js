import React from "react";

function Sort({onSortChange}) {
    return (
        <select name="sort" onChange={onSortChange}>
            <option value="None">None</option>
            <option value="Name">Name</option>
            <option value="Weight">Weight</option>
        </select>
    )
    
}

export default Sort