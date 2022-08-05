'use strict'

import { ModuleRef } from '@nestjs/core'
import { Request } from 'express'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AbstractService {
  protected moduleRef: ModuleRef
  protected request?: Request & { user?: any }

  public constructor(context: {
    moduleRef: ModuleRef
    request?: Request & { user?: any }
  }) {
    this.moduleRef = context.moduleRef
    this.request = context.request
  }

  // noinspection JSUnusedGlobalSymbols
  public get serviceName(): string {
    return (<any>this).constructor.name.replace(/Service$/, '')
  }
}
