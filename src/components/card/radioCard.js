import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const ImageWrapper = styled.a`
    display: block;
    position: relative;
    margin-bottom: 10px;
    border-radius: 100%;
    overflow: hidden;

    .overlay {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    &:hover {
        .overlay {
            opacity: 1;
            visibility: visible;
        }
        img {
            transition: all 0.2s linear;
            transform: scale(1.1);
        }
    }
`;

const Title = styled.a`
    font-size: ${props => props.size + 'px' || '16px'};
    color: #fff;
    font-weight: bold;
    display:-webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    text-transform: capitalize;
    margin-bottom: 5px;

    &:hover {
        color: var(--purple-primary);
    }
`;

const Text = styled.div`
    font-size: ${props => props.size + 'px' || '16px'};
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    color: var(--text-secondary);
    span {
        &:hover {
            text-decoration: underline;
            color: var(--purple-primary);
        }
    }
`;

const LiveLogo = styled.span`
    position: absolute;
    left: 50%;
    transform: translate(-50%,50%);
    bottom: 0;
    font-size: 8px;
    font-weight: 700;
    background-color: red;
    padding: 3px;
    line-height: 1;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 3px;
    color: #fff;
    z-index: 11;
}
`;

const PlayIcon = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: 1px solid var(--white);
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

const CardRadio = ({ thumbnail, title, listening }) => {
    return (
        <Container>
            <div className="relative">
                <ImageWrapper href="#!">
                    <div className="overlay">
                        <PlayIcon src="/zingmp3/images/icons/play.81e7696e.svg" alt="" />
                    </div>
                    <Image src={thumbnail} alt="" />
                </ImageWrapper>
                <LiveLogo>LIVE</LiveLogo>
            </div>
            <div>
                <Title href="#!" size="16" title={title}>{title}</Title>
                <Text size="12" title={listening}>{listening} đang nghe</Text>
            </div>
        </Container>
    )
}

export default CardRadio;