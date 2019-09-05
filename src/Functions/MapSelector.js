export const mapSelector = props => {
    if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPad") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
        window.open(`maps://${props}`);
    } else {
        window.open(`https://${props}`);
    }
};
