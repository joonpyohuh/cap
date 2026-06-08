# PlayPICK!

게이밍/엔터 전자기기 렌탈 서비스 PlayPICK 웹사이트입니다.

## 구현 범위

- 홈
- 이용안내
- 대여/반납 규정
- 요금 안내
- 대여품목
- 상품 상세보기
- 대여정보 작성 및 신청 완료 화면
- 마이페이지
- 고객센터
- ERD 기반 관리자 모드
- Supabase 실제 DB 저장/조회 연결 구조

결제 페이지는 요청 범위에서 제외되어 실제 결제 기능은 포함하지 않았습니다. 현재 대여 신청은 현장결제 상태로 DB에 저장됩니다.

## 실행

브라우저에서 `index.html`을 열거나, 로컬 서버에서 실행합니다.

```bash
python -m http.server 8765
```

## Supabase 실제 DB 연결

1. Supabase에서 새 프로젝트를 만듭니다.
2. Supabase 대시보드의 SQL Editor에서 `database/schema.sql` 전체를 실행합니다.
3. Project Settings > API에서 `Project URL`과 `anon public key`를 복사합니다.
4. `assets/supabase-config.js`에 아래처럼 붙여 넣습니다.

```js
window.PLAYPICK_SUPABASE = {
  url: "https://YOUR_PROJECT.supabase.co",
  anonKey: "YOUR_ANON_PUBLIC_KEY",
  currentUserId: "U-1001"
};
```

연결되면 대여 신청 시 `profiles`, `rental_orders`, `rental_details`, `payments` 테이블에 실제 데이터가 저장됩니다. 마이페이지와 관리자 모드는 Supabase 데이터를 우선으로 불러오고, 설정이 비어 있으면 샘플 데이터로 표시됩니다.

### 저장 실패가 뜰 때

`new row violates row-level security policy` 또는 `DB 저장 실패`가 뜨면 Supabase SQL Editor에서 `database/fix-rls-policies.sql` 전체를 실행합니다. 이 파일은 `rental_orders`, `rental_details`, `payments`, `inquiries`에 공개 데모용 읽기/쓰기 정책을 다시 생성합니다.

## Supabase 테이블

- `profiles`: 사용자 정보
- `products`: 상품/기기 마스터
- `rental_orders`: 대여 주문
- `rental_details`: 대여 주문 상세
- `payments`: 결제 정보
- `inquiries`: 문의사항
