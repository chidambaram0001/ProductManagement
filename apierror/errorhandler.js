import {HttpStatusCode} from './httpStatusCode';

export class BaseError extends Error {
    
    constructor(name, httpCode, description, isOperational) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
    
      this.name = name;
      this.httpCode = httpCode;
      this.isOperational = isOperational;
    
      Error.captureStackTrace(this);
    }
   }

   


   
