# 베이스 이미지 설정
FROM python:3.11-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


WORKDIR /api-server

# 시스템 패키지 설치 및 poetry 설치
RUN apk add --update --no-cache --virtual .tmp-build-deps \
    gcc libc-dev linux-headers postgresql-dev \
    && apk add libffi-dev
RUN pip install poetry

# 비-root 사용자 생성
RUN adduser -D api-server-user

COPY pyproject.toml poetry.lock ./

# 종속성 설치
RUN poetry config virtualenvs.create false && \
    poetry install --no-interaction --no-ansi

# 모든 소스코드 복사
COPY . ./


# api-server-user 작업 디렉토리와 그 안의 모든 파일의 소유권 변경
RUN chown -R api-server-user:api-server-user /api-server
RUN chown -R api-server-user:api-server-user /var/log

# api-server-user로 실행
USER api-server-user

EXPOSE 8000
