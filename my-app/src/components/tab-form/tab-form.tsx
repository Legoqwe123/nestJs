import React, { Dispatch, SetStateAction } from "react"
import { Paper, Tab, Tabs } from "@material-ui/core"

type Props = {
  value: number
  setForm: Dispatch<SetStateAction<number>>
}

export const TabForm = ({ value, setForm }: Props): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setForm(newValue)
  }

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="fullWidth"
        textColor="primary"
      >
        <Tab label="Вход" />
        <Tab label="Регистрация" />
      </Tabs>
    </Paper>
  )
}
