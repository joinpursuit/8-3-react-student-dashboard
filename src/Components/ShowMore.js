import React from "react";

function ShowMore(props) {
	return (
		<div className="show-more hidden" id={props.id}>
			<button>Show More...</button>
		</div>
	);
}

export default ShowMore;
