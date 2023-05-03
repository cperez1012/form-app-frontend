import taxImage from '../../assets/taxes-on-stocks.jpg';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Button from '../UI/Button/Button';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  //JSX Code
  return (
    //Must have only one root element in JSX, here it's the fragment element
    <>
      <header className={classes.header}>
        <h1>Form App</h1>
        <Button />
      </header>
      <div className={classes['main-image']}>
        <img src={taxImage} alt='tax photo' />
      </div>
      <Home />
      <Login />
    </>
  )
}

export default MainHeader;