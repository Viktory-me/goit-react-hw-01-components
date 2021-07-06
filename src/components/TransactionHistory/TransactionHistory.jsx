import React from 'react';
import PropTypes from 'prop-types';
import {
  Transactions,
  TransactionHistories,
  HeadTransactions,
  Title,
  Tr,
  BodyTransaction,
  Td,
  Th,
} from './TransactionHistory.styles';
import items from '../../data/transactions.json';

const TransactionHistory = () => {
  return (
    <TransactionHistories>
      <Title>Transactions History</Title>
      <Transactions>
        <HeadTransactions>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </HeadTransactions>
        <BodyTransaction>
          {items.map(item => (
            <Tr key={item.id}>
              <Td>{item.type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </Tr>
          ))}
        </BodyTransaction>
      </Transactions>
    </TransactionHistories>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TransactionHistory;
