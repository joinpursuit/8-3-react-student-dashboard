import React from "react";

function ShowMore(props) {
	return (
		<div className="show-more hidden" id={props.id}>
			<a href="" onClick={(event) => event.preventDefault()}>
				Show More..
			</a>
		</div>
	);
}

export default ShowMore;
