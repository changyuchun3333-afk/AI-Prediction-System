// ===============================
// Cloudflare Worker API
// ===============================


const WORKER_URL =
"https://ai-core-api.changyuchun3333.workers.dev";




// ==============================
// 保存 AI任务到 Worker
// ==============================


async function saveTask(data){


try{


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



}catch(error){


console.log(
"创建任务失败:",
error
);


return null;


}



}





// ===============================
// 获取任务
// ===============================


async function getTask(id){


console.log(
"我是最新firebase.js"
);


try{


try{


console.log(
"请求任务ID:",
id
);



// 第一次请求

let response =
await Promise.race([


fetch(
WORKER_URL +
"?task=" +
encodeURIComponent(id)
),



new Promise((_,reject)=>

setTimeout(

()=>reject("请求超时"),

8000

)

)


]);



console.log(
"Worker状态:",
response.status
);



let data =
await response.json();



console.log(
"第一次返回:",
data
);




// 如果第一次失败，等待2秒重新请求

if(data.error){



console.log(
"第一次读取失败，开始重试..."
);



await new Promise(

resolve=>

setTimeout(
resolve,
2000
)

);





let retryResponse =
await fetch(

WORKER_URL +
"?task=" +
encodeURIComponent(id)

);





let retryData =
await retryResponse.json();





console.log(
"第二次返回:",
retryData
);





if(!retryData.error){

return retryData;

}





return null;



}





return data;



}catch(error){



console.log(
"读取任务失败:",
error
);



return null;



}


}
