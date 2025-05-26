FROM python:3.9


WORKDIR /src


# COPY ./src/requirements.txt /src/requirements.txt
COPY ./requirements.txt /src/requirements.txt


RUN pip install --no-cache-dir --upgrade -r /src/requirements.txt


COPY /src /src


CMD ["fastapi", "run", "main.py", "--port", "8080"]