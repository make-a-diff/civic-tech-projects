module.exports = {
    entry: {
        app: './app/assets/scripts/app.js',
        vendor: './app/assets/scripts/vendor.js'
    },
    output: {
        path: './app/temp/scripts',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }

        ]
    }
}
