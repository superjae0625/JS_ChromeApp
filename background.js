const body = document.querySelector( "body" );

const IMG_NUMBER = 3;

function paintImage ( imgNumber ) {
    const image = new Image();
    image.src = `images/${ imgNumber + 1 }.jpg`;
    //1을 사용한 이유는 Math.floor 때문에
    image.classList.add( "bgImage" );
    body.prepend( image );
}

function genRandom () {
    const number = Math.floor( Math.random() * IMG_NUMBER );
    return number;
}

function init () {
    const randomNumber = genRandom();
    paintImage( randomNumber );

}

init();