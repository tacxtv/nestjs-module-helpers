'use strict'

import { ModuleRef } from '@nestjs/core'
import { AbstractService } from './abstract.service'
import { CommandRunner } from 'nest-commander'

// noinspection JSUnusedGlobalSymbols
export abstract class AbstractCommand extends CommandRunner {
  protected abstract readonly _service?: AbstractService

  protected constructor(protected readonly moduleRef: ModuleRef) {
    super()
  }

  // noinspection JSUnusedGlobalSymbols
  protected get commandName(): string {
    return (<any>this).constructor.name.replace(/Command$/, '').toLowerCase()
  }
}
