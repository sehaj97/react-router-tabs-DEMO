import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MainNavbar() {
  const [currentItem, setCurrentItem] = useState(true);
  const [navigation, SetNavigation] = useState([
    {
      name: "Calculators",
      href: "calculators/1",
      current: true,
      subitem: [
        { name: "Calculator 1", href: "1", current: true },
        { name: "Calculator 2", href: "2", current: false },
        { name: "Calculator 3", href: "3", current: false },
      ],
    },
    {
      name: "Rates",
      href: "rates/fv",
      current: false,
      subitem: [
        { name: "Fixed and Variable", href: "fv", current: true },
        { name: "Open And closed mortgages", href: "ocm", current: false },
        { name: "Mortgage Default Insurance", href: "mdi", current: false },
      ],
    },
    {
      name: "Compare",
      href: "compare/m",
      current: false,
      subitem: [
        { name: "Mortgages", href: "m", current: true },
        { name: "Loans & Lines of Credit", href: "llc", current: false },
      ],
    },
  ]);
  function handleClick(item) {
    item.current = currentItem;
    const newNavigation = navigation.map((navitem) => {
      if (navitem === item) {
        return {
          ...navitem,
          current: true,
        };
      } else {
        return {
          ...navitem,
          current: false,
        };
      }
    });
    SetNavigation(newNavigation);
  }
  return (
    <>
      <Disclosure as="nav" className="bg-bmoblue">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* desktop items */}
                {/* left items div */}
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.href}
                          to={{
                            pathname: item.href,
                          }}
                          state={{ navitems: item.subitem }}
                          className={classNames(
                            item.current
                              ? "bg-white text-black"
                              : "text-gray-300 hover:bg-white hover:text-black",
                            "px-6 py-6 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => handleClick(item)}
                          replace={true}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {/* right items div */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
              </div>
            </div>

            {/* Mobile menu items*/}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Outlet />
    </>
  );
}

export default MainNavbar;
