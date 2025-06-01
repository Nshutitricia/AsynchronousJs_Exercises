// Write an asynchronous function that fetches posts from the API endpoint:
// https://jsonplaceholder.typicode.com/posts
// Your function should accept a userId parameter and return an array of posts made by the user with the specified userId.


async function getUserPosts(userId) {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        if(!data.ok){
            console.log(`Http Error: ${data.status} `)
        }
        let response = await data.json()
        return response.filter((n)=> n.userId === userId)
    } catch (error) {
        console.log(error.message)
        return []
    }
}
getUserPosts(1).then((u)=> console.log(u))