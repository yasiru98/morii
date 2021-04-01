module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/morii/'
    : '/',

    transpileDependencies: [
      'vuetify'
    ],

    
}
