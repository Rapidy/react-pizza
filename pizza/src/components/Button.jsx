import React from 'react';
import classNames from 'classnames';

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={classNames(`button ${props.className}`, {
        'button--outline': props.outline,
        'button--add': props.add,
      })}>
      {props.children}
    </button>
  );
}
