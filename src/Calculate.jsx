import { IconButton, Input, Badge, Select } from '@chakra-ui/react'
import { FaCalculator } from 'react-icons/fa'
import { useState } from 'react'

export default function Calculate() {

  const [color, setColor] = useState('pink');
  const [value, setValue] = useState('');
  const listOptions = ['хрен', 'знает', 'что', 'делать'];
    
  
  const handleClick = () => {
    setColor('blue');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }  

  
  function sumDigits(nums) {
    let str = [...nums.toString()];
    let sum = 0;
    
    str.forEach((item) => {
      sum += Number(item);
    })
    return(sum);
  }
  
  return (
    <div>
      <Select placeholder='Выберите значение'>
        {listOptions.map((item, index) => <option value={index}>{item}</option>)}
      </Select>
      <Input type = 'number' placeholder='Введите цифру' onChange={handleChange} value={value} />
      <IconButton onClick={handleClick} icon={<FaCalculator/>} colorScheme={color}></IconButton>
      <Badge>{sumDigits(value)}</Badge>
    </div>
    )
}