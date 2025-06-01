// Write an asynchronous function that fetches to-do items from the API endpoint:
// https://jsonplaceholder.typicode.com/todos
// Your function should return an array containing the titles of all to-do items that are marked as completed.

async function toDoTitles() {
    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos')
        if(!data.ok){
            console.log(`Http Error: ${data.status}`)
        }
        let response = await data.json()
        return response.filter((u)=> u.completed).map((n)=>n.title)
    } catch (error) {
        console.log(error.message)
        return []
    }
}
toDoTitles().then((user)=>console.log(user))