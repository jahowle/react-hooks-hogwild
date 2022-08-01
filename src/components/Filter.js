import React from "react";

function Filter({onFilterChange}) {

    return(
        <select name="filter" onChange={onFilterChange}>
            <option value="All">All</option>
            <option value="true">Greased</option>
            <option value="false">Not Greased</option>
        </select>
    )
}

export default Filter