import { useEffect, useRef } from 'react';

const useClickOutSide = (callback) => {

    const ref = useRef();

    useEffect(() => {
        const handleClickOutSide = (e) => {
            const isCheck = ref.current.contains(e.target);
            callback(isCheck);
        }
        document.addEventListener('click', handleClickOutSide);
        return () => {
            document.removeEventListener('click', handleClickOutSide);
        }
    })

    return ref;
}

export default useClickOutSide;