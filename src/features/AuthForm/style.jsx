import styled from 'styled-components';
import { mobile, tablet } from '../../style/responsiveBreakpoints';

export const AuthFormWrapper = styled.form`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mobile} {
        max-width: 100%;
    }
`;


export const Header = styled.h2`
    color: ${({ theme }) => theme.text};
    margin-bottom: 25px;
    margin-top: 40px;
    font-size: 28px;
    font-weight: 500;
    padding-top: 8px;

    ${mobile} {
        font-size: 22px;
        margin-bottom: 15px;
    }
`;

export const IconWrapper = styled.span`
    padding: 10px;
    color: ${({ theme }) => theme.textSecondary};
    font-size: 16px;

    ${mobile} {
        padding: 8px;
        font-size: 14px;
    }
`;

export const SwitchButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    font-size: 14px;
    margin-top: 15px;
    display: flex;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }

    ${mobile} {
        font-size: 12px;
        margin-top: 12px;
    }
`;

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-size: 12px;
`;