import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LiStyled = styled.li`
    display: flex;
    align-items: center;
    color: var(--nav-text);
    a {
        &.--active {
            color: #fff;
            background-color: var(--alpha-bg);
        }
    }
`;

const IconStyle = styled.i`
    width: 24px;
    height: 24px;
    font-size: 20px;
    flex-shrink: 0;
    border-radius: 4px;
`;

const NavItem = ({ label, icon, image, to, badge }) => {

    const style = "flex w-full items-center gap-3 py-2 px-6 font-semibold hover:text-white";

    return (
        <LiStyled>
            <NavLink 
                to={to || 'fsdfds'}
                className={ ({ isActive }) => isActive ? `${style} --active` : style} 
            >
                {icon && <IconStyle className={icon}></IconStyle>}
                {image && <img src={image} alt=""></img>}
                {label}
                {badge && <img src="/zingmp3/images/icons/live-tag.e25dd240.svg" alt=""/>}
            </NavLink>
        </LiStyled>
    )
}

export default NavItem;