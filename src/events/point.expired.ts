import { Context } from 'aws-lambda';

export const pointExpird = async (
  data: CustomEventBridgeEvent,
  ctx: Context,
) => {
  ctx.plugin.db.connection()
  return 'success';
};