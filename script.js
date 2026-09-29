function encode(data){

return btoa(
unescape(
encodeURIComponent(
JSON.stringify(data)
)
)
);

}



function decode(data){

return JSON.parse(
decodeURIComponent(
escape(
atob(data)
)
)
);

}



function createShare(){


let data={

target:
target.value,


number:
number.value,


rate:
rate.value


};



let link=
location.origin+
location.pathname+
"#"+
encode(data);



navigator.clipboard.writeText(link);


alert(
"分享链接已复制\n\n"+
link
);


}





let logs=[

"CONNECTING AI NODE",

"VERIFYING DATA STREAM",

"ACCESSING NEURAL MATRIX",

"LOADING QUANTUM MODEL",

"DECRYPTING PACKETS",

"SCANNING POSSIBILITY FIELD",

"CALCULATING PROBABILITY",

"NODE 07 CONNECTED",

"AI MODEL SYNCHRONIZED",

"HASH VALIDATION COMPLETE"

];



function startAI(data){


inputPanel.style.display="none";

screen.style.display="block";



targetShow.innerHTML=data.target;



let seconds=10;

let progress=0;



let timer=setInterval(()=>{


seconds-=0.1;


time.innerHTML=
seconds.toFixed(1)+"s";



let line=document.createElement("div");

line.className="line";


let random=
logs[
Math.floor(
Math.random()*logs.length
)
];



line.innerHTML=

"> "+
random+
" : "+
Math.floor(Math.random()*999999);



code.appendChild(line);



if(code.children.length>18){

code.removeChild(
code.firstChild
);

}



progress+=1;


document.getElementById(
"progress"
).style.width=
progress+"%";




if(progress>=100){


clearInterval(timer);



result.innerHTML=

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


if(location.hash){


let data=
decode(
location.hash.substring(1)
);


startAI(data);


}

}
