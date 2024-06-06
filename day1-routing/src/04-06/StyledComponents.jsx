import styled from "styled-components";

const MyAnotherFontElement = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: magenta;
`;
function StyledComponents() {
  return (
    <div>
      <p>Without Styled Components</p>
      <MyAnotherFontElement>My New Styled Components</MyAnotherFontElement>
    </div>
  );
}

export default StyledComponents;