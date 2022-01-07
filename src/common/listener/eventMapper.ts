import { mapper } from "../../events"

export class EventMapper {
  private event : string
  private eventHandler : Function | undefined

  constructor(){}

  public setEvent(event: string) {
    this.event = event
    this.eventHandler = mapper(this.event)
  }

  get getEventHandler(){
    return this.eventHandler
  }
}