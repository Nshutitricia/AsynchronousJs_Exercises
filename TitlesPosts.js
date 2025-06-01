// Write an asynchronous function that fetches posts from the API endpoint:
// https://jsonplaceholder.typicode.com/posts
// Your function should return an array of the titles of the first five posts.

async function titlePosts() {
    try {
        let fetchPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!fetchPosts.ok){
            console.log(`Http Error: ${fetchPosts.status}`)
        }
        let response = await fetchPosts.json()
        return response.map((n)=> n.title).slice(0,5)
    } catch (error) {
        console.log(error.message)
        return []
    }
}

titlePosts().then((post)=> console.log(post))