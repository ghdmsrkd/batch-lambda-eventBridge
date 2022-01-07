import { Context } from "aws-lambda";
import { MyDay } from '../plugin/day';
import { MyDB } from '../plugin/db';
import { EventMapper } from "./eventMapper";

export class EventListner {

  event: CustomEventBridgeEvent;
  context: Context;
  eventMapper: EventMapper

  constructor(event: CustomEventBridgeEvent, context: Context) {
    this.event = event;
    this.context = context;
    this.setPulgin();
    this.eventMapper = new EventMapper()
  }

  private setPulgin() {
    this.context.plugin = {
      db: MyDB.getInstance(),
      day: MyDay.getInstance(),
    };
  }

  public listen = async () =>{
    try {
      this.eventMapper.setEvent(this.event.action)
      const eventHandler = this.eventMapper.getEventHandler()
      if(!eventHandler){
        throw new Error("등록 되지 않은 메시지 입니다.")
      }
      const res = await eventHandler(this.event, this.context)
      
      return this.reponser(res)
    } catch (error) {
      return await this.ExceptionHandler(error)
    }
  }

  private reponser(res) {
    // 성공 결과에 대한 공통 처리
    console.log(res);
    return res
  }

  private ExceptionHandler = async (error) => {
    // 예외 처리에 대한 공통 처리
    console.log("🎃Bathch 중 오류가 발생했습니다!!🎃")
    console.log(`${this.event.action} <== 해당 이벤트에서 오류가 발생했습니다.`)
    console.log('exception : ', error);
    return false
  }

}