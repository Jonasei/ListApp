module.exports = {
    entry: './src/main.jsx',
    output: {
        path: './bin',
        filename: 'main.bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?instertPragma=React.DOM&harmony'
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
