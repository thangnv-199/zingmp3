import styled from 'styled-components';
import { convertTime } from '../../utils';

const Container = styled.div`
    background-color: var(--alpha-bg);
    border-radius: 20px;
    padding: 20px;
`;

const Title = styled.p`
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
`

const PlayIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    border: 2px solid var(--white);
    &:hover {
        opacity: 0.6;
    }
`;

const Image = styled.img`
    margin-bottom: 10px;
    height: 240px;
    object-fit: cover;
    width: 100%;
    border-radius: 8px;
`;

const CardFeed = ({ publisher, content, like, commend, title, createdAt }) => {

    const renderContent = (content) => {
        if (content.type === 'album') {
            return <a href="#!" className="block" >
                <Image
                    src={content.photos[0].url}
                    alt=""
                />
            </a>
        } else if (content.type === 'feedVideo') {
            return <a href="#!" className="block relative" >
                <Image
                    src={content.thumbnail}
                    alt=""
                />
                <PlayIcon>
                    <img src="/zingmp3/images/icons/play.81e7696e.svg" alt="" />
                </PlayIcon>
            </a>
        } else if (content.type === 'link') {
            return <a href="#!" className="block relative" >
                <Image
                    src={content.thumbnail}
                    alt=""
                />
            </a>
        }
    }

    return (
        <div>
            <Container>
                <header className="flex items-center mb-2">
                    <div className="mr-2">
                        <img
                            className="rounded-full w-10 h-10"
                            src={publisher.thumbnail}
                            alt=""
                        />
                    </div>
                    <div>
                        <p>
                            <span className="capitalize">{publisher.name}</span>
                            <span className="inline-block mx-2">  •  </span>
                            <a href="#!" className="text-link-hover hover:opacity-60">Quan tâm</a>
                        </p>
                        <p className="text-secondary text-xs">{convertTime(new Date(createdAt * 1000))}</p>
                    </div>
                </header>
                <div>
                    <Title className="mb-2">{title}</Title>
                    <div>
                        {renderContent(content)}
                    </div>
                </div>
                <footer className="flex items-center">
                    <div className="flex items-center mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 cursor-pointer hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{like}</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 cursor-pointer hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>{commend}</span>
                    </div>
                </footer>
            </Container>
        </div>
    )
}

export default CardFeed;