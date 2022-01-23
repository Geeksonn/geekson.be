import styles from "../styles/Page.module.css";
import PageTitle from "./pageTitle";

const Page = ({ id, children, showTitle }) => {
  return (
    <div id={id} className={styles.page}>
      {showTitle && <PageTitle title={id} />}
      {children}
    </div>
  );
};

export default Page;
