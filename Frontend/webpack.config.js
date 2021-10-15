const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: './src/app/indexApp.js',
    output:{
        path: __dirname+'\\src\\public\\js\\vue',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/, use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins:[new VueLoaderPlugin]
}