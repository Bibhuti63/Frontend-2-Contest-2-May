let users = [
    {id: 1, name: "John", age: "18", profession: "developer"},
    {id: 2, name: "Jack", age: "20", profession: "developer"},
    {id: 3, name: "Karen", age: "19", profession: "admin"}
];

function filterUsers() {
    const t1=document.getElementById("profession");
    const selectedPro=t1.value;
    // console.log(t1.value);
    // console.log(selectedPro);
    if(selectedPro===""){
        alert("Please select a profession ");
    }
    else{
        const filteredUsers=users.filter((user)=>{
            user.profession===selectedPro
        });
        console.log(filteredUsers);
        displayUsers(filteredUsers);
    }

    
}

function addUser(){
    const name1=document.getElementById("name").value;
    const age1=document.getElementById("age").value;
    const prof1=document.getElementById("newProfession").value;

    if(name1==="" || age1==="" || prof1===""){
        alert("Enter all the details");
    }
    else{
        const user1={
            id: users.length+1,
            name: name1,
            profession: prof1,
            age: age1
        };

        users.push(user1);
    }

}

function displayUsers(){
    const userList=document.getElementById("user-list");
    // userList.innerHTML="Name : Bibhuti Profession : ASE age : 22";
    // console.log(userList.innerHTML);
    userList.innerHTML = "";

    users.forEach(function(user){
        const card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Age: ${user.age}</p>
            <p>Profession: ${user.profession}</p>
        `;
        userList.appendChild(card);
    });

}