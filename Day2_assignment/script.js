// //------VANILLA JS APPROACH
// // const div = document.createElement("div")

// // const h2 = document.createElement("h2")
// // h2.innerText = "Hello I am h2"

// // const p = document.createElement("p")
// // p.innerText = "Hellp I am p"

// // div.appendChild(h2)
// // div.appendChild(p)
// // document.getElementById("root").appendChild(div)



// //--------REACT APPROACH
// // import React from 'react';
const h2 = React.createElement('h2',{
    style: {
    backgroundColor:"blue"
},id: "h2-root",className: "blue-text italic"},'Topics covered')



const myElement1 = React.createElement('p',{
    style: {
    backgroundColor:"white"
},id: "h2-root",className: "white-text"},

        'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.')

        const myElement2 = React.createElement('p',{
            style: {
            backgroundColor:"white"
        },id: "h2-root",className: "white-text"},

        'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ',
         React.createElement('a',{href:"https://developer.mozilla.org/en-US/"},'the rest of MDN'),

        ', and other intermediate to advanced resources that assume a lot of previous knowledge.')

        const myElement3 = React.createElement('p',{
            style: {
                backgroundColor:"white"
            },id: "h2-root",className: "white-text"
        },

        'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.')
        


const div = React.createElement('div',{},[h2,myElement1,myElement2,myElement3])

const flexDivStyle = {
    display: 'flex',
    alignItems : 'top',
    justifyContent : 'center',
    height : '100vh'
}

const flexDiv = React.createElement('div',{
    style : flexDivStyle
}, div)

ReactDOM.render(flexDiv, document.getElementById("root"))


// // export default flexDiv;
// //how babel interprets

// // const App = ()=>{
// //     const h2 = document.createElement("h2")
// //     h2.innerText="hello"
// //     return h2
// // }







