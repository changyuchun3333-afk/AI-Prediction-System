// ===============================
// Cloudflare Worker API
// ===============================


const WORKER_URL =
"https://ai-prediction-system.changyuchun3333.workers.dev";




// ===============================
// 保存任务
// ===============================


async function saveTask(id,data){


let response =
await fetch(
WORKER_URL,
{

method:"POST",

headers:{
"Content-Type":"application/json"
},


body:JSON.stringify(data)


});


let result =
await response.json();


console.log(
"任务创建:",
result
);



return result;


}






// ===============================
// 获取任务
// ===============================


async function getTask(id){



try{


let response =
await fetch(

WORKER_URL+
"?task="+
id

);



let data =
await response.json();



if(data.error){


console.log(
"任务不存在"
);


return null;


}



return data;



}catch(e){


console.log(
"Worker读取失败",
e
);


return null;


}



}
