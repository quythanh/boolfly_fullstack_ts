FROM node:23.4.0-alpine AS build

RUN corepack enable
RUN corepack prepare pnpm@9.15.0 --activate

WORKDIR /app

COPY frontend/package.json .
COPY frontend/pnpm-lock.yaml .
RUN pnpm install

COPY frontend .
COPY shared /shared
RUN pnpm run build

# =====================

FROM node:23.4.0-alpine

RUN corepack enable
RUN corepack prepare pnpm@9.15.0 --activate

WORKDIR /app

COPY frontend/package.json .
COPY frontend/pnpm-lock.yaml .
RUN pnpm install --production

COPY --from=build /app/.next .next
COPY --from=build /app/public public
COPY --from=build /app/package.json package.json

EXPOSE 3000

CMD ["pnpm", "start"]
