# Apply Design System

## Introduction

만든거 

https://github.com/JinhakApply-ToyProjects/ADS.git

개발 : Next.js (v14) 

https://www.youtube.com/watch?v=LmLchZ4tCXc&ab_channel=FEConfKorea

6분 50초 부터. 

## 디자인 시스템의 구성요소

### 1. 토큰 

여러 토큰이라 부름

- 컬러토큰
 https://testdesign.jinhakapply.com/AdmissionApplyV4/_guide_font.html
- 타이포그래피 토큰
- 여백 토큰
- 트랜지션 토큰
- spacing 토큰 

* 레이아웃 토큰을 어떻게 정할 것이냐가 관건인데
daisy ui를 참고하자면, 
- 아트보드, (사이즈를 정한 카드의 형태) https://daisyui.com/components/artboard/
여기부터는 tailwind css 
- width (width, max-width, min-width) https://tailwindcss.com/docs/width
- height (height, max-height, min-height) https://tailwindcss.com/docs/height
- spacing (padding, margin, space between)


### 2. 컴포넌트

토큰들의 조합으로 생김새 등을 지정

- button 하나 안에도, color, fill, weak, normal, pressed 등

몇가지 옵션으로 제약함

### 3. 패턴 (Rule 에 가까우므로 가이드문서에 저장) ⇒ 기획자 사용

사용처를 지정

primary fill : CTA 버튼

danger fill : 부정적 개념

추가적으로 ADS에 정의하려 하는 것들.. 

### ** 필드

생성툴에서 이야기하는 필드의 개념 

컴포넌트의 조합

적정선에서의 제한을 두어 만들어야 할 것으로 예상됨.

### *** 템플릿

 필드의 조합

여러 가지 필드들이 모여있는 경우 

## 디자인 핸드오프

결론적으로는,  Figma ⇒  vscode  로의 변환이 가능해져야 한다.

그러려면 디자인의 구조화가 필요하다. (json)

## 앞으로 필요한 것들

### 1. 디자인 시스템 구성요소 하나씩 정의

1. 토큰의 종류를 정하자.
2. 컴포넌트의 종류 (버튼, 인풋)
3. 필드의 종류
4. 템플릿 

[https://www.youtube.com/watch?v=IN0a_3c1vJs&ab_channel=디자이너DK](https://www.youtube.com/watch?v=IN0a_3c1vJs&ab_channel=%EB%94%94%EC%9E%90%EC%9D%B4%EB%84%88DK)

### 2. 각 구성요소에 맞는 디자인 시안이 정해져야 한다.

### 3. ADS 페이지에 반영