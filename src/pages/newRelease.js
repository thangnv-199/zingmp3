import Song from '../components/song';
import newReleaseSong from '../data/newReleasePage';

const ZingChart = () => {

    const renderSongs = (playlist, quantity) => {
        return playlist.songs.slice(0, quantity).map((song, index) => (
            <li key={index} >
                <Song 
                    index={index}
                    data={song} 
                    playlist={playlist} 
                />
            </li>
        ))
    }

    return (
        <div>
            <h1 className="flex items-center text-4xl font-bold py-10">
                <span>Mới Phát Hành</span>
                <img 
                    className="rounded-full bg-purple cursor-pointer hover:opacity-50 w-10 h-10 ml-2"
                    src="/zingmp3/images/icons/play.81e7696e.svg" 
                    alt="" 
                />
            </h1>
               
            <ul>
                { renderSongs(newReleaseSong) }
            </ul>

        </div>
    )
}

export default ZingChart;