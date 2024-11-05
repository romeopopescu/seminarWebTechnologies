document.getElementById('getData').addEventListener('click', async()=>{
    try{
        const res = await fetch('http://localhost:3000/get-resource?id=1');
        const data = await res.json();
        console.log("GET response: ", data);
    }catch(err){
        console.error(err);
    }
});

document.getElementById('postData').addEventListener('click', async()=>{
    try{
        const res = await fetch('http://localhost:3000/post-resource',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name:'New Resource'})
        });
        const data = await res.json();
        console.log("POST response: ", data);
    }catch(err){
        console.error(err);
    }
});