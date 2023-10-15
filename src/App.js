import React, { useState} from 'react';
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

function App() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
        params: {
        q: term,
        },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
    };

    const onVideoSelect = (video) => {
    setSelectedVideo(video);
    };

    return (
    <div className="container">
        <SearchBar onFormSubmit={onTermSubmit} />
        <div className="row">
        <div className="col-8">
            <VideoDetail video={selectedVideo} />
        </div>
        <div className="col-4">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
        </div>
    </div>
    );
}

export default App;






