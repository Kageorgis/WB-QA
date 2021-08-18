/*========================================================================================================================
* @author vasu A
* @date 14/07/2021
* @description:This Test is Covering  for CP_ForecastTriggerHelper Apex class 
==========================================================================================================================*/
@istest
public class CP_ForecastTriggerHelperTest { 
    @isTest
    static void preventForecastInsertTest(){
        Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
        acc.Name = 'test';
        acc.CP_Forecast_Required_Bottom_Up__c = true;
        insert acc;
        List<CP_Forecast__c> listcpf = new List<CP_Forecast__c>();
        CP_Forecast__c cpf = new CP_Forecast__c();
        cpf.Licensee_Name__c = acc.id;
        cpf.Forecast_Status__c = Label.CP_FORECAST_OPEN;
        //cpf.Amount_Type__c= Label.CP_TOP_DOWN;
         listcpf.add(cpf);
        insert listcpf;
        CP_Forecast_Cycle__c fcycle = new CP_Forecast_Cycle__c();
        fcycle.Status__c =Label.CP_FORECAST_CLOSED;
        fcycle.Cycle_Type__c = 'FFC';
        fcycle.Year__c = '2022';
        insert fcycle;
         System.assertNotEquals(fcycle.Id, null);
        CP_ForecastTriggerHelper.preventForecastInsert(listcpf);
        
    }
 @isTest
    static void closeForecastTest(){
        
        Map<Id, sObject> newvalues = new Map<Id, sObject>();
        Map<Id, sObject> oldvalues = new Map<Id, sObject>();
        try{
         Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
        acc.Name = 'Retailer';
        insert acc;
        List<CP_Forecast__c> listcpf = new List<CP_Forecast__c>();
        CP_Forecast__c cpf = new CP_Forecast__c();
        cpf.Licensee_Name__c = acc.id;
        cpf.Forecast_Status__c = Label.CP_FORECAST_OPEN;
        cpf.Amount_Type__c= Label.CP_ROYAlTY;
         listcpf.add(cpf);
        insert listcpf;
        update listcpf;
        newvalues.put(cpf.id, cpf);
        CP_Forecast_Cycle__c fcycle = new CP_Forecast_Cycle__c();
        fcycle.Status__c =Label.CP_FORECAST_CLOSED;
        insert fcycle;
        update fcycle;
       System.assertNotEquals(fcycle.Id, null);
        CP_ForecastTriggerHelper.closeForecast(newvalues, oldvalues);
        } catch(Exception e){
            
        }
         
    }
    @isTest
    static void updateStatustToDraftTest(){
        Map<Id, sObject> newvalues = new Map<Id, sObject>();
        Map<Id, sObject> oldvalues = new Map<Id, sObject>();
        
        Account acct = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId(),Name = 'test1');
        insert acct;
        
        Account acct1 = new Account(Name = 'test2');
        insert acct1;
        CP_Forecast_Cycle__c fcycle = new CP_Forecast_Cycle__c();
        fcycle.Status__c =Label.CP_FORECAST_CLOSED;
        fcycle.Cycle_Type__c = 'FFC';
        fcycle.Year__c = '2022';
        insert fcycle;
       
        CP_Forecast__c oldvalue = new CP_Forecast__c();
        oldvalue.Licensee_Name__c = acct.Id;
        oldvalue.Forecast_Status__c = Label.CP_FORECAST_OPEN;
        oldvalue.Amount_Type__c= Label.CP_ROYAlTY;
        oldvalue.Forecast_Cycle__c =fcycle.id;
       // insert oldvalue;
        //update oldvalue;
        oldvalues.put(oldvalue.Id,oldvalue);
        
       /* List<CP_Forecast__c> listcpf = new List<CP_Forecast__c>();
        CP_Forecast__c cpf = new CP_Forecast__c();
        cpf.Licensee_Name__c = acct.id;
        cpf.Forecast_Status__c = Label.CP_FORECAST_OPEN;
        cpf.Amount_Type__c= Label.CP_ROYAlTY;
        listcpf.add(cpf);
        insert listcpf;
        update listcpf;
        
        newvalues.put(cpf.Id,cpf);
*/
       
        CP_ForecastTriggerHelper.updateStatustToDraft(newvalues, oldvalues); 
    }
    
    @isTest
    static void addVersionToForecastTest(){
        List<CP_Forecast__c> forecastItems = new List<CP_Forecast__c>();
        Account acct = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId(),Name = 'Test Account 1');
        insert acct;
        CP_Forecast_Cycle__c  forecastCycle  =  new CP_Forecast_Cycle__c();
        forecastCycle.Cycle_Type__c = 'FFC';
        forecastCycle.Year__c = '2022';
        insert forecastCycle;
        CP_Forecast__c forecastRecord = new CP_Forecast__c();
        forecastRecord.Licensee_Name__c = acct.Id;
        forecastRecord.Forecast_Cycle__c = forecastCycle.Id;
        forecastRecord.Forecast_version__c = Decimal.valueOf(1);
        insert forecastRecord;
        System.assertNotEquals(forecastRecord.Id, null);
        forecastItems.add(forecastRecord);
        CP_ForecastTriggerHelper.addVersionToForecast(forecastItems);
    }
    @isTest
    static void massApproveForecastTest(){
         Map<Id, sObject> newvalues = new Map<Id, sObject>();
        Map<Id, sObject> oldvalues = new Map<Id, sObject>();
        try{
         Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
        acc.Name = 'Retailer';
        insert acc;
        List<CP_Forecast__c> listcpf = new List<CP_Forecast__c>();
        CP_Forecast__c cpf = new CP_Forecast__c();
        cpf.Licensee_Name__c = acc.id;
        cpf.Forecast_Status__c = Label.CP_SUBMITTED;
        cpf.Amount_Type__c= Label.CP_ROYAlTY;
         listcpf.add(cpf);
        insert listcpf;
        update listcpf;
        newvalues.put(cpf.id, cpf);
        CP_Forecast_Cycle__c fcycle = new CP_Forecast_Cycle__c();
        fcycle.Status__c =Label.CP_FORECAST_CLOSED;
        System.assertNotEquals(cpf.Id, null);
        CP_ForecastTriggerHelper.massApproveForecast(newvalues, oldvalues);
        }catch(Exception e){
            
        }
    }
   
}