const toDoForm = document.querySelector( ".js-toDoForm" ),
    toDoInput = toDoForm.querySelector( "input" ),
    toDoList = document.querySelector( ".js-toDoList" );


const TODOS_LS = "toDos";

let toDos = [];


function deleteToDo ( event ) {
    const btn = event.target;
    // console.dir( event.target );
    // console.dir( event.target.parentNode );
    // dir를 통해서 parentNode를 찾아냄
    const li = btn.parentNode;
    toDoList.removeChild( li );
    const cleanToDos = toDos.filter( function ( toDo ) {
        // console.log( toDo.id, li.id );
        return toDo.id !== parseInt( li.id );
        //filter는 array의 모든 아이템을 실행하고, true인 아아이템들만 가지고 새로운 array를 만듬.
        // id가 안 지워진 것들로만 array를 만듬.
        //change string to integer "1" -> 1
    } );
    // console.log( cleanToDos );
    toDos = cleanToDos;
    saveToDos();
    //이 부분을 위해 toDos를 let 으로 함.
}


function saveToDos () {
    localStorage.setItem( TODOS_LS, JSON.stringify( toDos ) );
}
//자바스크립트는 local storage 안에 있는 모든 데이터를 string으로 저장하려고 함.
//데이터를 전달할 때, JS가 다룰 수 있도록 object으로 바꿔주는 기능


function paintToDo ( text ) {
    const li = document.createElement( "li" );
    // querySelector가 html에서 데이터를 가져오는 반면
    // createElement는 바로 생성함
    const delBtn = document.createElement( "button" );
    const span = document.createElement( "span" );
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener( "click", deleteToDo );
    span.innerText = text;
    // text는 handleSubmit function에서 가져온 값
    li.appendChild( delBtn );
    li.appendChild( span );
    li.id = newId;
    toDoList.appendChild( li );
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push( toDoObj );
    saveToDos();
}

function handleSubmit ( event ) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo( currentValue );
    toDoInput.value = "";
    //값을 넣고 엔터를 누른 후 삭제됨
}


function loadToDos () {
    const loadedToDos = localStorage.getItem( TODOS_LS );
    if ( loadedToDos !== null ) {
        // console.log( loadedToDos );
        const parsedToDos = JSON.parse( loadedToDos );
        // console.log( parsedToDos );
        // JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
        parsedToDos.forEach( function ( toDo ) {
            paintToDo( toDo.text );
            //forEach는 array에 담겨있는 것들을 각각 한번씩 함수를 실행시켜줌.
            // console.log( toDo );
        } );
    }
}


function init () {
    loadToDos();
    toDoForm.addEventListener( "submit", handleSubmit );
}

init();