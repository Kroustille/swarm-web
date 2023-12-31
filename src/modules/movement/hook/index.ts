import { useContext } from 'react'
import { useAuth } from '#auth/hook'
import { MovementContext } from '#movement/hook/context'
import { listMovements } from '#troup/api/list-movement'
import { Movement } from '#types'
import { finishMovement } from '#troup/api/finish-movement'

interface HookMovement {
  movements: Movement[]
  list: () => Promise<void>
  finish: () => Promise<void>
}

export const useMovement = (): HookMovement => {
  const { movements, setMovements } = useContext(MovementContext)
  const { token } = useAuth()

  const list = async () => {
    const data = await listMovements({ token })
    if (!data) {
      return
    }

    setMovements(data.movements)
  }

  const finish = async () => {
    await finishMovement({ token })
    await list()
  }

  return {
    movements,
    list,
    finish,
  }
}
