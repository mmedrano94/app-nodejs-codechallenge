export class TransactionCreatedEvent {
    constructor(
        public readonly accountExternalIdDebit: string,
        public readonly accountExternalIdCredit: string,
        public readonly tranferTypeId: string,
        public readonly value:number,
        public readonly status:string = 'pending',
    ) {}

    toString() {
        return JSON.stringify({
            accountExternalIdDebit: this.accountExternalIdDebit,
            accountExternalIdCredit: this.accountExternalIdCredit,
            tranferTypeId: this.tranferTypeId,
            value: this.value,
            status: this.status,
        })
    }
}