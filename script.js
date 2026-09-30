// ==============================
// AI CORE v7.0
// ==============================


// 后台密码

const ADMIN_PASSWORD = "qs133";




// ==============================
// 登录后台
// ==============================


function login(){


let password =
document.getElementById("password").value;



if(password === ADMIN_PASSWORD){



document.getElementById(
"loginPanel"
).style.display="none";



document.getElementById(
"adminPanel"
).classList.remove("hidden");



document.getElementById(
"adminPanel"
).style.display="block";



}else{


document.getElementById(
"loginError"
).innerHTML =
"ACCESS DENIED";


}


}








// ==============================
// 创建分享任务
// ==============================


async function createShare(){



let data={


target:
document.getElementById("target").value,


number:
document.getElementById("number").value,


rate:
document.getElementById("rate").value


};





let taskID =
"AI"+Date.now();





await saveTask(
taskID,
data
);






let link =

location.origin+
location.pathname+
"?task="+
taskID;






document.getElementById(
"linkBox"
).innerHTML=

`

SHARE LINK:

<br><br>

${link}

`;






navigator.clipboard.writeText(link);



alert(

"分享链接已复制:\n\n"+
link

);



}









// ==============================
// AI运行核心
// ==============================


function startAI(data){



//隐藏后台

let adminPanel =
document.getElementById(
"adminPanel"
);


if(adminPanel){

adminPanel.style.display="none";

}





//隐藏登录

let loginPanel =
document.getElementById(
"loginPanel"
);


if(loginPanel){

loginPanel.style.display="none";

}






//显示运行界面


let screen =
document.getElementById(
"screen"
);



screen.classList.remove(
"hidden"
);



screen.style.display="block";








document.getElementById(
"targetShow"
).innerHTML=
data.target;





let progress=0;






let logs=[


"CONNECTING AI NODE",


"TARGET SCAN : "+data.target,


"INPUT DATA ANALYSIS : "+data.number,


"BUILDING POSSIBILITY MATRIX",


"SEARCHING NEURAL DATABASE",


"RUNNING PREDICTION MODEL",


"VERIFYING DATA",


"QUANTUM PATH FOUND",


"AI MODEL COMPLETE"


];









let timer=setInterval(function(){





let line =
document.createElement("div");





line.innerHTML =


"> "+

logs[
Math.floor(
Math.random()*logs.length
)

]

+

"  "+

Math.floor(
Math.random()*999999
);






let codeBox =
document.getElementById(
"code"
);





codeBox.appendChild(line);




//代码自动滚动

codeBox.scrollTop =
codeBox.scrollHeight;





//限制代码数量

if(codeBox.children.length>25){


codeBox.removeChild(
codeBox.firstChild
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
"status"
).innerHTML=
"COMPLETE";









//显示结果


document.getElementById(
"result"
).innerHTML=



`

<div class="finalResult">


<h2>

ANALYSIS COMPLETE

</h2>



<br>


TARGET:

<br>


<div class="value">

${data.target}

</div>




<br>


INPUT NUMBER:

<br>


<div class="value">

${data.number}

</div>





<br>


SUCCESS RATE:

<br>


<div class="value rate">

${data.rate}%

</div>




<br>


AI CONFIDENCE:

<br>


<div class="value">

HIGH

</div>



</div>


`;

  
//显示AI完成弹窗

showAIPopup(data);
  
}

},120);

  
// ==============================
// AI完成锁定弹窗
// ==============================


function showAIPopup(data){


let popup =
document.getElementById("aiPopup");



if(!popup){

return;

}



document.getElementById(
"popupTarget"
).innerHTML =
data.target;



document.getElementById(
"popupNumber"
).innerHTML =
data.number;



document.getElementById(
"popupRate"
).innerHTML =
data.rate+"%";



popup.classList.remove(
"hidden"
);



document.body.style.overflow =
"hidden";



popup.style.zIndex =
"99999";


}




// ==============================
// 分享链接读取
// ==============================


async function checkShare(){



let params =
new URLSearchParams(
location.search
);



let taskID =
params.get("task");



if(!taskID){

return;

}



let data =
await getTask(taskID);



if(data){


startAI(data);



}else{


alert(
"任务不存在"
);


}


}









// ==============================
// MATRIX 数字雨
// ==============================


function startMatrix(){


let canvas =
document.getElementById(
"matrix"
);



if(!canvas){

return;

}



let ctx =
canvas.getContext(
"2d"
);



canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;




let chars =
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";



let fontSize =
14;



let columns =
Math.floor(
canvas.width/fontSize
);



let drops=[];



for(let i=0;i<columns;i++){

drops[i]=1;

}





function draw(){



ctx.fillStyle =
"rgba(0,0,0,0.08)";



ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);




ctx.fillStyle =
"#00ff66";



ctx.font =
fontSize+"px monospace";





for(let i=0;i<drops.length;i++){



let text =
chars[
Math.floor(
Math.random()*chars.length
)
];



ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);





if(
drops[i]*fontSize >
canvas.height
&&
Math.random()>0.975
){


drops[i]=0;


}



drops[i]++;



}



}



setInterval(
draw,
50
);



}









// ==============================
// 页面启动
// ==============================


window.onload=function(){



// 启动数字雨

startMatrix();




let params =
new URLSearchParams(
location.search
);



let taskID =
params.get("task");





if(taskID){


checkShare();



}else{



let login =
document.getElementById(
"loginPanel"
);



let admin =
document.getElementById(
"adminPanel"
);



let screen =
document.getElementById(
"screen"
);




if(login){

login.style.display="block";

}



if(admin){

admin.style.display="none";

}



if(screen){

screen.style.display="none";

}



}



};
