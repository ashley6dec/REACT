//console.log(React) // we added cdn links so React is defined in its library

// const App = ()=>{
//     return(
//         <h2>Hello from React Project</h2>
//     )
// }

const App = React.createElement('h2', {},"Hello from React Project")

ReactDOM.render(App, document.getElementById('root'))