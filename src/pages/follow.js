import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import EmptyPage from '../pages/emptyPage';
import artists from '../data/artists';
import Carousel from '../components/carousel';
import CardNewFeed from '../components/card/cardNewFeed';
import followVnData from '../data/followPage/vn';
import followUsData from '../data/followPage/us-uk';
import followKoreaData from '../data/followPage/korea';
import followChinaData from '../data/followPage/china';
import followHighlightData from '../data/followPage/highlight';
import NavStyle1 from '../components/nav/navStyle1';
import * as router from '../constant/router';

const navData = [{
    router: router.FOLLOW + router.VN,
    label: 'Việt Nam',
}, {
    router: router.FOLLOW + router.US_UK,
    label: 'us-uk',
}, {
    router: router.FOLLOW + router.KOREA,
    label: 'k-pop',
}, {
    router: router.FOLLOW + router.CHINA,
    label: 'hoa ngữ',
}, {
    router: router.FOLLOW + router.HIGHLIGHT,
    label: 'nổi bật',
},]

const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

const Dkm = styled.div`
    .nvt-arrow {
        position: absolute;
        z-index: 100;
        background-color: #fff;
        color: #ccc;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        bottom: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .arrow-prev {
        left: 0;
        transform: translateX(-33%);
    }
    .arrow-next {
        right: 0;
        transform: translateX(33%);
}
`;
const FollowPage = () => {

    const renderNewFeed = (data) => {
        return data.map((props, index) => (
            <CardNewFeed key={index} {...props} />
        ))
    }

    return (
        <div>
            <NavStyle1 data={navData} />
            <Routes>
                <Route path={router.VN} element={
                    <>
                        <Dkm>
                            <Carousel col={5} col_lg={4} col_sm={3} arrowStyle={2}>
                                {artists.sort(() => 0.5 - Math.random()).map(({ thumbnail }, index) => (
                                    <a href="#!" key={index} >
                                        <img className="hover:opacity-60 px-2" src={thumbnail} alt="" />
                                    </a>
                                ))}
                            </Carousel>
                            <Body>
                                {renderNewFeed(followVnData)}
                            </Body>
                        </Dkm>
                    </>}
                />
                <Route path={router.US_UK} element={<Body>{renderNewFeed(followUsData)}</Body>} />
                <Route path={router.KOREA} element={<Body>{renderNewFeed(followKoreaData)}</Body>} />
                <Route path={router.CHINA} element={<Body>{renderNewFeed(followChinaData)}</Body>} />
                <Route path={router.HIGHLIGHT} element={<Body>{renderNewFeed(followHighlightData)}</Body>} />
                <Route path="/*" element={<EmptyPage />} />
            </Routes>

        </div>
    )
}

export default FollowPage;
