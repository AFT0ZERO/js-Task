//task 1

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((request)=>{
        return request.json();
    }).then((data)=>{
       const divContanier = document.getElementsByClassName("container")[0];
       data.forEach(card => {
        const cardDiv = document.createElement("div");
        cardDiv.className='card';
        cardDiv.innerHTML=`
            <h3>${card.title}</h3>
            <p>${card.body}</p>
        `;
        divContanier.appendChild(cardDiv);
       });
    });


//task 2 
fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    .then((request)=>{
        return request.json();
    }).then((data)=>{
       const divComment = document.getElementsByClassName("comments")[0];
       data.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className='card-comment';
        commentDiv.innerHTML=`
            <h4>${comment.name}</h4>
            <p>${comment.email}</p>
            <p>${comment.body}</p>
        `;
        divComment.appendChild(commentDiv);
       });
    });

//tsak 3
fetch("https://jsonplaceholder.typicode.com/albums?userId=4")
    .then((request)=>{
        return request.json();
    }).then((data)=>{
       const Divalbums = document.getElementsByClassName("albums")[0];
       data.forEach(albums => {
        const albumsDiv = document.createElement("div");
        albumsDiv.className='card-albums';
        albumsDiv.innerHTML=`
            <h3>${albums.title}</h3>
            
        `;
        Divalbums.appendChild(albumsDiv);
       });
    });

//task 4 
fetch("https://jsonplaceholder.typicode.com/photos?albumId=4")
    .then((request)=>{
        return request.json();
    }).then((data)=>{
       const divPhotos = document.getElementsByClassName("photos")[0];
       data.forEach(photo => {
        const photosDiv = document.createElement("div");
        photosDiv.className='card-photos';
        photosDiv.innerHTML=`
            <h3>${photo.title}</h3>
            <img src="${photo.thumbnailUrl}" >
        `;
        divPhotos.appendChild(photosDiv);
       });
    });

//task 5
function statusChacked(statue)
{
    if (statue) return "checked"; 
}
fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
    .then((request)=>{
        return request.json();
    }).then((data)=>{
       const divToDo = document.getElementsByClassName("to-do")[0];
       data.forEach(toDo => {
        let toDoDiv = document.createElement("div");
        toDoDiv.className='card-to-do';
        toDoDiv.innerHTML=`
           <h3>${toDo.title}</h3>
            <input type="checkbox" ${statusChacked(toDo.completed)} >
        `;
        divToDo.appendChild(toDoDiv);
       });
    });

//task 6 
fetch("https://jsonplaceholder.typicode.com/users")
    .then((request)=>{
        return request.json();
    }).then((data)=>{
       const divUsers = document.getElementsByClassName("users")[0];
       data.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.className='card-users';
        userDiv.innerHTML=`
            <h3>${user.name}</h3>
            <p>${user.username}</p>
            <p>${user.email}</p>
            <p>${user.address.street} <br>
               ${user.address.city} <br> 
               ${user.address.zipcode} <br></p>
        `;
        divUsers.appendChild(userDiv);
       });
    });

//    let obj=  {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }

//   for (const [key,value] of Object.entries(obj.address)) {
//     console.log(key , value);
//   }


