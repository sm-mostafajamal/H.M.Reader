import { category } from "../utilities/MangaFilters"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{color:"#76ABAE", fontWeight: "bold", fontSize:"18px"}}>Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
          sx={{backgroundColor: "#393E46", color:"#DBE2EF"}}
        >
          {
            Object.entries(category).map((item, idx) => {
              return <MenuItem key={idx} value={item[1].id} sx={{backgroundColor: "#222831", color:"#A6B1E1"}}>{item[1].name}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
}



