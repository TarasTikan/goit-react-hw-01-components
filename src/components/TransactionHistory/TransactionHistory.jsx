import propTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableBody,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableBody>{type}</TableBody>
              <TableBody>{amount}</TableBody>
              <TableBody>{currency}</TableBody>
            </tr>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.oneOfType([
      propTypes.exact({
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
      }).isRequired,
    ])
  ),
};
