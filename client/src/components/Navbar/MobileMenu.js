

const MobileMenu = ({
    navItems,
    scrollTo,
    isOpen,
    closeMenu,
}) => {
    navItems = [
        {
            name: "Home",
            id: "home",
        },
        ...navItems,
    ];

    return (
        <aside
            id="sideMenu"
            className={
                "bg-white top-0 right-0 h-screen w-screen md:hidden " +
                " transform fixed overflow-auto ease-in-out transition-all duration-300 z-40 " +
                (isOpen ? "translate-x-0" : "translate-x-full")
            }
        >
            <div className="text-right pr-4 pt-8 pb-2 text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-black inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    onClick={() => {
                        closeMenu();
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>

            <h2 className="text-indigo-600 text-center text-4xl pb-12">Menu</h2>

            <ul className="grid items-center gap-4 text-2xl font-medium text-center px-8">
                {navItems.map((item) => {
                    return (
                        <li
                            className={item.visible === false ? " hidden " : ""}
                            key={item.id}
                        >
                            <div
                                className="text-black transition hover:text-white/75 cursor-pointer "
                                onClick={() => {
                                    closeMenu();
                                    scrollTo(item.id);
                                }}
                            >
                                {item.name}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default MobileMenu;
