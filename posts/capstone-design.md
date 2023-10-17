---
title: "작품 소개 웹페이지"
excerpt: "디지털컨텐츠학과 캡스톤디자인 프로젝트"
image: capstone-design-main.png
isFeatured: true
date: "2023-06"
---

# SKHU Capstone-Design Webpage

Next.js 기반 웹페이지

## 프로젝트 정보

개발기간: 2023.03 ~ 2023.06

## 프로젝트 소개

조원들의 작품을 수록할 수 있는 포트폴리오 형식의 웹페이지를 Next.js의 몇가지 기능을 사용하며 제작하였습니다.
전체적인 디자인 양식은 조원들의 의견을 참고하며 만들었습니다.

## 기술 스택

### ✔️Frond-end

![Badge-HTML](../badges/badge-html.svg)
![Badge-CSS](../badges/badge-css.svg)
![Badge-Javascript](../badges/badge-javascript.svg)
![Badge-React](../badges/badge-react.svg)
![Badge-Redux](../badges/badge-redux.svg)
![Badge-Next](../badges/badge-next.svg)

## 화면구성

- ### 메인페이지

![Capstone-Design-Main](capstone-design-main.gif)

세 조원의 작품의 대표 이미지를 저런식으로 디자인 하였고 첫 시작화면일 때 하나씩 서서히 나타나게 애니메이션 효과를 넣었다.
마우스를 올렸을 때도 동적인 효과를 주었다.

- ### 세부페이지
  각 조원분들의 작품과 요구에 따라 각 페이지를 구현하였다.
- #### 첫번째 작품페이지

![Capstone-Design-Detail1](capstone-design-d1.gif)

- #### 두번째 작품페이지

![Capstone-Design-Detail2](capstone-design-d2.gif)

- #### 세번째 작품페이지

![Capstone-Design-Detail3](capstone-design-d3.gif)

- ### 첫 Next.js 사용

Next.JS에서 사용되는 SSR메서드 중 하나인 getStaticPros를 통해 정적 생성 페이지를 구현해 보았고 파일기반라우팅 시스템을 경험해볼 수 있었습니다.

- ### 스크롤이벤트

작품세부페이지에서 스크롤을 내리면 메인에 있는 대표이미지를 설명란이 밑에서부터 덮여져 올라가는 동작을 구현했습니다.

```js
const MainNavigation = () => {
  const router = useRouter();
  const prevScrollY = useRef(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY;
        if (prevScrollY.current < currentScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        prevScrollY.current = currentScrollY;
      }, 250),
    [prevScrollY]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
};
```

스크롤할 때마다 수많은 렌더링이 발생하여 throttle함수와 useMemo훅을 사용하여 최적화를 시도했습니다.

### 경험한 점

이 프로젝트는 복수전공을 한 미디어컨텐츠 학부에서의 캡스톤 제작 프로젝트에서 진행했습니다.  
이 프로젝트에서는 일러스트레이터, 영상디자인 등의 디자이너들과 팀원이 되어 웹개발을 진행하였습니다.  
비록 전문 웹디자이너와 협업한 것은 아니지만 디자이너분들이 디자인에 대해서 많이 얘기하고 이를 토대로 웹페이지를 제작해 나갔기 때문에 CSS와 애니메이션 관련 기술들에 많이 익숙해 질 수 있는 경험이었고 디자이너와 개발자 사이의 문제 해결 상황을 간접적으로 체험할 수 있는 기회를 가질 수 있었습니다.
