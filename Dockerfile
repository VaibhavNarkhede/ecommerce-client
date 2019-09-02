# use httpd (WS)

FROM httpd

COPY ./dist/client/ /usr/local/apache2/htdocs/

EXPOSE 80

# run apache in foreground

CMD apachectl -D FOREGROUND