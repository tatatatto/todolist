'uses trict'

const fwork = document.getElementById('firstwork');
const fterm = document.getElementById('firstterm');
const ftime = document.getElementById('firsttime');
const swork = document.getElementById('seccondwork');
const sterm = document.getElementById('seccondterm');
const stime = document.getElementById('seccondtime');
const button = document.getElementById('startbutton')
const list = document.getElementById('listarea');
const video = document.getElementById('videoarea');
var videotime　= null;
console.log('1');
console.log(videotime);

button.onclick = () => {

    var fworkv = fwork.value;
    var ftermv = fterm.value;
    var ftimev = ftime.value;
    console.log('2');


if (fworkv === "癒し"){
    console.log('3-1');
    switch(ftermv){

        case "猫":
        case "ねこ":
        case "ネコ":
            videotime++;
            console.log(videotime);
            if(videotime>2){
                video.removeChild(video.firstChild)
            }
            video.insertAdjacentHTML("afterBegin",'<iframe width="560" height="315" src="https://www.youtube.com/embed/XeJ2kqfAq4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            break;
        case "水着美人":
        case  "水着のおねーちゃん":
            videotime++;
            console.log(videotime);
            if(videotime>2){
                video.removeChild(video.firstChild)
            }
            video.insertAdjacentHTML("afterBegin",'<iframe width="560" height="315" src="https://www.youtube.com/embed/uXmXhpABXV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
            break;
    }
} else if (fworkv){
    console.log('3-2');
    list.insertAdjacentHTML("afterBegin",'<table><tr><td>' + fworkv + '</td><td>' + ftermv + '</td><td>' + ftimev + '</td></tr></table>');
}

    var sworkv = swork.value;
    var stermv = sterm.value;
    var stimev = stime.value;


    if (sworkv === "癒し"){
        console.log('4-1');
        switch(stermv){
    
            case "猫":
            case "ねこ":
            case "ネコ":
                videotime++;
                console.log(videotime);
                if(videotime>2){
                    video.removeChild(video.firstChild)
                }
                video.insertAdjacentHTML("afterBegin",'<iframe width="560" height="315" src="https://www.youtube.com/embed/XeJ2kqfAq4Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                break;
    
            case  "水着のおねーちゃん":
            case  "水着美人":
                videotime++;
                console.log(videotime);
                if(videotime>2){
                    video.removeChild(video.firstChild)
                }
                video.insertAdjacentHTML("afterBegin",'<iframe width="560" height="315" src="https://www.youtube.com/embed/uXmXhpABXV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
                break;
        }
    } else if (sworkv){
        console.log('4-2');
        list.insertAdjacentHTML("afterBegin",'<table><tr><td>' + sworkv + '</td><td>' + stermv + '</td><td>' + stimev + '</td></tr></table>');
    }

console.log(videotime);

}

ftime.onkeydown = (event) => {
        if (event.key === 'Enter') {
          button.onclick();
        }
      }

stime.onkeydown = (event) => {
        if (event.key === 'Enter') {
        button.onclick();
         }
        }


//並べ替え
