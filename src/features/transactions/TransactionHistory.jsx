import { useSelector } from "react-redux";
import "./transactionHistory.scss";

/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction: { type, amount, balance } }) => (
  <tr>
    <th scope="row">{type}</th>
    <td>{amount}</td>
    <td>{balance}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  const history = useSelector((state) => state.transactions.history);

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {history.map((transaction, index) => 
            <TransactionRow key={index} transaction={transaction} />
          )}
        </tbody>
      </table>
    </section>
  );
}
