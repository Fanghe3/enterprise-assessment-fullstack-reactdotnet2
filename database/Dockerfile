FROM mysql:8

ENV MYSQL_ROOT_PASSWORD ''
ENV MYSQL_DATABASE 'blogmodo'
ENV MYSQL_ALLOW_EMPTY_PASSWORD 'yes'

COPY init.sql /docker-entrypoint-initdb.d/a.sql
COPY seed.sql /docker-entrypoint-initdb.d/b.sql

CMD ["mysql"]
