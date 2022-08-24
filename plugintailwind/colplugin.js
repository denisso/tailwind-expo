const plugin = require('tailwindcss/plugin')
const colCount = plugin(
    function({ addUtilities, theme, e }) {
        const values = theme('colCount')
        var utilities = Object.entries(values).map(([key, value]) => {
            return {
                [`.${e(`col-count-${key}`)}`]: { columnCount: `${value}` },
            }
        })
        addUtilities(utilities)
    }, {
        theme: {
            colCount: {
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
            },
        },
    },
)
module.exports = colCount