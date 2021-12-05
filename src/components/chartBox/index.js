import styled from 'styled-components';
import useDispatchs from '../../hooks/useDispatchs';

const Container = styled.div`
    background-color: var(--alpha-bg);
    padding: 20px 10px;;
    border-radius: 20px;
    margin-bottom: 30px;
`

const ChartBox = ({ title, children, playlist }) => {

    const { openPlaylist } = useDispatchs();

    return (
        <Container>
            <h1 className="flex items-center text-2xl font-bold mb-3 px-10">
                <span>{ title }</span>
                <img onClick={() => openPlaylist(playlist)}
                    className="rounded-full bg-purple cursor-pointer hover:opacity-50 w-8 h-8 ml-2"
                    src="/zingmp3/images/icons/play.81e7696e.svg" 
                    alt="" 
                    title="Phát tất cả"
                />
            </h1>
            { children }
        </Container>
    )
}

export default ChartBox;