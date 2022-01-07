import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ko';

export class MyDay {
  static instance: MyDay;
  private day: typeof dayjs;

  private constructor() {
    this.day = this.setKRDay();
  }

  static getInstance() {
    MyDay.instance = new MyDay();
    return this.instance;
  }

  private setKRDay() {
    const day = dayjs;
    day.extend(utc);
    day.extend(timezone);
    day().tz('Asia/Seoul');
    day.locale('ko');
    return day;
  }

  get getDay() {
    return this.day();
  }
}
