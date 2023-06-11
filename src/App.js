import './App.css';
import OldPosts from './Components/OldPosts';
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar';
import UploadPosts from './Components/UploadPosts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <UploadPosts />
      <OldPosts />
    </div>
  );
}

export default App;
