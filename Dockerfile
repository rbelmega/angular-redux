FROM node:10.15.1
ENV HOME=/home/app/
ENV APP_ROOT=dist

RUN mkdir $HOME && chmod -R 0777 $HOME
WORKDIR $HOME

COPY \
  package.json \
  .angular-cli.json \
  tsconfig.json \
  $HOME
COPY dist $HOME/dist
RUN npm i express --no-package-lock
RUN npm i body-parser --no-package-lock
RUN npm i nodemailer --no-package-lock

COPY server $HOME/server

EXPOSE 3000
CMD ["node", "./server"]
