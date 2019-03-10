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
CMD npm i express
CMD npm i body-parser
CMD npm i nodemailer

COPY server $HOME/dist/server

EXPOSE 3000
CMD ["node", "./dist/server"]
