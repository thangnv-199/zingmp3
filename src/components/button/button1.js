import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyled = styled.button`
    border-radius: 999px;
    display: inline-block;
    border: 1px solid var(--white);
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    text-align: center;
    color: var(--text-primary);
    background-color: transparent;
    &:hover {
        opacity: 0.7;
    }
`

const Button = ({ to, label }) => {
    return (
        <ButtonStyled>
            <Link className="px-6 py-2 block" to={to}>
                {label}
            </Link>
        </ButtonStyled>
    )
}

export default Button;