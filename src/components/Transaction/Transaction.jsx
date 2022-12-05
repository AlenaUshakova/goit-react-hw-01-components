import PropTypes from 'prop-types';

import {
  TransactionHistoryTable,
  HeadersRow,
  ColumnHeader,
  ValuesRow,
} from './Transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <HeadersRow>
        <ValuesRow>
          <ColumnHeader>Type</ColumnHeader>
          <ColumnHeader>Amount</ColumnHeader>
          <ColumnHeader>Currency</ColumnHeader>
        </ValuesRow>
      </HeadersRow>

      <tbody>
        {items.map(item => (
          <ValuesRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </ValuesRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
