# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deploy Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/fa40e85c-1191-4a37-baa0-f9cbf6ab2960/deploy-status)](https://app.netlify.com/sites/elated-nightingale-28583c/deploys)

## Table of Contents: 
1. [Project Description](#project-description)
2. [Technologies Used](#technologies-used)
3. [Scripts Availbe to run](#scripts-available)
4. [Git Procedures](#git-procedures)
5. [Bug Reporting](#bug-reporting)
6. [Roadmap](#roadmap)


## Project Description

Welcome to the [02DesignStudio](https://www.02designstudio.com) agency website repo. 02DesignStudio is a web design, development, and project management agency that provide premium business solutions without the premium pricing. Our goal is to provide a hassle free experience leaving our clients to focus on what matters most, **business**. Our site has one goal in mind and that is to provide a simple UX and provide our agencies information with a non-obtrusive UI. 

## Technologies Used

**Stack**
 MongoDB: **NA**
 Express: **NA**
 RreactJs: Client Side
 NodeJs: Runtime

 **3rd Party packages used**
 1. [Material UI](https://material-ui.com/)
 2. [Axios: HTTP Requests](https://www.npmjs.com/package/axios)
 3. [Cypress: Testing](https://cypress.io)
 4. [dotenv: Environment Variables](https://www.npmjs.com/package/dotenv)
 5. [EmailJS: Email Client](https://www.emailjs.com)
 6. [Firebase: Analytics](https://firebase.google.com)
 7. [GraphQL](https://www.npmjs.com/package/graphql)
 8. [GraphQL Request](https://www.npmjs.com/package/graphql-request)
 9. [LogRocket: Session Tracking](https://logrocket.com)
 10. [MBReact](https://www.npmjs.com/package/mdbreact)
 11. [react-google-recaptcha: REcaptcha](https://www.npmjs.com/package/react-google-recaptcha)
 12. [react-router-dom: Router](https://www.npmjs.com/package/react-router-dom)
 13. [UUID: Universal Unique ID](https://www.npmjs.com/package/uuid)
 14. [GraphCMS: CMS](https://graphcms.com/)



## Scripts Available 

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run cypress:open `

Launch the Cypress test runner in a Chromium browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
02Designstudio is ready to be deployed!


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)


## Git Procedures

## Run App locally

**Make sure to receive .env file from Project Manager**

The steps below will help you run the app locally: 

1. Clone Repo: Copy the repo link from github and in the directory of your chooseing, run the below command: 

    `git clone <repo link from github>`

2. Install Dependencies: Run the below command in the project directory:
    `npm install`

3. Run the app: Run the below command in the project directory:
    `npm run start`

## Branch Naming Convention: 

All branches should be made from the `develop` branch using the following command: 
    `git checkout -b <branch name>`

When creating a branch for your assigned task we use the following convention:

**Put branch name in the appropriate Jira Issue**

**Bug**: `Bug/<Jira Issue Number>`
**Feature**: `Feature/<Jira Issue Number>`
**UI/UX**: `UI/UX/<Jira Issue Number>`

## Commits 

**NEVER COMMIT OR MERGE TO MASTER BRANCH**

When you are ready to make a commit to the branch that you are currently working on, make sure that you receive the appropriate `.gitmessage` file from the Project Manager.

### Set up Commit Message Template: 

1. Run the command: `git config --global commit.template ~/.gitmessage` 
   This command points the git config to the `.gitmessage` file in the root directory of your user account. 

2. In the root directory of your user account, create a file called `.gitmessage` with the following content:

```
Jira ID:
#Jira Issue ID



Problem:
#What was the goal



Solution:
#A list of changes made



Note
Before merging with develop run integration tests
```
3. Save and close the file.
4. When you are ready to commit, run the command: `git commit` and the template will show up in the terminal and all you need to do is fill out the appropriate information.
  
  ## VIM commands for commit messages:
  1. Edit: `i` --> Insert should appear in the terminal.
  2. Save and quit: `:wq`

### Full Git Commit Command flow: 

1. `git add .` - This command adds all the files modified in the current directory to the staging area.
2. `git commit` - Opens up commit message template.
3. `git push <remote name>` - Pushes the changes to the remote repository.


## Bug Reporting 

If a bug has been encountered please use the following link to report it: [Bug Report](https://forms.gle/uDs1jNctE3mnqVKw9)

## Roadmap 

At this time we do not have a roadmap planned for the project. 