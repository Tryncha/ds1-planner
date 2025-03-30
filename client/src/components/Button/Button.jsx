import './Button.css';

const Button = ({ children, onClick, modifier, type }) => {
  if (type) {
    return (
      <button className={`Button Button-${modifier}`} onClick={onClick} type={type}>
        {children}
      </button>
    );
  }

  return (
    <button className={`Button Button-${modifier}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
