import { MyDay } from '../src/common/plugin/day'
import { MyDB } from '../src/common/plugin/db'

export {}

declare global {

  type CustomEventBridgeEvent = {
    action : string
  }
}

declare module "aws-lambda" {
  interface Context {
    plugin: {
      db : MyDB,
      day: MyDay
    }
  }
}
