import styled from "styled-components";
import { mobile } from "../../style/responsiveBreakpoints";

const Label = styled.label`
  color: ${({ theme }) => theme.text};
  
  font-size: 12px;
  font-weight: 500; 
  display: ${({display})=> display ? display : 'block'};

  // Optional: Add styling for required fields (if applicable)
  &.required::after {
    content: " *";
    color: red;
  }

  // Responsive adjustments (using your imported breakpoint)
  ${mobile} {
    font-size: 11px;
    margin-bottom: 3px;
  }
`;

export default Label;