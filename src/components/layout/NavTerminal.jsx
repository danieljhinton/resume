import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/photos', label: 'Photos' },
  { to: '/videos', label: 'Videos' },
  { to: '/ethos', label: 'CS Ethos' },
  { to: '/resume', label: 'Resume' },
  { to: '/refine-macrodata', label: 'Refine Macrodata' },
];

export default function NavTerminal() {
  return (
    <nav className="nav-terminal" aria-label="Primary">
      <div className="nav-terminal__brand">Lumon Industries // MDR Terminal</div>
      <ul className="nav-terminal__list">
        {NAV_ITEMS.map((item, i) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                'nav-terminal__link' + (isActive ? ' is-active' : '')
              }
            >
              [{i + 1}] {item.label.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
