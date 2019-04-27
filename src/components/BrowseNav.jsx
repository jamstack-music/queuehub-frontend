import styled from 'styled-components';
import Navbar from './Navbar';

const BrowseNav = styled(Navbar)`
  top: 0;
  background-color: #EDF0F5;
  border-bottom: 1px solid grey;
  color: #365DFF;

  & .link {
    text-decoration: none;
  }

  & .link:active {
    transform: scale(0.95);
  }

  & .selected {
    font-weight: bold;
    color: #365DFF;
  }
`;

export default BrowseNav;
