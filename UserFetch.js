// Write an asynchronous JavaScript function that fetches all users from the API endpoint:
// https://jsonplaceholder.typicode.com/users
// Your function should return an array containing the usernames of all users.


async function fetchUsers(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let response = await data.json()
    return response.map((n) => n.username)
}
fetchUsers().then((val)=> console.log(val))