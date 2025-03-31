import './Fieldset.css';

const Fieldset = ({ children, legend }) => {
  return (
    <fieldset className="Fieldset">
      <legend className="Fieldset-legend">{legend}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
