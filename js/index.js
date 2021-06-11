const searchInput = document.querySelector("#search-input")



searchInput.addEventListener("keyup", function(event) {
    let searchQuery =  event.target.value.toLowerCase()
    // console.log(searchQuery)

    let allNamesDOMCollection = document.querySelectorAll(".name")
    // console.log(allNamesDOMCollection[0].textContent)

    for (let counter=0; counter<allNamesDOMCollection.length; counter++) {
       const currentName = allNamesDOMCollection[counter].textContent.toLowerCase()
       if(currentName.includes(searchQuery)) {
           allNamesDOMCollection[counter].style.display = "block"
       }
       else{
           allNamesDOMCollection[counter].style.display = "none"
       }
        
    }
})

// if(currentName.charAt(0, currentName.length-1) === searchQuery.charAt(0, searchQuery.length-1)){
        //     console.log(currentName)
        // }


// let allNamesDOMCollection = document.getElementsByClassName("name")
//     console.log(allNamesDOMCollection[0].textContent)
