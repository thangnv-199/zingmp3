import styled from 'styled-components';

const Container = styled.div`
    background-color: var(--alpha-bg);
    padding: 20px 10px;;
    border-radius: 20px;
    margin-bottom: 30px;
`

const ChartBox = ({ title, children, playlist }) => {
    return (
        <Container>
            <h1 className="flex items-center text-2xl font-bold mb-3 px-10">
                <span>{ title }</span>
                <img 
                    className="rounded-full bg-purple cursor-pointer hover:opacity-50 w-8 h-8 ml-2"
                    src="/zingmp3/images/icons/play.81e7696e.svg" 
                    alt="" 
                />
            </h1>
            { children }
        </Container>
    )
}

export default ChartBox;