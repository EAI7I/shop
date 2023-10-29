import Image from "next/image";
import Link from "next/link";
import styles from "./Input.module.scss";

interface inputPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  hookForm?: any;
}
export default function Input({
  type,
  placeholder,
  hookForm,
  name,
  autoComplete,
}: inputPropsType) {
  return (
    <div className={styles.customInputWraper}>
      <input
        className={styles.customInput}
        type={type}
        placeholder={placeholder}
        {...hookForm?.register(name)}
        aria-invalid={hookForm?.formState?.errors?.[name || ""] ? true : false}
        autoComplete={autoComplete}
      />
      <p className={styles.errorText}>
        {hookForm?.formState?.errors?.[name || ""]?.message}
      </p>
    </div>
  );
}
