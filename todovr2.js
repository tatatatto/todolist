'usestrict'

const workid = document.getElementById('work');
const termid = document.getElementById('term');
const timeid = document.getElementById('time');
const go = document.getElementById('dobutton');
const back = document.getElementById('backbutton');
const ul = document.getElementById('ul');

var workvalue = null;//入力されたものの内容
var termvalue = null;//入力されたものの内容
var timevalue = null;//入力されたものの内容

var worknumber = null;//何個目のリストか
var wnumber = null;//何個目のリストか
var deletenumber = null;//今入力したものを消すで使用する消すリストを指定するもの

function hownow(){
    worknumber++;
    return worknumber;
}


go.onclick = () => {

workvalue = workid.value;
termvalue = termid.value;
timevalue = timeid.value;

//入力されたものを取得

wnumber　= hownow();

ul.insertAdjacentHTML('afterbegin','<li id="work' + wnumber + '">[ ' + workvalue + ' ] を [ ' + termvalue + ' ] までにやる。所要時間はおよそ[ ' + timevalue + ' ]<button id="button' + wnumber + '" onclick="gone(' + wnumber +')">この作業を消す<button>')

//<li id=work + worknumber>[ workvalue ] を [ termvalue ] までにやる。所要時間はおよそ[ timevalue ]<button id=button + worknumber onclick=gone(worknumber)>この作業を消す<button>　を追加（左には一部簡略化して記載している）


doset();


}

back.onclick = () =>{
    
deletenumber = wnumber;

gone(deletenumber);

doset();

deletenumber = null;

}

function gone(n){

//n番目のボタンとリストを消す

    console.log(n);
    
    var removework = "work" + n;

    document.getElementById(removework).remove();
    
    
}


function doset(){

//空欄にする

    workid.value = "";
    termid.value = "";
    timeid.value = "";

}
