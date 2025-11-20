import styled from "styled-components";
import { mobile } from "../../style/responsiveBreakpoints";

const SubmitButton = styled.button`
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: ${({ theme }) => theme.primaryHover};
    }

    ${mobile} {
        padding: 10px;
        font-size: 14px;
        margin-top: 15px;
    }
`;
export default SubmitButton;