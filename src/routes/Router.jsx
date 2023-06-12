import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Join from '../pages/Join/Join';
import JoinProfile from '../pages/Join/JoinProfile';
import Upload from '../pages/Upload/Upload';
import Feed from '../pages/Feed/Feed';
import Post from '../pages/Upload/Post';
import Profile from '../pages/Profile/Profile';
import ProductUpload from '../pages/product/ProductUpload';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/join/profile' element={<JoinProfile />} />
        <Route path='/post/upload' element={<Upload />} />
        <Route path='/post/*' element={<Post />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/productupload' element={<ProductUpload />} />
      </Routes>
    </BrowserRouter>
  );
}
