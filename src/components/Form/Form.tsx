import React, { FC } from 'react'
import styles from './Form.module.css'
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel
} from '@mui/material'

interface FormProps {}

const Form: FC<FormProps> = () => {
  const formFields = [
    {
      label: 'Pixel Size',
      inputId: 'pixel-size',
      helperTxt: 'Size of individual pixel, leave blank to default'
    },
    {
      label: 'Image Height',
      inputId: 'img-height',
      helperTxt: 'Height in pixels, leave blank to default'
    },
    {
      label: 'Image Width',
      inputId: 'img-width',
      helperTxt: 'Width in pixels, leave blank to default'
    }
  ]

  const handleImageSelection = () => {
    console.log('clicked')
  }

  return (
    <div className={styles.Form}>
      <div className='select-img'>
        <FormControl margin='dense'>
          <InputLabel htmlFor='image-upload'>Upload Image</InputLabel>
          <Input id={'image-upload'} aria-describedby={'image upload'} />
          <FormHelperText id='image-upload'>
            Select image to process
          </FormHelperText>
        </FormControl>
        <Button variant='contained' disableElevation onClick={handleImageSelection}>Select Image</Button>
      </div>
      
      {formFields.map(field => (
        <FormControl key={field.inputId} margin='dense'>
          <InputLabel htmlFor={field.inputId}>{field.label}</InputLabel>
          <Input id={field.inputId} aria-describedby={field.helperTxt} />
          <FormHelperText id={field.inputId + '-helper'}>
            {field.helperTxt}
          </FormHelperText>
        </FormControl>
      ))}
    </div>
  )
}

export default Form
