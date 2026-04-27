
import  Logo  from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Logo />
      <Navigation />
      
    </Header>
  );
};
