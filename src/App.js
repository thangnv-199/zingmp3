import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

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
import FollowPage from './pages/follow';
import NewReleasePage from './pages/newRelease';
import HubPage from './pages/hub';
import Top100Page from './pages/top';
import MVPage from './pages/mv';
import SeaechPage from './pages/search';
import ScrollToTop from './components/scrollToTop';
import Modal from './components/modal';

import welcome from './utils/welcome';
import * as router from './constant/router';
import storage from './utils/storage';

const Main = styled.div`
    margin-left: var(--sidebar-width);
    padding: 85px 40px 40px;
    height: calc(100vh - var(--control-height));
    overflow-y: auto;
    position: relative;
    transition: all 0.4s linear;
    background-color: var(--layout-bg);

    @media (max-width: 1023px) {
        margin-left: var(--sidebar-width--tablet);
        padding-left: 30px;
        padding-right: 30px;
    }

    @media (max-width: 767px) {
        margin-left: var(--sidebar-width--mobile);
        padding-left: 10px;
        padding-right: 10px;
    }
`;

function App() {
    useEffect(() => {

        document.querySelector('html').setAttribute(
            'data-theme', storage.getTheme() || 'dark'
        )

        let username = storage.getUsername();
        if (!username) {
            welcome();
        }
    }, [])

    return (
        <Fragment>
            <BrowserRouter basename="/zingmp3">
                <Sidebar />
                <Main className="scrollbar">
                    <ScrollToTop />
                    <Header />
                    <Routes >
                        <Route path="/" exact element={<DiscoveryPage />} />
                        <Route path={router.PERSON + '/*'} element={<PersonPage />} />
                        <Route path={router.PLAYLIST_DETAIL} element={<PlaylistPage />} />
                        <Route path={router.ZING_CHART} element={<ZingChartPage />} />
                        <Route path={router.CHART_WEEK + '/*'} element={<ChartWeekPage />} />
                        <Route path={router.RADIO} element={<RadioPage />} />
                        <Route path={router.FOLLOW + '/*'} element={<FollowPage />} />
                        <Route path={router.NEW_RELEASE} element={<NewReleasePage />} />
                        <Route path={router.HUB} element={<HubPage />} />
                        <Route path={router.TOP_100} element={<Top100Page />} />
                        <Route path={router.MV2 + '/*'} element={<MVPage />} />
                        <Route path={router.SEARCH} element={<SeaechPage />} />
                        <Route path="/*" element={<EmptyPage />} />
                    </Routes >
                </Main>
                <Controls />
                <Modal />
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
