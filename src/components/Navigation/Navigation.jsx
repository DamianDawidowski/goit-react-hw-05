
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';


let activeClassName = {
  color: '#2196f3',
};

const Navigation = () => (
  <div className={css.container}>
  <nav className={css.header}>
    <NavLink
      to="/"
      className={css.link}
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      Home
    </NavLink>   
    <NavLink
      to="/movies"
      className={css.link}
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      Movies
    </NavLink>
  </nav>
  </div>
);

export default Navigation;