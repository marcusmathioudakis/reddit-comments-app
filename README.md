# reddit comments app
This project is a small web app that allows the user to get all comments for a given reddit submission. To run it you will need to setup the server and client - see the respective README files in each of their directories.

## Extensions
 As time for this task was limited to 4 hours, various corners were cut in the name of speed:
- no automated tests for client - This would not take long as Create-React-App already has Jest configured as a test runner. Thus would just need to lookup syntax for asserting that nesting structure of comments is what we expect it to be. However as I spent just under 5 hours getting this all working whereas my time limit was 4, I thought it would be a more useful datapoint to show what I can do in 5 hours, even if that means not including tests.
- no automated tests for server.
- hard coded localhost proxy in client package.json. 
- browser testing: only tested in firefox and chrome.
- very basic styling (although displays info clearly on any screen size).