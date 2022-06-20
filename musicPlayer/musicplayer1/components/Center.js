import { useEffect, useState } from "react"
import {shuffle} from "lodash"


  const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
  ]

function Center() {

  const [color,setColor] = useState(null)

  useEffect(() => {
    setColor(shuffle(colors).pop())

  },[])

  return (
    <div className="flex-grow text-white ">
        <header className="absolute top-5 right-8">
          <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
            <img src='' alt='' />
            <br />
            <h2>Welcome to your Splice Page</h2>
          </div>
        </header>
        <section className= {`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}>
        </section>
    </div>
  )
}

export default Center