import {
  BASIC_PROFILE_LG,
  BASIC_PROFILE_SM,
  HEART,
  MESSAGE_CIRCLE_LG,
} from '../../styles/CommonIcons';
import { TEST_PRODUCT } from '../../styles/CommonImages';
import styled from 'styled-components';
import TopBasicNav from '../../components/common/TopNavBar/TopBasicNav';
import UserSearch from '../../components/common/UserSearch/UserSearch';
import Comment from '../../components/common/Comment/Comment';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Upload() {
  const [isImg, setIsImg] = useState(true); // 레이아웃을 위해 임시로 true

  return (
    <>
      {/* h~ 태그 고려 중 */}
      <h1 className="a11y-hidden">구장 밖 야구</h1>
      <h2 className="a11y-hidden">{'애월읍 위니브 감귤농장'} 포스트 페이지</h2>

      <TopBasicNav />
      <StyledSection>
        <UserSearch
          name="최강롯데"
          id="@Unbeatable_Lotte"
          img={BASIC_PROFILE_LG}
        ></UserSearch>
        <p>
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </p>

        {isImg && (
          <ul>
            <li>
              <img src={TEST_PRODUCT} alt="" />
            </li>
            <li>
              <img src={TEST_PRODUCT} alt="" />
            </li>
          </ul>
        )}

        <div className="wrap-icon">
          <img src={HEART} alt="" />
          {/* 임시 하트 수 */}
          <span>{'58'}</span>
          <img src={MESSAGE_CIRCLE_LG} alt="" />
          {/* 임시 댓글 수 */}
          <span>{'12'}</span>
        </div>
        {/* 임시 날짜 -> 작성일 서버에서 가져와서 속성, 텍스트에 넣기 */}
        <time>{'2020년 10월 21일'}</time>
      </StyledSection>
      <CommentListSection>
        <article>
          {/* 야구러버의 프로파일로 연결 */}
          <Link className="profile-img" to="/profile">
            <img src={BASIC_PROFILE_SM} alt="" />
          </Link>
          <Link to="/profile" className="name">
            야구러버
          </Link>
          <p>모자가 예쁘네요~ㅎㅎ</p>
        </article>
        <article>
          {/* 야구러버의 프로파일로 연결 */}
          <Link className="profile-img" to="/profile">
            <img src={BASIC_PROFILE_SM} alt="" />
          </Link>
          <Link to="/profile" className="name">
            야구러버
          </Link>
          <p>
            안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요?
            기다리기 지쳤어요 땡뻘땡뻘...
          </p>
        </article>
      </CommentListSection>
      <Comment txt="게시" placeholder="댓글 입력하기"></Comment>
    </>
  );
}

const CommentListSection = styled.section`
  border-top: 1px solid var(--gray-200);
  padding: 20px 16px 82px; //bottom : form 높이 + 20px
  article:not(:first-child) {
    margin-top: 16px;
  }
  .profile-img {
    display: inline-block;
    width: 36px;
  }
  img {
    width: 100%;
    aspect-ratio: 1/1;
  }
  .name {
    display: inline-block;
    vertical-align: top;
    margin: 6px 0 0 12px;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  p {
    margin: 4px 48px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

const StyledSection = styled.section`
  padding: 68px 16px 24px;

  p,
  ul,
  .wrap-icon,
  time {
    margin-left: auto;
    width: calc(100% - 55px); // 프사 + 마진 = 55px
  }

  p {
    margin-top: 12px;
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  ul {
    margin-top: 16px;
    margin-bottom: 12px;
    aspect-ratio: 304/228;
    overflow: hidden;
    display: flex;
  }
  ul > li:not(:first-child) {
    margin-left: 8px;
  }
  ul > li > img {
    border-radius: 10px;
  }
  ul > li {
    flex-basis: 100%;
    flex-shrink: 0;
  }

  .wrap-icon {
    display: flex;
    align-items: center;
  }
  .wrap-icon img {
    display: inline-block;
    width: 20px;
    aspect-ratio: 1/1;
    margin-right: 6px;
  }
  span {
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: var(--gray-400);
  }
  span:not(:last-child) {
    margin-right: 16px;
  }
  time {
    margin-top: 16px;
    display: block;
    color: var(--gray-400);
    line-height: 1.2rem;
  }
`;
