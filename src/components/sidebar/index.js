import styled from 'styled-components';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openPlaylistModal } from '../../redux/actions';

import NavItem from './navItem';
import CreatePlaylistModal from '../modal/createPlaylist';
import AddToPlaylistModal from '../modal/addToPlaylist';
import * as router from '../../constant/router';

const NavContainer = styled.aside`
    position: fixed;
    left: 0;
    bottom: 90px;
    width: var(--sidebar-width);
    background-color: var(--sidebar-bg);
    height: calc(100vh - var(--control-height));
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;
const LogoWrapper = styled.div`
    height: 70px;
    width: 100%;
    padding: 0 25px;
`;

const Banner = styled.div`
    padding: 15px 8px;
    background-image: linear-gradient(
        117deg,#5a4be7,#c86dd7 102%);
    border-radius: 8px;
    margin: 10px 20px;
    text-align: center;
    p {
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        margin-bottom: 10px;
        line-height: 20px;
    };
    a {
        background-color: #ffdb00;
        border-color: #ffdb00;
        display: inline-block;
        padding: 6px 35px;
        font-size: 12px;
        font-weight: 600;
        color: #000;
        border-radius: 20px;
        text-transform: uppercase;
        &:hover {
            opacity: 0.6;
        }
    }
`;

const AddPlayListButton = styled.div`
    position: fixed;
    left: 0;
    bottom: var(--control-height);
    width: 240px;
    border-top: 1px solid var(--alpha-bg);
    height: 54px;
    background-color: var(--sidebar-bg);
    padding: 0 25px;
    display: flex;
    align-items: center;
    color: white;
    gap: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        span {
            opacity: 0.8;
        }
    }
`;

const Sidebar = () => {

    const dispatch = useDispatch();
    const isCreatePlaylistModalOpen = useSelector(state => state.playlist.isOpenCreateModel);
    const isAddToPlaylistModalOpen = useSelector(state => state.playlist.isOpenAddToModel);
    
    const handleOpenPlaylistModal = () => {
        dispatch(openPlaylistModal());
    }

    return (
        <Fragment>
            { isCreatePlaylistModalOpen && <CreatePlaylistModal /> }
            { isAddToPlaylistModalOpen && <AddToPlaylistModal /> }
            <NavContainer>
                <nav>
                    <LogoWrapper className="flex items-center">
                        <img className="my-auto w-30 h-10" src="/images/logo-dark.svg" alt="" />
                    </LogoWrapper>
                    <ul className="mb-4">
                        <NavItem
                            to={router.PERSON}
                            label="Cá nhân"
                            icon="far fa-user"
                        />
                        <NavItem
                            to={router.HOME}
                            label="Khám phá"
                            icon="fas fa-compact-disc"
                        />
                        <NavItem
                            to={router.ZING_CHART}
                            label="#zingchart"
                            icon="fas fa-icons"
                        />
                        <NavItem
                            to={router.RADIO}
                            label="Radio"
                            icon="fas fa-podcast"
                            badge
                        />
                        <NavItem
                            to={router.FOLLOW}
                            label="Theo dõi"
                            icon="far fa-save"
                        />
                    </ul>
                    <ul className="pt-4 mb-4 border-t-2 border-gray-600 ">
                        <NavItem
                            to={router.NEW_MUSIC}
                            label="Nhạc mới"
                            icon="fas fa-music"
                        />
                        <NavItem
                            to={router.HUB}
                            label="Thể loại"
                            icon="fas fa-icons"
                        />
                        <NavItem
                            to={router.TOP_100}
                            label="Top 100"
                            icon="far fa-star"
                        />
                        <NavItem
                            to={router.MV2}
                            label="MV"
                            icon="fas fa-film"
                        />
                    </ul>
                    <Banner>
                        <p>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                        <a href="#!">nâng cấp vip</a>
                    </Banner>
                    <ul className="mt-4 pb-16">
                        <h3 className="uppercase text-white font-bold text-xs mx-6 mb-3">Thư viện</h3>
                        <NavItem
                            to={router.SONGS}
                            label="Bài hát"
                            image="/images/icons/my-song.cf0cb0b4.svg"
                        />
                        <NavItem
                            to={router.PLAYLIST}
                            label="Playlist"
                            image="/images/icons/my-playlist.7e92a5f0.svg"
                        />
                        <NavItem
                            to={router.ALBUM}
                            label="Album"
                            image="/images/icons/my-album.24e3332b.svg"
                        />
                        <NavItem
                            to={router.UPLOAD}
                            label="Tải lên"
                            image="/images/icons/my-history.374cb625.svg"
                        />
                    </ul>
                    <AddPlayListButton onClick={ handleOpenPlaylistModal }>
                        <i className="fas fa-plus"></i>
                        <span>Tạo playlist mới</span>
                    </AddPlayListButton>
                </nav>
            </NavContainer>
        </Fragment>
    )
}

export default Sidebar;