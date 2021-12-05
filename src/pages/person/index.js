import { Route, Routes } from 'react-router-dom';

import UserProfile from '../../components/userProfile';
import NavStyle1 from '../../components/nav/navStyle1';

import PersonPage from './person';
import SongsPage from './songs';
import PlaylistPage from './playlist';
import ArtistPage from './artist';
import AlbumPage from './album';
import MvPage from './mv';
import UploadPage from './upload';
import EmptyPage from '../emptyPage';

import * as router from '../../constant/router';

const navData = [{
    label: 'Tổng quan',
    router: router.PERSON,
},{
    label: 'Bài hát',
    router: router.PERSON + router.PERSON_SONGS,
},{
    label: 'Playlist',
    router: router.PERSON + router.PERSON_PLAYLIST,
},{
    label: 'artists',
    router: router.PERSON + router.PERSON_ARTIST,
},{
    label: 'mv',
    router: router.PERSON + router.PERSON_MV,
},{
    label: 'album',
    router: router.PERSON + router.PERSON_ALBUM,
},{
    label: 'upload',
    router: router.PERSON + router.PERSON_UPLOAD,
},]

const PersonPages = () => {

    return (
        <div>
            <UserProfile />
            <NavStyle1 data={navData}/>
            <Routes >
                <Route path="/" element={ <PersonPage /> } />
                <Route path={ router.PERSON_SONGS} element={ <SongsPage /> } />
                <Route path={ router.PERSON_PLAYLIST} element={ <PlaylistPage /> } />
                <Route path={ router.PERSON_ARTIST} element={ <ArtistPage /> } />
                <Route path={ router.PERSON_ALBUM} element={ <AlbumPage /> } />
                <Route path={ router.PERSON_MV} element={ <MvPage /> } />
                <Route path={ router.PERSON_UPLOAD} element={ <UploadPage /> } />
                <Route path="/*" element={ <EmptyPage /> } />
            </Routes >
        </div>
    )
}

export default PersonPages;