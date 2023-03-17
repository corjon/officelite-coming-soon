import { Link } from 'react-router-dom';

export default function SubscriptionPlan(props) {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
        <p>{props.numUsers}</p>
      </div>
      <div>
        <p>{props.feature1}</p>
        <p>{props.storage}</p>
        <p>{props.feature2}</p>
      </div>
      <Link to="/signup">Try for Free</Link>
    </div>
  );
}