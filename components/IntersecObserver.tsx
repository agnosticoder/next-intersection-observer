import { RefObject, useEffect, useRef, useState } from 'react';
import styles from '../styles/modules/IntersecObserver.module.scss';

const useOnScreen = () => {
    const [visible, setVisible] = useState<boolean>(false);
    //* we can also use the useState to store the ref of element by passing setState to ref
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                //* this is the function that is called when element intersect according to provided options
                setVisible(entry.isIntersecting);
            },
            { threshold: 1 }
        );

        //* observe the current element
        if (ref.current) {
            observer.observe(ref.current);
        }

        //* cleanup
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return [visible, ref] as const;
};

const IntersecObserver = () => {

    const [visible, ref] = useOnScreen();

    return (
        <div className={styles.container}>
            <div className={styles.one}>Element One 🥲</div>
            <div ref={ref} className={styles.two}>
                <h3>this will do something when I reach the end of it</h3>
                {visible ? <h1>😎</h1> : <h1 style={{ fontSize: '20px' }}>hanvn't done something yet</h1>}
            </div>
        </div>
    );
};

export default IntersecObserver;
