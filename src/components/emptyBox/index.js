import styled from 'styled-components';

const Div = styled.div`
    width: 100%;
    padding: 30px 0;
    min-height: 220px;
    background-color: var(--alpha-bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        color: var(--text-secondary);
    }
`;

const EmptyBox = ({ label, imageSrc }) => {

    return (
        <Div>
            <img className="mb-5" src={imageSrc} alt="" />
            <span>{label}</span>
        </Div>
    )
}

export default EmptyBox;