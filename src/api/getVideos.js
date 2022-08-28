export const getVideos = async () => {
    const videosResponse = await fetch(`${window.location.origin}/showcases.json`);
     const videos = await videosResponse.json();
     return videos.videos;
}