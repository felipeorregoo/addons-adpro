import React from 'react'
import { AddonsDataProvider } from '../hooks/Json-Hook'
import Addons from '../Pages/Addons'

const AddonLayout = () => {
  return (<>
  <AddonsDataProvider>
    <Addons></Addons>
  </AddonsDataProvider>
  </>
  )
}

export default AddonLayout