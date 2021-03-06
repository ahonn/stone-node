class ParseException extends Error {
  public message: string
  public name: string
  constructor(message) {
    super()
    this.message = message || "Unknow Error"
    this.name = "ParseException"
  }
}

export default ParseException