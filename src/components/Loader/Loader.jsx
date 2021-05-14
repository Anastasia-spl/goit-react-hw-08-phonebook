import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import BaseLoader from 'react-loader-spinner';

import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  wrapper: {
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loader = () => {
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      <BaseLoader type="Circles" color="#3f51b5" height={80} width={80} />
    </div>
  );
};

export default Loader;
