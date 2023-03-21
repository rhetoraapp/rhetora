import React, {useEffect} from "react";
import './VideoPlayer.css'
// import mp4 from '../assets/'

// import VideoPlayer from "react-video-js-player";

const Player = props => {
    
        const closeOnEscapeKeyDown = (e) => {
            if ((e.charCode || e.keyCode) === 27) {
                props.onClose();
            }
        }
        useEffect(() => {
            document.body.addEventListener("keydown", closeOnEscapeKeyDown);
            return function cleanup() {
                document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
            };
        }, []);
    
    if (!props.show){
        return null
}
return (
<div className="modal" onClick={props.onClose}>
        <div className="modal-body" onClick={e=>e.stopPropagation()}>
        {/* <video width="800" autoPlay controls = 'true' style={{padding:'20px',borderRadius:'2rem'}}>
        <source src={mp4} type="video/mp4" />
Your browser does not support the video tag.
</video> */}
        </div>
    </div>
)
}

export default Player;