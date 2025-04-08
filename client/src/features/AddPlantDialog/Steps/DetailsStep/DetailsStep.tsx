import { ChangeEvent, FC, useEffect, useState } from 'react'
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

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image)
    }
  }, [])

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = event.target.files?.[0]

    if (file) {
      const img = URL.createObjectURL(file)
      setImage(img)
      saveBlobToDB(file).then((result) => console.log('Saved:', result))
    }
  }

  const blobToBase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  }

  const saveBlobToDB = async (blob: Blob) => {
    const base64Data = await blobToBase64(blob)
    const response = await fetch('/api/saveBlob', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: base64Data }),
    })
    return response.json()
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
