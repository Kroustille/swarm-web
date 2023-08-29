import React from 'react'

import { BuildingContextProvider } from '#building/hook/context'
import { TechnologyContextProvider } from '#technology/hook/context'
import { TroupContextProvider } from '#troup/hook/context'

interface Props {
  children: React.ReactNode
}

export const GameProvider: React.FC<Props> = ({children}) => {
  return (
    <BuildingContextProvider>
      <TechnologyContextProvider>
        <TroupContextProvider>
          {children}
        </TroupContextProvider>
      </TechnologyContextProvider>
    </BuildingContextProvider>
  )
}
