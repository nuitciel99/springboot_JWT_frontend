# SpringBoot Security with React

- frontEnd : React
- backEnd : SpringBoot

# Security with JWT

- JWT : https://jwt.io/

# Authentication & Authorization

- Authentication: 인증 (로그인)
- Authorization: 권한 부여 (로그인 상태 유지) => 세션, JWT

# Session(+Cookie) & JWT

- Session : 세션은 브라우저와 웹 서버가 연결되어 브라우저가 종료될 때까지의 시점
  서버에 접속할 때 서버는 세션 id를 쿠키에 담아 되돌려주고, 사용자는 세션 id를 담은 쿠키인 세션 쿠키를 이후 요청부터 계속해서 함께 전달함으로 서버가 클라이언트를 식별할 수 있게 하는 기술이 세션 기반 인증 방식

- Cookie : 쿠키의 유형에는 영구 쿠키와 세션 쿠키가 있어 만료시기가 각각 다르지만 세션은 대부분의 경우 브라우저 종료 시 만료됨.
  쿠키는 클라이언트에 저장되고, 세션은 서버에 저장됨. 세션 id를 쿠키에 담아서 통신한다는 점에서 세션은 쿠키를 사용하는 방식. 쿠키에 로그인에 대한 정보를 담는다면 클라이언트에 노출 되어 위험하기 때문에 서버에 저장하는 방식으로 세션을 사용

- Session 단점 : 세션기반 인증 방식을 사용할 때 중앙 세션 관리 시스템에서 하나의 문제가 시스템 전체로 확산됨.
  사용자가 많아짐에 따라 세션 DB와 서버를 확장해야 함.

- JWT : 위의 단점을 어느 정도 해결할 수 있는 기술이 JWT (JSON Web Token)
  .을 기준으로 구분되어 heaer, payload, signature로 구성 되어 있음. JWT는 암호화되지 않아서 누구나 확인할 수 있기 때문에 중요한 정보를 JWT에 담으면 안됨
  header: typ와 alg라는 정보가 존재하는데 typ의 값은 JWT이고 alg signature를 해싱하기위한 알고리즘
  payload: 토큰에서 사용할 조각들인 클레임이 존재. 토큰의 목적에 따라 클레임이 달라. registered claim에는 토큰 만료시간, 토큰 발급 날짜 등을 작성.
  signature: 토큰을 인코딩하거나 유효성 검사를 할 때 필요한 암호화 코드

  - 동작방식: JWT는 일종의 확인서. 로그인을 성공적으로 Authentication이 이루어지면 서버는 사인된 확인서(JWT)를 우리에게 제공
    앞으로 요청 때마다 JWT를 서버에게 같이 보여주면서 권한을 확인받음. 서버는 JWT만 확인해 Authorization하기 때문에 세션 DB에 저장할 필요가 없음

  - 저장 위치: 웹에서 저장하기 위해서는 브라우저 저장소에 저장하는 방식과 쿠키에 저장하는 방식을 사용할 수 있음.
    로컬 스토리지와 세션 스토리지 같은 브라우저 저장소에 JWT를 저장한다면 스크립트 공격(XSS)에 취약해짐.
    쿠키에 저장할 때 http-only 를 사용한다면 HTTPS로만 쿠키가 전달되기 때문에 보안을 강화할 수 있고, CSRF 문제에 대해서는 CSURF같은 라이브러리를 사용함으로 해결할 수 있음.

- Session vs JWT

  - Session : 서버는 로그인 된 유저의 정보를 모두 저장하고 있어서 유저들의 통제가 JWT보다 비교적 쉬움
    PC와 모바일기기에서 동시 접근하는 것을 막고 싶을 때 강제 로그아웃 시키는 기능은 세션을 통해 구현이 가능
  - JWT: JWT를 서버가 발급하고나면 JWT를 관리하지 않음. 오직 JWT를 받았을 때 JWT가 유효한 것인지만 확인하기 때문에 서버 자원과 비용을 절감할 수 있음. JWT가 수명이 길어서 제 3자에게 탈취당할 경우가 발생할 수 있음. 이를 보완한 방법 중 하나로 access token & refresh token 방식이 있음

- access token & refresh token
  - access token은 유효기간이 짧은 토큰이고, refresh token은 access token보다 유효기간이 긴 토큰
  - 사용자가 로그인을 하면 서버로부터 access token, refresh token 2개의 토큰을 받음. 이때 서버는 refresh token을 안전한 저장소에 저장
  - 서버로부터 받은 access token의 유효 기간이 지나지 않은 경우 사용자가 어떤 요청을 보낼 때 access token을 함께 보내고 서버는 유효한 지 확인 후 응답
  - 서버로부터 받은 access token의 유효 기간이 지난 경우 사용자는 refresh token과 함께 요청을 보내고, 저장소에 저장되어 있던 refresh token과 비교한 후에 유효하다면 새로운 access token과 응답
