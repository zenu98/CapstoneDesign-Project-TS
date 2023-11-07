## Next.js 포스트 블로그

## 프로젝트 정보

- 개발인원: 1명
- 개발기간: 2023.09 ~ 2023.10
- [Link](https://seo-nextjs-blog.vercel.app/)

## 프로젝트 소개

포트폴리오 포스트 사이트를 만들기 위해 기본적인 Next.js의 기능과 더불어 부족했던 기술을 연습하기 위해 만든 사이트 입니다.
Vercel을 통해 배포를 했습니다.

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

- ### React-Markdown

React-Markdown을 통해 마크다운으로부터 이미지와 코드를 렌더링 하도록 하였습니다.

- ### MongoDB 문의 API 라우터

![Next-blog-contact](next-blog-contact.png)

```js
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "잘못된 입력입니다." });
      return;
    }
    // DB저장
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}${process.env.mongodb_clustername}.hgiisqy.mongodb.net/${process.env.mongodb_dbname}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "DB 연결 불가" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "실패" });
      return;
    }
    client.close();
    res.status(201).json({ message: "메세지 저장 성공" }); // 성공
  }
}
export default handler;
```

- ### 첫 배포

![Next-blog-vercel](next-blog-vercel.png)
배포를 하는 경험은 처음이라 이번 기회에 배포를 하면서 Next.js가 제공하는 두가지 다른 형태의 배포 옵션에 대해 공부했습니다. 가장 흔히 쓰이는 첫 번째 옵션은 표준 빌드(Standard Build)이며
두 번째는 전체 정적 빌드(Full Static Build)로 웹 사이트 전체를 정적 웹 사이트로 배포하는 옵션이 있습니다. 이 애플리케이션은 API 라우트를 사용하고 있고
일부 페이지에는 유효성 재검사도 실행하고 있고 이런 기능들은 모두 Node.js 서버가 필요하기 때문에 표준 빌드 방식으로 배포를 하였습니다.

#### 배포 사전준비 단계

1. 코드정리
   모든 페이지, 제목이나 디스크립션 등 필요한 영역에 헤드 메타데이터를 추가했는지 확인하고 코드를 정리하였습니다.
   console.log 문을 지우는 등 가능한 한 코드를 정리하고 불필요한 의존성(Dependency)도 없애서 최대한 짧고 간략하게 만들어 줍니다
2. 환경변수 관리  
   개발 단계와 프로덕션 단계의 데이터가 다를 때가 있습니다.
   개발 단계에서는 개발용 더미 데이터베이스를 쓰다가 프로덕션 단계에서 다른 데이터베이스로 전환하는 게 더욱 현실적이겠죠 클러스터나 사용자도 전부 다르게 바꾸고요
   실행하는 환경에 따라 연결 문자열을 동적으로 바꿔야 하는데 이때 환경변수가 도움이 됩니다
3. 테스트 빌드
   프로덕션 단계 준비를 마친 앱을 로컬 기기에 테스트해야 합니다.
   앱을 실행하는 데에는 Node.js 서버만 있으면 되고 애플리케이션 빌드와 실행은 그리 어렵지 않기에 모두 정상적으로 작동하는지 확인해야 하고 파일 크기나 코드 번들의 크기 등이 괜찮은지 확인합니다.
