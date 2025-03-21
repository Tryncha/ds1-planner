import { useNavigate } from 'react-router-dom';
import BuildRow from '../BuildRow/BuildRow';
import './BuildsTable.css';

const BuildsTable = ({ builds }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/planner');
  }

  if (builds.length === 0)
    return (
      <div>
        <p>It seems that there's not builds saved yet...</p>
        <button onClick={handleClick}>Create a new one</button>
      </div>
    );

  return (
    <table className="BuildsTable">
      <thead>
        <tr>
          <th>Title</th>
          <th>Created By</th>
          <th>Game</th>
          <th>Tags</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {builds.map((build) => (
          <BuildRow key={build.id} build={build} />
        ))}
      </tbody>
    </table>
  );
};

export default BuildsTable;
