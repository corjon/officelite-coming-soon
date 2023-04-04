import logo from '../assets/shared/logo.svg';
import CountdownTimer from '../components/CountdownTimer.jsx';
import SignUpForm from '../components/SignUpForm.jsx';
import styles from './SignUp.module.css';

export default function SignUp() {
  return (
    <main className={styles.signUpContent}>
      <img src={logo} alt="officelite logo" />
      <div className={styles.signUpBanner}>
        <h1>Work smarter. Save time.</h1>

        <p>Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.</p>

        <CountdownTimer currentPage="timerSignUpPage" />
      </div>

      <div className={styles.signUpSection}>
        <SignUpForm />
      </div>
  </main>
  );
}