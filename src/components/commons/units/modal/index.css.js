import styled from "@emotion/styled";

export const Icon = styled.div`
    color: green;
    margin-right: 5px;
`

/* 모달창을 화면 중앙. 최상단에 노출 */
.container {
  /* 모달창 크기 */
  width: 300px;
  height: 200px;

  /* 최상단 위치 */
  z-index: 999;
  
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
}

/* 모달창 내부 X버튼 */
.close {
  position: absolute;
  right: 10px;
  top: 10px;
}