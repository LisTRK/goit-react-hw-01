import styles from './TransactionHistory.module.css';

export default function TransactionHistory({items}) {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.thead}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.tbody}>
                {
                    items.map((item) => 
                {
                
                    return (<tr key={item.id}>
                            <td>{ item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>)
                    }
                )
                }
                
            </tbody>
        </table>
    )
}