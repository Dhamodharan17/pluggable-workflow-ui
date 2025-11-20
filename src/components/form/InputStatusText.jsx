import styled from "styled-components";
import { mobile } from "../../style/responsiveBreakpoints";

const InputStatusText = styled.div`
    color: red;
    margin-top: 10px;
    font-size: 14px;

    ${mobile} {
        font-size: 12px;
        margin-top: 8px;
    }
`;

export default InputStatusText;