import styled from 'styled-components';
import { useParams, NavLink } from 'react-router-dom';

import { chartWeek } from '../../data/zingChart';
import Song from '../../components/song';
import * as router from '../../constant/router';

const TabButton = styled.button`
    font-size: 24px;
    font-weight: bold;
    color: var(--text-secondary);
    margin: 0 15px;
    cursor: pointer;

    a {
        padding: 15px 0;
        &.--active {
            border-bottom: 2px solid var(--purple-primary);
            color: var(--text-primary);
        }
    }
`

const ChartWeek = () => {

    const params = useParams();
    const playlist = chartWeek[params.key]

    const renderSongs = (playlist) => {
        return playlist.songs.map((song, index) => (
            <li key={index} >
                <Song 
                    index={index}
                    data={song} 
                    playlist={playlist} 
                    label="duration"
                />
            </li>
        ))
    }

    return (
        <div>
            <h1 className="flex items-center text-4xl font-bold py-10">
                <span>Bảng xếp hạng tuần</span>
                <img 
                    className="rounded-full bg-purple cursor-pointer hover:opacity-50 w-10 h-10 ml-2"
                    src="/images/icons/play.81e7696e.svg" 
                    alt="" 
                />
            </h1>
            <nav className="flex -my-3.5">
                <TabButton>
                    <NavLink 
                        to={router.CHART_WEEK.replace(':key', 'vn')}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        Việt Nam
                    </NavLink>
                </TabButton>
                <TabButton>
                     <NavLink 
                        to={router.CHART_WEEK.replace(':key', 'us-uk')}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        US-UK
                    </NavLink>
                </TabButton>
                <TabButton>
                     <NavLink 
                        to={router.CHART_WEEK.replace(':key', 'k-pop')}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        K-Pop
                    </NavLink>
                </TabButton>
            </nav>
            <div className="mt-10">
                <ul>
                    { renderSongs(playlist)}
                </ul>
            </div>
        </div>
    )

}

export default ChartWeek;