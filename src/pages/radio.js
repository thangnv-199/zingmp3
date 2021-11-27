
import Carousel from '../components/carousel';
import Card from '../components/card';
import CardRadio from '../components/card/radioCard';
import * as data from '../data/radioPage';

const Radio = () => {

    const renderCard = (data) => {
        return data.map((props, index) => (
            <Card
                {...props}
                key={index}
            />
        ))
    }

    const renderCardRadio = (data) => {
        return data.map((props, index) => (
            <CardRadio
                {...props}
                key={index}
            />
        ))
    }

    return (
        <div>
            <div className="mt-8">
                <Carousel col={6} col_lg={5} col_md={4}>
                    {renderCardRadio(data.radio)}
                </Carousel>
            </div>
            <Carousel headerStyle={1} heading="Đón xem" col={2} col_sm={1}>
                {renderCard(data.donxem)}
            </Carousel>
            <Carousel headerStyle={1} heading="Thể Loại Podcast" col={5} col_lg={4} col_md={3}>
                {renderCard(data.postcast)}
            </Carousel>
            <Carousel 
                headerStyle={3} 
                headerImage="/zingmp3/images/radio/0825d8cd559dee502625a25d540c636a.webp"
                caption="nghe lại"
                heading="XONE radio" 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data.xone)}
            </Carousel>
            <Carousel 
                headerStyle={3} 
                headerImage="/zingmp3/images/radio/dc5b49e6cb115ee1d3fa0bf749a2efd1.webp"
                caption="Podcast"
                heading="Vietcetera" 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data.vietcetera)}
            </Carousel>

            <Carousel 
                headerStyle={3} 
                headerImage="/zingmp3/images/radio/854010f76bddeefd5f13305a1d6cc8be.webp"
                caption="nghe lại"
                heading="on air" 
                col={4} col_md={3}
            >
                {renderCard(data.onAir)}
            </Carousel>
        </div>
    )
}

export default Radio;