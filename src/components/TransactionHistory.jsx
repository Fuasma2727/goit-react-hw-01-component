import PropTypes from 'prop-types';
export default function TransactionHistory ({items}){

return(
<li>
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
 {items.map(item=>(
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>

 ))}
 </tbody>
  </table>
</li>
)
}


TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
    
  };