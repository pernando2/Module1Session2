const songs = { title: "angle like you", artists: [{ name: "miley" }], duration: 3000 }

async function myFavSong2(songs){
    const waitSongs = new Promise((resolve, reject) => {
        resolve(songs)
        reject(new Error(error))
    })
    return await waitSongs
}

myFavSong2(songs)
    .then(songs => console.log("judul: " + songs.title + "\n",
    "Artist: " + songs.artists[0].name + "\n",
    "durasi: " + songs.duration))
    .catch(error => console.log("Ada error mas bro2"))