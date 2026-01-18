# Multi-stage build для оптимизации
FROM node:22-alpine AS base

RUN apk add --no-cache dumb-init && \
    corepack enable && corepack prepare pnpm@latest --activate && \
    addgroup -g 1001 nodejs && \
    adduser -D nextjs -u 1001 -G nodejs

WORKDIR /app

# Stage 1: Dependencies
FROM base AS deps

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Stage 2: Build
FROM base AS builder

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY ./ ./

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_HOST
ARG SENTRY_AUTH_TOKEN
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_HOST=$NEXT_PUBLIC_HOST
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN

RUN pnpm build

# Stage 3: Production
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Копируем только необходимые файлы
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["dumb-init", "node", "server.js"]
