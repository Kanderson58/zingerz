// export const sparkles = (x: number, y:number) => {
//   var i = document.createElement('div');
//   setTimeout(() => {i.remove()}, 500);
//   i.innerText = '💖';
//   i.style.width = '10px';
//   i.style.height = '10px';
//   i.style.position = 'absolute';
//   i.style.left = x + 15 + 'px';
//   i.style.top = y + 15 + 'px';
//   document.body.appendChild(i);
//   return null;
// }

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