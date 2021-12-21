import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavList = styled.ul`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--alpha-bg);
    border-radius: 20px;
    padding: 4px;
`;

const NavItem = styled.li`
    position:relative;
    &:hover {
        .navbar-dropdown {
            display: block;
        }
    }
    & > a, & > div {
        cursor: pointer;
        display: block;
        text-transform: uppercase;
        white-space: nowrap;
        padding: 7px 25px;
        font-size: 12px;
        color: var(--nav-text);
        border-radius: 20px;
        &.--active {
            color: var(--text-primary);
            background-color: var(--tab-active-bg);
        }

        &:hover {
            color: var(--text-primary);
        }
    }
`;

const Dropdown = styled.ul`
    display: none;
    position: absolute;
    right: 0;
    top: calc(100% + 10px);
    z-index: 20;
    width: 200px;
    padding: 6px;
    border-radius: 8px;
    box-shadow: 0 1px 5px 0 rgb(0, 0, 0, 0.2);
    background-color: var(--primary-bg);
    color: var(--navigation-text);

    a {
        padding: 7px 10px;
    }

    &::after {
        content: '';
        position: absolute;
        top: -10px;
        height: 10px;
        right: 0;
        left: 0;
        background_color: transparent;
    }
`;

const NavStyle1 = ({ data }) => {

    const [navItem, setNavItem] = useState(data);
    const [dropdownItem, setDropdownItem] = useState([]);
    const [length, setLength] = useState(0);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setNavItem(data.slice(0, 1));
            setDropdownItem(data.slice(1));
            setLength(1);
        }
        else if (window.innerWidth < 1023) {
            setNavItem(data.slice(0, 3));
            setDropdownItem(data.slice(3));
            setLength(3);
        }
    }, [data])

    const handleDropdownClick = (item) => {
        setNavItem(prevItem => {
            prevItem.pop();
            return [...data.slice(0, length), item]
        });
    }
    
    return (
        <nav className="flex items-center mb-5">
            <NavList>
                { navItem.map(({ router, label}, index) => (
                    <NavItem className="nav-item" key={index}>
                        <NavLink
                            to={router}
                            className={({ isActive }) => isActive ? "--active" : ""}
                            end
                        >
                           {label}
                        </NavLink>
                    </NavItem>
                )) }
                <NavItem className="nav-item">
                    <div>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <Dropdown className="navbar-dropdown">
                        { dropdownItem.map((item, index) => (
                            <NavItem className="nav-item" key={index} onClick={() => handleDropdownClick(item) }>
                                <NavLink
                                    to={item.router}
                                    className={({ isActive }) => isActive ? "--active" : ""}
                                    end
                                >
                                {item.label}
                                </NavLink>
                            </NavItem>
                        )) }
                    </Dropdown>
                </NavItem>
            </NavList>
        </nav>
    )
}

export default NavStyle1;