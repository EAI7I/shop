import Image from "next/image";
import Link from "next/link";
import styles from "./Input.module.scss";

interface inputPropsType {
  hookForm?: any;
}
export default function Input({
  type,
  placeholder,
  hookForm,
  name,
}: React.InputHTMLAttributes<HTMLInputElement> & inputPropsType) {
  return (
    <div className={styles.customInputWraper}>
      <input
        className={styles.customInput}
        type={type}
        placeholder={placeholder}
        {...hookForm?.register(name)}
        aria-invalid={hookForm?.formState?.errors?.[name || ""] ? true : false}
      />
      <p className={styles.errorText}>
        {hookForm?.formState?.errors?.[name || ""]?.message}
      </p>
    </div>
  );
}
