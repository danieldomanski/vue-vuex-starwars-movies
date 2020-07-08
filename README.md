# vue-vuex-starwars-movies

### 💡 Features
- Star wars movies listing with possibility of: searching and filtering (thanks to https://swapi.dev/)
- Movie pages for detailed info
- Adding movies reviews
- Listing of all personal reviews

### 🛠 Tech stack
- Vue
- Vue Router
- Vuex for state managment + async layer
- Webpack from scratch (without vue-cli), webpack-dev-server
- Tailwind (css utility kit) for speedy UI building

### 🧠 Problems/Future improvements
- vue router history mode didnt work out to de-uglify routes (urls appear combined with /#/ in the middle). Could be resolved with setting up backend and wildcarding routes with  default index.html.
- state in vuex is not persisted between hard reloads
- adding Users to the app

### 🏃 How to run the project?
- clone the repo - either through git clone or .zip
- open up cmd in the root directory
- npm install
- npm run dev
