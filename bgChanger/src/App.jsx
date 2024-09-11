import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
            <button
            onClick={()=> setColor("red")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: "red"}}
            >RED</button>
            <button
            onClick={()=> setColor("green")} 
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: "green"}}
            >GREEN</button>
            <button
            onClick={()=> setColor("blue")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: "blue"}}
            >BLUE</button>
            <button
            onClick={()=> setColor("black")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: "black"}}
            >BLACK</button>
            <button
            onClick={()=> setColor("yellow")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none" style={{backgroundColor: "yellow"}}
            >YELLOW</button>
            <button
            onClick={()=> setColor("purple")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: "purple"}}
            >PURPLE</button>
            <button
            onClick={()=> setColor("pink")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none" style={{backgroundColor: "pink"}}
            >PINK</button>
            <button
            onClick={()=> setColor("white")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none" style={{backgroundColor: "white"}}
            >WHITE</button>
            <button
            onClick={()=> setColor("gray")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none" style={{backgroundColor: "gray"}}
            >GRAY</button>
            <button
            onClick={()=> setColor("lavender")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none" style={{backgroundColor: "lavender"}}
            >LAVENDER</button>
            <button
            onClick={()=> setColor("olive")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none" style={{backgroundColor: "olive"}}
            >OLIVE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
