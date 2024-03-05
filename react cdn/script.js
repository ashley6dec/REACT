//USING VANILLA JAVASCRIPT

const Root = document.getElementById("root");


// const H2= document.createElement("h2")
// H2.innerText = "I am H2 using JS"

// Root.appendChild(H2);


//USING REACT

const H2 = React.createElement("input",{
    type: "text",
    placeholder: "Enter Name",

    onChange: (e)=>{
        console.log(e.target.value)
    }
},null)

ReactDOM.render(H2,Root)
