// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails. 

async function fetchWithRetry(url,retries= 5) {
    for(let attempt = 1 ; attempt <=retries; attempt++){
        try {
            let data = await fetch(url)
            if(!data.ok){
                console.log(`Http Error: ${data.status}`)
            }
            let response = await data.json()
            return response
        
        } catch (error) {
            console.error(error.message)
            if(attempt === retries){
                throw new Error(`Failed after ${retries}`);
                
            }
    }
    }

}
fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1', 3).then((n)=> console.log(n)).catch((e)=> console.error(e.message))