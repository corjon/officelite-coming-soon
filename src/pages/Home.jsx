import { Link } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import charts from '../assets/home/illustration-charts.svg';
import SubscriptionPlan from '../components/SubscriptionPlan.jsx';
import CountdownTimer from '../components/CountdownTimer.jsx';

export default function Home() {
  return (
    <main>
      <img src={logo} alt="officelite logo" />

      <div>
        <img src={charts} alt="charts illustration" />
        <div>
          <h1>A simple solution to complex tasks is coming soon</h1>

          <p>Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.</p>

          <Link to="/signup">Get Started</Link>
        </div>
      </div>

      <SubscriptionPlan
        title="Basic"
        price="Free"
        numUsers="Up to 5 users for free"
        feature1="Basic document collaboration"
        storage="2 gb storage"
        feature2="Great security and support"
      />

      <SubscriptionPlan
          title="Pro"
          price="$9.99"
          numUsers="Per user, billed monthly"
          feature1="All essential integrations"
          storage="50 gb storage"
          feature2="More control and insights"
      />

      <SubscriptionPlan
          title="Ultimate"
          price="$19.99"
          numUsers="Per user, billed monthly"
          feature1="Robust work management"
          storage="100 gb storage"
          feature2="VIP support"
      />

      <div>
        <CountdownTimer />
        <Link to="/signup">Get Started</Link>
      </div>
    </main>
  );
}