import propTypes from 'prop-types';
import {SectionStatistics, StatList, Title, Item, Label, Percentage} from './Statistics.styled';
export const Statistics = ({stats}) => {
    return ( <SectionStatistics>
    <Title>Upload stats</Title>
  
    <StatList>
      {stats.map(({label, percentage, id}) => {
 return <Item key={id}>
 <Label>{label}</Label>
 <Percentage>{percentage}%</Percentage>
</Item>
      })}
    </StatList>
  </SectionStatistics>)
}
Statistics.propTypes = {
  stats: propTypes.arrayOf(propTypes.oneOfType([ propTypes.exact({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }).isRequired]))}

