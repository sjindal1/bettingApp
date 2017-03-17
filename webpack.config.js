module.exports = {
    entry : "./public/client.js",
    output : {
        path : __dirname + "/public",
        filename : "client.min.js"
    },
    module : {
        loaders :[
            {
                exclude : /(node_modules)/,
                loader : "babel-loader",
                query : {
                    presets : ['es2015','react'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            }
        ]
    },
    watch: true
}
