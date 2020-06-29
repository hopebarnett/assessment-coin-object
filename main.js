let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           let ranNum = Math.round(Math.random())
               this.state = ranNum
           //if ranNum > 0.5 we can set this.state to 0
           //else we can set this.state to 1
           console.log(this.state)
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if (this.state === 0){
               return("Heads")
           } else {
               return("Tails")
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
         
         
        
         if (this.state === 0){
            image.src = "https://upload.wikimedia.org/wikipedia/commons/4/44/2014_ATB_Quarter_Obv.png"
         }  else {
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg1onki72yIT2Ho8vHheFP_GSoQxv9UDEcNQ&usqp=CAU"
         }
        return image;
    }
};


// bodyElement.append(image)

// console.log(coin)    

// coin.flip()

// console.log(coin)
function display20Flips(){
    // let counter = 0
    let div
    for(let counter = 1; counter <= 20; counter = counter + 1){
        coin.flip()
         let text = coin.toString()
        console.log(text)
        div = document.createElement("div")
        div.append(text)
        bodyElement.append(div)

    }

}

function display20Images(){
    for(let counter = 1; counter <= 20; counter = counter + 1){
        coin.flip()
        let images = coin.toHTML()
        bodyElement.append(images)

    }
}



let bodyElement = document.querySelector("body")

console.log(bodyElement)
display20Flips()
display20Images()
// bodyElement.append(myImageElement)
