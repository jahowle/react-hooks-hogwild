import React from "react";

function HogDetail({
    specialty,
    weight,
    greased,
    medal
    }) {
    return (
        <div>
        <p>Specialty: {specialty}</p>
        <p>Weight: {weight}</p>
        <p>Greased : {greased ? "Yes" : "No"}</p>
        <p>Highest Medal Achieved: {medal}</p>
        </div>
    )
}

export default HogDetail