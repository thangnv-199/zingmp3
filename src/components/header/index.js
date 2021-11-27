import styled from "styled-components";
import { useNavigate  } from 'react-router-dom';

const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 240px;
    display: flex;
    align-items: center;
    height: 70px;
    background-color: var(--layout-bg);
    padding: 0 30px;
    color: #7c6769;
    z-index: 90;

    .back-button, .next-button {
        padding: 10px;
        &:hover {
            color: #fff;
        }
    }
`;

const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: var(--alpha-bg);
    height: 40px;
    border-radius: 20px;
    flex: 1;
    padding: 8px;

    input {
        background-color: transparent;
        width: 100%;
        display: block;
        &::placeholder {
            color: inherit;
        }
    }
`;

const HeaderNav = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    
    button {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: var(--alpha-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #d8d8d8;
        overflow: hidden;

        &:hover {
            opacity: 0.6;
        }
    }
`;


const Header = () => {

    const navigate = useNavigate();

    return (
        <HeaderStyled className="flex gap-3">
            <div className="flex">
                <div 
                    onClick={ () => { navigate(-1) } }
                    className="back-button cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
                <div 
                    onClick={ () => { navigate(1) } }
                    className="next-button cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
            <HeaderSearch>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <input placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV ..." type="text" />
            </HeaderSearch>
            <HeaderNav>
                <button>
                    <svg width={20} height={20} viewBox="0 0 20 20"><defs><linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%"><stop offset="0%" stopColor="#F81212" /><stop offset="100%" stopColor="red" /></linearGradient><linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%"><stop offset="0%" stopColor="#00F" /><stop offset="100%" stopColor="#0031FF" /></linearGradient><linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%"><stop offset="0%" stopColor="#FFA600" /><stop offset="100%" stopColor="orange" /></linearGradient><linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%"><stop offset="0%" stopColor="#13EFEC" /><stop offset="100%" stopColor="#00E8DF" /></linearGradient><filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3.9" /></filter><filter id="301mo6jeah" width="312.7%" height="312.7%" x="-106.4%" y="-106.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3.9" /></filter><filter id="b2zvzgq7fj" width="295%" height="295%" x="-97.5%" y="-97.5%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3.9" /></filter><filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="3.9" /></filter><path id="qtpqrj1oda" d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z" /><path id="jggzvnjgfc" d="M0 0H20V20H0z" /><path id="2eiwxjmc7m" d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z" /></defs><g fill="none" fillRule="evenodd" transform="translate(2 3)"><mask id="tinejqaasb" fill="#fff"><use xlinkHref="#qtpqrj1oda" /></mask><use fill="#FFF" fillOpacity={0} xlinkHref="#qtpqrj1oda" /><g mask="url(#tinejqaasb)"><g transform="translate(-2 -3)"><mask id="uf3ckvfvpf" fill="#fff"><use xlinkHref="#jggzvnjgfc" /></mask><use fill="#D8D8D8" xlinkHref="#jggzvnjgfc" /><circle cx="8.9" cy="6.8" r={9} fill="url(#j32lhg93hd)" filter="url(#4a7imk8mze)" mask="url(#uf3ckvfvpf)" /><circle cx="9.3" cy="13.7" r="5.5" fill="url(#hjoavsus6g)" filter="url(#301mo6jeah)" mask="url(#uf3ckvfvpf)" /><circle cx="15.9" cy="6.9" r={6} fill="url(#la1y5u3dvi)" filter="url(#b2zvzgq7fj)" mask="url(#uf3ckvfvpf)" /><circle cx="16.4" cy="17.7" r="7.5" fill="url(#2dsmrlvdik)" filter="url(#a1wq161tvl)" mask="url(#uf3ckvfvpf)" /></g></g><use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m" /></g></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
                <button>
                    <img src="/zingmp3/images/avatar.jpg" alt="" />
                </button>
            </HeaderNav>
        </HeaderStyled>
    )
}

export default Header;