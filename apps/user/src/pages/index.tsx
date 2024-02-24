import styles from './index.module.css';

interface IndexProps {
  text: string;
}

export function Index({ text }: IndexProps) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h1>{text}</h1>
      <span>plz..</span>
      <span>2222</span>
      <span>3333</span>
      <span>asaaa</span>
    </div>
  );
}

export default Index;
