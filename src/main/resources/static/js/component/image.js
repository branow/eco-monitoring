


function DeleteRowImage() {
    return Image('del-row-img', '/img/delete.png', 'del');
}

function Image(className, src, alt) {
    let img = document.createElement('img');
    img.className = className;
    img.src = src;
    img.alt = alt;
    return img;
}