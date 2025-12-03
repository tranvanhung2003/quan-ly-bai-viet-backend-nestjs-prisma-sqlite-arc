import {
  HttpExceptionOptions,
  UnprocessableEntityException,
} from '@nestjs/common';

type CustomErrors = {
  field: string;
  error: string;
}[];

export class CustomUnprocessableEntityException extends UnprocessableEntityException {
  constructor(
    objectOrError?: CustomErrors,
    descriptionOrOptions?: string | HttpExceptionOptions,
  ) {
    super(objectOrError, descriptionOrOptions);
  }
}
