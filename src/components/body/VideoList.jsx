import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              channelId: 'UCCwExJBZJTXiItcz1WLONVA',
              key: 'AIzaSyATIXltucqn53JqhdwIUNw9b5-6sdLMlvA',
              maxResults: 8, // Maximum number of videos to fetch
              order: 'date', // Sort by upload date
              type: 'video', // Fetch only videos
            },
          }
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto mt-[180vh] md:mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-900 flex justify-center md:justify-start">Most Recent news</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map(video => (
          <div key={video.id.videoId} className="p-4 border rounded shadow">
            <div className="video-container mt-4">
              <iframe
                title={video.snippet.title}
                src={`https://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1`}
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-56"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
