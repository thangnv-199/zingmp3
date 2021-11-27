import styled from 'styled-components';

import Song from '../../components/song';
import PlaylistButton from '../../components/button/playListButton';
import {zingChart} from '../../data/zingChart';

const SongList = styled.div`
    flex: 1;
`;

const Songs = () => {

    const renderSongs = (zingChart) => {
        return zingChart.songs.map((song, index) => (
            <Song 
                key={index} 
                data={song} 
                playlist={zingChart} 
                label="duration"
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
                    <PlaylistButton playlist={ zingChart } />
                </div>
            </header>
            <SongList className="scrollbar">
                {renderSongs(zingChart)}
            </SongList>
        </div>
    )
}

export default Songs;