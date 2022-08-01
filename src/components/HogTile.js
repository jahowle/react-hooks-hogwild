import React, {useState} from "react";
import HogDetail from "./HogDetail";

function HogTile({name, image, key, specialty, weight, greased, medal}){

    const [detailState, setDetailState] = useState(false)

    function clickHandler() {
        setDetailState((detailState) => !detailState)
    }

    return (
        <div onClick={clickHandler} className="ui eight wide column" key={key}>
            <h1>{name}</h1>
            <img className="maxPigTile minPigTile"src={image}/>
            {detailState ? <HogDetail specialty={specialty} weight={weight} greased={greased} medal={medal}/> : ""}
        </div>
    )
}

export default HogTile