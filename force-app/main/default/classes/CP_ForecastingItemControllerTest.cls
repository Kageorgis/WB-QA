@isTest
private class CP_ForecastingItemControllerTest {
    @isTest
    static void createForecastingItemTest(){
     
         CP_ForecastingItemController obj = new CP_ForecastingItemController();
        Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
       acc.Name = 'Test Account';
        insert acc;
        CP_Forecast__c forecastRecord = new CP_Forecast__c(Licensee_Name__c = acc.Id);
        insert forecastRecord;
        String data = '[{"Revenue_Type__c":"1-Royalties","Royalty_Rate__c":5,"Q1__c":60000,"Q2__c":70000,"Q3__c":30000,"Q4__c":40000,"Forecast__c":"' + forecastRecord.Id + '"}]';
        List<CP_Forecast_Item__c> fItems = CP_ForecastingItemController.createForecastingItemForPOC(data, forecastRecord.Id);
        String profileName = CP_ForecastingItemController.getProfile();
    /*    Map<Id, String> ContractsMap = CP_ForecastingItemController.getContractsForPOC();
        Map<Id, String> TerritoriesMap = CP_ForecastingItemController.getTerritoriesForPOC();
        Map<Id, String> PropertiesMap = CP_ForecastingItemController.getPropertiesForPOC();
        Map<Id, String> RetailersMap = CP_ForecastingItemController.getRetailersForPOC();
        Map<Id, String> ProductsMap = CP_ForecastingItemController.getProductsForPOC();
        Map<Id, String> ForecastCurrMap = CP_ForecastingItemController.getForecastingCurrencyForPOC();*/
        fItems = CP_ForecastingItemController.checkDuplicateRecord(fItems);
        list<id> ids = new list<id>();
        for(CP_Forecast_Item__c fi:fItems){
            ids.add(fi.id);
        }
        fItems = CP_ForecastingItemController.deleteForecastingItemsForPOC(ids,'onlyDelete', forecastRecord.Id);    
    }
    @isTest
    static void deleteForecastingItemsForPOCExceptionCheck(){
        List<Id> recordIds = new List<Id>();
        String data ='onlyDelete';
        Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
       acc.Name = 'Test Account';
        insert acc;
        CP_Forecast__c forecastRecord = new CP_Forecast__c(Licensee_Name__c = acc.Id);
        insert forecastRecord;
        Id forecastingRecordId = forecastRecord.Id;
        CP_ForecastingItemController.deleteForecastingItemsForPOC(recordIds,data,forecastingRecordId);
        
    }
    @isTest
    static void getForecastingItemTest(){
        CP_ForecastingItemController obj = new CP_ForecastingItemController();
        Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
        acc.name= 'Test Account';
        insert acc;
        CP_Forecast__c forecastRecord = new CP_Forecast__c(Licensee_Name__c = acc.Id);
        insert forecastRecord;
        List<CP_Forecast_Item__c> fItems = CP_ForecastingItemController.getForecastingItemsForPOC(forecastRecord.Id);
        List<Map<Id, String>> lookUps = CP_ForecastingItemController.getLookUpsForPOC();
    }
   /* @isTest
    static void deleteForecastingItemTest(){
        CP_ForecastingItemController obj = new CP_ForecastingItemController();
        Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
        acc.name = 'Test Account';
        insert acc;
        CP_Forecast__c forecastRecord = new CP_Forecast__c(Licensee_Name__c = acc.Id);
        insert forecastRecord;
        String data = '[{"Revenue_Type__c":"1-Royalties","Royalty_Rate__c":5,"Q1__c":60000,"Q2__c":70000,"Q3__c":30000,"Q4__c":40000,"Forecast__c":"' + forecastRecord.Id + '"}]';
		CP_Forecast_Item__c fItem = new CP_Forecast_Item__c();
		fItem.Forecast__c = forecastRecord.Id;
        insert fItem;
		List<Id> fItemIds = new List<Id>();
		fItemIds.add(fItem.Id);        
        List<CP_Forecast_Item__c> fItems = CP_ForecastingItemController.deleteForecastingItemsForPOC(fItemIds ,data, forecastRecord.Id);
    }*/
    @isTest
    static void updateForecastingItemTest(){
        CP_ForecastingItemController obj = new CP_ForecastingItemController();
        Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
        acc.name = 'test Account';
        insert acc;
        CP_Forecast__c forecastRecord = new CP_Forecast__c(Licensee_Name__c = acc.Id);
        insert forecastRecord;
        CP_Forecast_Item__c fItem1= new CP_Forecast_Item__c();
        fItem1.Revenue_Type__c = '1-Royalties';
        fItem1.Royalty_Rate__c = 6;
        fItem1.Q1__c = 3000;
        fItem1.Forecast__c = forecastRecord.Id;
        insert fItem1;
        CP_Forecast_Item__c fItem2= new CP_Forecast_Item__c();
        fItem2.Revenue_Type__c = '1-Royalties';
        fItem2.Royalty_Rate__c = 3;
        fItem2.Q1__c = 7000;
        fItem2.Forecast__c = forecastRecord.Id;
        insert fItem2;
		String data2 = '[{"Id":"' + (String)fItem1.Id + '","Royalty_Rate__c":10},{"Id":"' + (String)fItem2.Id + '","Royalty_Rate__c":10}]';
        System.debug(data2);
        List<CP_Forecast_Item__c> fITemsUpdated = CP_ForecastingItemController.updateForecastingItemForPOC(data2, forecastRecord.Id);
    //  CP_ForecastingItemController.showGridErrorValidationInsert(fITemsUpdated);
       // CP_ForecastingItemController.showGridErrorValidationInsert(fITemsUpdated);
    }
    @isTest
    static void showGridErrorValidationUpdateTest(){
        List<CP_Forecast_Item__c> forecastingItemList = new List<CP_Forecast_Item__c>();
        Account acc = new Account(RecordTypeId = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId());
        acc.name = 'test Account';
        insert acc;
        CP_Forecast__c forecastRecord = new CP_Forecast__c(Licensee_Name__c = acc.Id);
        insert forecastRecord;
        CP_Forecast_Item__c fItem1= new CP_Forecast_Item__c();
        fItem1.Revenue_Type__c = null;
        fItem1.Royalty_Rate__c = 0;
        fItem1.Q1__c = 3000;
        fItem1.Forecast__c = forecastRecord.Id;
        insert fItem1;
        CP_Forecast_Item__c fItem2= new CP_Forecast_Item__c();
        fItem2.Revenue_Type__c = null;
        fItem2.Royalty_Rate__c = 0;
        fItem2.Q1__c = 7000;
        fItem2.Forecast__c = forecastRecord.Id;
        insert fItem2;
        forecastingItemList.add(fItem1);
        forecastingItemList.add(fItem2);
        CP_ForecastingItemController.showGridErrorValidationUpdate(forecastingItemList);
    }
}