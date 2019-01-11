/*
 * @Author: lifan
 * @Date: 2018-12-13 13:56:58
 * @Last Modified by: lifan
 * @Last Modified time: 2019-01-11 21:56:05
 */

import Types from '../types';
import { Action } from '../actions';

export default (state: GameLocales = 'en-US', action: Action) => {
  switch (action.type) {
    case Types.UPDATE_LOCALES:
      return action.payload;
    default: return state;
  }
};
