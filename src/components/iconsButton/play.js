import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import useDispatchs from '../../hooks/useDispatchs';

const PlayIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--white);
    &:hover {
        opacity: 0.6;
    }
`;

const LoadingStyled = styled.img`
    filter: invert(1);
`;

const PlayButton = ({ songAudioRef, songImageRef }) => {

    const { toggleSong } = useDispatchs();
    const isPlaying = useSelector(state => state.songs.isPlaying);
    const isLoaded = useSelector(state => state.songs.isLoaded);
    const rotateAnimate = useRef();

    useEffect(() => {
        rotateAnimate.current = songImageRef.current.animate([
            { transform: `rotate(360deg)` }
        ], {
            duration: 10000,
            iterations: Infinity
        });

        return () => {
            rotateAnimate.current.cancel();
        }
    }, [songImageRef]);

    useEffect(() => {
        isPlaying ? rotateAnimate.current.play() : rotateAnimate.current.pause();
        isPlaying ? songAudioRef.current.play() : songAudioRef.current.pause();

        return () => {
            rotateAnimate.current.pause()
        }
    }, [isPlaying, songAudioRef])


    return (
        <button>
            <PlayIcon>
                {!isLoaded
                    ? <LoadingStyled className="p-1" src="/zingmp3/images/icons/H0bj.gif" alt="" />
                    : isPlaying
                        ? <i onClick={toggleSong} className="fas fa-pause"></i>
                        : <img onClick={toggleSong}
                            src="/zingmp3/images/icons/play.81e7696e.svg" alt=""
                        />
                }
            </PlayIcon>
        </button>
    )
}

export default PlayButton;