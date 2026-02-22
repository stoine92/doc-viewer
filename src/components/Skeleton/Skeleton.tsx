import type { FC } from 'react';
import styles from './Skeleton.module.scss';


const Skeleton: FC = () => {

  return (
    <div className={styles.skeleton} aria-hidden>
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
        <SkeletonRow />
    </div>
  );
};


const SkeletonRow = () => {
    return (
        <div className={styles.skeleton_row}>
            <div className={styles["skeleton-icon"]} />
            <div className={styles["skeleton-type"]} />
            <div className={styles.skeleton_body}>
                <div className={styles["skeleton_body-line"]} style={{ width: '50%' }} />
            </div>
            <div className={styles["skeleton-date"]} />
        </div>
    );
}

export default Skeleton;
