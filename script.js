function createShare(){


let data={

target:
document.getElementById("target").value,

number:
document.getElementById("number").value,

rate:
document.getElementById("rate").value

};


let id =
"AI"+data.number;



localStorage.setItem(
id,
JSON.stringify(data)
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
).innerHTML=
data.target;



let progress=0;



let logs=[

"CONNECTING AI NODE",

"TARGET SCAN: "+data.target,

"INPUT DATA ANALYSIS: "+data.number,

"ANALYZING TARGET",

"BUILDING POSSIBILITY MATRIX",

"RUNNING NEURAL MODEL",

"SEARCHING DATABASE",

"QUANTUM PATH FOUND",

"NEURAL NETWORK ACTIVE",

"DATA VERIFIED",

"CALCULATION COMPLETE"

];



let timer=setInterval(()=>{


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



if(
document.getElementById("code").children.length>20
){

document.getElementById("code")
.removeChild(
document.getElementById("code").firstChild
);

}



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

INPUT DATA:

<br>

${data.number}


<br><br>

SUCCESS RATE:

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
