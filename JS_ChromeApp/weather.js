const weather = document.querySelector( ".js-weather" );
const COORDS = `coords`;
const API_KEY = `629dfcedd7e5ae9c7ca5b325da4742b6`;
//openweathermap
/**api => 다른 서버로부터 쉽게 데이터를 가져올 수 있는 수단. 컴퓨터끼리 소통하기 위해 고안됨.*/

function getWeather ( lat, lng ) {/**fetch=>api로부터 데이터를 받아오는 메소드. */
    //https://api.openweathermap.org/data/2.5/weather?lat=40.6201053&lon=-111.86342479999999&appid=629dfcedd7e5ae9c7ca5b325da4742b6&units=metric
    fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ API_KEY }&units=metric` )
        .then( function ( response ) {//response 인자 안에 api fetch가 자동으로 return한 날씨 정보의 response stream이 담김.
            return response.json();//이걸 json을 통해 자바스크립트 객체로 바꿔서 function (jsoned)의 jsoned 인자로 반환함.
        } ).then( function ( jsoned ) {
            console.dir( jsoned );
            //json구조로 출력
            const temperature = jsoned.main.temp;
            const place = jsoned.name;
            weather.innerText = `Temperature of ${ place } is ${ temperature } degrees Celsius.`;
        } );//getweather의 부분은 완전히 이해하기 힘듬. 유튜브 풀스택에서 자세히 다룸.
    /**then=>온점(.)이전 작업이 완전히 끝난 후 괄호 안의 내용을 실행시킴.
    * 이렇게 하지 않고 평소처럼 ;로 문장을 끝나고 바로 다음 문장을 썼을 경우,
    * 이전 작업이 시간이 걸려 다 완료되지 않았는데도 다음 문장이 실행되어 오류가 발생할 수 있음. */
}/**크롬 콘솔창의 network 패널에서 ctrl+R키를 눌러 우리가 request한 내용을 확인할 수 있음. */

/*JavaScript는 웹사이트로 Request를 보내고 응답을 통해서 데이터를 얻을 수 있는데
가져온 데이터를 Refresh 없이도 나의 웹사이트에 적용시킬 수 있다.
→ ex) 이메일을 확인할 때, 웹사이트를 새로고침하지 않아도
실시간으로 메일이 오는 것을 확인할 수 있다.
왜냐하면, JavaScript가 보이지 않는 곳에서 계속 데이터를 가져오고 있기 때문이다.*/


function saveCoords ( userLoaction ) {
    localStorage.setItem( COORDS, JSON.stringify( userLoaction ) );/** JSON.stringify=>자바스크립트 object를 string으로 바꿔 줌.*/
}
/**json=>javascript object notation의 준말. 데이터가 자바스크립트 외부/내부로 오고갈 때 형식을 맞추기 위해 사용.
* ex) string-object 간 변환*/
/**성공 시 실행되는 함수한테 getCurrentPosition함수가 자동으로 위치 정보를 인자로 담을 수 있게 건네줌. 그걸 선언해서 사용하기만 하면 됨. */

function handleGeoSuccess ( position ) {
    const lat = position.coords.latitude;/**chrome 콘솔에서 console.dir해서 찾아볼 수 있음. (consolg.log(position);)*/
    const lng = position.coords.longitude;
    const userLoaction = {
        lat, lng /**(객체 key)lat : (위에 선언된 const)lat을 축약하여 표현한 것. lng도 마찬가지. */
    };
    saveCoords( userLoaction );
    getWeather( userLoaction.lat, userLoaction.lng );
}

function handleGeoError () {
    console.log( "can't access geoLocation" );
}

function askForCoords () {
    navigator.geolocation.getCurrentPosition( handleGeoSuccess, handleGeoError );/** */
}

function loadCoords () {
    const loadedCoords = localStorage.getItem( COORDS );
    if ( loadedCoords === null ) {
        askForCoords();
    }
    else {
        const parsedCoords = JSON.parse( loadedCoords );/**자바스크립트 string을 object로 바꿔 줌. */
        getWeather( parsedCoords.lat, parsedCoords.lng );
    }
}

function init () {
    loadCoords();
}

init();