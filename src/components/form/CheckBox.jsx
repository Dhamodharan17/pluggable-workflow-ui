import styled from "styled-components";
import { mobile } from "../../style/responsiveBreakpoints";

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 8px;
    margin-top: 0px;
    ${mobile} {
        margin-right: 6px;
        margin-top: 0;
    }
`;

export default Checkbox;