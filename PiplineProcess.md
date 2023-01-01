# pipline process
first of all install needed orbs as aws and node ana then
 it goes with three stages [build , hold , deploy]

## Build stage
 - install node , aws and eb checkout code 
 - Use root level package.json to install dependencies in the frontend app.
 - Install dependencies in the backend API
 - Lint the frontend
 - Build the frontend app
 - Build the backend API

## Hold stage
 - in this step deploy step will run only after manual approval
## Deploy
 - setup aws, node and elastic beanstalk
 - Install, build, deploy in both apps