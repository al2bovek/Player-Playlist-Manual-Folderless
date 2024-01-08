const h1 = document.createElement('h1');
document.body.append(h1);
h1.textContent = 'Player Playlist Manual';
// data
import playlist from "./playlist.js";
// render
renderPlaylist(playlist);
function renderPlaylist(playlistForRendering) {    
    renderPlaylistHeader(playlistForRendering);
    renderTrack(playlistForRendering);
}
function renderPlaylistHeader(inputPlaylistForRendering){
    // здесь логика отрисовки шапки "входного" плейлиста
    const h_2 = document.createElement('h2');
    h_2.textContent = playlist.info.artist;
    const img_1 = document.createElement('img');
    img_1.src = playlist.info.img;
    document.body.append(h_2, img_1);
}
function renderTrack(inputTrackForRendering){
    // здесь логика отрисовки "входного" трека
    let tracks = document.createElement('ul');
    for(let i = 0; i < playlist.tracks.length; i++){
        const trackImg = document.createElement('img');
        trackImg.className = "trackImg";
        trackImg.src = playlist.tracks[i].img;
        const trackInfo = document.createElement('li');
        trackInfo.textContent = playlist.tracks[i].title;
        const trackAudio = document.createElement('audio');
        trackAudio.controls = true;
        trackAudio.src = playlist.tracks[i].src;
        trackInfo.append(trackAudio, trackImg)
        tracks.append(trackInfo);
        document.body.append(tracks);
    }
} 
