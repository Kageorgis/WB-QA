@isTest
public class CP_ContentDocTriggerHelperTest {
  
    @isTest
    static void uploadFilesToForecastTest(){
       List<sObject> newRecord = new List<sObject>();
       Map<Id,sObject> newItem = new Map<Id,sObject>();
       Account acct = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
       acct.Name    = 'TEST_ACCT';
       insert acct;
       List<CP_Forecast_Cycle__c> filelist = new List<CP_Forecast_Cycle__c>();
       CP_Forecast_Cycle__c forcastCycle = new CP_Forecast_Cycle__c();
       forcastCycle.Cycle_Type__c = 'MFC';
       insert forcastCycle;
       CP_Forecast__c forecastRecord = new CP_Forecast__c();
       forecastRecord.Licensee_Name__c  = acct.Id;
       forecastRecord.Forecast_Cycle__c = forcastCycle.Id;
       insert forecastRecord;
        
       ContentVersion content = new ContentVersion();
       Content.Title = 'test doc';
       content.PathOnClient = 'testdoc.text';
       Blob bodyOfBlob = Blob.valueOf('For Testing Purpose');
       content.VersionData = bodyOfBlob;
       insert content;
       
       ContentDocumentLink contentLink = new ContentDocumentLink();
       contentLink.LinkedEntityId = forcastCycle.Id;
       Id condocId = [SELECT Id,contentDocumentId FROM ContentVersion WHERE Id =:content.Id].contentDocumentId;
       contentLink.ContentDocumentId = condocId;
       contentLink.ShareType = 'I';
       insert contentLink;
        update contentLink;
        Delete contentLink;
     
    }
}