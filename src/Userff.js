import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Song from"./Component/Song.mp3";


const Userff = () => {

  const audioref= useRef()


  const [player, setplayer] = useState(false);

  const playr = () => {
    if (player === false) {
      setplayer(true);
      audioref.current.play()
    } else {
      setplayer(false);
      audioref.current.pause()
    }
 
  };
  return (
    <div>
         <audio ref={audioref} src={Song}/> 
      <button onClick={playr}>hai</button>
      {player ? <FaPlay /> : <FaPause />}
    </div>
  );
};

export default Userff;
