# 글쓰기 가이드 (notes)

## 독자

- 채용 검토자·외부 개발자

## 톤

- 합니다체
- 1인칭 허용

## Front matter

```yaml
---
layout: page
title: 짧은 제목
permalink: /notes/슬러그/
date: YYYY-MM-DD
excerpt: "본문 lead와 동일"
tags: [DragonIsDead]
---
```

- `notes/<슬러그>.md`를 추가하면 `notes/index.md` 목록에 자동으로 포함됩니다 (`date` 최신순).
- `tags`는 목록 필터용입니다. 프로젝트 영문 제목에 맞춰 `DragonIsDead`, `BladeAssault`를 씁니다.
- 필터 칩 목록은 `notes/index.md`의 `filter_tags`에서 관리합니다.
