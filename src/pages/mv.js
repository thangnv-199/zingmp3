import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import EmptyPage from '../pages/emptyPage';
import NavStyle2 from '../components/nav/navStyle2';
import CardMV from '../components/card/cardMV';
import vnData from '../data/mvPage/vn';
import usukData from '../data/mvPage/us-uk';
import koreaData from '../data/mvPage/korea';
import * as router from '../constant/router';

const navData = [{
    router: router.MV2 + router.VN,
    label: 'Việt Nam',
},{
    router: router.MV2 + router.US_UK,
    label: 'us-uk',
},{
    router: router.MV2 + router.KOREA,
    label: 'k-pop',
},]

const Body = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px -10px 0;

    & > * {
        padding: 0 10px;
        margin-bottom: 30px;
    }
`

const MVPage = () => {

    const render = (data) => data.map((props, index) => (
        <CardMV
            key={index}
            {...props}
        />
    ))
    
    return (
        <div>
            <div className="flex items-center border-b border-bd-primary pb-2">  
                <div className="text-2xl font-bold pr-5 border-r border-bd-primary">MV</div>
                <NavStyle2 data={navData} size={14}/>
            </div>
            <Routes>
                <Route path={router.VN} element={<Body>{render(vnData)}</Body>} />
                <Route path={router.US_UK} element={<Body>{render(usukData)}</Body>} />
                <Route path={router.KOREA} element={<Body>{render(koreaData)}</Body>} />
                <Route path="/*" element={<EmptyPage />} />
            </Routes>
        </div>
    )
}

export default MVPage;