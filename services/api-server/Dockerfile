# 베이스 이미지 설정
FROM python:3.11-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


WORKDIR /api-server

RUN apk add --update --no-cache --virtual .tmp-build-deps \
    gcc libc-dev linux-headers postgresql-dev \
    && apk add libffi-dev
RUN pip install poetry


COPY pyproject.toml poetry.lock ./

# dependencies
RUN poetry config virtualenvs.create false && \
    poetry install --no-interaction --no-ansi

COPY . ./


EXPOSE 8000
