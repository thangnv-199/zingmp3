import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TabButton = styled.li`
    font-size: ${props => props.size + 'px' || '16px'};
    font-weight: bold;
    color: var(--text-secondary);
    margin: 0 15px;
    cursor: pointer;

    a {
        padding: 15px 0;
        text-transform: uppercase;
        &.--active {
            border-bottom: 2px solid var(--purple-primary);
            color: var(--text-primary);
        }
    }
`

const NavStyle2 = ({ data, size }) => {
    return (
        <ul className="flex -my-3.5">
            {data.map(({router, label}, index) => (
                <TabButton key={index} size={size}>
                    <NavLink
                        to={router}
                        className={({ isActive }) => isActive ? "--active" : ""}
                    >
                       {label}
                    </NavLink>
                </TabButton>
            ))}
        </ul>
    )
}

export default NavStyle2;