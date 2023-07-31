import React from 'react'
import { Building } from '../../types'

interface Props {
  building: Building
}

export const BuildingDetails: React.FC<Props> = ({ building }) => {
  return <section className="details">
    <aside className="building-prerequesite"><h3>Pré-requis</h3></aside>
    <article><h2>{building.name}</h2></article>
    <aside className="building-action">
      <h3>Coût</h3>
      <li>
        <ul>Plastique: {building.upgrade_cost.plastic}</ul>
        <ul>Champignon: {building.upgrade_cost.mushroom}</ul>
        <ul>Durée: {building.upgrade_cost.duration}</ul>
      </li>
    </aside>
  </section>
}