import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import * as C from './board.view.styles'

export default function CommissionBoardView(props) {

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
        
       <C.BoardBanner>
          <C.BoardTitle>작품 의뢰</C.BoardTitle>
          <C.BoardSubTitle><FontAwesomeIcon icon={faArrowLeft}/><C.Span>뒤로가기</C.Span></C.BoardSubTitle>
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>게시글 확인하기</C.BoardFormTitle>
          <C.Line/>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.InputWrapper>
            <C.Label>작가 선택</C.Label>
            <C.CommissionDiv>
              {/* 옵션은 Map으로 구성 예장 */}
              <option disabled="true" selected="true">전체</option>
              <option>회화</option>
              <option>조소</option>
              <option>건축/공예</option>
              <option>조각/판화</option>
            </C.CommissionDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>작품 의뢰 제목</C.Label>
            <C.CommissionTitle value='작품 의뢰 합니다.'></C.CommissionTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>작품 의뢰 내용</C.Label>
            <C.CommissionContent placeholder='작품 의뢰한 내용'></C.CommissionContent>
          </C.ContentWrapper>


          <C.BtnWrapper>
            <C.CancelBtn>취소</C.CancelBtn>
            <C.SubmitBtn>작성하기</C.SubmitBtn>
          </C.BtnWrapper>

        </C.BoardForm>
       </C.BoardFormWrapper>



       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}