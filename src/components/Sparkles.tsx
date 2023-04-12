export const sparkles = (x: number, y:number) => {
  var i = document.createElement('div');
  setTimeout(() => {i.remove()}, 500);
  i.innerText = '💖';
  i.style.width = '10px';
  i.style.height = '10px';
  i.style.position = 'absolute';
  i.style.left = x + 15 + 'px';
  i.style.top = y + 15 + 'px';
  document.body.appendChild(i);
  return null;
}

// can this become a react component?
// holds onto the props in its own state & useEffect re-renders when those props change
// app could be responsible just for passing down the mouse position and wouldn't need to hold state for that
// all the styling could go into a CSS file
// the positioning could become inline styling that interpolates in the x and y positions
// unmounting could be handled by using the ReactDOM.findDOMNode(component) that is on a timer and removes the found element after a half second