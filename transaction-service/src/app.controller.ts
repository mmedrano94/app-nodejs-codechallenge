import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { TransactionCreatedEvent } from './event/transaction-created.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('transaction_created')
  handleTransactionCreated(data: TransactionCreatedEvent) {
    this.appService.handleTransactionCreated(data);
  }
}