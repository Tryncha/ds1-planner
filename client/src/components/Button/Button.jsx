import './Button.css';

const Button = ({ children, onClick, modifier, type, disabled }) => {
  return (
    <button className={`Button Button-${modifier}`} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
