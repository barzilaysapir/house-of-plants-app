import { useState, MouseEvent } from 'react'
import { CardView } from 'shared/types/card'

const useCardsView = () => {
  const [view, setView] = useState<CardView>(CardView.CARDS)

  const onChangeView = (event: MouseEvent<HTMLElement>, newView: CardView) => {
    if (newView) setView(newView)
  }

  return {
    view,
    onChangeView,
  }
}

export default useCardsView
