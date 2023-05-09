import styles from './SignUpForm.module.css';
import { useForm } from 'react-hook-form';

export default function SignUpForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" aria-label="Name" placeholder="Name" {...register("name", { required: true })}
        className={errors.name && styles.inputError}>
      </input>
      <input type="text" name="email" aria-label="Email Address" placeholder="Email Address" 
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className={errors.email && styles.inputError}>
      </input>
      <select name="plan" aria-label="Select a plan" {...register("plan", { required: true })}>
        <option value="basic">Basic Pack Free</option>
        <option value="pro">Pro Pack $9.99</option>
        <option value="ultimate">Ultimate Pack $19.99</option>
      </select>
      <input type="text" name="phone" aria-label="Phone Number" placeholder="Phone Number" 
        {...register("phone", { required: true, pattern: /^[0-9]+$/i })} className={errors.phone && styles.inputError}>
      </input>
      <input type="text" name="company" aria-label="Company" placeholder="Company" {...register("company", { required: true })}
        className={errors.company && styles.inputError}>
      </input>
      <button type="submit">Get on the list</button>
    </form>
  );
}