
export class MyDB {
  private static instance: MyDB

  private constructor() {
    MyDB.instance = this
  }

  static getInstance() {
    if (!MyDB.instance) {
      MyDB.instance = new MyDB()
    }
    return this.instance
  }

  public connection = () => {
    console.log("DB Connection!!")
  }
}
