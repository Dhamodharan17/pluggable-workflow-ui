import styled from "styled-components";
import { mobile, tablet } from "../../style/responsiveBreakpoints";

export const FlipContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${({ theme }) => theme.background};
    perspective: 1000px;
    padding: 0 20px;
`;

export const FlipCard = styled.div`
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    transform-style: preserve-3d;
    transition: transform 0.6s;
    border-radius: ${({ theme }) => theme.radius};
    transform: ${({ $isFlipped }) =>
        $isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};

    ${tablet} {
        width: 450px;
    }

    ${mobile} {
        width: 100%;
    }
`;

export const CardFace = styled.div`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: ${({ theme }) => theme.radius};
    background: ${({ theme }) => theme.cardBg};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.shadow};

    ${mobile} {
        position: relative;
        padding: 20px;
        background: transparent;
    }
    
`;

export const CardFaceBack = styled(CardFace)`
    transform: rotateY(180deg);
    padding: 20px;
    
`;

export const ProfileIconPlaceholder = styled.div`
    width: 120px;
    height: 120px;
    font-size: 54px;
    margin-bottom: -60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 10;

    ${mobile} {
        width: 100px;
        height: 100px;
        font-size: 48px;
        margin-bottom: -50px;
    }
`;
