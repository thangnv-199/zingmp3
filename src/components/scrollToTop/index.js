import { useLocation  } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const elmRef = useRef();
    useEffect(() => {
        elmRef.current.scrollIntoView({
            block: "start", 
            inline: "start"
    })
    }, [pathname])
    return (
        <div className="absolute top-0" ref={elmRef}></div>
    )
}

export default ScrollToTop;