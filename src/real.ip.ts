import { getClientIp } from 'request-ip'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

// noinspection JSUnusedGlobalSymbols
export const RealIP = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  return getClientIp(request)
})
