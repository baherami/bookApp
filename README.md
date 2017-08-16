## About this project

- This is a demo react app based on instructions in Udacity react course.

- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
- The npm installation includes react-router-dom for routing purposes.
- The project is based on a template suggestion by Udacity.
- Backend is developed by Udacity and the interface is accebile via BoookAPI file.

## Installation
1. `npm install`
2. `npm start`

## Known issues

### 1. Search Limits
The API used for search is limited to a few keywords. Please check [search.md](https://raw.githubusercontent.com/udacity/reactnd-project-myreads-starter/master/SEARCH_TERMS.md) for the latest keywords.

### 2. Warnings on dismounted components
The current implementation of book component might call the get API and before the result is ready, the same component might be removed dynamically. This will cause many warnings on Search component as the  keyword for search is changing.  

## License
This app is licensed under the
[MIT License](https://github.com/baherami/bookapp/blob/master/LICENSE.md).
