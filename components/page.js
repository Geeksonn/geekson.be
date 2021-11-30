import styles from '../styles/Page.module.css';

const Page = ({ id }) => {
    return (
        <div id={id} className={styles.page}>
            Content {id}
        </div>
    );
}

export default Page;