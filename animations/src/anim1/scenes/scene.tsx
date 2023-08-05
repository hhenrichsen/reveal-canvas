import {Circle, makeScene2D} from '@motion-canvas/2d';
import {waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  view.add(<Circle size={50} fill={'black'}></Circle>);

  yield* waitFor(5);
});
