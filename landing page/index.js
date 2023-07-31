const toggleButton = document.querySelector(".toggle-button");
const mobileMenu = document.querySelector(".mobile-menu");

toggleButton.addEventListener("click", () => {

  mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
});

// async function getUsers(){

//     let name = document.querySelector(".name")
//     let email = document.querySelector(".email")
//     let img = document.querySelector(".img")
//     const baseUrl = "https://reqres.in/api/users";
//     await fetch(baseUrl)
//     .then(user=>user.json())
//     .then((singleUsers) => {
//         let datas = singleUsers.data
//         name.innerHTML = datas[0].first_name + " " + datas[0].last_name
//         email.innerHTML = datas[0].email
//         img.src = datas[0].avatar
        
//     })


// }
// async function getUsers(){

//     let name_1 = document.querySelector(".name")
//     let email_1 = document.querySelector(".email")
//     let img_1 = document.querySelector(".img")
//     const baseUrl = "https://reqres.in/api/users";
//     await fetch(baseUrl)
//     .then(user=>user.json())
//     .then((singleUsers) => {
//         let datas = singleUsers.data
//         name_1.innerHTML = datas[1].first_name + " " + datas[1].last_name
//         email_1.innerHTML = datas[1].email
//         img.src_1 = datas[1].avatar
        
//     })


// }




// getUsers()