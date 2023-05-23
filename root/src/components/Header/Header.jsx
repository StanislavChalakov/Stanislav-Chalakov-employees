import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <div className="bg-base-200 p-0 flex items-center btn-group">
        <NavLink to="/" className="btn btn-outline m-2 rounded" title="Employees">
          Employees
        </NavLink>
      </div>
    </header>
  );
}
