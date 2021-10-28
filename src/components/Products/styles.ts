import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    gap: 10px;
`
export const Card = styled.div`
    @media(min-width:910px){
        max-width: 228px;
        height: 320px;
    }

    max-width: 220px;
    height: 320px;
    background: #fff;
    border-radius: 5px;
    padding: 10px;

    img{
        max-width:200px;
        max-height:100px;
    }

    .infos{
        position: relative;
        left: 17%;
        height: 15vh;
        width: 70%;
    }
`