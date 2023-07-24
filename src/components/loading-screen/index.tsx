import classes from './index.module.css';

export default function LoadingScreen() {
  return (
    <section>
      <div className={`${classes.dotContainer}`}>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
        <div className={`${classes.dot}`}></div>
      </div>
      <div className={`${classes.progress}`}></div>
    </section>
  );
}
