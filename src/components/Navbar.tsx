import { useState } from 'react';
import { ThemeProps } from '../common/interfaces';

interface NavbarItemProps {
  label: string;
  value: string;
}

interface NavbarProps extends ThemeProps {
  activeId?: string;
  className?: string;
  navItems?: Array<NavbarItemProps>;
}

export const Navbar = (props: NavbarProps) => {
  const { activeId, className, navItems, theme = 'dark' } = props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultBgClassName =
    theme === 'light'
      ? 'navbar-light bg-gray-100'
      : 'navbar-dark text-white bg-green-900';

  return (
    <nav
      className={`fixed w-full top-0 left-0 px-10 ${className} ${defaultBgClassName}`}>
      <div className="max-w-screen-xl">
        <div className="md:hidden flex items-center">
          <div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="m-2 p-2 w-10 h-10 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {isMobileMenuOpen ? (
            <div className="ml-auto fixed right-20">
              <button
                className="btn-close"
                onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}>
                  <path d="M20.746 3.329a1 1 0 0 0-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 0 0 1.414 1.415l7.294-7.295 7.294 7.295a1 1 0 0 0 1.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 0 0 0-1.414Z" />
                </svg>
              </button>
            </div>
          ) : undefined}
        </div>

        <div
          className={`${
            !isMobileMenuOpen ? 'hidden' : ''
          } w-full md:block md:w-auto`}
          id="navbar-default">
          {navItems && navItems.length ? (
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:mt-0 md:border-0">
              {navItems.map((navItem: NavbarItemProps) => (
                <li key={`menu-item-${navItem.value}`}>
                  <a
                    href={`#${navItem.value}`}
                    className={`menu-item block py-3 px-4 ${
                      navItem.value === activeId ? 'active' : ''
                    }`}
                    aria-current="page">
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : undefined}
        </div>
      </div>
    </nav>
  );
};
