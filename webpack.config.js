const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/js/index.js',
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
            {
              test: /\.html$/i,
              loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                loader: 'css-loader',
              },
           
        ],

    },
    
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:3000
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/public/index.html'
        })
    ]

}