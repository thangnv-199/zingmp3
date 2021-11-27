import { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {zingChart, chartWeek} from '../../data/zingChart';
import Song from '../../components/song';
import ChartBox from '../../components/chartBox';
import * as router from '../../constant/router';

const ViewAllBtn = styled.button`
    border-radius: 999px;
    display: inline-block;
    border: 1px solid var(--white);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    text-align: center;
    color: var(--white);
    background-color: transparent;
    &:hover {
        opacity: 0.7;
    }
`


const ZingChart = () => {

    console.log('Render zingChart !!')

    const [currenIndex, setCurrenIndex] = useState(10);

    const renderSongs = (playlist, quantity) => {
        return playlist.songs.slice(0, quantity).map((song, index) => (
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
            <div>
                <h1 className="flex items-center text-4xl font-bold py-10">
                    <span>#zingChart</span>
                    <img 
                        className="rounded-full bg-purple cursor-pointer hover:opacity-50 w-10 h-10 ml-2"
                        src="/images/icons/play.81e7696e.svg" 
                        alt="" 
                    />
                </h1>
                <div>
                    <ul>
                        { renderSongs(zingChart, currenIndex) }
                    </ul>
                    <div className="text-center mt-5">
                        <ViewAllBtn 
                            className="px-6 py-2" 
                            onClick={ () => setCurrenIndex(100) }
                        >
                            Xem top 100
                        </ViewAllBtn>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl font-bold mb-5 text-primary" >Bảng xếp hạng tuần</h1>
                <ChartBox title="Việt Nam">
                    <ul>
                        { renderSongs(chartWeek.vn, 5) }
                    </ul>
                    <div className="text-center mt-5">
                        <ViewAllBtn>
                            <NavLink 
                                className="px-6 py-2 block" 
                                to={router.CHART_WEEK.replace(':key', 'vn')}
                            >
                                Xem tất cả
                            </NavLink>
                        </ViewAllBtn>
                    </div>
                </ChartBox>
                <ChartBox title="US-UK">
                    <ul>
                        { renderSongs(chartWeek['us-uk'], 5) }
                    </ul>
                    <div className="text-center mt-5">
                        <ViewAllBtn>
                            <NavLink 
                                className="px-6 py-2 block" 
                                to={router.CHART_WEEK.replace(':key', 'us-uk')}
                            >
                                Xem tất cả
                            </NavLink>
                        </ViewAllBtn>
                    </div>
                </ChartBox>
                <ChartBox title="K-Pop">
                    <ul>
                        { renderSongs(chartWeek['k-pop'], 5) }
                    </ul>
                    <div className="text-center mt-5">
                        <ViewAllBtn>
                            <NavLink 
                                className="px-6 py-2 block" 
                                to={router.CHART_WEEK.replace(':key', 'k-pop')}
                            >
                                Xem tất cả
                            </NavLink>
                        </ViewAllBtn>
                    </div>
                </ChartBox>
            </div>

        </div>
    )
}

export default ZingChart;