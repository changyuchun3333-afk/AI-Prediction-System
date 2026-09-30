// ==============================
// AI CORE v6.0
// ==============================


// 后台密码

const ADMIN_PASSWORD = "qs133";




// ==============================
// 后台登录
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
).innerHTML=
"ACCESS DENIED";


}


}







// ==============================
// 创建分享链接
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




// 保存 Firebase

await saveTask(
taskID,
data
);




// 生成手机兼容链接

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
// AI运行
// ==============================


function startAI(data){



//隐藏登录

let loginPanel =
document.getElementById(
"loginPanel"
);


if(loginPanel){

loginPanel.style.display="none";

}



//隐藏后台

let adminPanel =
document.getElementById(
"adminPanel"
);


if(adminPanel){

adminPanel.style.display="none";

}




//显示运行页面

let screen =
document.getElementById(
"screen"
);


if(screen){

screen.classList.remove("hidden");

screen.style.display="block";

}




//显示目标

document.getElementById(
"targetShow"
).innerHTML =
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





let timer =
setInterval(function(){



let line =
document.createElement("div");



line.innerHTML=

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
"status"
).innerHTML=
"COMPLETE";





document.getElementById(
"result"
).innerHTML=


`

<div class="finalResult">


<h2>
ANALYSIS COMPLETE
</h2>



<div>
TARGET:
</div>

<div class="value">
${data.target}
</div>



<br>


<div>
INPUT NUMBER:
</div>

<div class="value">
${data.number}
</div>




<br>


<div>
SUCCESS RATE:
</div>

<div class="value rate">
${data.rate}%
</div>




<br>


<div>
AI CONFIDENCE:
</div>

<div class="value">
HIGH
</div>



</div>


`;



}



},120);



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
// 页面启动
// ==============================


window.onload=function(){



let params =
new URLSearchParams(
location.search
);



let taskID =
params.get("task");



if(taskID){


checkShare();



}else{



document.getElementById(
"loginPanel"
).style.display="block";



document.getElementById(
"adminPanel"
).style.display="none";



document.getElementById(
"screen"
).style.display="none";


}



};
