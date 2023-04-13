import './Sparkles.css'

interface Props {
  x: number;
  y: number;
}

export const Sparkles = ({x, y}: Props) => {
  return (
    <div className='sparkles' style={{top:y + 15 + 'px', left:x + 15 + 'px'}}>💖</div>
  );
}