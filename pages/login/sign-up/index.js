
import { useState } from 'react'
import * as C from '../../../styles/login/sign-up-emotion'
// 회원가입 페이지 
export default function SignUpView(){
  
  const [email, setEmail] = useState("")
  const [emailCheck, setEmailCheck] = useState("")
  const [emailToken, setEmailToken] = useState(false)

  const onClickEmailCheck = () => {
    alert('사용가능한 이메일 입니다.')
  } 
  
  const onChangeEmail = (event) => {
      setEmail(event.target.value)
      console.log(email);
  }

  const onClickEmailToken = () => {
      setEmailToken(true)
  }

  const onClickEmailComplete = () => {

  }

  return (
    <>
      <C.Wrapper>
        <C.SignUpForm>
          <C.SignUpInput>
          <C.SignUpTitle>회원정보 입력</C.SignUpTitle>
            <C.SectionColumn>
              <C.Label>* 아이디(이메일)</C.Label>
              <C.Email type="text" onChange={onChangeEmail}/> @
              <C.Domain>
                <option disabled="true" selected="true"> 이메일을 선택하세요</option>
                <option>naver.com</option>
                <option>hanmail.net</option>
                <option>gmail.com</option>
              </C.Domain>
              <C.Button onClick={onClickEmailCheck}>중복확인</C.Button>
              <C.EmailCheck>
                <C.BtnToken onClick={onClickEmailToken}>이메일 인증하기</C.BtnToken>
                <C.BtnComplete onClick={onClickEmailComplete}>인증완료</C.BtnComplete>   
              </C.EmailCheck>
              
            </C.SectionColumn>
            <C.SectionRow>
              <C.Label>* 이름</C.Label>
              <C.Name type="text"/>
              <C.Label>* 닉네임</C.Label>
              <C.NicName type="text"/>
            </C.SectionRow>
            <C.Label>* 비밀번호</C.Label>
            <C.Password type="password"></C.Password>
            <C.Label>* 비밀번호 확인</C.Label>
            <C.RePassword type="password"></C.RePassword>
            <C.Label>* 주소</C.Label>
            <C.Addr type="text"></C.Addr> 
            <C.SignUpCheck>
              <C.LoginCheck type="checkbox" id="login" name="login"/> [필수] 개인정보 및 수집 이용 동의
            </C.SignUpCheck>
            <C.SignUpCheck>
              <C.LoginCheck type="checkbox" id="login" name="login"/> [선택] 마케팅 이용 수신 및 정보 동의
            </C.SignUpCheck>
            <C.SignUpBtn type="submit">회원가입</C.SignUpBtn>
          </C.SignUpInput>
        </C.SignUpForm>
      </C.Wrapper>
    </>
  )
}