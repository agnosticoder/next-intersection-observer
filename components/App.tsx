import styles from '../styles/modules/Hello.module.scss';
import IntersecObserver from './IntersecObserver';

const App = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.test}>Intersection Observer</h2>
            <IntersecObserver />
        </div>
    );
};

export default App;
