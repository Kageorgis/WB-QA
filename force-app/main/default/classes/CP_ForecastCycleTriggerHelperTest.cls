/*========================================================================================================================
* @author vasu A
* @date 14/07/2021
* @description:This Test is Covering  for CP_ForecastCycleTriggerHelper Apex class 
==========================================================================================================================*/
@istest
public class CP_ForecastCycleTriggerHelperTest {
    @isTest
   static void autoCreateForecastTest(){
   Map<Id, CP_Forecast_Cycle__c> newItems = new Map<Id, CP_Forecast_Cycle__c>();
   Map<Id, CP_Forecast_Cycle__c> oldItems = new Map<Id, CP_Forecast_Cycle__c>();
       list<Account> listacc = new list<Account>();
       Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
       acc.Name = 'test';
       acc.CP_Forecast_Required_Bottom_Up__c = true;
       listacc.add(acc);
       insert listacc;
       list<CP_Forecast_Cycle__c> listcpc = new list<CP_Forecast_Cycle__c>();
       CP_Forecast_Cycle__c cpc = new CP_Forecast_Cycle__c();
       cpc.Status__c = Label.CP_FORECAST_ACTIVE;
       cpc.Cycle_Type__c = 'MFC';
       insert cpc;
       update cpc;
       CP_Forecast__c forecastObj=new CP_Forecast__c();
       forecastObj.Licensee_Name__c=acc.id;
       System.debug(acc.id);
       forecastObj.Forecast_Status__c='Draft';
       System.debug(forecastObj.Forecast_Status__c);
       forecastObj.Forecast_Cycle__c = cpc.id;
        System.debug(forecastObj.Forecast_Cycle__c);
       forecastObj.Forecast_version__c = Decimal.valueOf(2);
      // newItems.put(cpc.id,cpc);
      // insert forecastObj;
      // update forecastObj;
       
      
       
      
        Account acct = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
        acct.Name = 'test';
        acct.CP_Forecast_Required_Bottom_Up__c = true;
        insert acct;
        CP_Forecast__c cpf = new CP_Forecast__c();
        cpf.Licensee_Name__c = acc.id;
        cpf.Forecast_Status__c =Label.CP_FORECAST_OPEN;
        cpf.Forecast_version__c = Decimal.valueOf(1);
       cpf.Forecast_Type__c=Label.CP_ROYAlTY;
       
       insert cpf;
      // list<CP_Forecast_Cycle__c> listcpc = new list<CP_Forecast_Cycle__c>();
       CP_Forecast_Cycle__c cp = new CP_Forecast_Cycle__c();
       cp.Status__c = Label.CP_FORECAST_ACTIVE;
       newItems.put(cp.id, cp);
       CP_ForecastCycleTriggerHelper.autoCreateForecast(newItems, oldItems);
      
        
    }
    
   
}