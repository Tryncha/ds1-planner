import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import DS1BuildContext from '../../../context/DS1BuildContext.jsx';

import DS1Planner from './DS1Planner.jsx';

const DS1Create = () => {
  const navigate = useNavigate();

  const { build, saveBuild } = useContext(DS1BuildContext);

  function handleSubmit(event) {
    event.preventDefault();
    saveBuild(build);
    navigate('/');
  }

  function handleCancel(event) {
    event.preventDefault();
    navigate('/planner');
  }

  return (
    <main className="u-mainPage">
      <h2>Create DS1 Character</h2>
      <hr className="u-hr" />
      <form onSubmit={handleSubmit}>
        <DS1Planner />
        <div>
          <button type="submit">Save</button>
        </div>
        <button onClick={handleCancel}>Go back</button>
      </form>
    </main>
  );
};

export default DS1Create;
