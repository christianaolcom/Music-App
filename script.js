const musicApp = () => {
    let url = 'https://musicapi-19wk.onrender.com/music/myAPI';
    fetch(url)
        .then(res => res.json())
        .then((conRes) => {
            console.log(conRes);
            conRes.forEach((song) => {
                let songDiv = document.createElement('div');
                songDiv.className = 'text-center p-2 text-light fw-bold';

                let songInfo = document.createElement('h5');
                songInfo.textContent = `${song.id}. ${song.songTitle} (ft) ${song.artistName}`;
                songDiv.appendChild(songInfo);

                let songReleaseDate = document.createElement('p');
                songReleaseDate.textContent = `${song.releaseDate}`;
                songDiv.appendChild(songReleaseDate);

                let songImageContainer = document.createElement('div');
                songImageContainer.className = 'container';
                let songImage = document.createElement('img');
                songImage.src = `${song.songImage}`;
                songImage.alt = "dp";
                songImageContainer.appendChild(songImage);
                songDiv.appendChild(songImageContainer);

                let audioElement = document.createElement('audio');
                audioElement.className = 'p-2';
                audioElement.src = `${song.songUrl}`;
                audioElement.controls = true;
                songDiv.appendChild(audioElement);

                document.getElementById('disp').appendChild(songDiv);
                document.getElementById('disp').appendChild(document.createElement('hr'));
            });

            let sureElement = document.getElementById('sure');
            sureElement.innerHTML = `<p class="fw-bold text-light">You get audios Successfully</p>`;
            sureElement.style.display = "block";
            setTimeout(() => {
                sureElement.style.display = "none";
            }, 10000);
        })
        .catch((err) => {
            console.log(err);
        });
}




