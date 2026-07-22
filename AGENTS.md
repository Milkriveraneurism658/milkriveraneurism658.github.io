# AGENTS.md

개인 사이트 `monet5379.github.io` 에이전트 지침.

## 정체성

- 채용 · 포트폴리오 · 공개 기술
- Intem Studio(`intemstudio.github.io`)와 **별개**. 스튜디오 글 전문 복제 금지. 필요 시 링크만.

## 구조

- `index.md` — 소개·CTA
- `career.md` — 경력
- `projects/` — 포트폴리오
- `notes/` — 개인 공개 기술 글
- `docs/` — 내부 규칙 (Jekyll exclude, 미게시)

## 규칙

- 커밋 제목·본문: 한글 (`docs/project-rules.md`)
- 사이트 콘텐츠와 docs/설정은 커밋 분리
- `career` · `projects` · `notes` 페이지: `date`, `excerpt` 필수. `title` 짧게, 부제(`—`) 금지. `excerpt` = 본문 lead
- 요청 없이 커밋·push 하지 않음

## 빌드

```bash
bundle exec jekyll build
bundle exec jekyll serve
```
