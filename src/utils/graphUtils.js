
function getPathString(src, dest, disbursementSide) {

    if (disbursementSide) {
        return `C${src.x},${src.y}, ${dest.x},${src.y} , ${dest.x},${dest.y} `;
    }
    return `C${src.x},${src.y}, ${src.x},${dest.y} , ${dest.x},${dest.y} `;
}

function getPenPointString(src) {

    return `M${src.x},${src.y}`;
}

function getEdgePath(src, dest, direction) {

    return getPenPointString(src) + getPathString(src, dest, direction);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export default {
    getPathString,
    getPenPointString,
    getEdgePath,
    getRandomColor
}