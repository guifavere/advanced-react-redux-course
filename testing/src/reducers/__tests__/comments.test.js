import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles action of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New comment'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New comment']);
});

it('handles action with unkown type', () => {
  const newState = commentsReducer([], { type: 'BLAKDSDKO3' });

  expect(newState).toEqual([]);
});