const style1= {
    fontSize: "2rem"
}
const H2= React.createElement('h1',{
    style:{fontSize:"4rem"}
},'Topics Covered')

const P1 = React.createElement('p',{
    style: style1
},'The following is a list of all the topics we cover in the MDN learning area.')

const a1 = React.createElement('a',{href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",style: style1},'Getting started with the web')

const P2 = React.createElement('p',{
    style: style1
},'Provides a practical introduction to web development for complete beginners.')

const a2 = React.createElement('a',{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML",style: style1},'HTML — Structuring the web')

const P3 = React.createElement('p',{
    style: style1
},'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.')

const a3 = React.createElement('a',{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS",
style: style1},'CSS — Styling the web')

const P4 = React.createElement('p',{
    style: style1
},'CSS is the language that we use to control our web content &apos; s style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.')


const div= React.createElement('div',{},[H2,P1,a1,P2,a2,P3,a3,P4])

const flexDivStyle = {
    display: 'flex',
    alignItems : 'top',
    justifyContent : 'center',
    height : '100vh'
}


const flexDiv = React.createElement('div',{
    style : flexDivStyle
}, div)

ReactDOM.render(flexDiv, document.getElementById('root'))

