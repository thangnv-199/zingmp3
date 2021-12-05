import styled from "styled-components";
import { useState } from 'react';

import useDispatchs from '../../hooks/useDispatchs';
import * as theme from '../../data/theme';
import storage from '../../utils/storage';

const ContainerStyled = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    user-select: none;
    display: flex;
`;

const OverlayStyled = styled.div`
    position: absolute;
    inset: 0;
    background-color: var(--overlay-bg);
    z-index: -1;
`;

const ModalStyled = styled.div`
    background-color: var(--primary-bg);
    padding: 20px 30px;
    margin: auto;
    border-radius: 20px;
`;

const BodyStyled = styled.div`
    max-height: 50vh;
    min-height: 500px;
`;

const ThemeSelectStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 740px;
    overflow-y: auto;
`;

const ThemeOptionStyled = styled.div`
    cursor: pointer;
    &.--active {
        img {
            border: 1px solid var(--purple-primary);
        }
    }
`;

const CheckIconStyled = styled.div`
    color: var(--text-primary);
    background-color: var(--purple-primary);
    border-radius: 100%;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const ThemeModal = () => {

    const { toggleThemeModal } = useDispatchs();
    const [currentTheme, setCurrentTheme] = useState(storage.getTheme());

    const handleClick = (name) => {
        document.querySelector('html').setAttribute('data-theme', name);
        storage.setTheme(name);
        setCurrentTheme(name);
    }

    const render = (data) => {
        return data.map(({ thumbnail, label, name }) => {
            return (
                <ThemeOptionStyled 
                    className={currentTheme === name ? '--active' : ''} 
                    onClick={() => handleClick(name) }
                    key={label}
                >
                    <div className="relative">
                        <img className="rounded-lg mb-2" src={thumbnail} alt="" />
                        {currentTheme === name
                            ? <CheckIconStyled>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </CheckIconStyled>
                            : ''
                        }
                    </div>
                    <span className="text-xs tracking-wide capitalize">{label}</span>
                </ThemeOptionStyled>
            )
        })
    }

    return (
        <ContainerStyled>
            <OverlayStyled onClick={ toggleThemeModal } />
            <ModalStyled>
                    <header className="flex justify-between items-center mb-5">
                        <span className=" text-2xl font-bold">Giao diện</span>
                        <button onClick={ toggleThemeModal } title="Đóng" className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </header>
                    <BodyStyled>
                        <div className="mb-5">
                            <p className="text-lg font-semibold mb-3 tracking-wide">Màu Tối</p>
                            <ThemeSelectStyled>
                                { render(theme.dark) }
                            </ThemeSelectStyled>
                        </div>
                    </BodyStyled>
                </ModalStyled>
        </ContainerStyled>
    )
}

export default ThemeModal;