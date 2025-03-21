import { Link } from 'react-router-dom';

const SelectPlanner = () => {
  return (
    <div className="u-mainPage">
      <h2>Select a game</h2>
      <hr className="u-hr" />
      <Link to="/planner/dark-souls-1" className="Sidebar-Link">
        Dark Souls 1
      </Link>
      <Link to="/planner/dark-souls-2" className="Sidebar-Link">
        Dark Souls 2
      </Link>
    </div>
  );
};

export default SelectPlanner;
