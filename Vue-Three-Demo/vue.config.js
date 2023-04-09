const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
            ],
        },
        plugins: [new VueLoaderPlugin()],
    },
};
