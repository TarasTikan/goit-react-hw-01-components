// import propTypes from 'prop-types';
export const Statistics = ({label, percentage}) => {
    return ( <section>
    <h2>Upload stats</h2>
  
    <ul>
      <li>
        <span>{label}</span>
        <span>{percentage}%</span>
      </li>
      <li>
        <span>{label}</span>
        <span>{percentage}%</span>
      </li>
      <li>
        <span>{label}</span>
        <span>{percentage}%</span>
      </li>
      <li>
        <span>{label}</span>
        <span>{percentage}%</span>
      </li>
    </ul>
  </section>)
}

// Statistics.propTypes = {
//     label: propTypes.string.isRequired,
//     percentage: propTypes.number.isRequired,
// }