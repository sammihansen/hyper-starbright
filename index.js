const cursorColor = "#98eef5";
const foregroundColor = "#1b1b2e";
const backgroundColor = "#fff6f6";
const borderColor = "#fff";
const colors = {
    lightBlack: "#555c5f",
    lightRed: "#f07373",
    lightGreen: "#30da7e",
    lightYellow: "#e9ea29",
    lightBlue: "#5689ad",
    lightMagenta: "#c2649f",
    lightCyan: "#4ba89d",
    lightWhite: "#1f203a",
    black: "#98eef5",
    red: "#f3c4c4",
    green: "#93ba84",
    yellow: "#feff5f",
    blue: "#bcb8ff",
    magenta: "#f3adcd",
    cyan: "#87e0dc",
    white: "#8ba5b3"
};

exports.decorateConfig = config => {
    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        borderColor,
        cursorColor,
        colors,
        termCSS: `
            ${config.termCSS || ""}
        `,
        css: `
            ${config.css || ""}
            .tabs_nav .tabs_list .tab_text {
                color: ${foregroundColor} !important;
            }

            .tabs_nav .tabs_title {
                color: ${foregroundColor} !important;
            }
        `
    });
};