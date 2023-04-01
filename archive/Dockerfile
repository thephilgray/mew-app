FROM public.ecr.aws/docker/library/node:latest
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --legacy-peer-deps
COPY ./ ./
CMD [ "yarn", "build"]