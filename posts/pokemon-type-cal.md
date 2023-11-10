---
image: pokemon.png
---

## 포켓몬스터 속성 계산기

![Pokemon-Type](pokemon-type.png)

- 개발기간: 2023.02 ~ 2023.03
- 포켓몬스터라는 게임은 다양한 속성들을 가진 포켓몬이 있고 각 속성마다 다른 속성과 상성관계가 잡혀있다.
- 위 표와 같은 상성관계를 계산할 수 있는 기능을 한눈에 보여지도록 하며, 내가 머릿속에서 구상하고 있는 디자인을 적용한 웹페이지를 제작하였다.

## 개발 내용

- ### Full-page-scroll

![Pokemon-FullPage](pokemon-fullpage.gif)
시작하기 부분을 누르면 다음 페이지로 넘어간다. 이때 페이지가 넘어가는 방식은 full-page 방식을 사용했으며 이 부분은 react 라이브러리를 사용하여 구현하였다.

- ### CSS 애니메이션

![Pokemon-CSS-Animation](pokemon-css-animation.gif)

화면 가운데에 있는 몬스터볼을 클릭하면 선택할 수 있는 속성들이 나오게 된다.

- ### 계산 결과

![Pokemon-Calculate](pokemon-cal.gif)

선택한 속성들에 대한 공격/방어 속성 상성을 계산하여 출력한다.

- ### Redux Toolkit 비동기 통신, 상태관리
  firebase에 있는 데이터를 받아오기 위한 비동기 통신을 redux를 통해 구현하였고, Redux-toolkit의 store를 통해 각 상태들을 관리하였습니다.
