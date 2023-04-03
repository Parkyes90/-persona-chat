# Use the official Python image as the base image
FROM python:3.11-slim-buster as python

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN adduser --disabled-password --gecos '' app
USER app

# Set the working directory
WORKDIR /home/app/chatting

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV POETRY_VERSION 1.1.13
ENV POETRY_VIRTUALENVS_CREATE false


FROM python as poetry
ENV POETRY_HOME=/home/app/poetry
ENV POETRY_VIRTUALENVS_IN_PROJECT=true
ENV PATH="$POETRY_HOME/bin:$PATH"
RUN curl -sSL https://install.python-poetry.org | python3 -

# Copy the pyproject.toml and poetry.lock files
COPY pyproject.toml poetry.lock ./

RUN poetry install --no-interaction --no-ansi -vvv

COPY . .

# Expose the port your Django app runs on
EXPOSE 8000
