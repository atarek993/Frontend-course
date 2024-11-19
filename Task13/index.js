async function getallcomments() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments",{
        method:"GET"
    })

    const finaloutput = await response.json()
    displayComments(finaloutput)

    
}
getallcomments()


function displayComments(data){
    data.forEach(element=> {
        document.querySelector(".container").innerHTML += 
        `
        <div class="comment">
        <h2>${element.name}</h2>
        <p>${element.body}</p>
        </div>
        `;
        
    });
}