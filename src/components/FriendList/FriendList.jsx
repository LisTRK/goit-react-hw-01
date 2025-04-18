import FriendListItem from "../FriendListItem/FriendListItem";
import styles from './FriendList.module.css';





export default function FriendList({ friends }) {
   
    return (
        <ul className={styles.list}>
            {friends.map((friend) => 
                    <li className={styles.listItem} key={friend.id}>
                        <FriendListItem friend={friend} />
                    </li>
                
            )}
        </ul>
    )
}