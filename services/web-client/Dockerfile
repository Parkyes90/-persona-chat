FROM node:18-alpine

WORKDIR /web-client

COPY package*.json ./

RUN npm install

# 비-root 사용자 생성
RUN adduser -D web-client-user

# 모든 소스코드 복사
COPY . ./

# web-client-user 작업 디렉토리와 그 안의 모든 파일의 소유권 변경
RUN chown -R web-client-user:web-client-user /web-client

# web-client-user로 실행
USER web-client-user

EXPOSE 3000
