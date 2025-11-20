import styled from "styled-components";
import { mobile } from "../../style/responsiveBreakpoints";

const Input = styled.input`
    flex-grow: 1;
    padding: 10px 0;
    border: none;
    outline: none;
    font-size: 14px;
    background: transparent;
    color: ${({ theme }) => theme.text};

    ${mobile} {
        font-size: 13px;
        padding: 8px 0;
    }
`;

export default Input;