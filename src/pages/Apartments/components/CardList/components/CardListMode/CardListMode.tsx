import ColumnsIcon from './assets/columns.svg?react'
import RowsIcon from './assets/rows.svg?react'
import { type FC } from 'react'
// import styles from './CardListMode.module.scss'
import { Button } from '@mui/material'

interface Props {
  handleClick: () => void
  mode: string
}

export const CardListMode: FC<Props> = ({ handleClick, mode }) => {
  const isColumn = mode === 'column'
  const isRow = mode === 'row'

  return (
    <>
      <Button
        onClick={() => handleClick()}
        variant="contained"
        sx={{
          width: '32px',
          height: '32px',
          backgroundColor: isColumn ? 'rgba(190, 175, 153, 1)' : '#fff',
          boxShadow: '0px 0px 12px 0px rgba(95, 100, 168, 0.05)',
          borderRadius: '4px',
          minWidth: '32px',
          padding: 0,
        }}
      >
        <ColumnsIcon className={isColumn ? 'white' : 'brown'} />
      </Button>

      <Button
        onClick={() => handleClick()}
        variant="contained"
        sx={{
          width: '32px',
          height: '32px',
          backgroundColor: isRow ? 'rgba(190, 175, 153, 1)' : '#fff',
          boxShadow: '0px 0px 12px 0px rgba(95, 100, 168, 0.05)',
          borderRadius: '4px',
          minWidth: '32px',
          padding: 0,
        }}
      >
        <RowsIcon className={isRow ? 'white' : 'brown'} />
      </Button>
    </>
  )
}
