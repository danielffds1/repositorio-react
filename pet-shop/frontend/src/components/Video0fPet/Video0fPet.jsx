import './Video0fPet.css'
import { dataVideo } from '../../assets/data';
import { useState } from 'react';

const Video0fPet = () => {

  const [showAllItems, setShowAllItems] = useState(false)

  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems)
  }

  return (
    <div className="video-of-pet">
      <div className="video-left">
        <h2>{dataVideo.title}</h2>
        <p>{dataVideo.description}</p>
        <ul className='video-left-list'>
          {dataVideo.items.slice(0, showAllItems ? undefined : 5).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="video-left-btn">
          {!showAllItems ? (
            <button className='video-left-btn-mais' onClick={toggleShowAllItems}>Ver mais</button>
          ) : (
            <button className='video-left-btn-mais' onClick={toggleShowAllItems}>Ver menos</button>
          )}
        </div>
      </div>

      <div className="video-right">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sL_SDNkYcME?si=M8zThMnWVlwq9AZJ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Video0fPet