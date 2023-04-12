
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import CopyrightIcon from '@mui/icons-material/Copyright';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function Footer() {
  return (
    <Root>
     
      <Divider className="footer" textAlign="right" > 2023 <CopyrightIcon /> UST global
    </Divider>
    
    </Root>
  );
}
