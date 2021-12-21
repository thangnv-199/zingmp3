import styled from 'styled-components';
import { useSelector } from 'react-redux';

import EmptyBox from '../../components/emptyBox';
import Song from '../../components/song';
import PlaylistButton from '../../components/button/playListButton';

const SongList = styled.div`
    flex: 1;
`;

const Songs = () => {

    const playlist = useSelector(state => state.playlist.library);

    const renderSongs = (playlist) => {
        return playlist.songs.map((song, index) => (
            <Song 
                key={index} 
                data={song} 
                playlist={playlist} 
            />
        ))
    }

    return (
        <div>
            <header
                className="text-white flex justify-between items-center mb-3">
                <h3 className="font-bold text-xl">Bài hát</h3>
                <div className="flex items-center">
                    <a href="#!" className="button mr-3">
                        <i className="fas fa-upload"></i>
                        Tải lên
                    </a>
                    <PlaylistButton playlist={ playlist } />
                </div>
            </header>
            { playlist.songs.length === 0
                ? <EmptyBox 
                        label="Không có bài hát nào thư viện nhạc của bạn"
                        imageSrc="/zingmp3/images/icons/dics-music-icon.3925fc01.svg"
                    />
                :  <SongList className="scrollbar">
                    {renderSongs(playlist)}
                </SongList>
            }
        </div>
    )
}

export default Songs;