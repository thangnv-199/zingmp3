import { useParams } from 'react-router-dom';
import { chartWeek } from '../../data/zingChart';

import EmptyPage from '../../pages/emptyPage';
import Song from '../../components/song';
import NavStyle2 from '../../components/nav/navStyle2';
import useDispatchs from '../../hooks/useDispatchs';
import * as router from '../../constant/router';

const navData = [{
    label: 'việt nam',
    router: router.CHART_WEEK + router.VN,
},{
    label: 'us-uk',
    router: router.CHART_WEEK + router.US_UK,
},{
    label: 'k-pop',
    router: router.CHART_WEEK + router.KOREA,
},]

const ChartWeek = () => {

    const { openPlaylist } = useDispatchs();
    const params = useParams();
    const currentPlaylist = params['*'] === router.VN.replace('/', '')
        ? chartWeek['vn']
        : params['*'] === router.US_UK.replace('/', '')
            ? chartWeek['us-uk']
            : params['*'] === router.KOREA.replace('/', '') 
                ? chartWeek['k-pop']
                : null;

    const renderSongs = (playlist) => {
        return playlist.songs.map((song, index) => (
            <li key={index} >
                <Song index={index} data={song} playlist={playlist}/>
            </li>
        ))
    }

    return (
        <div>
            <h1 className="flex items-center text-5xl font-bold py-10">
                <span>Bảng xếp hạng tuần</span>
                <img 
                    onClick={() => currentPlaylist && openPlaylist(currentPlaylist) }
                    className="rounded-full bg-purple cursor-pointer hover:opacity-50 w-10 h-10 ml-2"
                    src="/zingmp3/images/icons/play.81e7696e.svg" 
                    alt="" 
                />
            </h1>
            <NavStyle2 data={navData} size={24} />
            <div className="mt-10">
                { currentPlaylist
                    ? <ul>{ renderSongs(currentPlaylist) }</ul>
                    : <EmptyPage />
                }
                {/* <Routes>
                    <Route path={router.VN} element={<ul>{ renderSongs(chartWeek['vn'])}</ul>} />
                    <Route path={router.US_UK} element={<ul>{ renderSongs(chartWeek['us-uk'])}</ul>} />
                    <Route path={router.KOREA} element={<ul>{ renderSongs(chartWeek['k-pop'])}</ul>} />
                    <Route path='/*' element={<EmptyPage />} />
                </Routes> */}
            </div>
        </div>
    )

}

export default ChartWeek;