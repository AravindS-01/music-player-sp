import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify';
import "./library.css";

const Library = () => {
  const [playlists,setPlatlist] = useState();
  useEffect(() => {
    apiClient.get("me/playlists").then((playlist) =>{
      setPlatlist(playlist.data.items)
    })
  }, []);
  console.log("playlist",playlists);
  return (
    <div>
      {playlists && (playlists as unknown as any)?.map((playlist: any )=>{ return(
      <>
      <h3 className='title'>{playlist.name}</h3>
      </>
      )})}
    </div>
  )
}

export default Library;
