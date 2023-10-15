import './VideoItem.css'

function VideoItem({video, onVideoSelect}) {
    return (
        <div onClick={()=>onVideoSelect(video)}className="myVideo-item list-group-item">
            <div className="img-thumbnail">
            <img src={video.snippet.thumbnails.medium.url} alt="" />
            </div>

            <p>{video.snippet.title}</p>
        </div>
    )
}

export default VideoItem;