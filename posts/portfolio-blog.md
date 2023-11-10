## 프로젝트 소개

- 개인프로젝트
- 개발기간: 2023.11 ~ 2023.11

## 기술 스택

### ✔️Frond-end

![Badge-HTML](../badges/badge-html.svg)
![Badge-CSS](../badges/badge-css.svg)
![Badge-SASS](../badges/badge-sass.svg)
![Badge-Javascript](../badges/badge-javascript.svg)
![Badge-React](../badges/badge-react.svg)
![Badge-Typescript](../badges/badge-typescript.svg)

### ✔️Back-end

![Badge-MongoDB](../badges/badge-mongodb.svg)
![Badge-Node](../badges/badge-node.svg)

## 개발 내용

- ### 전체적인 파일 구조, 코드 다듬기

  이 포트폴리오 사이트는 기존에 진행했던 CapstoneDesign 프로젝트에서 만들었던 NextJS 웹사이트를 바탕으로 작업을 하였습니다.  
  그래서 기존의 코드를 들여다 볼 기회가 생겼는데 정말 엉망이었습니다...

  ```js
  // 기존 CapstoneDesign 프로젝트의 코드


  // 불필요한 중복코드
       <div className={classes.imagethree}>
          <div className={`${classes["imagethree-content"]}`}>
            <Image
              src={`${loadedClient.contents[2]}`}
              alt="dummy"
              width={8086}
              height={8086}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={`${classes["imagethree-content"]}`}>
            <Image
              src={`${loadedClient.contents[3]}`}
              alt="dummy"
              width={8086}
              height={8086}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className={`${classes["imagethree-content"]}`}>
            <Image
              src={`${loadedClient.contents[4]}`}
              alt="dummy"
              width={8086}
              height={8086}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>

  ---------------------------------------------------
  // DB없이 하드코딩된 부분

     <div className={`${classes["introBox-right"]}`}>
            <p className={classes.introText}>
              ‘풋사과’는 무르익기 전 사과의 상태를 나타냅니다. 동시에 ‘풋풋함’이
              <br />
              가져오는 무모한 용기와 순수한 꿈을 대변합니다. 건축가 안도
              타다오는 초록 사과를 ‘청춘’이라 표현하기도 했습니다. 나는
              ‘풋사과’를 ‘첫사랑’과 연결 지어 생각했습니다. <br />
              <br />
              우리가 ‘첫사랑’이란 단어를 생각하며 설레게 <br /> 하는 까닭은,
              그건 마치 잊고 있었던 ‘어린아이의 마음’을 상기시키기 <br />
              때문입니다. 나는 2008년 발매된 샤이니의 “누난 너무 예뻐” 에서
              그러한 동심을 느꼈고, 이를 2023년 새롭게 3D 그래픽으로
              표현했습니다.
            </p>
          </div>
  ```

  이 뿐만이 아니라 NextJs의 파일기반 라우팅을 제대로 사용하지 못해 엉망인 아키텍쳐 구조, 엉망인 반응형 스타일, 최적화 등등 고칠 것이 한두개가 아니었습니다.  
  이 모든것을 다듬고 새로 작업하였습니다.

- ### 타입스크립트로 리팩토링

  이번 프로젝트에서 가장 큰 변환점은 첫 Typescript 도입이었습니다.  
  프론트엔드 개발자에게 있어서 Typescript는 선택이 아니라 필수가 되었고,  
  저도 한 단계 성장하기 위해 모든 기존 JS파일을 Typescript로 리팩토링하는 작업을 하였습니다.

- ### MongoDB 데이터베이스 사용

  비동기통신으로 MongoDB와 연결해 Document, Collection을 사용하여 데이터를 관리하였습니다.

- ### SCSS, 반응형 스타일

  기존에 바닐라 CSS로만 작성하여 불필요하게 중복되고 지저분해지는 css 코드들을 SCSS의 다양하고 편리한 문법 규칙들을 적용해 코드의 가독성을 향상시켰습니다.  
  또한 다양한 디바이스에서도 정상적으로 화면이 보이도록 미디어쿼리를 적용해 유연하게 하였습니다.

- ### 마크다운 형식 렌더링

  react-markdown과 PrismLight 라이브러리를 통해 게시글의 본문을 마크다운 형식의 파일을 화면에 보이게 하고 코드하이라이팅을 적용하였습니다.

- ### Framer Motion

  Framer Motion을 사용해 커스텀 마우스 커서를 제작했습니다.

- ### Next.js 라우터 이벤트

  Router 객체의 'events'속성을 사용하여 라우터이벤트에 대한 함수를 등록하여 페이지 이동 시 로딩스피너를 구현하였습니다.
