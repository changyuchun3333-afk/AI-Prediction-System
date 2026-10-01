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


try{


console.log(
"请求任务ID:",
id
);



// 增加超时保护

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
"Worker返回:",
data
);



if(data.error){


console.log(
"Worker错误:",
data.error
);


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
