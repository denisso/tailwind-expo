const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["./*.html"],
    theme: {
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("third", "&:nth-child(3)");
        }),
    ],
};
