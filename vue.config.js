module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/MORII/'
    : '/',

    transpileDependencies: [
      'vuetify'
    ],

    
}
