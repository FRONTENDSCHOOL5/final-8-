import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Join from '../pages/Join/Join';
import JoinProfile from '../pages/Join/JoinProfile';
import Upload from '../pages/Upload/Upload';
import Feed from '../pages/Feed/Feed';
import Profile from '../pages/Profile/Profile';
import ProductUpload from '../pages/product/ProductUpload';
import Error404 from '../pages/Error404/Error404';
import ChatList from '../pages/ChatPage/ChatList/ChatList';
import ChatRoom1 from '../pages/ChatPage/ChatRoom/ChatRoom1';
import ChatRoom2 from '../pages/ChatPage/ChatRoom/ChatRoom2';
import ChatRoom3 from '../pages/ChatPage/ChatRoom/ChatRoom3';
import FollowList from '../pages/FollowList/FollowList';
import Search from '../pages/Search/Search';
import Detail from '../pages/Upload/Detail';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/post/upload' element={<Upload />} />
        <Route path='/post/:id' element={<Detail />} />
        <Route path='/post/:id/edit' element={<Upload />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:accountname' element={<Profile />} />
        <Route path='/profile/:accountname/:type' element={<FollowList />} />
        <Route path='/productupload' element={<ProductUpload />} />
        <Route path='/search' element={<Search />} />
        <Route path='/error404' element={<Error404 />} />
        <Route path='/chat' element={<ChatList />} />
        <Route path='/chat/user1' element={<ChatRoom1 />} />
        <Route path='/chat/user2' element={<ChatRoom2 />} />
        <Route path='/chat/user3' element={<ChatRoom3 />} />
        <Route path='/follow' element={<FollowList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
