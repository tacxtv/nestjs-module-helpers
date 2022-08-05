'use strict'

import { ModuleRef } from '@nestjs/core'
import { AbstractService } from './abstract.service'

// noinspection JSUnusedGlobalSymbols
export abstract class AbstractController {
  protected abstract readonly _service?: AbstractService

  protected constructor(protected readonly moduleRef: ModuleRef) {
  }

  // noinspection JSUnusedGlobalSymbols
  protected get controllerName(): string {
    return (<any>this).constructor.name.replace(/Controller$/, '').toLowerCase()
  }
}
