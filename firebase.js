// ===============================
// Cloudflare Worker API
// ===============================


const WORKER_URL =
"https://ai-core-api.changyuchun3333.workers.dev";




// ===============================
// 保存任务
// ===============================

// ==============================
// 保存 AI任务到 Worker
// ==============================


async function saveTask(data){



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
WORKER_URL + "?task=" + id
);



let data =
await response.json();



console.log(
"Worker返回:",
data
);



if(data.error){

return null;

}



return data;



}catch(error){


console.log(
"读取失败:",
error
);


return null;


}


}
