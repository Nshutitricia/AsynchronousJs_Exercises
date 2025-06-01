// Write an asynchronous function that fetches all users from the API endpoint:
// https://jsonplaceholder.typicode.com/users
// Your function should return an array of objects. Each object should contain only the name and email of a user.

async function getCredentials() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!data.ok){
            console.log(`Http Error: ${data.status}`)
        }
        let response = await data.json()
        return response.map((n)=>({
            name: n.name,
            email: n.email
        }))
    } catch (error) {
        console.log(error.message)
        return []
    }
}

getCredentials().then((user)=>console.log(user))