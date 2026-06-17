function Sidebar({ activePage, setActivePage }) {

  const menuItems = [
    "Dashboard",
    "Requests",
    "Departments",
    "Reports",
    "Settings"
  ];

  return (

    <aside className="sidebar">

      <h1 className="logo">
        PulseIQ
      </h1>

      <nav className="sidebar-nav">

        {

          menuItems.map((item) => (

            <button

              key={item}

              className={
                activePage === item
                ? "nav-item active"
                : "nav-item"
              }

              onClick={() => setActivePage(item)}

            >

              {item}

            </button>

          ))

        }

      </nav>

    </aside>

  );

}

export default Sidebar;