import { Route, Routes } from 'react-router-dom';

import UserProfile from '../../components/userProfile';
import UserNav from '../../components/userNav';

import PersonPage from './person';
import SongsPage from './songs';
import PlaylistPage from './playlist';
import ArtistPage from './artist';
import AlbumPage from './album';
import MvPage from './mv';
import UploadPage from './upload';

import * as router from '../../constant/router';


const PersonPages = () => {

    return (
        <div>
            <UserProfile />
            <UserNav />
            <Routes >
                <Route path="/" element={ <PersonPage /> } />
                <Route path={ router.SONGS.replace('/mymusic', '') } element={ <SongsPage /> } />
                <Route path={ router.PLAYLIST.replace('/mymusic', '') } element={ <PlaylistPage /> } />
                <Route path={ router.ARTIST.replace('/mymusic', '') } element={ <ArtistPage /> } />
                <Route path={ router.ALBUM.replace('/mymusic', '') } element={ <AlbumPage /> } />
                <Route path={ router.MV.replace('/mymusic', '') } element={ <MvPage /> } />
                <Route path={ router.UPLOAD.replace('/mymusic', '') } element={ <UploadPage /> } />
            </Routes >
        </div>
    )
}

export default PersonPages;