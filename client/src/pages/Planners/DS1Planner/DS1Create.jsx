import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import DS1BuildContext from '../../../context/DS1BuildContext.jsx';

import DS1Planner from './DS1Planner.jsx';
import Button from '../../../components/Button/Button.jsx';

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
      <form className="u-formPlanner" onSubmit={handleSubmit}>
        <DS1Planner />
        <div className="u-buttonsFormContainer">
          <Button modifier="success" type="submit">
            Save
          </Button>
          <Button onClick={handleCancel} modifier="warning">
            Go back
          </Button>
        </div>
      </form>
    </main>
  );
};

export default DS1Create;
