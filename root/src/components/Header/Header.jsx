import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <div className="p-0 btn-group">
        <NavLink to="/" className="btn btn-outline m-2" title="Employees">
          Employees
        </NavLink>
      </div>
    </header>
  );
}
