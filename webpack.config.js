const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
       port: 8001
   },
   module: {
      rules: [
         {
            use: [
               
               'style-loader', // creates style nodes from JS strings      
               'css-loader' // translates CSS into CommonJS
               
               
             ],
             test: /\.jsx|.css$/,
            exclude: /node_modules/
           },
           {
            use: [
               'babel-loader'
                            
             ],
             test: /\.js$/,
            exclude: /node_modules/
           }        

         
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}