import React, { useEffect, useMemo } from 'react'
import { Troup } from '#shared/types'
import { formatTime } from '#helpers/transform'
import { useTroup } from '#troup/hook'
import { TroupContentItem } from '#troup/content/item'
import { TroupTranslations } from '#troup/translations'

interface Props {
  onSelectTroup: (troup: Troup) => void
}

export const TroupContentList: React.FC<Props> = ({ onSelectTroup }) => {
  const {
    troups,
    list,
    inProgress
  } = useTroup()

  useEffect(() => {
    list()
  }, [])

  const troup_items = useMemo(() => {
    return troups.map(troup => <TroupContentItem
      onSelectTroup={onSelectTroup}
      key={troup.id}
      troup={troup}
    />)
  }, [troups])

  return <>
    <h2>Troupes</h2>
    {
      inProgress &&
      <>
        <p>En cours: {TroupTranslations[inProgress.code].name} {formatTime(inProgress.remainingTime)}</p>
      </>
    }
    <div className='list'>
      {troup_items}
    </div>
  </>
}
