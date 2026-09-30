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











// =======================
// 弹窗锁定
// =======================



let popup =
document.getElementById(
"aiPopup"
);



if(popup){



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






//显示弹窗

popup.classList.remove(
"hidden"
);





//禁止页面操作


document.body.style.overflow=
"hidden";





popup.style.pointerEvents=
"auto";








//8秒后解除锁定


setTimeout(function(){



popup.classList.add(
"hidden"
);



document.body.style.overflow=
"auto";



},8000);



}






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
).style.display=
"block";





document.getElementById(
"adminPanel"
).style.display=
"none";





document.getElementById(
"screen"
).style.display=
"none";




}



};
