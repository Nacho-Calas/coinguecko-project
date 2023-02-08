import React from 'react'
import style from './paginacion.module.css'

function Paginacion() {
  return (
    <div className={style.containerPag}>
        <button className={style.buttonPag}>
            Prev
        </button>
        <input type="number" className={style.inputPag} />
        <button className={style.buttonPag}>
            Next
        </button>

    </div>
  )
}

export default Paginacion