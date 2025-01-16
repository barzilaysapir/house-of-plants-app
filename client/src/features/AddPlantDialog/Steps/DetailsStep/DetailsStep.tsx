import { FC, useState } from 'react'
import {
  AddPlantData,
  AddPlantField,
} from 'features/AddPlantDialog/AddPlantDialog.types'
import { Box, Button, Stack, TextField } from '@mui/material'
import { PhotoCameraRounded } from '@mui/icons-material'
import VisuallyHiddenInput from 'styles/components/VisuallyHiddenInput'
import i18n from 'i18next'
import StyledStep from '../Step.style'

type DetailsStepProps = {
  handleNextStep: (stepData?: Partial<AddPlantData>) => void
  formData: AddPlantData
}

const DetailsStep: FC<DetailsStepProps> = (props) => {
  const { formData } = props

  const [image, setImage] = useState<string>('')

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  return (
    <StyledStep>
      <Stack direction="row" spacing={1}>
        <img
          height={150}
          width={150}
          src={image || formData[AddPlantField.SPECIES].image}
          alt=""
          style={{
            objectFit: 'cover',
            border: '3px solid black',
            borderRadius: 5,
          }}
        />
        <Box>
          <TextField
            label="Name"
            variant="standard"
            defaultValue={formData[AddPlantField.SPECIES].primaryName}
            placeholder={formData[AddPlantField.SPECIES].primaryName}
            fullWidth
          />
          <Button
            component="label"
            startIcon={<PhotoCameraRounded fontSize="large" color="primary" />}
          >
            {i18n.t('uploadPicture')}
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              capture="environment"
              onChange={onImageChange}
            />
          </Button>
        </Box>
      </Stack>
    </StyledStep>
  )
}

export default DetailsStep
