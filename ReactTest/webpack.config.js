﻿var path = require('path');
var webpack = require('webpack');

module.exports = {
    /*devtool: 'source-map',
    plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false,
        },
        minimize: true
    })
    ],*/
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
    context: path.join(__dirname, 'Content'),
    entry: {
        server: './server'
    },
    devServer: {
        contentBase: path.join(__dirname, 'build')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
          // Transform JSX in .jsx files
          {
              test: /\.jsx$/
              , include: [
                path.join(__dirname, "Content/components")
              ]
              , loader: "babel-loader"
              , query: {
                  presets: ['react', 'es2015'
                      //Comment for PROD
                      //  , 'react-hmre']
                      ]
              }
          }, {
              test: /\.js$/
              , include: [
                path.join(__dirname, "Content/components")
              ]
              , loader: "babel-loader"
              , query: {
                  presets: ['react', 'es2015'
                        //Comment for PROD
                        //, 'react-hmre']
                        ]
              }
          }, {
              test: /\.css$/, loader: "style-loader!css-loader"
          }
        ]
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['', '.js', '.jsx']
    }
};