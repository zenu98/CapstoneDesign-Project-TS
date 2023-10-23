---
title: "동물 단어 퍼즐"
excerpt: "첫번째 토이프로젝트"
image: word-puzzle.png
isFeatured: true
date: "2023-02"
---

## 단어 맞추기 퍼즐

### [동물단어퍼즐](https://github.com/zenu98/ReactStudy/tree/main/toy-project/word-puzzle)

- 첫번째 개인 제작 토이 프로젝트
- 개발인원: 1명
- 개발기간: 2023.01 ~ 2023.02

## 기술 스택

### ✔️Frond-end

![Badge-HTML](../badges/badge-html.svg)
![Badge-CSS](../badges/badge-css.svg)
![Badge-Javascript](../badges/badge-javascript.svg)
![Badge-React](../badges/badge-react.svg)
![Badge-Redux](../badges/badge-redux.svg)

### ✔️Back-end

![Badge-Firebase](../badges/badge-firebase.svg)

## 개발 내용

- ### 첫 화면

![Word-Puzzle-Main](word-puzzle-main.gif)

- ### 단어 개수 선택

![Word-Puzzle-Select](word-puzzle-select.gif)

동물 단어의 개수가 2개짜리와 3개짜리로 나뉘어져 있어서 그것을 선택할 수 있다.

- ### 단어 맞추기

![Word-Puzzle-Check](word-puzzle-check.gif)
![Word-Puzzle-Refresh](word-puzzle-refresh.gif)

선택한 단어 개수에 맞는 동물 이름들이 한 글자씩 무작위로 배열되어 있으며 이를 맞추는 게임이다.  
퍼즐 상단에는 단어들을 새로고침하는 버튼과 홈으로 리다이렉트 하는 버튼을 구현하였다.

- #### Firebase Realtime DB

  동물들의 이름과 설명에 대한 데이터를 Firebase DB로 구축하여 비동기통신을 하였습니다.

- #### Context API, useReducer

  글자 수에 따라서 다른 데이터를 불러와야 하기에 context API를 통해 상태관리를 하였습니다.  
  글자 버튼들의 토글 여부라던지 정답이 된 글자들은 비활성화 해야 했기에 이런 다양한 상태들은 useReducer 훅을 통해서 관리해보았습니다.
  이러한 과정 속에서 react의 상태관리 개념을 이해하고 스킬에 익숙해지는 시간을 가졌습니다.

- #### Portal을 사용한 백드롭 모달 구현

  단어를 맞췄을 때나 처음 글자 수를 고를 때 나오는 Modal 창을 Potal을 이용해 구현했습니다.  
  포탈을 통해 컴포넌트의 유연한 제어와 포탈을 사용함에 있어서 장점들을 학습할 수 있었습니다.

- #### React-route

  첫 화면에서 글자를 선택하고 퍼즐화면으로 넘어가거나 새로고침을 할 때 라우팅을 통해 SPA 개념에 대해 공부했습니다.

- ### 배운 점
  React를 사용하여 화면을 구성하기 위해 컴포넌트를 다루는 일부터 다양한 Hook들을 사용하고 Redux 상태관리 라이브러리를 통해 데이터들을 다루었습니다.  
  이때까지 이론적으로 공부한 내용을 토대로 과연 제가 머릿속에 구상한 아이디어들을 뷰포트에서 실현할 수 있을지 증명하고 검토하는 것에 중점을 두었습니다.
