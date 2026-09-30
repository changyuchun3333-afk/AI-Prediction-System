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


    try{


        // 先读取手机缓存

        let cache =
        localStorage.getItem(id);



        if(cache){


            console.log(
            "读取本地缓存"
            );


            return JSON.parse(cache);


        }




        // Firebase读取

        const doc =
        await db
        .collection("AI_TASKS")
        .doc(id)
        .get();



        if(doc.exists){


            let data =
            doc.data();



            // 保存本地

            localStorage.setItem(
            id,
            JSON.stringify(data)
            );



            return data;


        }



        return null;



    }catch(error){


        console.log(
        "Firebase读取失败:",
        error
        );


        return null;


    }


}
