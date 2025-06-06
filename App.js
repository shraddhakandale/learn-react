import React from "react"
import ReactDOM from 'react-dom/client'

// React element => Object => after rendering it becomes html element

// const heading = React.createElement("h1", {id: "heading"}, "Hi form React")

// jsx - (this code is transpiled before it reaches to the browser) => parcel => Babel
// jsx => React.createElement() => js object => html
// const jsxHeading = <h1>This is heading in jsx</h1>

// React components and component composition

const Title = function(){
    return <h1>This is title component.</h1>
}

const Heading = ()=>{
    return <div>
        <Title/>
        <h2>This is heading component.</h2>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Heading />
)