import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { toggleSong } from '../../redux/actions';

const PlayIcon = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: 1px solid var(--white);
    margin: 0 10px;

    &:hover {
        opacity: 0.6;
    }
`;

const PlayButton = ({ songAudioRef, songImageRef }) => {

    const dispatch = useDispatch();
    const isPlaying = useSelector(state => state.songs.isPlaying);
    const isLoaded = useSelector(state => state.songs.isLoaded);
    const rotateAnimate = useRef();

    const handleToggleSong = () => { 
        dispatch(toggleSong());
    }

    useEffect(() => {
        rotateAnimate.current = songImageRef.current.animate([
            {  transform: `rotate(360deg)` }
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
        <button className="text-4xl">
            { !isLoaded
                ? <PlayIcon className="p-1" src="/images/icons/Youtube_loading_symbol_1_(wobbly).gif" alt="" />
                : isPlaying 
                    ? <PlayIcon 
                        onClick={ handleToggleSong } 
                        className="p-2" src="/images/icons/pause-1324760544677966292.png" alt="" 
                    />
                    : <PlayIcon 
                        onClick={ handleToggleSong } 
                        src="/images/icons/play.81e7696e.svg" alt="" 
                    />
            }
        </button>
    )
}

export default PlayButton;