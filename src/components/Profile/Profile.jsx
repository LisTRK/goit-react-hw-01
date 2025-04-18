import styles from "./Profile.module.css";


export default function Profile({name, tag, location, image, stats: {followers, views, likes}}) {
  return (
    <div className={styles.profileCard}> 
      <div className={styles.avatarContainer}> 
        <img className={styles.profilePhoto}
          src={image}
          alt="User avatar"
        />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>

      <ul className={styles.statsList}>
        <li className={styles.statsItem}> 
          <span className={styles.statsLabel}>Followers</span>
          <span className={styles.statsValue}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsLabel}>Views</span>
          <span className={styles.statsValue}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.statsLabel}>Likes</span>
          <span className={styles.statsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}