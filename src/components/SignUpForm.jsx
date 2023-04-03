import styles from './SignUpForm.module.css';

export default function SignUpForm() {
  return (
    <form className={styles.form}>
      <input type="text" name="name" aria-label="Name" placeholder="Name"></input>
      <input type="text" name="email" aria-label="Email Address" placeholder="Email Address"></input>
      <select name="plan" aria-label="Select a plan">
        <option value="basic">Basic Pack Free</option>
        <option value="pro">Pro Pack $9.99</option>
        <option value="ultimate">Ultimate Pack $19.99</option>
      </select>
      <input type="text" name="phone" aria-label="Phone Number" placeholder="Phone Number"></input>
      <input type="text" name="company" aria-label="Company" placeholder="Company"></input>
      <button type="submit">Get on the list</button>
    </form>
  );
}