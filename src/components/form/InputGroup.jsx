import styled from "styled-components";
import { mobile } from "../../style/responsiveBreakpoints";

const InputGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
    background: ${({ theme }) => theme.inputBg};
    border-radius: ${({ theme }) => theme.radius};
    border: 1px solid ${({ theme }) => theme.border};

    ${mobile} {
        margin-bottom: 12px;
    }
`;

export default InputGroup