import React from 'react'
import { useSession } from 'next-auth/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import useSpotify from '../hooks/useSpotify'


const Player = () => {
  const spotifyApi = useSpotify()
  const { data: session,status } = useSession()
  const [currentTrackId, setCurrentIdTrack] = useRecoilState(isPlayingState)
  const [voume, setVolume] = useState(50)
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      
    </div>
  )
}

export default Player
