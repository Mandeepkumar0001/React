import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

function MyApp(){
    return(
        <div>
            <h1>MANDEEP MUKHDA</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
const anotherElement= (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser="writer Mandeep Mukhda"

const reactElement =  React.createElement(
    'a',
    {
        href: 'https://google.com',target: '_blank'
    },
    'click me to visit google ',
    anotherUser
    // anotherElement

)

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <MyApp/>
    reactElement
    // anotherElement
    // <App/>
)
