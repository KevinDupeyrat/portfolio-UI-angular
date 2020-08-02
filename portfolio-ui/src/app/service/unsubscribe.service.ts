export class UnsubscribeService {

    static unsubscribe(service: Array<any>): void {
        service.forEach(x => {
            if (x !== null) {
                x.unsubscribe();
            }
        });
    }
}
