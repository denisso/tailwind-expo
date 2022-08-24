const colplugin = require("./plugintailwind/colplugin")
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {},
    },
    plugins: [colplugin],
};
