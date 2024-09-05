import {Button,ButtonProps} from '../components/ui/button';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button
};

export const defaultButton:StoryObj<ButtonProps> = {
  args: {
    
  }
}
export const PrimaryButton:StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    size: 'default',
    border: 'solid',
    hover: 'primary'
  }
}
export const SecondaryButton = {
    args: {
      children:"Labeld Button",
      variant: "secondary",
      size: 'large',
      border: 'dashed',
      hover: 'secondary'
    }
}
export const DestructiveButton = {
    args: {
      children:"Custome Button",
      variant: "distructive",
      size: 'small',
      border: 'dashed',
      hover: 'distructive'
    }
}

export default meta;