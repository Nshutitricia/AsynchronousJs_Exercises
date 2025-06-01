// Write an asynchronous JavaScript function that fetches all users from the API endpoint:
// https://jsonplaceholder.typicode.com/users
// Your function should return an array containing the usernames of all users.


async function fetchUsers(){
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!data.ok){
            console.log(`Http Error : ${data.status}`)
        }
        let response = await data.json()
        return response.map((n) => n.username)
    } catch (error) {
        console.error(error.message)
        return []
    }
    
}
fetchUsers().then((val)=> console.log(val))