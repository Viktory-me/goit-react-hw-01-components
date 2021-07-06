import styled from '@emotion/styled';

export const TransactionHistories = styled.section`
  border: 1px solid gray;
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px 3px 3px 3px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px 5px rgba(93, 228, 233, 0.3);
`;

export const Transactions = styled.table`
  width: 100%;
  background-color: #a0e6f8;
  border: 1px solid grey;
  border-radius: 8px;
  box-shadow: 0 0 10px 3px rgba(93, 228, 233, 0.3);
`;

export const HeadTransactions = styled.thead`
  height: 40px;
  color: #fff;
  background-color: #a0e6f8;
`;

export const Title = styled.title`
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 2px gray;
  display: inline-block;
  margin-bottom: 10px;
`;

export const Tr = styled.tr`
  text-shadow: 1px 1px 2px gray;
  box-shadow: inset 0 0 10px 3px rgba(140, 243, 247, 0.3);
  background-color: white;
  border-radius: 4px;

  &:nth-of-type(2n) {
    box-shadow: inset 0 0 10px 3px rgba(115, 116, 116, 0.3);
  }
`;
export const Th = styled.th`
  background-color: #a0e6f8;
  border-radius: 4px;
  box-shadow: inset 0 0 10px 3px rgba(246, 248, 248, 0.7);
`;

export const BodyTransaction = styled.tbody`
  text-align: center;
`;

export const Td = styled.td`
  padding: 10px;
  border-radius: 4px;
`;
