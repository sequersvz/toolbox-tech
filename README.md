# Toolbox tech tecnico Client && Server

## Running with docker-compose

- docker-compose build
- docker-compose up -d

or

- sh runApp.sh

### Server

Node.js v14.18.2-alpine API created using the next package.json

*** Dependencies: ***

- "axios": "^0.25.0"
- "express": "^4.17.2"
- "nodemon": "^2.0.15"

*** Development dependencies: ***

- "chai": "^4.3.6"
- "chai-http": "^4.3.0"
- "mocha": "^9.2.0"

*** Scripts ***

- test `mocha --exit --timeout=150000`
- start `nodemon`
- start:docker `npm test && npm start`

API RUN ON PORT *** 4000 *** BY DEFAULT

### Client

Web APP using React with my own webpack boilerplate based on: https://github.com/altafino/react-webpack-5-tailwind-2

created using the next package.json

*** Dependencies: ***

- "axios": "^0.25.0"
- "bootstrap": "^5.1.3"
- "react": "^17.0.2"
- "react-bootstrap": "^2.1.2"
- "react-dom": "^17.0.2"
- "react-redux": "^7.2.6"
- "redux": "^4.1.2"
- "redux-thunk": "^2.4.1"

*** Development dependencies: ***

- "@babel/core": "^7.15.0"
- "@babel/plugin-proposal-class-properties": "^7.14.5"
- "@babel/plugin-transform-runtime": "^7.15.0"
- "@babel/preset-env": "^7.15.0"
- "@babel/preset-react": "^7.14.5"
- "@pmmmwh/react-refresh-webpack-plugin": "^0.4.3"
- "@svgr/webpack": "^5.5.0"
- "@testing-library/jest-dom": "^5.14.1"
- "@testing-library/react": "^12.0.0"
- "@testing-library/user-event": "^13.2.1"
- "babel-jest": "^27.0.6"
- "babel-loader": "^8.2.2"
- "clean-webpack-plugin": "*"
- "copy-webpack-plugin": "^9.0.1"
- "cross-env": "^7.0.3"
- "css-loader": "^6.2.0"
- "css-minimizer-webpack-plugin": "^3.0.2"
- "html-webpack-plugin": "^5.3.2"
- "jest": "^27.0.6"
- "mini-css-extract-plugin": "^2.2.0"
- "prettier": "^2.3.2"
- "react-refresh": "^0.9.0"
- "standard": "^16.0.4"
- "style-loader": "^3.2.1"
- "terser-webpack-plugin": "^5.1.4"
- "webpack": "^5.49.0"
- "webpack-cli": "^4.7.2"
- "webpack-dev-server": "^3.11.2"
- "webpack-merge": "^5.8.0"

*** Scripts ***

- test `jest`
- standard `standard src/**/*.js`
- standard:fix `standard src/**/*.js --fix`
- start `webpack serve --config config/webpack.dev.js`
- build `NODE_ENV=production webpack --config config/webpack.prod.js`
- prettify `npm prettier \"**/*.*(js|jsx)\" --ignore-path=.prettierignore --write`