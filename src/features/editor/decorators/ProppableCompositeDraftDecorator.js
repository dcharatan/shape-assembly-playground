/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// This is copied from https://github.com/facebook/draft-js/issues/1292 (user AlexandreKilian).

import Immutable from 'immutable';

const { List } = Immutable;

const DELIMITER = '.';

function canOccupySlice(decorations, start, end) {
  for (let ii = start; ii < end; ii++) {
    if (decorations[ii] !== null) {
      return false;
    }
  }
  return true;
}

/**
 * Splice the specified component into our decoration array at the desired
 * range.
 */
function occupySlice(targetArr, start, end, componentKey) {
  for (let ii = start; ii < end; ii++) {
    targetArr[ii] = componentKey;
  }
}

/**
 * A CompositeDraftDecorator traverses through a list of DraftDecorator
 * instances to identify sections of a ContentBlock that should be rendered
 * in a "decorated" manner. For example, hashtags, mentions, and links may
 * be intended to stand out visually, be rendered as anchors, etc.
 *
 * The list of decorators supplied to the constructor will be used in the
 * order they are provided. This allows the caller to specify a priority for
 * string matching, in case of match collisions among decorators.
 *
 * For instance, I may have a link with a `#` in its text. Though this section
 * of text may match our hashtag decorator, it should not be treated as a
 * hashtag. I should therefore list my link DraftDecorator
 * before my hashtag DraftDecorator when constructing this composite
 * decorator instance.
 *
 * Thus, when a collision like this is encountered, the earlier match is
 * preserved and the new match is discarded.
 */
class ProppableCompositeDraftDecorator {
  constructor(decorators) {
    this._decorators = decorators.slice();
    this._props = [];
  }

  getDecorations(contentBlock, contentState) {
    const decorations = Array(contentBlock.getText().length).fill(null);

    this._decorators.forEach((/* object */ decorator, /* number */ ii) => {
      let counter = 0;
      const { strategy } = decorator;
      const callback = (/* number */ start, /* number */ end, props) => {
        // Find out if any of our matching range is already occupied
        // by another decorator. If so, try to wrap around it. Otherwise, store
        // the component key for rendering.
        if (canOccupySlice(decorations, start, end)) {
          const key = ii + DELIMITER + counter + DELIMITER + contentBlock.getKey();
          occupySlice(decorations, start, end, key);
          this._props[key] = props;
          counter++;
        }
      };
      strategy(contentBlock, callback, contentState);
    });
    return List(decorations);
  }

  getComponentForKey(key) {
    const componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return this._decorators[componentKey].component;
  }

  getPropsForKey(key) {
    const propsForKey = this._props[key];
    const componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return { ...this._decorators[componentKey].props, ...propsForKey };
  }
}

export default ProppableCompositeDraftDecorator;
