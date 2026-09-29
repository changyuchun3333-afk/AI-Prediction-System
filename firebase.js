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




// 初始化 Firebase

firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();





// ===============================
// 保存 AI 任务
// ===============================


async function saveTask(id,data){


    await db
    .collection("AI_TASKS")
    .doc(id)
    .set({

        target:data.target,

        number:data.number,

        rate:data.rate,

        time:Date.now()

    });


}






// ===============================
// 读取 AI 任务
// ===============================


async function getTask(id){


    const doc = await db
    .collection("AI_TASKS")
    .doc(id)
    .get();



    if(doc.exists){

        return doc.data();

    }


    return null;


}