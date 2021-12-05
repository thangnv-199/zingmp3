import styled from 'styled-components';
import { useEffect, useState} from 'react';
import Song from '../components/song';
import CORSwarning from '../components/warning/cors';
import * as api from '../apis';
import useQuery from '../hooks/useQuery';

const LoadingContainer = styled.div`
    height: calc(100vh - var(--control-height) - var(--header-height));
    display: flex;
    align-items: center;
    justify-content: center;
    img{ 
        width: 100px;
    }
`

const SearchPage = () => {

    const query = useQuery();
    const keyword = query.get('p');
    const [isCheck, setIsCheck] = useState(0);
    const [playlist, setPlaylist] = useState();

    useEffect(() => {
        fetch(api.SEARCH_SONG(keyword))
        .then(res => res.json())
        .then(res => {
            setPlaylist({
                id: null,
                name: `Tìm kiếm : ${keyword.toUpperCase()}`,
                songs: res.data[0].song.map(item => ({
                    id: item.id,
                    artist: item.artist,
                    duration: item.duration,
                    name: item.name,
                    image: '/zingmp3/images/song_default.png',
                }))
            });
            return fetch(api.GET_SUGGESTIONS_SONG(res.data[0].song[0].id))
        })
        .then(res => res.json())
        .then(res => {
            setIsCheck(1);
            console.log(res)
        })
        .catch(() => {
            setIsCheck(2);
        })
    }, [keyword])

    const renderSongs = (playlist) => {
        return playlist.songs?.map((song, index) => (
            <li key={index} >
                <Song data={song} playlist={playlist} />
            </li>
        ))
    }

    return (
        <div>
            { isCheck === 0
                ? <LoadingContainer>
                    <img src="/zingmp3/images/icons/loading-gif-png-5.gif" alt="" />
                </LoadingContainer>
                : isCheck === 1
                    ? <div>
                        <h1 className="text-3xl font-bold mb-5">Kết quả tìm kiếm</h1>
                        <ul>
                            {renderSongs(playlist)}
                        </ul>
                    </div>
                    : <CORSwarning />
            }
        </div>
    )
}

export default SearchPage;