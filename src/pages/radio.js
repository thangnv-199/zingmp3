
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
        <div className="mt-10">
            <Carousel col={6} col_lg={5} col_md={4}>
                {renderCardRadio(data.livestream.items)}
            </Carousel>

            <Carousel 
                headerStyle={1} 
                title={data.donXem.title} 
                col={2} col_sm={1}
            >
                {renderCard(data.donXem.items)}
            </Carousel>

            <Carousel 
                headerStyle={1} 
                title={data.postcastCategory.title} 
                col={5} col_lg={4} col_md={3}
            >
                {renderCard(data.postcastCategory.items)}
            </Carousel>

            <Carousel 
                headerStyle={3} 
                thumbnail={data.xone.thumbnail}
                subTitle={data.xone.subTitle}
                title={data.xone.title} 
                col={4} col_md={3}
            >
                {renderCard(data.xone.items)}
            </Carousel>
            
            <Carousel 
                headerStyle={3} 
                thumbnail={data.postcast.thumbnail}
                subTitle={data.postcast.subTitle}
                title={data.postcast.title} 
                col={4} col_md={3}
            >
                {renderCard(data.postcast.items)}
            </Carousel>

            <Carousel 
                headerStyle={3} 
                thumbnail={data.postcast2.thumbnail}
                subTitle={data.postcast2.subTitle}
                title={data.postcast2.title} 
                col={4} col_md={3}
            >
                {renderCard(data.postcast2.items)}
            </Carousel>

            <Carousel 
                headerStyle={3} 
                thumbnail={data.onAir.thumbnail}
                subTitle={data.onAir.subTitle}
                title={data.onAir.title} 
                col={4} col_md={3}
            >
                {renderCard(data.onAir.items)}
            </Carousel>

            <Carousel 
                wrap
                headerStyle={1} 
                title={data.discovery.title} 
                col={4} col_md={3}
            >
                {renderCard(data.discovery.items)}
            </Carousel>
        
        </div>
    )
}

export default Radio;