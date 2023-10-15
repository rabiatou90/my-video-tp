function VideoDetail({video}) {
    if(!video){
        return <div>Loding...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
    <div>
        <div class="ratio ratio-16x9">
        <iframe src={videoSrc}title="YouTube video" allowfullscreen></iframe>
    </div>
        <div className="card mb-3">
        <div className="card-body">
            <h5 className="card-title">{video.snippet.title}</h5>
            <p className="card-text">{video.snippet.description}</p>

        </div>
        </div>
        </div>
    )
}
export default VideoDetail