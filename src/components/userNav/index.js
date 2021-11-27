import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as router from '../../constant/router';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    ul {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        background-color: var(--alpha-bg);
        border-radius: 20px;
        padding: 4px;
    }
    a {
        color: var(--nav-text);
        padding: 7px 25px;
        display: inline-block;
        font-size: 12px;
        border-radius: 20px;
        text-transform: uppercase;
        white-space: nowrap;

        &.--active {
            color: #fff;
            background-color: var(--tab-active-bg);
        }

        &:hover {
            color: #fff;
        }
    }
`;

const UserNav = () => {

    return (
        <Nav>
            <ul>
                <li>
                    <NavLink
                        to={router.PERSON}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        tổng quan
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={router.SONGS}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        bài hát
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={router.PLAYLIST}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        playlist
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={router.ARTIST}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        artist
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={router.ALBUM}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        album
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={router.MV}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        mv
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={router.UPLOAD}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                        upload
                    </NavLink>
                </li>
            </ul>
        </Nav>
    )
}

export default UserNav;