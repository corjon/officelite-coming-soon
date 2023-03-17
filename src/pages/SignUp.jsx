import logo from '../assets/shared/logo.svg';
import CountdownTimer from '../components/CountdownTimer.jsx';
import SignUpForm from '../components/SignUpForm.jsx';

export default function SignUp() {
  return (
    <main>
      <img src={logo} alt="officelite logo" />
      <div>
        <h1>Work smarter. Save time.</h1>

        <p>Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>

        <CountdownTimer />
      </div>

      <div>
        <SignUpForm />
      </div>
  </main>
  );
}