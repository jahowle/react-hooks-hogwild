import React, {useState} from "react";
import Nav from "./Nav";
import Hogs from "./Hogs"
import Filter from "./Filter";
import Sort from "./Sort";
import hogs from "../porkers_data";

function App() {

	const [filterBy, setFilterBy] = useState("All")
	const [sortBy, setSortBy] = useState("None")

	function handleFilterChange(event){
		setFilterBy(event.target.value)
	}

	function handleSortChange(event){
		setSortBy(event.target.value)
	}

	return (
		<div className="App">
			<Nav />
			<Filter onFilterChange={handleFilterChange}/>
			<Sort onSortChange={handleSortChange}/>
			<Hogs hogArray={hogs} filter={filterBy} sort={sortBy}/>
		</div>
	);
}

export default App;
