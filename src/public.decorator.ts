'use strict'

import { applyDecorators, SetMetadata } from '@nestjs/common'

export const META_UNPROTECTED = 'unprotected'

// noinspection JSUnusedGlobalSymbols
export const Public = () => applyDecorators(
  SetMetadata(META_UNPROTECTED, true),
)
