## gulp 사용방법 이해 & 연습

### src폴더는 단순히 gulp를 이해하기위한 예제파일.

#### gulp에서 task를 주는 방법 function export const(변수)로 함수 선언해주면 가능

##### task는 모든 pug파일들을 가지고 다른 폴더에 집어넣어주는 기능 & sccs파일들을 css파일로 변환시켜준다음 코드를 최소화해줌 그다음 css폴더에 집어넣어준는 행위 == 컴파일과 비슷함

##### 컴파일할때 디렉토리명/\*_.pug -> 해당디렉토리안에 pug파일만 컴파일 , 디렉토리명/\*\*/_.pug -> 디렉토리 안에 있는 하위 파일들 모든 pug파일 전부다 컴파일해줌

##### watch모드 추가

##### scss에서는 node-sass가 필요한데 m1 mac에서는 호환이되지않음. gulp sass는 주석처리.

#### 스크립트 정리

1. yarn build : build폴더 생성 그 안에 데이터 삽입
2. yarn dev : 파일들을 build폴더로 컴파일 해줌 (babel,img,pug)
3. yarn deploy : build파일들을 github-pages에 베포해주고 dev환경에서의 build폴더 삭제

베포 : gbwlxhd97.github.io/gulp
node-sass 이슈로 css 적용을 하지 못함.. 추후 업데이트예정
