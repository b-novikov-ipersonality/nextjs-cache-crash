FROM node:17
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build
ENV NODE_ENV production
EXPOSE 3000
ENV PORT 3000
CMD ["yarn", "start"]