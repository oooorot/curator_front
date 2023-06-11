import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import * as C from './side-nav.styles' 

export default function LayoutSideNav(props) {
 
  const onClickScrollInfo = () => {
    window.scrollTo({
         top: 200,
         behavior: 'smooth',
    });
  }
    const onClickScrollPur = () => {
      window.scrollTo({
           top: 500,
           behavior: 'smooth',
      });
    }

  const onClickScrollMark = () => {
    window.scrollTo({
         top: 1200,
         behavior: 'smooth',
    });
  }

  const onClickScrollService = () => {
    window.scrollTo({
        top: 1450,
        behavior: 'smooth',
    });
  }

  return (
    <>  
        <C.Wrapper>
          <C.InfoMenu>
              <C.InfoProfile>
                  <C.ProfileImage></C.ProfileImage>
                  <C.Icon><FontAwesomeIcon icon={faEdit} /> 프로필 변경</C.Icon>
                  <C.User>
                    <C.UserName>유미정</C.UserName>
                    <C.UserEmail>119755@naver.com</C.UserEmail>
                  </C.User>
                  <C.Line/>
              </C.InfoProfile>
              <C.InfoList>
                  <C.List onClick={onClickScrollInfo}>회원정보</C.List>
                  <C.List onClick={onClickScrollPur}>구매내역</C.List>
                  <C.List onClick={onClickScrollMark}>즐겨찾기</C.List>
                  <C.List onClick={onClickScrollService}>나의문의</C.List>
              </C.InfoList>
          </C.InfoMenu>
          <C.InfoContent>
          <div>{props.children}</div>
          </C.InfoContent> 
        </C.Wrapper>
    </>
  )

}