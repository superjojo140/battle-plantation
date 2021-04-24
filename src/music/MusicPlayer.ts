import * as jsmediatags from "jsmediatags";
import uiConstants from "../ui/uiConstants";

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
                    margin-left: auto;
                    margin-right: auto;
                    left: 0;
                    right: 0;
                    top: 80px;
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
                    margin: 0 auto;
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

            <div class="musicPlayer" style="display:none">
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

        document.getElementById('musicOn').onclick = this.nextTrack;
        document.getElementById('musicOff').onclick = this.pause;
    }

    addMusic(path: string) {
        this.playlist.push(path);
    }

    play = async () => {
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
        let resp = await fetch(path);
        let blob = await resp.blob();

        jsmediatags.read(blob, {
            onSuccess: (data) => {
                //console.log(data.tags);
                document.querySelector('.musicPlayerTitle').innerHTML = data.tags.title;
                document.querySelector('.musicPlayerArtist').innerHTML = data.tags.artist;

                let image = data.tags.picture;
                if (image) {
                    var base64String = "";
                    for (var i = 0; i < image.data.length; i++) {
                        base64String += String.fromCharCode(image.data[i]);
                    }
                    var base64 = "data:" + image.format + ";base64," +
                        window.btoa(base64String);
                    document.querySelector('.musicPlayerCover').setAttribute('src', base64);
                    this.slideDown();
                    setTimeout(this.slideUp, uiConstants.musicPlayer.displayTime);
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

    /* SLIDE UP */
    slideUp(duration = 500) {
        let target = document.querySelector(".musicPlayer") as HTMLElement;
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = "0";
        target.style.paddingTop = "0";
        target.style.paddingBottom = "0";
        target.style.marginTop = "0";
        target.style.marginBottom = "0";
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            //alert("!");
        }, duration);
    }

    /* SLIDE DOWN */
    slideDown(duration = 500) {
        let target = document.querySelector(".musicPlayer") as HTMLElement;
        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = "0";
        target.style.paddingTop = "0";
        target.style.paddingBottom = "0";
        target.style.marginTop = "0";
        target.style.marginBottom = "0";
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }




}