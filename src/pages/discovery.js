import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Carousel from '../components/carousel';
import Card from '../components/card';
import CardRadio from '../components/card/radioCard';
import ChartBox from '../components/chartBox';
import Song from '../components/song';
import ButtonStyle1 from '../components/button/button1';
// import * as data from '../data/discoveryPage';
import * as router from '../constant/router';
import * as data1 from '../data/discoveryPage/data1';
import * as data2 from '../data/discoveryPage/data2';
import * as data3 from '../data/discoveryPage/data3';
import * as data4 from '../data/discoveryPage/data4';
import * as data5 from '../data/discoveryPage/data5';
import artists from '../data/artists';
import { zingChart } from '../data/zingChart';

const LogoList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    & > * {
        width: calc(100% / 8);
        flex: 0 0 calc(100% / 8);
        height: 50px;
        border-radius: 8px;
        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 1023px) {
        & > * {
            width: calc(100% / 4 - 20px);
            flex: 0 0 calc(100% / 4 - 20px);
        }
    }
`;

const Discovery = () => {

    const renderCard = (data) => {
        return data.map((props, index) => (
            <Card
                {...props}
                key={index}
                overlay
            />
        ))
    }

    const renderCardRadio = (data) => {
        return data.map((props, index) => (
            <CardRadio
                {...props}
                key={index}
                overlay
            />
        ))
    }

    const renderSongs = (playlist, quantity) => {
        return playlist.songs.slice(0, quantity).map((song, index) => (
            <li key={index} >
                <Song 
                    index={index}
                    data={song} 
                    playlist={playlist} 
                />
            </li>
        ))
    }

    return (
        <div>

            <Carousel 
                headerStyle={1} 
                title={data1.recent.title} 
                col={6} col_lg={5} col_md={4}
            >
                {renderCard(data1.recent.items)}
            </Carousel>

            <Carousel 
                headerStyle={1} 
                title={data1.canYouListen.title} 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data1.canYouListen.items)}
            </Carousel>

            <Carousel 
                headerStyle={1} 
                title={data1.chooseToday.title} 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data1.chooseToday.items)}
            </Carousel>

            <Carousel 
                headerStyle={1} 
                title={data1.xoneCorner.title} 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data1.xoneCorner.items)}
            </Carousel>

            <Carousel
                headerStyle={2}
                to={router.RADIO}
                title={data2.radio.title}
                col={6} col_lg={5} col_md={4}
            >
                {renderCardRadio(data2.radio.items)}
            </Carousel>
            
            <Carousel 
                headerStyle={1} 
                title={data2.mix.title} 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data2.mix.items)}
            </Carousel>

            <Carousel 
                headerStyle={1} 
                title={data2.becauseListened.title} 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data2.becauseListened.items)}
            </Carousel>

            <Carousel 
                headerStyle={1} 
                title={data2.newSongEveryDay.title} 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data2.newSongEveryDay.items)}
            </Carousel>

            <ChartBox playlist={zingChart} title="#zingchart">
                <ul>
                    { renderSongs(zingChart, 5) }
                </ul>
                <div className="text-center mt-5">
                    <ButtonStyle1 
                        label="Xem thêm"
                        to={router.ZING_CHART}
                    />
                </div>
            </ChartBox>

            <ul className="grid grid-cols-3 gap-6 mb-5">
                <li className="rounded-lg overflow-hidden">
                    <Link to={router.CHART_WEEK + router.VN}>
                        <img className="transition-all duration-300 transform hover:scale-125" src={data3.weekChartBanner[0].banner} alt="" />
                    </Link>
                </li>
                <li className="rounded-lg overflow-hidden">
                    <Link to={router.CHART_WEEK + router.US_UK}>
                        <img className="transition-all duration-300 transform hover:scale-125" src={data3.weekChartBanner[1].banner} alt="" />
                    </Link>
                </li>
                <li className="rounded-lg overflow-hidden">
                    <Link to={router.CHART_WEEK + router.KOREA}>
                        <img className="transition-all duration-300 transform hover:scale-125" src={data3.weekChartBanner[2].banner} alt="" />
                    </Link>
                </li>
            </ul>

            <Carousel col={5} col_lg={4} col_md={3}>
                {artists.sort(() => 0.5 - Math.random()).map(({thumbnail}, index) => (
                    <a href="#!" key={index} >
                         <img className="hover:opacity-60" src={thumbnail} alt=""/>
                    </a>
                ))}
            </Carousel>

            <Carousel 
                headerStyle={2} 
                to={router.TOP_100}
                title={data3.top100.title} 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data3.top100.items)}
            </Carousel>

            <Carousel 
                headerStyle={1} 
                title={data4.mixtape.title} 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data4.mixtape.items)}
            </Carousel>
            
            <Carousel
                headerStyle={3}
                subTitle={data4.becauseYouCare.subTitle}
                title={data4.becauseYouCare.title}
                col={5} col_lg={4} col_md={3}
                thumbnail={data4.becauseYouCare.thumbnail}
            >
                {renderCard(data4.becauseYouCare.items)}
            </Carousel>

            <Carousel
                headerStyle={3}
                subTitle={data4.topListened.subTitle}
                title={data4.topListened.title}
                col={5} col_lg={4} col_md={3}
                thumbnail={data4.topListened.thumbnail}
            >
                {renderCard(data4.topListened.items)}
            </Carousel>

            <div>
                <h3 className="text-secondary text-center text-xl uppercase mb-5">Đối tác âm nhạc</h3>
                <LogoList>
                   { data5.logos.map(({ imageSrc }, index) => (
                        <a href="#!" className="bg-white p-1 hover:opacity-50" key={index}>
                            <img src={imageSrc} alt="" />
                        </a>
                   )) }
                </LogoList>
            </div>

        </div>
    )
}

export default Discovery;