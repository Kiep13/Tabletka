import { Header } from './components';

export const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      { children }
    </div>
  )
}