// Write a JavaScript function that fetches data from multiple APIs concurrently.

async function ApiFetch() {
    try {
        const  apiList=[ 'https://jsonplaceholder.typicode.com/posts/4',
        'https://jsonplaceholder.typicode.com/posts/5',
        'https://jsonplaceholder.typicode.com/posts/6']

    let data = await Promise.all(
        apiList.map((n)=> fetch(n).then(res=> res.json()))
    )
    return data
    
    } catch (error) {
        console.error(error.message)
        return []
    }
    
}
ApiFetch().then(n=> console.log(n))