'use strict'

import { createParamDecorator, ExecutionContext } from '@nestjs/common'

// noinspection JSUnusedGlobalSymbols
export const RawBody = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return request.rawBody || undefined
  },
)
