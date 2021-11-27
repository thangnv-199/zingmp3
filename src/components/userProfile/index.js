import styled from 'styled-components';

const UserAction = styled.nav`
    position: absolute;
    right: 0;
    top: 0;

    i {
        color: #fff;
        padding: 10px;
        background-color: var(--alpha-bg);
        border-radius: 100%;
        cursor: pointer;
    }

    a {
        display: inline-block;
        padding: 6px 20px;
        color: white;
        background-color: var(--alpha-bg);
        border-radius: 20px;
        margin-right: 10px;
        font-size: 12px;
        text-transform: uppercase;
        transition: all 0.2s linear;

        &.--yellow {
            background-color: var(--yellow);
            color: var(--black);
        }
        &:hover {
            opacity: 0.8;
        }
    }
`;

const UserProfile = () => {

    return (
        <div className="flex relative mb-10">
            <div className="m-auto text-center">
                <img className="rounded-full mb-3" src="/zingmp3/images/avatar.jpg" alt="" />
                <h2 className="text-4xl font-bold text-white">Thắng</h2>
            </div>
            <UserAction>
                <a href="#!" className="--yellow">Nâng cấp vip</a>
                <a href="#!">Nhập code víp</a>
                <i className="fas fa-ellipsis-h"></i>
            </UserAction>
        </div>
    )
}

export default UserProfile;