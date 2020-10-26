const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: false,
        port: 1337,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
          '@': path.resolve(__dirname, './src/'),
          '@utils': path.resolve(__dirname, './src/utils'),
          '@const': path.resolve(__dirname, './src/const'),
          '@types': path.resolve(__dirname, './src/types/types'),

        }
    },
    devtool: 'source-map',
};
