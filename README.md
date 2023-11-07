# CapstoneDesign-Project-TS

## 프로젝트 소개
- 개발기간: 2023.11 ~ 2023.11
- 포트폴리오 웹사이트를 개발하기 위해 준비한 프로젝트입니다. 기존에 CapstoneDesign에서 제작했던 웹사이트를 바탕으로 진행했으며 기존의 코드들을 대거 수정하며 제작하였습니다. 
배포까지 진행하는 프로젝트이기 때문에 전체적으로 코드를 수정하고 다듬으면서 기존에 작성됐던 코드들이 얼마나 주먹구구식으로 써져있는지 확인했고 사실상 거의 대부분의 코드를 새로 작성했습니다.
이 과정에서 반응형을 고려하여 모든 CSS를 새로 적용하였고 SCSS를 새로 도입하였습니다. 스타일 뿐만이 아니라 MongoDB를 통한 데이터관리, 기존에 해본 적 없는 TypeScript까지 공부하며 적용하였습니다.
이번 프로젝트를 통해 기존에 그저 뷰포트에 보여지고 실행되는 것에만 급급했던 코딩방식을 다시 돌아볼 수 있었으며 새로운 TS 문법에 대해서도 알아가며 프론트엔드 개발자로 성장하기 위해서 뜻깊은 프로젝트가 되었습니다.


## 개발 내용
- ### 전체적인 파일 구조, 코드 다듬기
  이 포트폴리오 사이트는 기존에 진행했던 CapstoneDesign 프로젝트에서 만들었던 NextJS 웹사이트를 뼈대로 하여 작업을 하였습니다. 그래서 기존의 코드를 들여다 볼 기회가 생겼는데 정말 엉망이었습니다...
  ```js
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
 이번 프로젝트에서 가장 큰 변환점은 첫 Typescript 도입이었습니다. 프론트엔드 개발자에게 있어서 Typescript는 선택이 아니라 필수가 되었고 저도 한 단계 성장하기 위해
 모든 기존 JS파일을 Typescript로 리팩토링하는 작업을 하였습니다.

- ### MongoDB 데이터베이스 사용
 비동기통신으로 MongoDB와 연결해 Document, Collection을 사용하여 데이터를 관리하였습니다.
 
- ### SCSS, 반응형 스타일
 기존에 바닐라 CSS로만 작성하여 불필요하게 중복되고 지저분해지는 css 코드들을 SCSS의 다양하고 편리한 문법 규칙들을 적용해 코드의 가독성을 향상시켰습니다.
 또한 다양한 디바이스에서도 정상적으로 화면이 보이도록 미디어쿼리를 적용해 유연하게 하였습니다.

- ### 마크다운 형식 렌더링
 react-markdown과 PrismLight 라이브러리를 통해 게시글의 본문을 마크다운 형식의 파일을 화면에 보이게 하고 코드하이라이팅을 적용하였습니다.


- ### Framer Motion
 Framer Motion을 사용해 커스텀 마우스 커서를 제작했습니다.
