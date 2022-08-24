module.exports = (opts) => {
    return {
        postcssPlugin: "testplugin",
        Once(root) {
            console.log("Hello")
        },
    };
};
module.exports.postcss = true;
