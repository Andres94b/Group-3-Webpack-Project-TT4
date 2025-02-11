FROM nginx

COPY /app/dist /usr/share/nginx/html

CMD ["nginx","-g","daemon off;"]