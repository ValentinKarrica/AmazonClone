import style from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return <div className={style.boxSpinner}>
      <div className={style.spinner}>
          Loading ...
      </div>
    </div>
}

export default LoadingSpinner;