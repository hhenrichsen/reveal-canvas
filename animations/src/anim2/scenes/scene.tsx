import {makeScene2D, Rect} from '@motion-canvas/2d';
import {createRef, loop, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const rect = createRef<Rect>();
  view.add(<Rect size={100} ref={rect} fill={'green'}></Rect>);

  yield loop(Infinity, () => rect().position.y(100, 1).to(0, 1));

  yield* waitFor(6);
});
