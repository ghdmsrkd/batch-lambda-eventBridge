import { Context } from 'aws-lambda';
import { EventListner } from './common/listener';

module.exports.run = async (
  event: CustomEventBridgeEvent,
  context: Context,
) => {
  console.log(event, "이벤트 시작!!", new Date())
  const app = new EventListner(event, context)
  await app.listen()
  console.log(event, "이벤트 종료!!", new Date())
};
