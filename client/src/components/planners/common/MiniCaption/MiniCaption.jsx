import './MiniCaption.css';

const MiniCaption = () => (
  <div className="MiniCaption">
    <span className="MiniCaption-label">ATTRIBUTE</span>
    <span className="MiniCaption-base">BASE</span>
    <span className="MiniCaption-current">CURRENT</span>
    <div className="u-innerContainer">
      <span className="MiniCaption-decrease"> - </span>
      <span className="MiniCaption-increase"> + </span>
    </div>
  </div>
);

export default MiniCaption;
