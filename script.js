let taskData={};



function createShare(){


let targetValue =
document.getElementById("target").value;


let numberValue =
document.getElementById("number").value;


let rateValue =
document.getElementById("rate").value;



//生成任务编号

let id =
"AI"+
numberValue;



//保存数据到浏览器本地

localStorage.setItem(
id,
JSON.stringify({

target:targetValue,

number:numberValue,

rate:rateValue

})
);



let link =
location.origin+
location.pathname+
"#"+
id;



navigator.clipboard.writeText(link);



alert(
"AI任务链接已复制:\n\n"+
link
);



}





function startAI(data){


document.getElementById(
"inputPanel"
).style.display="none";


document.getElementById(
"screen"
).style.display="block";



document.getElementById(
"targetShow"
).innerHTML=data.target;



let progress=0;

let seconds=10;



let logs=[

"CONNECTING AI NODE",

"ANALYZING TARGET",

"BUILDING MATRIX",

"RUNNING MODEL",

"SEARCHING POSSIBILITY",

"NEURAL NETWORK ACTIVE",

"DATA VERIFIED",

"QUANTUM PATH FOUND"

];



let timer=setInterval(()=>{


seconds-=0.1;


document.getElementById(
"time"
).innerHTML=
seconds.toFixed(1)+"s";



let line=document.createElement("div");

line.innerHTML=

"> "+
logs[
Math.floor(
Math.random()*logs.length
)
]+
"  "+
Math.floor(Math.random()*999999);



document.getElementById(
"code"
).appendChild(line);



progress++;


document.getElementById(
"progress"
).style.width=
progress+"%";



if(progress>=100){


clearInterval(timer);



document.getElementById(
"result"
).innerHTML=

`

ANALYSIS COMPLETE

<br><br>

TARGET:

<br>

${data.target}

<br><br>

SUCCESS RATE

<br>

${data.rate}%

<br><br>

AI CONFIDENCE:

<br>

HIGH

`;

}


},100);



}




window.onload=function(){



try{


let id =
location.hash.substring(1);



if(id){


let data =
localStorage.getItem(id);



if(data){


startAI(
JSON.parse(data)
);


}

}



}catch(e){


console.log(e);


}



}
