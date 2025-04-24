import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../../assets/style/Sidebar.scss';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const menuItems = [
      { path: '/Manager', icon: '🏠', name: 'Dashboard' },
      { path: '/movies-manager', icon: '🎬', name: 'Quản lý phim' },
      { path: '/users-manager', icon: '👥', name: 'Quản lý user' },
      { path: '/tickets-manager', icon: '🎫', name: 'Quản lý vé & chỗ ngồi' },
      { path: '/showtimes-manager', icon: '⏰', name: 'Quản lý suất chiếu' },
    ]
  
    return (
      <div 
        className={`sidebar ${isExpanded ? 'expanded' : ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="sidebar-header">
          <h2>{isExpanded ? 'Admin Manager' : 'AM'}</h2>
        </div>
        <nav className="sidebar-menu">
          {menuItems.map((item, index) => (
            <NavLink 
              to={item.path} 
              key={index}
              className={({ isActive }) => 
                `menu-item ${isActive ? 'active' : ''}`
              }
            >
              <span className="menu-icon">{item.icon}</span>
              {isExpanded && <span className="menu-name">{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    )
};

export default Sidebar;