function save(){
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let data = {"name":name,"phone":phone,"message":message};
    if(!data){
        data = {"name":"name","phone":"phone","message":"message"};
    }
    fetch("https://node-9n0t.onrender.com/addUsers",{
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }).then(res=>{
        console.log(res)
    })
}

async function getData(){
    const response = await fetch("https://node-9n0t.onrender.com/usersData");
    const data = await response.json();
    console.log(data);
}