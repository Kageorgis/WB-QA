@istest
public class CP_NewForecastVersionControllerTest {
@isTest
    static void createForecastVersionTest(){
         Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
        acc.Name = 'test';
        acc.CP_Forecast_Required_Bottom_Up__c = true;
        insert acc;
        CP_Forecast_Cycle__c cpcycle = new CP_Forecast_Cycle__c();
        cpcycle.Cycle_Type__c = 'FFC';
        cpcycle.Year__c = '2029';
        insert cpcycle;
        List<CP_Forecast__c> listcpf = new List<CP_Forecast__c>();
        CP_Forecast__c cpf = new CP_Forecast__c();
        cpf.Licensee_Name__c = acc.id;
        cpf.Forecast_Cycle__c = cpcycle.id;
        cpf.Forecast_Status__c = Label.CP_SUBMITTED;
       	cpf.Forecast_version__c = Decimal.valueOf(1);
         listcpf.add(cpf);
        insert listcpf;
        CP_NewForecastVersionController.createForecastVersion(cpf.Id);
    }
	
}