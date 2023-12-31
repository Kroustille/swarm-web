import React from 'react'
import { formatTime } from '#helpers/transform'
import { useTimer } from '#hook/timer'
import { Movement } from '#types'
import { useMovement } from '#movement/hook'
import { useReport } from '#communication/report/hook'

interface Props {
  movement: Movement
}

export const MovementListItem: React.FC<Props> = ({ movement }) => {
  const { finish } = useMovement()
  const { countUnread } = useReport()
  const { remainingTime } = useTimer({
    onDone: async () => {
      await finish()
      await countUnread()
    },
    doneAt: movement.arrive_at
  })
  return <li>
    {movement.action}
    {movement.origin.sector} {movement.origin.x} {movement.origin.y}
    {' -> '}
    {movement.destination.sector} { movement.destination.x} {movement.destination.y} {' : '}
    {formatTime(remainingTime)}
  </li>
}
