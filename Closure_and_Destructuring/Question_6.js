/**
6. You are developing a music playlist management system. Implement functions that leverage closures and higher-order functions to perform common playlist operations.

    Task 1: Create a function createPlaylist that takes a playlist name as a parameter and returns a closure. This closure should allow adding and listing songs for the given playlist.

    Task 2: Create a function addSong that takes a song name and artist as parameters and adds the song to the specified playlist. Use the closure created in TASK 1.

    Task 3: Create a function listSongs that lists all the songs in a specified playlist. Use the closure created in the Task 1

    // Task: Playlist Management

    const myPlaylist = createPlaylist("My Favorites");
    addSong (myPlaylist, "Song1", "Artist1"); 
    addSong (myPlaylist, "Song2", "Artist2"); 
    add5ong (myPlaylist, "Song3", "Artist3");
    listSongs (myPlaylist); 

    // Output: My Favorites Playlist: Song1 by Artisti, Song2 by Artist2, Song3 by Artist3
 */

function createPlaylist(playlistName){

    let playlists = []
    playlists.push({
        playlistName : playlistName,
        songs : []
    })
    
    function addSong(playlistName, songName, artist){
        const playlist = playlists.find(p => p.playlistName === playlistName)
        if(playlist){
            playlist.songs.push({
                songName: songName,
                artist: artist,
            })  
        }
        else{
            console.log(`${playlistName} not Found`)
        }
    }

    function listSongs(){
        console.log(`${playlistName} Playlist: `)
        playlists.forEach(playlist => {
            playlist.songs.forEach(song => {
                console.log(`${song.songName} by ${song.artist}`)
            })
        });
        
    }

    return {
        addSong,
        listSongs,
    }
}

const myPlaylist = createPlaylist("My Favorites");
myPlaylist.addSong("My Favorites", "Song1", "Artist1"); 
myPlaylist.addSong("My Favorites", "Song2", "Artist2"); 
myPlaylist.addSong("My Favorites", "Song3", "Artist3");
myPlaylist.listSongs(myPlaylist); 