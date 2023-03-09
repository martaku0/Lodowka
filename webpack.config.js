const path = require('path');
module.exports = {
    entry: {
        Note: './scripts/Note.ts',
        Lodowka: './scripts/Lodowka.ts',
        script: './scripts/script.ts'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    //watch: true,
    optimization: {
        minimize: true,
    },
};