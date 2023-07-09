// EXAMPLE 1
// const wait = time => new Promise((res) =>
//     setTimeout(res, time));

// wait(3000).then(() => console.log("World!"))
// console.log("hello")

// EXAMPLE 2

// const wait = time => new Promise(res => setTimeout(res, time));

// async function asyncAwait() {
//     console.log("helo")
//     await wait(2000);
//     console.log("world")
// }

// asyncAwait();

// train 1
const songs = { title: "angle like you", artists: [{ name: "miley" }], duration: 3000 }
const songs2 = [];
function myFavSong(songs) {
    return new Promise((resolve, reject) => {
        try {
            resolve(songss) //change songs to songss to trigger reject
        } catch(error) {
            reject(new Error(error))
        }
    })
}
myFavSong(songs)
    .then(songs => console.log( "judul: " + songs.title + "\n",
        "Artist: " + songs.artists[0].name + "\n",
        "durasi: " + songs.duration
    ))
    .catch(error => console.log("Ada error mas bro"))

    
