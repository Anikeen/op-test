import React from 'react'
import { Icon } from '../../../UI/Icon/Icon'
import './styles.scss';

export const TextWidget = ({ iconSrc, text, addClass }) => {
  return (
    <div className={`text-widget ${addClass}`}>
      <div className="text-widget__icon">
        <Icon source={iconSrc} />
      </div>
      <div className="text-widget__paragraph">
        {text}
      </div>
    </div>
  )
}
