userEl = document.getElementById("data")
cities = []
streets = []
names = []
comments = []
posts = []
imagesGlobal = []
async function getUsers(){

    let response = await fetch('https://jsonplaceholder.typicode.com/users/')
    let responseJson = await response.json()
    return responseJson
}

async function getSpecificUser(user){

    let response = await fetch(user)
    let responseJson = await response.json()
    return responseJson
}


async function getComments(){

    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    let responseJson = await response.json()
    return responseJson
}

async function getPosts(){

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let responseJson = await response.json()
    return responseJson
}

async function getImages(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let responseJson = await response.json()
    return responseJson
}

function removeQuotations(str){
    return str.substring(1,str.length - 1)
}

async function displaySite(){
    let breaking = "</br>"
    let newDiv = document.createElement("div")

    await getUsers()

    for(i = 0; i < 10; i++){
        // console.log(cities[i])
        let newImg = document.createElement("img")

        const response = await fetch("https://unsplash.it/1920/1080?random")
        const blob = await response.blob()
        newImg.src= URL.createObjectURL(blob)
        newDiv.appendChild(newImg)

        let random1 = Math.floor(Math.random() * 10);
        let random2 = Math.floor(Math.random() * 10);
        let responseToPost1 = `<p class="fff">${names[random1]}:</p> ${comments[random2]}\n`
        let responseToPost2 = `<p class="fff">${names[random2]}:</p> ${comments[random1]}\n`


        newDiv.className = "createdDiv"
        newDiv.innerHTML += `
        ${breaking} 
        ${names[i]}
        ${breaking} 
        ${breaking} 
        ${breaking} 
        <div class="bad">
        <p class="post" >Post:</p>
        <p>${posts[i]} </p>
        </div>
        ${breaking}
        <div class="comment">
        <p class="commentTitle" >Comments</p>
        <p>${responseToPost1} </p>
        <p>${responseToPost2} </p>
        </div>
        ${breaking} 
        ${breaking}`

    document.body.appendChild(newDiv)
    document.body.innerHTML += breaking
    newDiv.innerHTML = ""
    }
}


getUsers().then((json) =>{

    for(i = 0; i < 10; i++){
        console.log(json[i])


        cities.push(removeQuotations(JSON.stringify(json[i].address.city)))
        streets.push(removeQuotations(JSON.stringify(json[i].address.street)))
        names.push(removeQuotations(JSON.stringify(json[i].name)))

        console.log(cities[i])


    }
})

getComments().then((json) =>{
    for(i = 0; i < 10; i++){


        comments.push(removeQuotations(JSON.stringify(json[i].name)))
        console.log(comments[i])


    }
})

getImages().then((json) =>{
    for(i = 0; i < 10; i++){


        imagesGlobal.push(removeQuotations(JSON.stringify(json[i].url)))

        console.log(imagesGlobal[i])


    }
})

getPosts().then((json) =>{
    for(i = 0; i < 10; i++){


        posts.push(removeQuotations(JSON.stringify(json[i].body)))

        console.log(posts[i])

    }
})



displaySite()

// getSpecificUser('https://jsonplaceholder.typicode.com/users/4').then((json) =>{
//     console.log(json.address)
//     userEl.innerHTML += JSON.stringify(json.address)
// })
