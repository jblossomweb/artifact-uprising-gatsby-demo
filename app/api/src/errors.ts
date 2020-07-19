export class ServerError extends Error {
  public type: string
  public status: number
  constructor(message: string) {
    super(message)
    this.type = 'Server Error'
    this.status = 500
  }
}

export class RequestError extends Error {
  public type: string
  public status: number
  constructor(message: string) {
    super(message)
    this.type = 'Request Error'
    this.status = 400
  }
}

export class ValidationError extends RequestError {
  constructor(message: string) {
    super(message)
    this.status = 422
  }
}

export class NotFoundError extends RequestError {
  constructor(message: string) {
    super(message)
    this.status = 404
  }
}
