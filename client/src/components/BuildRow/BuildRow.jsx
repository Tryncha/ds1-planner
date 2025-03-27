import { Link, useNavigate } from 'react-router-dom';
import buildService from '../../services/builds';
import './BuildRow.css';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { getAnonymousUserId } from '../../services/anonymousUserId';

const BuildRow = ({ build }) => {
  const navigate = useNavigate();

  const { authInfo } = useContext(AuthContext);

  const createdAtDate = new Date(build.createdAt);
  const updatedAtDate = new Date(build.updatedAt);

  function handleClick() {
    if (build.game === 'DS1') {
      navigate(`/planner/dark-souls-1/${build.id}`);
    }
  }

  function handleDelete() {
    if (build.game === 'DS1') {
      if (window.confirm('Are you sure you want to delete this build?')) {
        buildService.deleteGameBuild('dark-souls-1', build.id);
        window.location.reload();
      }
    }
  }

  let isUserOwner = false;

  if (build.user) {
    isUserOwner = authInfo.id === build.user.id;
  } else {
    const anonymousUserId = getAnonymousUserId();
    isUserOwner = anonymousUserId === build.anonymousUserId;
  }

  return (
    <tr className="BuildRow">
      <td className="BuildRow-title">
        <strong>{build.title}</strong>
        <span style={{ fontStyle: 'italic' }}>{build.character.name}</span>
      </td>
      {build.user ? (
        <td>
          <Link to={`/profile/${build.user.id}`}>{build.user.username}</Link>
        </td>
      ) : (
        <td style={{ fontStyle: 'italic' }}>Anonymous</td>
      )}
      <td>{build.game}</td>
      <td>{build.tags}</td>
      <td>{createdAtDate.toLocaleString()}</td>
      <td>{updatedAtDate.toLocaleString()}</td>
      {isUserOwner ? (
        <td>
          <button onClick={handleClick}>Edit this character</button>
          <button onClick={handleDelete}>Delete this character</button>
        </td>
      ) : (
        <td>
          <button onClick={handleClick}>View this character</button>
        </td>
      )}
    </tr>
  );
};

export default BuildRow;
