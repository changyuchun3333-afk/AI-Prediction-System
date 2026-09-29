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
document.getElementById("target").value,


number:
document.getElementById("number").value,


rate:
document.getElementById("rate").value



};



let code=encode(data);



let link=
location.origin+
location.pathname+
"#"+
code;



navigator.clipboard.writeText(link);



alert(
"分享链接已经复制:\n\n"+
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



let progress=0;



let timer=setInterval(()=>{


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

<br><br>

SYSTEM COMPLETE

`;

}



},200);



}






window.onload=function(){



if(location.hash){


let data=
decode(
location.hash.substring(1)
);



setTimeout(()=>{


startAI(data);


},100);



}



}