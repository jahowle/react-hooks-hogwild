import React, {useState} from "react";
import HogTile from "./HogTile";

function Hogs({hogArray, filter, sort}) {

    const hogList = hogArray.filter((hog) => {

        if (filter === "All") {
            return true
        } else {
            return hog.greased.toString() === filter
        }
       
    })

    const hogsToDisplay = hogList
    .slice().sort((a,b) => {
        if(sort === "None") {
            return true
        } else if (sort === "Name") {
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
        } else if (sort === "Weight") {
            if(a.weight < b.weight) return -1
            if(a.weight > b.weight) return 1
            return 0
        }
    })
    .map((hog) => {
         return (
         <div key={hog.id}>
         <HogTile 
            name={hog.name} 
            image={hog.image} 
            key={hog.id} 
            specialty={hog.specialty}
            weight={hog.weight}
            greased={hog.greased}
            medal={hog['highest medal achieved']} />
            </div>
         )
    })


    return(
        <div className="ui grid container">
        {hogsToDisplay}
        </div>
    )
}

export default Hogs