# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## How to Run With Backend (in local enviroment)
### Installing the project

To run the Panoboard project, you need to have these tools installed on your system in advance:

- **nvm** : to install nvm follow this [link](https://github.com/nvm-sh/nvm)
- **yarn** : to install yarn follow this [link](https://classic.yarnpkg.com/en/)
- **node** : install node version 14
```bash
#to download node and set version 14 as default
nvm use 14
```

After you have installed the required tools, you need to do the following steps to get the project:
```bash
# To get the project from the GitLab repository
git clone git@gitlab.com:develoop_team/software/panoboard/panoboard-panel.git
```
 
The next step would be adding the environment files that contain the necessary keys and parameters. To do this, you have to follow these steps in the same directory you are (`panoboard-panel`):
 

```bash
# Add environments to .env file:
cat .env.development
# Then past the environment parameters, and press ctrl+d
```

Optionally you could do the above step with any text editor. Just create a file named `.env.development` and past the environment values in it.

The environment values should look like this :

```
REACT_APP_BASE_URL=<value>
REACT_APP_BASE_URL_API=<value>
REACT_APP_REDUX_LOGGER=<value>
GOOGLE_API_KEY=<value>
...
```

### Running the project

To run the project, run this command on a terminal:

```bash
#to install all dependencies
yarn install

#to run project in development mode
yarn dev
```

Project should be up and running few minutes after executing the above command.

result:

```
Compiled successfully!

You can now view panoboard-panel in the browser.

  Local:            http://localhost:3050
  On Your Network:  http://192.168.1.244:3050

Note that the development build is not optimized.
To create a production build, use yarn build.
```

In addition, you can open the [http://localhost:3050/auth/login](http://localhost:3050/auth/login) in your local browser to check the Frontend. 

### Stop services
To stop the services, you can run:
```
Ctrl+d
```

