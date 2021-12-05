import styled from 'styled-components';
import { useState, useRef, useCallback, useEffect } from 'react';

import storage from '../../utils/storage';
import Slider from '../controls/slider';

const VolumeContainer = styled.button`
    position: relative;
    cursor: pointer;
    display: flex;

    &:hover {
        & > div {
            opacity: 1;
            visibility: visible;
        }
    }
`;

const VolumnSlider = styled.div`
    width: 100px;
    background-color: transparent;
    padding: 12px 0;

    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        height: 10px;
        width: 100%;
        background-color: transparent;
    }

    .duration {
        &-process {
            &::after {
                opacity: 1;
                visibility: visible;
            }
        }
        &-bar {
            height: 6px;
            margin: 0;
        }
    }

    @media (max-width: 1023px) {
        position: absolute;
        border-radius: 4px;
        top: -100%;
        left: -60px;
        opacity: 0;
        visibility: hidden;
        padding: 12px;
        width: 150px;
        background-color: #353535;
    }
`;

const VolumeButton = ({ songAudioRef }) => {
    
    const [mute, setMute] = useState(storage.getMute());
    const volumnProcessElm = useRef();

    useEffect(() => {
        const currentVolume = storage.getVolume();
        songAudioRef.current.volume = currentVolume;
        volumnProcessElm.current.setWidth(currentVolume * 100);
    }, [songAudioRef,])
 
    useEffect(() => {
        if (mute) {
            songAudioRef.current.volume = 0;
            volumnProcessElm.current.setWidth(0);
        } else {
            const volume = storage.getVolume();
            songAudioRef.current.volume = volume;
            volumnProcessElm.current.setWidth(volume * 100);
        }
    }, [mute, songAudioRef])

    const handleVolumnSliderMouseUp = useCallback((width) => {
        volumnProcessElm.current.setWidth(width);
        const volume = width / 100 > 1 ? 1 : width / 100;
        songAudioRef.current.volume = volume;
        storage.setVolume(volume);
    }, [songAudioRef])

    const handleToggleVolume = (e) => {
        if (e.target.closest('.icon-btn')){
            setMute(!mute);
            storage.setMute(!mute);
        }
    };

    return (
        <VolumeContainer>
            { mute 
                ? <i onClick={ handleToggleVolume } className="fas fa-volume-mute icon-btn"></i>
                : <i onClick={ handleToggleVolume } className="fas fa-volume-up icon-btn"></i>
            }
            <VolumnSlider>
                <Slider 
                    ref={ volumnProcessElm }
                    onHandleMouseUp={ handleVolumnSliderMouseUp }
                    current={ storage.getVolume()}
                
                />
            </VolumnSlider>
        </VolumeContainer>
    )
}

export default VolumeButton;