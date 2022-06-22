import { useEffect, useState } from "react"
import {shuffle} from "lodash"
import { useSession } from "next-auth/react"
import { ChevronDownIcon } from "@heroicons/react/outline"
import { useRecoilState, useRecoilValue } from "recoil";
import {playlistIdState, playlistState} from "../atoms/playlistAtom"
import useSpotify from "../hooks/useSpotify";


  const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
  ]

function Center() {

  const { data: session } = useSession()
  const [color,setColor] = useState(null)
  const spotifyApi = useSpotify()
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist,setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setColor(shuffle(colors).pop())

  },[playlistId])

  useEffect(() => {
    spotifyApi.getPlaylist(playlistId).then((data)=> {
      setPlaylist(data.body)
    })
    .catch(error=> console.log("something wentg wrong",error))

  }, [spotifyApi, playlistId])

  console.log(playlist)

  return (
    <div className="flex-grow text-white ">
        <header className="absolute top-5 right-8">
          <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
            <img 
            className="rounded-full w-20 h-20"
            src={session?.user.image} alt='' />
            <br />
            <h2>Welcome to your Splice Page {session?.user.name}</h2>
            <ChevronDownIcon className="h-5 w-5" />
          </div>
        </header>
        <section className= {`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}>
          <img src={playlist?.images?.[0].url}
          className="h-44 w-44 shadow-2xl"
          alt="" />
        </section>
    </div>
  )
}

export default Center