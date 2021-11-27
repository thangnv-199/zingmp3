import styled from 'styled-components';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { Fragment } from 'react';

import Sidebar from './components/sidebar';
import Header from './components/header';
import Controls from './components/controls';
import PersonPage from './pages/person/index';
import EmptyPage from './pages/emptyPage';
import DiscoveryPage from './pages/discovery';
import PlaylistPage from './pages/playlistDetail';
import RadioPage from './pages/radio';
import ZingChartPage from './pages/zingChart';
import ChartWeekPage from './pages/zingChart/chartWeek';
import * as router from './constant/router';


const Main = styled.div`
    margin-left: var(--sidebar-width);
    padding: 85px 40px 40px;
    height: calc(100vh - var(--control-height));
    overflow-y: auto;
    position: relative;
`;

function App() {
    return (
       <Fragment>
            <BrowserRouter basename="/zingmp3">
                <Sidebar />
                <Header />
                <Main className="scrollbar">
                    <Routes >
                        <Route path="/mymusic/*" exact element={ <PersonPage /> } />
                        <Route path="/" exact element={ <DiscoveryPage /> } />
                        <Route path={ router.ZING_CHART } exact element={ <ZingChartPage /> } />
                        <Route path={ router.CHART_WEEK } exact element={ <ChartWeekPage /> } />
                        <Route path={ router.RADIO } exact element={ <RadioPage /> } />
                        <Route path={ router.PLAYLIST_DETAIL } exact element={ <PlaylistPage /> } />
                        <Route path="/*" exact element={ <EmptyPage /> } />
                    </Routes >
                </Main>
                <Controls />
            </BrowserRouter>
       </Fragment>
    );
}

export default App;
