import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import storage from '../../utils/storage';

const UserAction = styled.nav`
    position: absolute;
    right: 0;
    top: 0;

    i {
        color: var(--text-primary);
        padding: 10px;
        background-color: var(--alpha-bg);
        border-radius: 100%;
        cursor: pointer;
    }

    a {
        display: inline-block;
        padding: 6px 20px;
        color: white;
        background-color: var(--alpha-bg);
        border-radius: 20px;
        margin-right: 10px;
        font-size: 12px;
        text-transform: uppercase;
        transition: all 0.2s linear;

        &.--yellow {
            background-color: var(--yellow);
            color: var(--black);
        }
        &:hover {
            opacity: 0.8;
        }
    }
`;

const InputName = styled.input`
    font-weight: bold;
    color: var(--text-primary);
    background-color: transparent;
    font-size: 36px;
`

const SvgStyled = styled.svg`
    position: absolute;
    left: 100%;
    cursor: pointer;
    margin-left: 10px;
    &:hover {
        color: var(--purple-primary);
    }
`;

const UserProfile = () => {

    const [username, setUsername] = useState(storage.getUsername());
    const [tabs, setTabs] = useState(0);
    const inputRef = useRef();

    useEffect(() => {
        tabs === 1 && inputRef.current.focus();
    }, [tabs])

    const handleChangeInput = (e) => {
        e.target.style.width = e.target.value.length + 'ch';
    }

    const handleEditUsername = () => {
        setTabs(1);
        inputRef.current.value = username;
        inputRef.current.style.width = username.length + 'ch';
    }

    const handleUpdateUsername = () => {
        const value = inputRef.current.value.trim();
        if (!value) {
            alert('Vui lòng nhập tên !!');
            return;
        }
        setTabs(0);
        setUsername(value);
        storage.setUsername(value);
    }
    return (
        <div className="flex relative mb-10 pt-8">
            <div className="m-auto text-center">
                <img className="rounded-full mb-3 mx-auto w-30 h-30" src="/zingmp3/images/icon_zing_mp3_60.f6b51045.svg" alt="" />
                <div className="relative">
                    <div className={`flex items-center justify-center ${tabs === 0 ? '' : 'hidden'}`}>
                        <span className="text-4xl font-bold text-primary">{username}</span>
                        <SvgStyled
                            onClick={handleEditUsername}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </SvgStyled>
                    </div>
                    <div className={`flex items-center ${tabs === 1 ? '' : 'hidden'}`}>
                        <InputName ref={inputRef} onChange={handleChangeInput} type="text" />
                        <SvgStyled xmlns="http://www.w3.org/2000/svg"
                            onClick={handleUpdateUsername}
                            className="h-8 w-8"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </SvgStyled>
                    </div>
                </div>
            </div>
            <UserAction>
                <a href="#!" className="--yellow">Nâng cấp vip</a>
                <a href="#!">Nhập code víp</a>
                <i className="fas fa-ellipsis-h"></i>
            </UserAction>
        </div>
    )
}

export default UserProfile;