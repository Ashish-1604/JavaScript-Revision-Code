console.log('Lets write java script');

async function getSongs() {
    let a = await fetch('http://127.0.0.1:3000/Songs/')
    let response = await a.text()
    console.log(response);

    let div = document.createElement("div")
    div.innerHTML = response

    let as = div.getElementsByTagName("a")

    let songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split('/Songs/')[1])
        }
    }

    console.log(songs)
    return songs


}

async function main() {
    // Get the list of all songs
    let songs = await getSongs()

    let songUL = document.querySelector(".SongList").getElementsByTagName('ul')[0]

    for (const song of songs) {
        // songUL.innerHTML = songUL.innerHTML + `<li>  </li>`
        songUL.innerHTML = songUL.innerHTML + `<li><img src="./assets/music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll('%20',' ')}</div>
            <div>Harry</div>
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img src="./assets/play.svg" alt="">
        </div>
    </li> </li>`
    }

    // Play the first song
    var audio = new Audio(songs[0]);
    // audio.play();


    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(duration);

        // The duration variable now holds the duration (in seconds) of the audio clip
    });
}

main()