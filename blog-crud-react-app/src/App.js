import { Routes, Route } from 'react-router-dom';
import PostsPage from './components/pages/PostsPage';
import PostPage from './components/pages/PostPage';
import PostAddPage from './components/pages/PostAddPage';
import PostEditPage from './components/pages/PostEditPage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<PostsPage />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/post/add' element={<PostAddPage />} />
        <Route path='/post/edit/:id' element={<PostEditPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
