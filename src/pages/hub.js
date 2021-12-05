import Carousel from '../components/carousel';
import Card from '../components/card';
import * as data from '../data/hubPage';

const HubPage = () => {

    const renderCard = (data) => {
        return data.map((props, index) => (
            <Card
                {...props}
                key={index}
            />
        ))
    }

    return (
        <div>
            <div className="mb-8">
                <img src={data.banner} alt="" />
            </div>

            <Carousel 
                headerStyle={1}
                title={data.nations.title}
                col={3} col_md={2}
            >
                {renderCard(data.nations.items)}
            </Carousel>

            { data.genre.map((item, index) => (
                <Carousel 
                    headerStyle={2}
                    to="#!"
                    title={item.title}
                    col={4}
                    col_md={3}
                    key={index}
                >
                    {renderCard(item.items)}
                </Carousel>
            )) }
  
        </div>
    )
}

export default HubPage;