FROM node:23.4.0-alpine AS build

RUN corepack enable
RUN corepack prepare pnpm@9.15.0 --activate

WORKDIR /app

COPY backend/package.json .
COPY backend/pnpm-lock.yaml .
RUN pnpm install

COPY backend .
COPY shared /shared
RUN pnpm run build

# ===============================

FROM node:23.4.0-alpine

RUN corepack enable
RUN corepack prepare pnpm@9.15.0 --activate

WORKDIR /app

COPY backend/package.json .
COPY backend/pnpm-lock.yaml .
RUN pnpm install --production

COPY --from=build /app/dist dist

EXPOSE 8000

CMD ["pnpm", "start"]
