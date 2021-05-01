const form = document.querySelector( ".js-form" ),
    input = form.querySelector( "input" ),
    greeting = document.querySelector( ".js-greetings" );

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
// showing이라는 클래스를 자바스크립트를 통해서 html태그에 원래 있던 클래스에 더해준다


function saveName ( text ) {
    localStorage.setItem( USER_LS, text );
}

function handleSubmit ( event ) {
    event.preventDefault();
    // prevent hitting enter works
    const currentValue = input.value;
    paintGreeting( currentValue );
    saveName( currentValue );
}

function askForName () {
    form.classList.add( SHOWING_CN );
    form.addEventListener( "submit", handleSubmit );
}

function paintGreeting ( text ) {
    form.classList.remove( SHOWING_CN );
    greeting.classList.add( SHOWING_CN );
    greeting.innerText = `Hello ${ text }`;
}


function loadName () {
    const currentUser = localStorage.getItem( USER_LS );
    if ( currentUser === null ) {
        askForName();
    } else {
        paintGreeting( currentUser );
    }
}


function init () {
    loadName();
}

init();