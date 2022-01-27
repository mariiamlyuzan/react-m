import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


function TransactionHistory({ items }) {
return (
<table className={s.transaction}>
<thead>
 <tr>
   <th>Type</th>
   <th>Amount</th>
   <th>Currency</th>
 </tr>
</thead>
<tbody >
    {items.map(item => (

 <tr key={item.id}>
   <td>{item.type}</td>
   <td>{item.amount}</td>
   <td>{item.currency}</td>
 </tr>
 
    ))}
 </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
  itemss: PropTypes.arrayOf(
   PropTypes.shape({
     id: PropTypes.string.isRequired,
   }),
  )
 };

export default TransactionHistory;