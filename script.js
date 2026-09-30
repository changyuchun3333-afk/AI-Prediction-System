// ==============================
// AI CORE v4.0
// ==============================


// 后台密码

const ADMIN_PASSWORD = "qs133";





// ==============================
// 登录后台
// ==============================


// ==============================
// 登录后台
// ==============================


function login(){


let password =
document.getElementById("password").value;



if(password === "qs133"){



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
// 生成分享任务
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





// 生成任务编号


let taskID =
"AI"+
Date.now();





// 保存到 Firebase

await saveTask(
taskID,
data
);





let link =

location.origin+
location.pathname+
"#"+
taskID;





document.getElementById(
"linkBox"
).innerHTML=

`
SHARE LINK:

<br>

${link}

`;





navigator.clipboard.writeText(link);

alert(
"分享链接已复制:\n\n"+link
);



}









// ==============================
// AI运行
// ==============================


function startAI(data){

document.getElementById("adminPanel").style.display="none";


document.getElementById("screen").style.display="block";


//下面继续你的代码

}

document.getElementById(
"screen"
).style.display="block";



document.getElementById(
"loginPanel"
).style.display="none";


document.getElementById(
"adminPanel"
).style.display="none";





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


"QUANTUM PATH FOUND",


"RUNNING PREDICTION MODEL",


"VERIFYING RESULT",


"DATA STREAM COMPLETE",


"CALCULATION FINISHED"


];





let timer=setInterval(()=>{



let line =
document.createElement("div");



line.innerHTML =

"> "

+

logs[
Math.floor(
Math.random()*logs.length
)

]

+

"  "

+

Math.floor(
Math.random()*999999
);





document.getElementById(
"code"
).appendChild(line);





if(
document.getElementById("code").children.length>18
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
"status"
).innerHTML=
"COMPLETE";




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



},120);



}









// ==============================
// 打开分享链接自动运行
// ==============================



async function checkShare(){


let taskID =
location.hash.substring(1);



if(!taskID){

return;

}



let data =
await getTask(taskID);



if(data){


document.getElementById("adminPanel").style.display="none";


document.getElementById("screen").style.display="block";


startAI(data);



}else{


alert("任务不存在");


}


}




// 页面启动

window.onload=function(){


let taskID =
location.hash.substring(1);



if(taskID){


checkShare();



}else{


document.getElementById("loginPanel").style.display="block";

document.getElementById("adminPanel").style.display="none";


document.getElementById("screen").style.display="none";


}


};
