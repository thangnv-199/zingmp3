import styled from 'styled-components';
import { convertDuration } from '../../utils';

const ImageWrapper = styled.a`
    display: block;
    overflow: hidden;
    position: relative;
    color: var(--text-primary);
    
    .overlay {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover {
        .overlay {
            opacity: 1;
            visibility: visible;
        }
        img {
            transition: all 0.2s linear;
            transform: scale(1.1);
        }
    }
`;

const Title = styled.a`
    color: var(--text-primary);
    font-weight: bold;
    display:-webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    font-size: 14px;
    text-transform: capitalize;

    &:hover {
        color: var(--link-text-hover);
    }
`;

const Text = styled.div`
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    color: var(--text-secondary);
    font-size: 12px;
`;

const PlayIcon = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: 1px solid var(--white);
    margin: 0 10px;
`;

const Duration = styled.span`
    position: absolute;
    display: inline-block;
    bottom: 5px;
    right: 5px;
    padding: 3px 5px;
    border-radius: 4px;
    color: var(--text-primary);
    background-color: #000;
    font-size: 12px;
    letter-spacing: 1px;
`

const CardMV = ({ thumbnail, title, artistThumnail, artists, duration }) => {


    return (
        <div className="select-none">
            <ImageWrapper href="#!">
                <div className="overlay">
                    <PlayIcon src="/zingmp3/images/icons/play.81e7696e.svg" alt="" />
                </div>
                <img className="object-contain w-full rounded-lg" src={thumbnail} alt="" />
                <Duration>{convertDuration(duration)}</Duration>
            </ImageWrapper>
            <div className="flex items-center py-2">
                <div className="h-10 w-10 rounded-full mr-3 overflow-hidden">
                    <img 
                        src={artistThumnail}
                        alt="" 
                    />
                </div>
               <div>
                    <Title href="#!">{title}</Title>
                    <Text size="14">{artists.map((artist, index) => (
                            <a className="hover:text-link-hover text-capitalize" href="#!" key={index}>{artist}{index < artists.length - 1 ? ', ' : ''}</a>
                        ))}
                    </Text>
               </div>
            </div>
        </div>
    )
}

export default CardMV;