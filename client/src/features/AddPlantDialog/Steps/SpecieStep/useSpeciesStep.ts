import { AddPlantData } from 'features/AddPlantDialog/AddPlantDialog.types'
import { useState, ChangeEvent } from 'react'
import { Plant } from 'shared/types/plants'

type UseSpeciesStepProps = {
  handleNextStep: (stepData?: Partial<AddPlantData>) => void
}

const useSpeciesStep = ({ handleNextStep }: UseSpeciesStepProps) => {
  const [searchInputVal, setSearchInputVal] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputVal(event.target.value)
  }

  const selectPlant = (species: Plant) => {
    handleNextStep({ species })
  }

  return {
    searchInputVal,
    handleChange,
    selectPlant,
  }
}

export default useSpeciesStep
