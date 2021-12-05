
import { useState } from 'react';
import useDispatchs from '../../hooks/useDispatchs';
import storage from '../../utils/storage';

const RandDomButton = () => {
    const { toggleRandomPlay } = useDispatchs();
    const [isRandom, setIsRandom] = useState(storage.getRandom());
    const handleToggleRandom = () => {
        setIsRandom(!isRandom);
        toggleRandomPlay();
    }

    return (
        <button >
            <i
                title="Phát ngẫu nhiên"
                onClick={handleToggleRandom}
                className={`fas fa-random ${isRandom ? '--active' : ''}`}
            />
        </button>
    )
}

export default RandDomButton;