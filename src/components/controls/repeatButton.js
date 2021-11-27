import styled from 'styled-components';
import { useState } from 'react';
import * as storageKey from '../../constant/storage';
import { storage } from '../../utils';

const RepeatBadge = styled.span`
    position: absolute;
    font-size: 10px;
    color: var(--white);
    font-weight: bold;
    left: 20px;
    background: var(--purple-primary);
    line-height: 1;
    border-radius: 10px;
    padding: 2px;
`;

const RepeatButton = () => {
    
    const [repeat, setRepeat] = useState(storage.get(storageKey.REPEAT) || 0);
    
    const handleToggleRepeat = (e) => {
        const index = (repeat + 1) % 3;
        storage.set(storageKey.REPEAT, index);
        setRepeat(index)
    }

    return (
        <button onClick={handleToggleRepeat}>
        {
            repeat === 0 
            ? <i title="Bật phát lại tất cả" className="fas fa-recycle"/>
            : repeat === 1 
                ? <i title="Bật phát lại 1 bài" className="fas fa-recycle --active"/>
                : <div className="relative">
                    <RepeatBadge>1</RepeatBadge>
                    <i title="Tắt phát lại" className="fas fa-recycle --active"/>
                </div>
        }
        </button>
    )
}

export default RepeatButton;