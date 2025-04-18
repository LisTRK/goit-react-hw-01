import clsx from "clsx";
import styles from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
    return <>
        <div className={styles.item}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            <p className={friend.isOnline ? styles.online : styles.offline}>{friend.isOnline ? "Online" : "Offline"}</p>
        </div>
    </>
}

