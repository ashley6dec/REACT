
//function that can be used multiple times
function Navbar() {
    const obj ={
        name:"Lily",
        age:20
    };
    // return <div>My React App from CDN</div>
    return(
    <div className="main_container">
        <p>
            {obj.name}
            {obj.age}
            </p>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    </div>
    );
}

function Home() {
    const names= ["A", "B","C","D"]
    return (
        <div>
            <h1>Hello</h1>
            <Navbar />
            {
                names.map((ele, index)=>(
                    <ul key={ele.id}>
                        <li>{ele}</li>
                    </ul>
                ))}
               
        </div>
    );
}

ReactDOM.render(<Home />, document.querySelector('#root'));//to connect react js with html