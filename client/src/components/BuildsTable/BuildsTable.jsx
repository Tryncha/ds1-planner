import BuildRow from '../BuildRow/BuildRow';
import './BuildsTable.css';

const BuildsTable = ({ builds }) => {
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
