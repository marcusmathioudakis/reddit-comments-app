import React from "react";

let Comments = ({ comments }) => {
	if (!comments) {
		return null;
	}

	return (
		<div className="Comments">
			{comments.map((comment, index) => (
				<div key={index} className="Comment">
					<div className="Details">
						- {comment.author}, {comment.ups} points,{" "}
						{new Date(comment.created * 1000).toString()}
					</div>
					<div> &nbsp; {comment.body}</div>
					<Comments comments={comment.replies} />
				</div>
			))}
		</div>
	);
};

export default Comments;
