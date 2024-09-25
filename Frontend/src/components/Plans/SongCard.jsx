import React from 'react'

const SongCard = ({music}) => {
  return (
    <div className="card">
    <img src={`/${music.image}`} alt={music.title} />
    <h3>{music.title}</h3>
    <p>{music.artist}</p>
    <audio controls>
        <source src={`/${music.audio}`} type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
</div>
  )
}

export default SongCard;