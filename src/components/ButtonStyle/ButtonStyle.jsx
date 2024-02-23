import React from 'react';
import { Button } from '@chakra-ui/react'

/**
 *  Platform Button.
 * @param {string} color - color of the button.
 * @param {JSX.Element} leftIcon - If you need you can put an leftIcon
 * @param {JSX.Element} rightIcon - If you need you can put an rightIcon
 * @param {string} label - button label.
 * @param {string="text"} variant - change the style of the button for example: solid, outline, ghost, or link.
 * @callback onClick - action to execute when click button.
 * @param {Object} props - If you need pass another prop.
 */
export default function ButtonStyle({ color="yellow", leftIcon, rightIcon, label, variant="solid", onClick, ...props}) {
  const handleOnClick = (e) => {
    e.preventDefault();
    onClick();
  }
  return (
    <Button 
      colorScheme={color}
      leftIcon={leftIcon}
      variant={variant}
      onClick={handleOnClick}
      rightIcon={rightIcon}
      {...props}
    >
      {label}
    </Button>
  )
}