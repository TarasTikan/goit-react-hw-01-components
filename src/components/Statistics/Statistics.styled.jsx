import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
padding-top: 50px;
padding-bottom: 50px;
display: block;
align
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  width: 330px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid black;
  margin: 0 auto;
  text-align: center;
`;

export const Item = styled.li`
  padding: 15px;
  border: 1px solid black;
  text-align: center;
  display: block;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;
export const Label = styled.span`
  display: block;
  margin-bottom: 10px;
`;
export const Percentage = styled.span`
  font-weight: 700;
  font-size: 18px;
`;
