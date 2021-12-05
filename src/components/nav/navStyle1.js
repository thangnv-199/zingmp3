import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    ul {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
            color: var(--text-primary);
            background-color: var(--tab-active-bg);
        }

        &:hover {
            color: var(--text-primary);
        }
    }
`;

const NavStyle1 = ({ data }) => {
    return (
        <Nav>
            <ul>
                { data.map(({ router, label}, index) => (
                    <li key={index}>
                        <NavLink
                            to={router}
                            className={({ isActive }) => isActive ? "--active" : ""}
                            end
                        >
                           {label}
                        </NavLink>
                    </li>
                )) }
            </ul>
        </Nav>
    )
}

export default NavStyle1;