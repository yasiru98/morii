module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/MORII/'
    : '/',

    transpileDependencies: [
      'vuetify'
    ],

    pages: {
      'index': {
        entry: './src/pages/Splash/main.js',
        template: 'public/index.html',
        title: 'Splash',
        chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
      },
      'login': {
        entry: './src/pages/Login/main.js',
        template: 'public/login.html',
        title: 'Login',
        chunks: [ 'chunk-vendors', 'chunk-common', 'login' ]
      },
      'home': {
        entry: './src/pages/Home/main.js',
        template: 'public/home.html',
        title: 'Home',
        chunks: [ 'chunk-vendors', 'chunk-common', 'home' ]
      },
      'addmorii': {
        entry: './src/pages/AddMorii/main.js',
        template: 'public/addmorii.html',
        title: 'AddMorii',
        chunks: [ 'chunk-vendors', 'chunk-common', 'addmorii' ]
      },
    }
}
