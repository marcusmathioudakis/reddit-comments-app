const snoowrap = require("snoowrap");
const fs = require("fs");
let credentials = JSON.parse(
	fs.readFileSync("./reddit_api_credentials.json", "UTF-8")
);
const apiWrapper = new snoowrap(credentials);

exports.getComments = function(req, res) {
	let submissionId = req.params.submissionId;
	apiWrapper
		.getSubmission(submissionId)
		.expandReplies({ limit: Infinity, depth: Infinity })
		.then(
			response => res.send({ success: true, data: response.comments }),
			error => res.send({ success: false, error: error })
		);
};
