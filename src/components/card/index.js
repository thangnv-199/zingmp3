import styled from 'styled-components';

const Container = styled.div`
    ${props => props.center ? 'text-align: center' : ''}
    user-select: none;
`;

const ImageWrapper = styled.a`
    display: block;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    border-radius:${props => props.circle ? '100%' : '5px'};
    color: var(--text-primary);
    
    .overlay {
        display: flex;
        align-items: center;
        justify-content: center;
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
    color: var(--text-primary);
    font-weight: bold;
    display:-webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    font-size: 14px;
    text-transform: capitalize;
    margin-bottom: 5px;

    &:hover {
        color: var(--link-text-hover);
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
            color: var(--link-text-hover);
        }
    }
`;

const PlayIcon = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: 1px solid var(--white);
    margin: 0 10px;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

const Card = ({ thumbnail, title, artists, description, circle, center, overlay }) => {
    return (
        <Container center={center}>
            <ImageWrapper title={title} href="#!" circle={circle}>
                { overlay && <div className="overlay">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <PlayIcon src="/zingmp3/images/icons/play.81e7696e.svg" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                </div> }
                <Image src={thumbnail} alt="" />
            </ImageWrapper>
            <div>
                <Title href="#!" title={title}>{title}</Title>
                {artists && <Text size="14">{artists.map((artist, index) => (
                        <a className="hover:text-link-hover text-capitalize" href="#!" key={index}>{artist}{index < artists.length - 1 ? ', ' : ''}</a>
                    ))}
                </Text>}
                {description && <Text size="14" title={description}>{description}</Text>}
            </div>
        </Container>
    )
}

export default Card;