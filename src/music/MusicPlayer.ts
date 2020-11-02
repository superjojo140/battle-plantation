export default class MusicPlayer {

    playlist: string[] = [];
    playlistPosition = 0;
    audio: HTMLAudioElement;

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

    loadMusicAt(pos: number) {
        this.playlistPosition = pos;
        let path = this.playlist[pos];
        if (path == undefined) {
            console.warn("[Music Player] Cant play music. Music cant be found in playlist!");
            return;
        }
        this.audio = new Audio(path);
        this.audio.onended = this.nextTrack;
    }

    nextTrack = () => {
        if (this.audio) {
            this.audio.pause();
        }
        this.loadMusicAt(++this.playlistPosition % this.playlist.length);
        this.play();
    }




}