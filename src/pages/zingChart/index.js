import { useState } from 'react';
import styled from 'styled-components';

import {zingChart, chartWeek} from '../../data/zingChart';
import Song from '../../components/song';
import ChartBox from '../../components/chartBox';
import ButtonStyle1 from '../../components/button/button1';
import * as router from '../../constant/router';
import useDispatchs from '../../hooks/useDispatchs';

const ButtonStyled = styled.button`
    border-radius: 999px;
    display: inline-block;
    border: 1px solid var(--white);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    text-align: center;
    color: var(--text-primary);
    background-color: transparent;
    &:hover {
        opacity: 0.7;
    }
`


const ZingChart = () => {

    const { openPlaylist } = useDispatchs();
    const [currenIndex, setCurrenIndex] = useState(10);

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
            <div>
                <h1 className="flex items-center text-4xl font-bold py-10">
                    <span>#zingchart</span>
                    <img onClick={ () => openPlaylist(zingChart) }
                        className="rounded-full bg-purple cursor-pointer hover:opacity-80 w-10 h-10 ml-2"
                        src="/zingmp3/images/icons/play.81e7696e.svg" 
                        alt="" 
                        title="Phát tất cả"
                    />
                </h1>
                <div>
                    <ul>
                        { renderSongs(zingChart, currenIndex) }
                    </ul>
                    <div className="text-center mt-5">
                        <ButtonStyled 
                            className="px-6 py-2" 
                            onClick={ () => setCurrenIndex(100) }
                        >
                            Xem top 100
                        </ButtonStyled>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl font-bold mb-5 text-primary" >Bảng xếp hạng tuần</h1>
                <ChartBox playlist={chartWeek.vn} title="Việt Nam">
                    <ul>
                        { renderSongs(chartWeek.vn, 5) }
                    </ul>
                    <div className="text-center mt-5">
                        <ButtonStyle1 
                            to={router.CHART_WEEK + router.VN}
                            label="Xem tất cả"
                        />
                    </div>
                </ChartBox>
                <ChartBox playlist={chartWeek.vn} title="US-UK">
                    <ul>
                        { renderSongs(chartWeek['us-uk'], 5) }
                    </ul>
                    <div className="text-center mt-5">
                        <ButtonStyle1 
                            to={router.CHART_WEEK + router.US_UK}
                            label="Xem tất cả"
                        />
                    </div>
                </ChartBox>
                <ChartBox playlist={chartWeek.vn} title="K-Pop">
                    <ul>
                        { renderSongs(chartWeek['k-pop'], 5) }
                    </ul>
                    <div className="text-center mt-5">
                        <ButtonStyle1 
                            to={router.CHART_WEEK + router.KOREA}
                            label="Xem tất cả"
                        />
                    </div>
                </ChartBox>
            </div>

        </div>
    )
}

export default ZingChart;