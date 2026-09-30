// ===============================
// Firebase 配置
// ===============================


const firebaseConfig = {


apiKey: "AIzaSyBjbWzouqMkYpVLoJvwZbBV-QbU_FR78",


authDomain: "qs1333.firebaseapp.com",


projectId: "qs1333",


storageBucket: "qs1333.firebasestorage.app",


messagingSenderId: "381550749738",


appId: "1:381550749738:web:47a47f6b3e1d6d1dffbb53",


measurementId: "G-M3E36TNLY"


};





// ===============================
// 初始化 Firebase
// ===============================


firebase.initializeApp(firebaseConfig);



const db =
firebase.firestore();





// ===============================
// 保存 AI任务
// ===============================


async function saveTask(id,data){



try{


await db
.collection("AI_TASKS")
.doc(id)
.set({


target:data.target,


number:data.number,


rate:data.rate,


time:Date.now()


});



console.log(
"任务保存成功:",
id
);



return true;



}catch(error){


console.log(
"保存失败:",
error
);



return false;


}



}








// ===============================
// 读取 AI任务
// ===============================


async function getTask(id){



let retry = 0;



while(retry < 3){



try{


console.log(
"读取任务:",
id
);





const doc =

await db
.collection("AI_TASKS")
.doc(id)
.get();





console.log(
"任务是否存在:",
doc.exists
);






if(doc.exists){



let data =
doc.data();



// 保存手机缓存

try{


localStorage.setItem(
id,
JSON.stringify(data)
);


}catch(e){}




return data;



}






return null;





}catch(error){



console.log(
"Firebase读取错误:",
error
);




retry++;



// 等待2秒重新读取

await new Promise(

resolve=>

setTimeout(
resolve,
2000
)

);



}



}





return null;



}
