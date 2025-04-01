FROM node:20.11.1-alpine as wanted-person-report-build-stage

WORKDIR /app

COPY . /app/

RUN npm install
RUN npm run build --production

FROM nginx:1.21.3-alpine as runtime

COPY --from=wanted-person-report-build-stage /app/nginx.conf  /etc/nginx/nginx.conf
COPY --from=wanted-person-report-build-stage /app/dist/wanted-person-report/browser /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

