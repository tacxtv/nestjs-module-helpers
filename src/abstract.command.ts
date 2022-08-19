'use strict'

import { ModuleRef } from '@nestjs/core'
import { AbstractService } from './abstract.service'

// noinspection JSUnusedGlobalSymbols
export abstract class AbstractCommand {
  protected abstract readonly _service?: AbstractService

  protected constructor(protected readonly moduleRef: ModuleRef) {
  }

  // noinspection JSUnusedGlobalSymbols
  protected get commandName(): string {
    return (<any>this).constructor.name.replace(/Command$/, '').toLowerCase()
  }
}
