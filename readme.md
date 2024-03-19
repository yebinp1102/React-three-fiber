# Sparkle Tale : 다양한 3D 템플릿을 판매하는 쇼핑몰
---






<br/>

"여기 배너 사진"
- 배포 URL : <a href="">링크</a>
- 테스트용 계정 ID (관리자, admin) : Admin@test.com
- 테스트용 계정 PW : Admin123!
- Notion: <a href="https://www.notion.so/Sparkle-Tale-8e5300594dab4d6c915786526dfb2802">더 상세한 설명이 궁금하다면? 여기를 클릭해주세요.</a>


<br/><br/><br/>






## 목차

01. [프로젝트 설명](#01-프로젝트-설명)
02. [개발 환경](#02-개발-환경)
03. [폴더 구조](#03-폴더-구조)
04. [DB 스키마 설계](#04-db-스키마-설계)
05. [개발 기간](#05-개발-기간)
06. [페이지별 기능](#06-페이지별-기능)
<br><br><br>








## 01. 프로젝트 설명
#### 1-1 ) 프로젝트를 계획하게 된 이유
> 현대 사회에서 아이들이 식당이나 이동하는 차량에 테블릿과 휴대폰에 집착하는 모습을 흔하게 볼 수 있다. 이 현상을 비롯해 스파클 테일(Sparkle Tale)을 탄생시킨 아이디어는 "아이들이 이 시간을 좀 더 유의미하게 쓸 순 없을까?"라는 생각에서 출발한다. 아이들이 짜투리 시간에 책을 읽거나 공부를 하는 것이 베스트겠지만, 현실성 없는 대안이다. 당장 어른도 책 읽기 힘들어 하지 않는가. 그렇다면 아이들이 재밌어 하면서도 생산적인 활동을 할 수 있는 자료들을 제공하면 어떨까. 최종적으로 스파클 테일은 3D 모델을 직접 움직이며 동화책을 읽는 것 같은 템플릿을 제공하는 웹 사이트를 만들게 되었다. 

<br/>

#### 1-2 ) 프로젝트 특징
  - 3D 모델을 이용해서 직접 움직일 수 있는 주도권을 제공하면서 동화를 더욱 입체적으로 즐길 수 있게 했다. 더 나아가 템플릿을 구매한 고객에 한해 텍스트를 직접 수정할 수 있게 하면서 수익 창출과 함께 아이들의 창의성과 문학력을 더욱 자극할 수 있게 설계했다. 
  - 주 사용자는 아이들이기 때문에 정적인 데이터도 다양한 효과를 통해 다채롭게 표현하려고 노력했다. 
  - UX/UI를 우선적으로 고려했으며, 명확하고 정확한 기능들을 제공하면서도 좋은 디자인으로 시각적인 즐거움도 제공하려고 노력했다. 
  - 풀스택으로 혼자 개발했다. 4월부터 진행될 팀 프로젝트 전에 개발의 전체적인 흐름을 잘 이해하고 싶어서 1인 개발을 하게 되었다.

<br><br><br>







## 02. 개발 환경
- Frontend: React, Typescript, Tailwind, React-query
- Backend: Node.js, Express, MongoDB
- 버전 관리 : Github


<br><br><br>







## 03. 폴더 구조 
```
Sparkle_Tale
├── 📂 frontend
│   ├── .env
│   ├── .gitgnore
│   ├── .eslintrc.cjs
│   ├── index.html
│   ├── tailwindcss.config.js
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── 📂 public
│   │   ├── 📂 fonts
│   │   ├── 📂 images
│   │   ├── 📂 models
│   │   └── 📂 readme
│   │
│   └── 📂 src
│       ├── 📂 components
│       ├── 📂 context
│       ├── 📂 lib
│       ├── 📂 pages
│       ├── 📂 types
│       ├── 📂 utils
│       ├── App.tsx
│       ├── index.css
│       ├── main.tsx
│       └── vite-env.d.ts
│
├── 📂 backend
│   ├── .env
│   ├── .gitgnore
│   ├── package-lock.json
│   ├── package.json
│   ├── 📂 uploads
│   │
│   └── 📂 src
│       ├── 📂 middleware
│       │   └── auth.js
│       ├── 📂 models
│       │   ├── Payment.js
│       │   ├── Template.js
│       │   └── User.js
│       ├── 📂 routes
│       │   ├── template.js
│       │   └── users.js
│       └── index.js
│   
└── readme.md
```


<br><br><br>

## 04. DB 스키마 설계
<img src="frontend/public/readme/DB_스키마.png" alt="스키마 설계 사진" />


<br><br><br>







## 05. 개발 기간
#### 개발 기간
- 전체 개발 기간 : 2024-02-14 ~ 2024-03-18
- 3D 템플릿 제작 : 2024-02-14 ~ 2024-02-19
- 프론트엔드 작업 : 2024-02-21 ~ 2024-03-17
- 백엔드 작업 : 2024-03-08 ~ 2024-03-16



<br><br><br>




## 06. 페이지별 기능

#### [ <span style="color: orange">회원가입</span> ]
- 프론트엔드
  - 이름, 이메일, 비밀번호, 비밀번호의 각 필드는 change 이벤트가 발생할 때마다 유효성 검사 진행
  - 유효성 검사를 통과하지 못하면 필드 밑에 경고문 표시
  - 모든 필드 유효성 검사를 통과 시 버튼이 활성화
  - 회원가입 버튼 클릭 시 회원가입 요청 API를 호출
  - 응답 값 200 : 성공했다는 알림창 + 로그인 페이지로 이동
  - 응답 값 500 : 중복 이메일을 사용했다는 알림창을 띄움
- 백엔드
  - DB에 유저 정보를 저장하기 전에 비밀번호는 bcrypt로 해시화
  - 해시화 한 비밀번호와 나머지 유저 정보를 DB의 User collection에 저장
  - 성공적으로 DB에 저장하면 status 200, 실패하면 status 500을 응답으로 반환

<br><img src="frontend/public/readme/회원가입.gif" alt="회원가입 유효성 검사" width="450" />


<br><br>


#### [ <span style="color: orange">로그인</span> ]
- 프론트엔드
  - 이메일만 유효성 검사 진행
  - 활성화 된 로그인 버튼을 누르면 유저 정보를 확인하는 API 호출
  - 응답 값 200 :  로그인 했다는 알림창 등장 + 홈페이지로 이동
  - 응답 값 500 : 로그인에 실패했다는 알림창만 등장
- 백엔드
  - 사용자가 입력한 이메일과 일치하는 이메일을 가진 유저가 있는지 DB의 user collection에서 찾고 있다면 해당 유저의 모든 정보를 가져옴.
  - 만약 해당 이메일에 일치하는 유저 정보가 없다면 status 500과 함께 함수 종료
  - 찾았다면, 해당 유저의 비밀번호와 사용자가 입력한 비밀번호가 일치하는 지 확인. 
  - 해시화 한 비밀번호는 원본으로 복구할 수 없기 때문에 bcrpyt의 compare 메서드를 통해 일치하는지 판별
  - 비밀번호가 일치하지 않으면 status 500과 함께 함수 종료
  - 비밀번호 일치하면 jsonwebtoken으로 12시간동안 유효한 토큰 생성 
  - 토큰까지 생성했다면 클라이언트에 status 200과 비밀번호를 제외한 유저의 모든 정보 그리고 토큰 정보를 응답으로 보낸다

<br><img src="frontend/public/readme/로그인.gif" alt="회원가입 유효성 검사" width="450" />


<br><br>


#### [ <span style="color: orange">홈페이지</span> ]
- 크게 4개의 섹션으로 나뉜다.
- 