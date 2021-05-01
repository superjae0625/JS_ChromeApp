console.log( "I am working." );

// varibale
const a = 221;
//use let for changable variable
const b = a - 5;
console.log( b, a );

//string
const what = "Jay";
console.log( what );

//boolean
const why = true;
console.log( why );

//Number
const qqq = 555;

//Float
const www = 12.33;

//Array
const daysOfWeek = [ "Mon", "Tue", "Wed", "Thu", "Fir", "Sat", "Sun" ];
console.log( daysOfWeek );
console.log( daysOfWeek[ 2 ] );

//Object(naming on value)
const whatup = {
    name: "Hey",
    age: 28,
    gender: "Male",
    Asian: true,
    favMovies: [ "AB", "CD", ],
    //favFood object 안에 array가 있고 그 안에 object가 있음
    favFood: [ {
        name: "Kimchi",
        fatty: false
    }, {
        name: "burger",
        fatty: true
    } ]
};

console.log( whatup );

console.log( whatup.gender );

whatup.gender = "Female";
console.log( whatup.gender );



console.clear();


// //fucntion
// function sayHello ( potato, chicken ) {
//     console.log( 'Hello!', potato, "you are", chicken );
//     console.log( `Hello! ${ potato } you are ${ chicken }` );
//     return `Hello! ${ potato } you are ${ chicken }`;
// }

// sayHello( 'Jay', 15 );

// const greetJay = sayHello( "Jay", 15 );

// console.log( greetJay );


// //calculator
// const calculator = {
//     plus: function ( a, b ) {
//         return a + b;
//     },
//     minus: function ( a, b ) {
//         return a - b;
//     }
// };

// const plus = calculator.plus( 2, 3 );
// console.log( plus );

// const minus = calculator.minus( 5, 3 );
// console.log( minus );


// //html
// const title = document.querySelector( "#title" );
// console.log( title );

// title.innerHTML = "Hi! From JS";
// title.style.color = "red";

// document.title = "I love you";


// function handleClick () {
//     title.style.color = "blue";
// }

// title.addEventListener( "click", handleClick );



// //resize
// function handleResize ( event ) {
//     console.log( event );
// }

// window.addEventListener( "resize", handleResize );



// //if, if else, else
// const age = prompt( "How old are you?" );
// if ( age > 18 ) {
//     console.log( "Okay" );
// } else if ( age <= 18 && age > 10 ) {
//     console.log( "maybe" );
// }
// else {
//     console.log( "No" );
// }


// const title = document.querySelector( "#title" );

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick () {
//     const currentColor = title.style.color;
//     // console.log( currentColor );
//     if ( currentColor === BASE_COLOR ) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init () {
//     title.style.color = BASE_COLOR;
//     title.addEventListener( "mouseenter", handleClick );
// }
// init();


// //wifi
// function handleOffline () {
//     console.log( "Bye" );
// }

// function handleOnline () {
//     console.log( "Welcome Back" );
// }

// // this works when wifi is turned off
// window.addEventListener( "offline", handleOffline );
// // this works when wifi is turned on
// window.addEventListener( "online", handleOffline );




// // color change

// const title = document.querySelector( "#title" );
// const CLICKED_CLASS = "clicked";

// // function handleClick () {
// //     const hasClass = title.classList.contains( CLICKED_CLASS );
// //     if ( hasClass ) {
// //         title.classList.remove( CLICKED_CLASS );
// //     } else {
// //         title.classList = add( CLICKED_CLASS );
// //     }
// // }

// // 위의 내용과 같음 - toggle
// function handleClick () {
//     title.classList.toggle( CLICKED_CLASS );
// }

// function init () {
//     title.addEventListener( "click", handleClick );
// }
// init();