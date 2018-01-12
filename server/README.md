a small RESTFUL API that returns json data from the Reddit API.

# Installation
- to run the server you must first install node.js. The node package manager npm should be installed automatically as part of this.
- Once node is installed, in the root of the server folder directory execute: npm install. This should install all project dependencies locally, in the node_modules folder.
- Copy the reddit_api_credentials.json file to the root of the server folder (you should have received it in an email from the developer).

# Starting the server
- to run the server, in the root of the server folder execute: npm start
- You can now access the server in your browser at port 3001.

# API endpoints
- GET /comments/{submissionId}: get all comments for the reddit submission with the given Id. Example: "http://localhost:3001/comments/7j2rl6"
