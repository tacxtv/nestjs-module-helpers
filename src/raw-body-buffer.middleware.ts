'use strict'

import bodyParser from 'body-parser'
import { Request, Response } from 'express'

export interface RawBodyBufferOptions {
  whitelistedHeaders?: string[]
  blacklistedHeaders?: string[]
}

export function rawBodyBuffer(options: RawBodyBufferOptions) {
  const rawBodyBuffer = (req: Request, res: Response, buffer: Buffer) => {
    for (const blacklistedHeader in options.blacklistedHeaders) {
      if (req.headers.includes(blacklistedHeader)) return
    }
    for (const whitelistedHeader in options.whitelistedHeaders) {
      if (!req.headers.includes(whitelistedHeader)) return
    }
    if (buffer && buffer.length) req.rawBody = buffer.toString()
  }
  return [
    bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }),
    bodyParser.json({ verify: rawBodyBuffer }),
  ]
}
