import styled from 'styled-components';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import useDispatchs from '../../hooks/useDispatchs';
import * as router from '../../constant/router';

const ContainerStyled = styled.aside`
    position: fixed;
    left: 0;
    bottom: var(--control-height);
    top: 0;
    width: var(--sidebar-width--tablet);
    background-color: var(--sidebar-bg);
    z-index: 100;
    height: 100%;
    transition: all 0.4s linear;

    &.--open {
        width: var(--sidebar-width) !important;

        .logo-mini {
            display: none !important;
        }

        .logo-full {
            display: block !important;
        }

        .sidebar-logo {
            width: var(--sidebar-width) !important;
            padding: 0 25px !important;
        }

        .sidebar-item {
            a {
                justify-content: flex-start !important;
                padding: 7px 25px !important;
                span {
                    display: inline-block !important;
                }
            }
        }

        .sidebar-button {
            width: var(--sidebar-width) !important;
            i{
                margin: auto !important;
            }

            .arrow-left {
                display: flex;
            }

            .arrow-right {
                display: none;
            }
        }
    }

    &::-webkit-scrollbar {
        display: none;
    }

    .sidebar-logo {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        height: var(--header-height);
        background-color: var(--sidebar-bg);
        padding: 0 10px;
        width: var(--sidebar-width--tablet);
        transition: all 0.4s linear;

        img:first-child {
            display: block;
        }

        img:last-child {
            display: none;
        }

        &.--open {
            width: var(--sidebar-width) !important;
            padding: 0 25px !important;

            .sidebar-logo {
                width: var(--sidebar-width) !important;
                padding: 0 25px !important;
            }
        }
    }

    .sidebar-item {
        a {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 15px 0;
            font-weight: 600;
            color: var(--nav-text);
            gap: 10px;
            justify-content: center;

            i, svg, img {
                width: 24px;
                height: 24px;
            }

            i {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
            }
            
            span {
                display: none;
            }

            &:hover {
                color: var(--text-item-hover);
                background-color: var(--alpha-bg);
            }

            &.--active {
                color: var(--text-item-hover);
                background-color: var(--alpha-bg);
            }
        }
    }

    .sidebar-button {
        position: fixed;
        left: 0;
        bottom: var(--control-height);
        border-top: 1px solid var(--alpha-bg);
        height: 54px;
        background-color: var(--sidebar-bg);
        align-items: center;
        color: white;
        gap: 12px;
        font-weight: bold;
        cursor: pointer;
        width: var(--sidebar-width--tablet);
        padding: 10px;
        justify-content: center;
        transition: all 0.4s linear;
        display: flex;
        padding: 0;

        &.arrow {
            i {
                background-color: var(--alpha-bg);
                border-radius: 100%;
                width: 40px;
                height: 40px;
                align-items: center;
                justify-content: center;
            }
        }

        .arrow-left {
            display: none;
        }

        .arrow-right {
            display: flex;
        }

        &.plus {
            display: none;
        }
    }

    .scrollbar::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 1024px) {
        width: var(--sidebar-width);

        .sidebar-logo {
            width: var(--sidebar-width);
            padding: 0 25px;

            img:first-child {
                display: none;
            }

            img:last-child {
                display: block;
            }
        }

        .sidebar-item {
            a {
                flex-direction: row;
                justify-content: flex-start;
                padding: 7px 25px;
                span {
                    display: inline-block;
                }
            }
        }

        .sidebar-button {
            width: var(--sidebar-width);
            justify-content: flex-start;
            padding: 0 25px;

            &.plus {
                display: flex;
            }

            &.arrow {
                display: none;
            }
        }

        .scrollbar::-webkit-scrollbar {
            display: block;
        }

    }
    @media (max-width: 767px) {
        width: var(--sidebar-width--mobile);

        .sidebar-logo {
            width: var(--sidebar-width--mobile);
            padding: 0 5px;
        }

        .sidebar-item {
            a {
                svg, img {
                    width: 20px;
                    height: 20px;
                }
                i{
                    font-size: 16px;
                }
            }
        }

        .sidebar-button {
            width: var(--sidebar-width--mobile);
            &.arrow {
                i{
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
`;

const NavStyled = styled.nav`
    position: absolute;
    top: var(--header-height);
    bottom: 0;
    margin-bottom: calc(var(--control-height) + 54px);
    overflow: auto;
    width: 100%;
`;

const BannerStyled = styled.div`
    padding: 15px 8px;
    background-image: linear-gradient(
        117deg,#5a4be7,#c86dd7 102%);
    border-radius: 8px;
    margin: 10px 20px;
    text-align: center;
    p {
        color:var(--white);
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

    @media (max-width: 1023px) {
        display: none;
    }
`;

const Sidebar = () => {
    
    const { openCreatePlaylistModal } = useDispatchs();
    const { pathname } = useLocation();
    const containerRef = useRef();

    useEffect(() => {
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.addEventListener('click', () => {
                if (containerRef.current.classList.contains('--open')){
                    containerRef.current.classList.remove('--open')
                }
            })
        })
    }, [])

    const activeClassName = ({ isActive }) => {
        return isActive ? `--active sidebar-item` : 'sidebar-item'
    }

    return (
        <>
            <ContainerStyled ref={containerRef}>
                <div className="sidebar-logo">
                    <Link to="/">
                        <img className="my-auto logo-mini" src="/zingmp3/images/icon_zing_mp3_60.f6b51045.svg" alt="" />
                        <img className="my-auto w-30 h-10 logo-full" src="/zingmp3/images/logo-dark.svg" alt="" />
                    </Link>
                </div>
                <NavStyled className="scrollbar">
                    <ul className="mb-4">
                        <li className="sidebar-item">
                            <NavLink title="Cá nhân" to={router.PERSON} className={activeClassName}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>Cá nhân</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="Khám phá" to={router.HOME} className={activeClassName}>
                                <i className="fas fa-compact-disc"></i>
                                <span>Khám phá</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="#zingchart" to={router.ZING_CHART} className={activeClassName}>
                                <i className="fas fa-trophy"></i>
                                <span>#zingchart</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="Radio" to={router.RADIO} className={activeClassName}>
                                <i className="fas fa-podcast"></i>
                                <span>Radio</span>
                                <img
                                    className="hidden lg:inline-block ml-2 object-contain"
                                    src="/zingmp3/images/icons/live-tag.e25dd240.svg"
                                    alt=""
                                />
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="Theo dõi" to={router.FOLLOW + router.VN} className={() => {
                                return pathname.includes(router.FOLLOW) ? '--active' : '';
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                                <span>Theo dõi</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="pt-4 mb-4 border-t-2 border-bd-primary">
                        <li className="sidebar-item">
                            <NavLink title="Nhạc mới" to={router.NEW_RELEASE} className={activeClassName}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                </svg>
                                <span>Nhạc mới</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="Thể loại" to={router.HUB} className={activeClassName}>
                                <i className="fas fa-icons"></i>
                                <span>Thể loại</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="Top 100" to={router.TOP_100} className={activeClassName}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                <span>Top 100</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="MV" to={router.MV2 + router.VN} className={() => {
                                return pathname.includes(router.MV2) ? '--active' : '';
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                </svg>
                                <span>MV</span>
                            </NavLink>
                        </li>
                    </ul>
                    <BannerStyled>
                        <p>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                        <a href="#!">nâng cấp vip</a>
                    </BannerStyled>
                    <ul className="mt-4">
                        <h3 className="hidden lg:block uppercase text-white font-bold text-xs mx-6 mb-3">Thư viện</h3>
                        <li className="sidebar-item">
                            <NavLink title="Bài hát" to={router.PERSON + router.PERSON_SONGS} className={activeClassName}>
                                <img src="/zingmp3/images/icons/my-song.cf0cb0b4.svg" alt="" />
                                <span>Bài hát</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="Playlist" to={router.PERSON + router.PERSON_PLAYLIST} className={activeClassName}>
                                <img src="/zingmp3/images/icons/my-playlist.7e92a5f0.svg" alt="" />
                                <span>Playlist</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="Album" to={router.PERSON + router.PERSON_ALBUM} className={activeClassName}>
                                <img src="/zingmp3/images/icons/my-album.24e3332b.svg" alt="" />
                                <span>Album</span>
                            </NavLink>
                        </li>

                        <li className="sidebar-item">
                            <NavLink title="Tải lên" to={router.PERSON + router.PERSON_UPLOAD} className={activeClassName}>
                                <img src="/zingmp3/images/icons/my-history.374cb625.svg" alt="" />
                                <span>Tải lên</span>
                            </NavLink>
                        </li>

                    </ul>
                    <div className="sidebar-button plus" onClick={openCreatePlaylistModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        <span>Tạo playlist mới</span>
                    </div>

                    <div className="sidebar-button arrow">
                        <i onClick={() => containerRef.current.classList.toggle('--open')}  className="fas fa-chevron-left arrow-left"></i>
                        <i onClick={() => containerRef.current.classList.toggle('--open')}  className="fas fa-chevron-right arrow-right"></i>    
                    </div>
                </NavStyled>
            </ContainerStyled>
        </>
    )
}

export default Sidebar;