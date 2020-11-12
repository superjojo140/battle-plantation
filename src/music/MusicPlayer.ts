import * as jsmediatags from "jsmediatags";

export default class MusicPlayer {

    playlist: string[] = [];
    playlistPosition = 0;
    audio: HTMLAudioElement;

    title: string;
    artist: string;
    cover: HTMLImageElement;

    constructor(htmlParent: HTMLElement) {
        let html = `
            <style>
            @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

                #container{
                    position: absolute;
                    margin: 10px 38px;
                }

                .musicPlayer{
                    background-color: #212121e0;
                    width: 400px;
                    border-radius: 5px;
                    border: 3px solid #616161;
                    color: white;
                    font-family: 'VT323', monospace;
                    display: flex;
                    padding: 15px;
                }
                .musicPlayerCover{}
                .musicPlayerTitle{
                    font-size: 20pt;
                }
                .musicPlayerArtist{
                    font-size: 15pt;
                }
                .musicPlayerInfo{
                    padding: 0px 15px;
                }
            </style>

            <div class="musicPlayer">
                <img class="musicPlayerCover" width="80px" src="https://www.superjojo.de/main/pics/mensa.png">
                <div class="musicPlayerInfo">
                    <div class="musicPlayerTitle">
                        Deep and funky music
                    </div>
                    <div class="musicPlayerArtist">
                        Mister bombastic
                    </div>
                </div>
            </div>
        `;
        htmlParent.innerHTML += html;
    }

    addMusic(path: string) {
        this.playlist.push(path);
    }

    play = () => {
        if (!this.audio) {
            this.loadMusicAt(this.playlistPosition);
        }
        this.audio.play();
    }

    pause = () => {
        if (this.audio) {
            this.audio.pause();
        }
    }

    async loadMusicAt(pos: number) {
        this.playlistPosition = pos;
        let path = this.playlist[pos];
        if (path == undefined) {
            console.warn("[Music Player] Cant play music. Music cant be found in playlist!");
            return;
        }
        this.audio = new Audio(path);
        this.audio.onended = this.nextTrack;

        //Load Meta Info
        let resp = await fetch('http://127.0.0.1:8887/' + path);
        let blob = await resp.blob();

        jsmediatags.read(blob, {
            onSuccess: (data) => {
                console.log(data.tags);
                document.querySelector('.musicPlayerTitle').innerHTML = data.tags.title;
                document.querySelector('.musicPlayerArtist').innerHTML =  data.tags.artist;

                let image = data.tags.picture;
                if (image) {
                    var base64String = "";
                    for (var i = 0; i < image.data.length; i++) {
                        base64String += String.fromCharCode(image.data[i]);
                    }
                    var base64 = "data:" + image.format + ";base64," +
                        window.btoa(base64String);
                    document.querySelector('.musicPlayerCover').setAttribute('src', base64);
                } 

            },
            onError: function (error) {
                console.log(':(', error.type, error.info);
            }
        });
    }

    nextTrack = () => {
        if (this.audio) {
            this.audio.pause();
        }
        this.loadMusicAt(++this.playlistPosition % this.playlist.length);
        this.play();
    }




}