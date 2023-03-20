import { Link } from 'react-router-dom';
import styles from './SubscriptionPlan.module.css';

export default function SubscriptionPlan(props) {
  return (
    <div className={`${styles.planCard} ${props.secondaryColors && styles.secondaryColors}`}>
      <div className={styles.planHeader}>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <p>{props.numUsers}</p>
      </div>
      <div className={styles.planFeatures}>
        <p>{props.feature1}</p>
        <p>{props.storage}</p>
        <p>{props.feature2}</p>
      </div>
      <Link to="/signup" className={props.secondaryColors && styles.secondaryColors}>Try for Free</Link>
    </div>
  );
}