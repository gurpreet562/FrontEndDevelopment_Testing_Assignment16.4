mport { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls:  ['./banner.component.css']
})
export class BannerComponent {
  title = 'Test Tour of Heroes';
  beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ BannerComponent ],
  })
  .compileComponents(); 
   describe('CricketerService', () => {
it('should get cricketetList, done => {
   let cricketerService: CricketerService;
getTestBed().compileComponents().then(() => {
mockBackend.connections.subscribe(
(connection: MockConnection) => { connection.mockRespond(new Response(
new ResponseOptions({ body: [
{ "firstName": "Sachin",lastName": "Tendulakar",
"favShot": "Drive",playerType": "Batsman",
"yearlyIncome": "1200000”, dob": "1975-04-10"
}] }
)));
});
cricketerService = getTestBed().get(CricketerService);
expect(cricketerService).toBeDefined();
cricketerService.getCricketerList().subscribe((cricketerList:
ICricketList[]) => {
expect(cricketerList.length).toBeDefined();
expect(cricketerList.length).toEqual(2);
expect(cricketerList.length).not.toBe(1);
done();
});
});
});
});
});
});
}));
}
