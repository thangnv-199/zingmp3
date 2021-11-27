import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    min-height: 500px;
    background-color: var(--alpha-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        color: var(--text-secondary);
    }
`;

const EmptyPage = () => {

    return (
        <Div>
            <img className="mb-5" src="/images/icons/dics-music-icon.3925fc01.svg" alt="" />
            <span>Trang chưa có nội dung</span>
        </Div>
    )
}

export default EmptyPage;