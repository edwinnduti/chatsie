import {
    Box,
    Button
} from 'grommet';

export const AppHeader = () => {
  return(
    
    <Box align="center" background="neutral-3">
      <Button
        label="hello world"
        primary 
        onClick={() => alert('hello, world')}
      />
    </Box>
  );
}
