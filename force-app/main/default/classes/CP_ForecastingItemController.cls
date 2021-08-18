/* 
==========================================================================================================
* @author: Kalash Rastogi
* @date: 10/07/2021
* @description: Controller class that will insert the forecasting items records, called from LWC.
==========================================================================================================
*/
public with sharing class CP_ForecastingItemController {
    
    public CP_ForecastingItemController() {
        
    }
    @AuraEnabled(cacheable = true)
    public static List<Map<Id, String>> getLookUpsForPOC(){
        try {
            List<Map<Id, String>> IdsVsNames = new List<Map<Id, String>>();
            List<CP_Forecast_Currency__c> currencyList = [SELECT Id, Name FROM CP_Forecast_Currency__c ORDER BY Name]; 
            Map<Id, String> currencyIdVsName = new Map<Id, String>();
            for(CP_Forecast_Currency__c curr: currencyList){
                currencyIdVsName.put(curr.Id, curr.Name);
            }
            IdsVsNames.add(currencyIdVsName);
            List<CP_Product_Type__c> prodList = [SELECT Id,Name FROM CP_Product_Type__c ORDER BY Name];
            Map<Id, String> IdVsProduct = new Map<Id, String>();
            for(CP_Product_Type__c p: prodList){
                IdVsProduct.put(p.Id, p.Name);
            }
            IdsVsNames.add(IdVsProduct);
            List<Account> accList = [SELECT Id, Name, RecordType.Name FROM Account WHERE RecordType.Name = 'WBCP Retailer' ORDER BY Name]; //Retailer
            Map<Id, String> accNameVsId = new Map<Id, String>();
            for(Account a: accList){
                accNameVsId.put(a.Id, a.Name);
            }
            IdsVsNames.add(accNameVsId);
            List<Property__c> propList = [SELECT Id,Name FROM Property__c ORDER BY Name];
            Map<Id, String> propNameVsId = new Map<Id, String>();
            for(Property__c p: propList){
                propNameVsId.put(p.Id, p.Name);
            }
            IdsVsNames.add(propNameVsId);
            List<WBCP_Country__c> territoryList = [SELECT Id,Name FROM WBCP_Country__c ORDER BY Name];
            Map<Id, String> territoryVsId = new Map<Id, String>();
            for(WBCP_Country__c t: territoryList){
                territoryVsId.put(t.Id, t.Name);
            }
            IdsVsNames.add(territoryVsId);
            List<CP_Contract__c> contrList = [SELECT Id, Name FROM CP_Contract__c ORDER BY Name];
            Map<Id, String> contractNameVsId = new Map<Id, String>();
            for(CP_Contract__c contr: contrList){
                contractNameVsId.put(contr.Id, contr.Name);
            }
            IdsVsNames.add(contractNameVsId);
            return IdsVsNames;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   /* @AuraEnabled(cacheable = true)
    public static Map<Id, String> getForecastingCurrencyForPOC(){
        try {
            List<CP_Forecast_Currency__c> currencyList = [SELECT Id, Name FROM CP_Forecast_Currency__c]; 
            Map<Id, String> currencyIdVsName = new Map<Id, String>();
            for(CP_Forecast_Currency__c curr: currencyList){
                currencyIdVsName.put(curr.Id, curr.Name);
            }
            return currencyIdVsName;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable = true)
    public static Map<Id, String> getProductsForPOC(){
        try {
            List<CP_Product_Type__c> prodList = [SELECT Id,Name FROM CP_Product_Type__c];
            Map<Id, String> IdVsProduct = new Map<Id, String>();
            for(CP_Product_Type__c p: prodList){
                IdVsProduct.put(p.Id, p.Name);
            }
            return IdVsProduct;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable = true)
    public static Map<Id, String> getRetailersForPOC(){
        try {
            List<Account> accList = [SELECT Id, Name, RecordType.Name FROM Account WHERE RecordType.Name = 'WBCP Retailer']; //Retailer
            Map<Id, String> accNameVsId = new Map<Id, String>();
            for(Account a: accList){
                accNameVsId.put(a.Id, a.Name);
            }
            return accNameVsId;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable = true)
    public static Map<Id, String> getPropertiesForPOC(){
        try {
            List<Property__c> propList = [SELECT Id,Name FROM Property__c];
            Map<Id, String> propNameVsId = new Map<Id, String>();
            for(Property__c p: propList){
                propNameVsId.put(p.Id, p.Name);
            }
            return propNameVsId;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable = true)
    public static Map<Id, String> getTerritoriesForPOC(){
        try {
            List<WBCP_Country__c> territoryList = [SELECT Id,Name FROM WBCP_Country__c];
            Map<Id, String> territoryVsId = new Map<Id, String>();
            for(WBCP_Country__c t: territoryList){
                territoryVsId.put(t.Id, t.Name);
            }
            return territoryVsId;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable = true)
    public static Map<Id, String> getContractsForPOC(){
        try {
            List<CP_Contract__c> contrList = [SELECT Id, Name FROM CP_Contract__c]; //Retailer
            Map<Id, String> contractNameVsId = new Map<Id, String>();
            for(CP_Contract__c contr: contrList){
                contractNameVsId.put(contr.Id, contr.Name);
            }
            return contractNameVsId;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }*/
    
    @AuraEnabled
    public static List<CP_Forecast_Item__c> createForecastingItemForPOC(String data, Id forecastId){
        List<CP_Forecast_Item__c> forecastingItemList = new List<CP_Forecast_Item__c>();
        List<Property__c> propList = [SELECT Id,Name FROM Property__c];
        Map<String, Id> propNameVsId = new Map<String, Id>();
        for(Property__c p: propList){
            propNameVsId.put(p.Name, p.Id);
        }
        List<Account> accList = [SELECT Id, Name, RecordType.Name FROM Account WHERE RecordType.Name = 'WBCP Retailer']; //Retailer
        Map<String, Id> accNameVsId = new Map<String, Id>();
        for(Account a: accList){
            accNameVsId.put(a.Name, a.Id);
        }
        List<CP_Contract__c> contrList = [SELECT Id, Name FROM CP_Contract__c]; //Retailer
        Map<String, Id> contractNameVsId = new Map<String, Id>();
        for(CP_Contract__c contr: contrList){
            contractNameVsId.put(contr.Name, contr.Id);
        }
        System.debug('###' + contrList);
        List<CP_Forecast_Currency__c> currencyList = [SELECT Id, Name FROM CP_Forecast_Currency__c]; //Retailer
        Map<String, Id> currencyNameVsId = new Map<String, Id>();
        for(CP_Forecast_Currency__c curr: currencyList){
            currencyNameVsId.put(curr.Name, curr.Id);
        }
        System.debug('###' + currencyNameVsId);
        List<CP_Product_Type__c> prodList = [SELECT Id,Name FROM CP_Product_Type__c];
        Map<String, Id> prodDescVsId = new Map<String, Id>();
        for(CP_Product_Type__c p: prodList){
            prodDescVsId.put(p.Name, p.Id);
        }
        List<WBCP_Country__c> territoryList = [SELECT Id,Name FROM WBCP_Country__c];
        Map<String, Id> territoryVsId = new Map<String, Id>();
        for(WBCP_Country__c t: territoryList){
            territoryVsId.put(t.Name, t.Id);
        }
        //System.debug(prodDescVsId.get());
        try {
            System.debug(JSON.deserializeUntyped(data));
            List<Object> JSONData = (List<Object>)JSON.deserializeUntyped(data);
            System.debug(JSONData);
            for(Object objData: JSONData){
                Map<String,Object> obj = (Map<String,Object>)objData;
                CP_Forecast_Item__c record = new CP_Forecast_Item__c();
                record.Forecast__c = (Id)obj.get(LABEL.CP_ForecastAPI);
                record.Royalty_Rate__c = (Decimal)obj.get(LABEL.CP_RoyaltyRateAPI);
                record.Revenue_Type__c = (String)obj.get(LABEL.CP_RevenueTypeAPI);
                record.Q1__c = (Decimal)obj.get(LABEL.CP_Q1);
                record.Q2__c = (Decimal)obj.get(LABEL.CP_Q2);
                record.Q3__c = (Decimal)obj.get(LABEl.CP_Q3);
                record.Q4__c = (Decimal)obj.get(LABEL.CP_Q4);
                record.CP_Territory__c = territoryVsId.get((String)obj.get('Territory'));
                record.CP_Contract__c = contractNameVsId.get((String)obj.get('Contract'));
                record.Forecast_Currency__c = currencyNameVsId.get((String)obj.get('ForecastCurrency'));
                record.Property__c = propNameVsId.get((String)obj.get('PropertyDescription'));
                record.Retailer__c = accNameVsId.get((String)obj.get('RetailerDescription'));
                record.CP_Product_Type__c = prodDescVsId.get((String)obj.get('ProductTypeDescription'));
                forecastingItemList.add(record);
            }
            System.debug(forecastingItemList);
            insert forecastingItemList;
            forecastingItemList = [
                SELECT Q1_Adj__c,Q2_Adj__c,Q3_Adj__c,Q4_Adj__c,CP_Territory__r.Name, Forecast__r.Forecast_Cycle__r.Status__c, CP_Contract__r.Name, Forecast_Currency__r.Name, Errors__c,Forecast__r.Forecast_Status__c,CP_Product_Type__r.Name, Name, Contract__c, CurrencyIsoCode, Forecast__r.CP_Territory__r.Name, Forecast__r.Amount_Type__c, Forecast__r.Forecast_Cycle__r.Forecast_Cycle_Name__c , Property__r.Name, Q1__c, Q2__c, Q3__c, Q4__c, Retailer__r.Name, Revenue_Type__c, Royalty_Rate__c, Total_Amount__c  FROM CP_Forecast_Item__c
                WHERE Forecast__c = :forecastId
            ];
            return forecastingItemList;        
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=false)
    public static List<CP_Forecast_Item__c> getForecastingItemsForPOC(Id recordId){
        List<CP_Forecast_Item__c> itemList = [
            SELECT Q1_Adj__c,Q2_Adj__c,Q3_Adj__c,Q4_Adj__c,CP_Territory__r.Name, Forecast__r.Forecast_Cycle__r.Status__c, CP_Contract__r.Name, Forecast_Currency__r.Name, Forecast__r.Forecast_Status__c,Errors__c,CP_Product_Type__r.Name, Name, Contract__c, CurrencyIsoCode, Forecast__r.CP_Territory__r.Name, Forecast__r.Amount_Type__c, Forecast__r.Forecast_Cycle__r.Forecast_Cycle_Name__c , Property__r.Name, Q1__c, Q2__c, Q3__c, Q4__c, Retailer__r.Name, Revenue_Type__c, Royalty_Rate__c, Total_Amount__c  FROM CP_Forecast_Item__c
            WHERE Forecast__c = :recordId
        ];
        return itemList;
    }
    @AuraEnabled(cacheable=true)
    public static String getProfile(){
        Id profileId= userinfo.getProfileId();
        String profileName=[Select Id,Name from Profile where Id=:profileId].Name;
        return profileName;
    }
    @AuraEnabled
    public static List<CP_Forecast_Item__c> deleteForecastingItemsForPOC(List<Id> recordIds, String data, Id forecastId){
        List<CP_Forecast_Item__c> forecastingItemList = new List<CP_Forecast_Item__c>();
        System.debug(recordIds);
        Set<Id> Ids = new Set<Id>(recordIds);
        List<CP_Forecast_Item__c> itemList = [
            SELECT Id 
            FROM CP_Forecast_Item__c
            WHERE Id IN :Ids
        ];
        List<CP_Forecast_Item__c> fItemList = new List<CP_Forecast_Item__c>();
        for(CP_Forecast_Item__c fItem : itemList){
            fItemList.add(fItem);
        }
        System.debug(fItemList);
        try {
            delete fItemList;
            if(data != 'onlyDelete'){ // Delete and Replace
                forecastingItemList = createForecastingItemForPOC(data, forecastId);
            }else{ //Delete selected records
                forecastingItemList = getForecastingItemsForPOC(forecastId);
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return forecastingItemList;
    }
    @AuraEnabled
    public static List<CP_Forecast_Item__c> updateForecastingItemForPOC(String data, Id forecastId){
        List<CP_Forecast_Item__c> forecastingItemList = new List<CP_Forecast_Item__c>();
        List<Property__c> propList = [SELECT Id,Name FROM Property__c];
        Map<String, Id> propNameVsId = new Map<String, Id>();
        for(Property__c p: propList){
            propNameVsId.put(p.Name, p.Id);
        }
        List<Account> accList = [SELECT Id, Name, RecordType.Name FROM Account WHERE RecordType.Name = 'WBCP Retailer']; //Retailer
        Map<String, Id> accNameVsId = new Map<String, Id>();
        for(Account a: accList){
            accNameVsId.put(a.Name, a.Id);
        }
        List<CP_Contract__c> contrList = [SELECT Id, Name FROM CP_Contract__c]; //Retailer
        Map<String, Id> contractNameVsId = new Map<String, Id>();
        for(CP_Contract__c contr: contrList){
            contractNameVsId.put(contr.Name, contr.Id);
        }
        List<CP_Forecast_Currency__c> currencyList = [SELECT Id, Name FROM CP_Forecast_Currency__c]; //Retailer
        Map<String, Id> currencyNameVsId = new Map<String, Id>();
        for(CP_Forecast_Currency__c curr: currencyList){
            currencyNameVsId.put(curr.Name, curr.Id);
        }
        List<CP_Product_Type__c> prodList = [SELECT Id,Name FROM CP_Product_Type__c];
        Map<String, Id> prodDescVsId = new Map<String, Id>();
        for(CP_Product_Type__c p: prodList){
            prodDescVsId.put(p.Name, p.Id);
        }
        List<WBCP_Country__c> territoryList = [SELECT Id,Name FROM WBCP_Country__c];
        Map<String, Id> territoryVsId = new Map<String, Id>();
        for(WBCP_Country__c t: territoryList){
            territoryVsId.put(t.Name, t.Id);
        }
        List<Object> JSONData = (List<Object>)JSON.deserializeUntyped(data);
        for(Object objData: JSONData){
            Map<String,Object> obj = (Map<String,Object>)objData;
            CP_Forecast_Item__c record = new CP_Forecast_Item__c();
            record.Id = (Id)obj.get('Id');
            if((Decimal)obj.get(LABEL.CP_RoyaltyRateAPI) != null)
                record.Royalty_Rate__c = (Decimal)obj.get(LABEL.CP_RoyaltyRateAPI);
            if((String)obj.get(LABEL.CP_RevenueTypeAPI) != null)
                record.Revenue_Type__c = (String)obj.get(LABEL.CP_RevenueTypeAPI);
            if((Decimal)obj.get(LABEL.CP_Q1) != null)
                record.Q1__c = (Decimal)obj.get(LABEL.CP_Q1);
            if((Decimal)obj.get(LABEL.CP_Q2) != null)
                record.Q2__c = (Decimal)obj.get(LABEL.CP_Q2);
            if((Decimal)obj.get(LABEL.CP_Q3) != null)
                record.Q3__c = (Decimal)obj.get(LABEL.CP_Q3);
            if((Decimal)obj.get(LABEL.CP_Q4) != null)
                record.Q4__c = (Decimal)obj.get(LABEL.CP_Q4);
            if((Decimal)obj.get('Q1_Adj__c') != null)
                record.Q1_Adj__c = (Decimal)obj.get('Q1_Adj__c');
            if((Decimal)obj.get('Q2_Adj__c') != null)
                record.Q2_Adj__c = (Decimal)obj.get('Q2_Adj__c');
            if((Decimal)obj.get('Q3_Adj__c') != null)
                record.Q3_Adj__c = (Decimal)obj.get('Q3_Adj__c');
            if((Decimal)obj.get('Q4_Adj__c') != null)
                record.Q4_Adj__c = (Decimal)obj.get('Q4_Adj__c');
            if((String)obj.get('Territory') != null)
                record.CP_Territory__c = territoryVsId.get((String)obj.get('Territory'));
            if((String)obj.get('Contract') != null)
                record.CP_Contract__c = contractNameVsId.get((String)obj.get('Contract'));
            if((String)obj.get('ForecastCurrency') != null)
                record.Forecast_Currency__c = currencyNameVsId.get((String)obj.get('ForecastCurrency'));
            if((String)obj.get('PropertyDescription') != null)
                record.Property__c = propNameVsId.get((String)obj.get('PropertyDescription'));
            if((String)obj.get('RetailerDescription') != null)
                record.Retailer__c = accNameVsId.get((String)obj.get('RetailerDescription'));
            if((String)obj.get('ProductTypeDescription') != null)
                record.CP_Product_Type__c = prodDescVsId.get((String)obj.get('ProductTypeDescription'));
            forecastingItemList.add(record);
        }
        System.debug(forecastingItemList);
        update forecastingItemList;
        forecastingItemList = [
            SELECT Q1_Adj__c,Q2_Adj__c,Q3_Adj__c,Q4_Adj__c,CP_Territory__r.Name, Forecast__r.Forecast_Cycle__r.Status__c, CP_Contract__r.Name, Forecast_Currency__r.Name, Forecast__r.Forecast_Status__c,Errors__c,CP_Product_Type__r.Name, Name, Contract__c, CurrencyIsoCode, Forecast__r.CP_Territory__r.Name, Forecast__r.Amount_Type__c, Forecast__r.Forecast_Cycle__r.Forecast_Cycle_Name__c , Property__r.Name, Q1__c, Q2__c, Q3__c, Q4__c, Retailer__r.Name, Revenue_Type__c, Royalty_Rate__c, Total_Amount__c  FROM CP_Forecast_Item__c
            WHERE Forecast__c = :forecastId
        ];
        return forecastingItemList;        
    }
    @AuraEnabled
    public static void showGridErrorValidationUpdate(List<CP_Forecast_Item__c> forecastingItemList){
        if(CP_CheckRecursive.runOnce()){
            System.debug('Inside showGridErrorValidation UPDATE' );
            String ErrorMessage = '';
            List<CP_Forecast_Item__c> fcItemListForDupCheck = new List<CP_Forecast_Item__c>();
            for(CP_Forecast_Item__c fi : forecastingItemList){
                System.debug('CP_Contract__c' + fi.CP_Contract__c);
                System.debug('Property__c' + fi.Property__c);
                System.debug('CP_Product_Type__c' + fi.CP_Product_Type__c);
                System.debug('CP_Territory__c' + fi.CP_Territory__c);
                System.debug('Retailer__c' + fi.Retailer__c);
                ErrorMessage = '';
                if(fi.CP_Territory__c == null){
                    ErrorMessage = ErrorMessage + 'Territory, ';
                }
                if(fi.Forecast_Currency__c == null){
                    ErrorMessage = ErrorMessage + 'Forecast Currency, '; 
                }
                if(fi.CP_Contract__c == null){
                    ErrorMessage = ErrorMessage + 'Contract Number, '; 
                }
                if(fi.Property__c == null){
                    ErrorMessage = ErrorMessage + 'Property, ';
                }
                if(fi.CP_Product_Type__c == null){
                    ErrorMessage = ErrorMessage + 'Product Type, ';
                }
                if(fi.Retailer__c == null){
                    ErrorMEssage = ErrorMessage + 'Retailer, ';
                }
                if(fi.Revenue_Type__c == null){
                    ErrorMessage = ErrorMessage + 'Revenue Type, ';
                }
                if(fi.Royalty_Rate__c == 0){
                    ErrorMessage = ErrorMessage + 'Royalty Rate, ';
                }
                if(ErrorMessage != '' ){
                    fi.Errors__c = ErrorMessage + ' not populated.';
                }
                else{
                    fi.Errors__c = '' ;
                    fcItemListForDupCheck.add(fi);
                }
                System.debug('#' + ErrorMessage);
                System.debug('#' + fi.Errors__c);
                System.debug('#' + fi);
            }
            System.debug(fcItemListForDupCheck);
            if(fcItemListForDupCheck.size() > 0){
                List<CP_Forecast_Item__c> fcItemListFromDupCheck = checkDuplicateRecord(fcItemListForDupCheck);
                System.debug('fcItemListFromDupCheck:'+fcItemListFromDupCheck);
                for(CP_Forecast_Item__c fi : forecastingItemList){
                    for(CP_Forecast_Item__c fiDup : fcItemListFromDupCheck){
                        if(fiDup.Id == fi.Id){
                            fi.Errors__c = fiDup.Errors__c;
                            break;
                        }
                    }
                }
            }
            System.debug('Inside update ErrorMessage'+ErrorMessage);
        }
        
    }
    /*
.  Validate the below fields are populated:

Contract Number
Property
Product Type
Territory
Retailer
Revenue Type
Amount Type
Royalty Rate
Forecast Currency
*/
    @AuraEnabled
    public static void showGridErrorValidationInsert(List<CP_Forecast_Item__c> forecastingItemList){
        System.debug('@#$ INSERT' + CP_CheckRecursive.runOnce());
        System.debug('Inside showGridErrorValidation INSERT' );
        String ErrorMessage = '';
        List<Id> fItemIds = new List<Id>();
        for(CP_Forecast_Item__c fi : forecastingItemList){
            fItemIds.add(fi.Id);
        }
        List<CP_Forecast_Item__c> fItemList = [SELECT Id, Errors__c, Revenue_Type__c,Royalty_Rate__c,Forecast__c, Forecast_Currency__c, CP_Contract__c, CP_Territory__c, CP_Product_Type__c, Property__c,Retailer__c  
                                               FROM CP_Forecast_Item__c
                                               WHERE Id IN :fItemIds
                                              ];
        List<CP_Forecast_Item__c> fcItemListForDupCheck = new List<CP_Forecast_Item__c>();
        for(CP_Forecast_Item__c fi : fItemList){
            ErrorMessage = '';
            if(fi.CP_Territory__c == null){
                ErrorMessage = ErrorMessage + 'Territory, ';
            }
            if(fi.Forecast_Currency__c == null){
                ErrorMessage = ErrorMessage + 'Forecast Currency, '; 
            }
            if(fi.CP_Contract__c == null){
                ErrorMessage = ErrorMessage + 'Contract Number, '; 
            }
            if(fi.Property__c == null){
                ErrorMessage = ErrorMessage + 'Property, ';
            }
            if(fi.CP_Product_Type__c == null){
                ErrorMessage = ErrorMessage + 'Product Type, ';
            }
            if(fi.Retailer__c == null){
                ErrorMEssage = ErrorMessage + 'Retailer, ';
            }
            if(fi.Revenue_Type__c == null){
                ErrorMessage = ErrorMessage + 'Revenue Type, ';
            }
            if(fi.Royalty_Rate__c == 0){
                ErrorMessage = ErrorMessage + 'Royalty Rate, ';
            }
            if(ErrorMessage != '' ){
                fi.Errors__c = ErrorMessage + ' not populated.';
            }
            else{
                fi.Errors__c = '' ;
                fcItemListForDupCheck.add(fi);
            }
            System.debug('#' + ErrorMessage);
            System.debug('#' + fi.Errors__c);
            System.debug('#' + fi);
        }
        update fItemList;
        if(fcItemListForDupCheck.size() > 0){
            List<CP_Forecast_Item__c> fcItemListFromDupCheck = checkDuplicateRecord(fcItemListForDupCheck);
            System.debug('fcItemListFromDupCheck:'+fcItemListFromDupCheck);
            update fcItemListFromDupCheck;
        }
        System.debug('Inside insert ErrorMessage'+ErrorMessage);
        
    }
    /*Validate that there are no duplicate rows based on:
Contract Number - Id1
Property -Id2
Product Type - Id3
Territory - id4
Retailer - id5
Record1 - Id1....id5 - unique Id
Record2 - Id1....id5.
map<string, listt<Id>>
*/
    Public static List<CP_Forecast_Item__c>  checkDuplicateRecord(List<CP_Forecast_Item__c> newForecastingItem){
        System.debug('Inside check duplicate');
        List<Id> IdsExistingList = new List<Id>();
        for(CP_Forecast_Item__c fi: newForecastingItem){
            IdsExistingList.add(fi.Id);
        }
        Map<String, List<Id>> duplicateCheck = new Map<String, List<Id>>();
        Map<Id, String> fItemIdVsError = new Map<Id, String>();
        Map<Id,Id> fItemIdVsForecastId = new Map<Id,Id>();
        List<CP_Forecast_Item__c> fItemsUpdate = new List<CP_Forecast_Item__c>();
        System.debug('Creating map of existing...');
        for (CP_Forecast_Item__c[] fItemsBatch : [SELECT Id,Errors__c,Forecast__c,CP_Contract__c, CP_Territory__c, CP_Product_Type__c, Property__c,Retailer__c  FROM CP_Forecast_Item__c  WHERE Forecast__c = :newForecastingItem[0].Forecast__c AND Id NOT IN :IdsExistingList]) {
            for(CP_Forecast_Item__c fItem : fItemsBatch){
                String key = '' + fItem.CP_Contract__c + fItem.Property__c + fItem.CP_Product_Type__c + fItem.CP_Territory__c + fItem.Retailer__c;
                System.debug('CP_Contract__c' + fItem.CP_Contract__c);
                System.debug('Property__c' + fItem.Property__c);
                System.debug('CP_Product_Type__c' + fItem.CP_Product_Type__c);
                System.debug('CP_Territory__c' + fItem.CP_Territory__c);
                System.debug('Retailer__c' + fItem.Retailer__c);
                System.debug('Unique Id:' + key);
                if(!duplicateCheck.containsKey(key)){
                    List<Id> duplicateIds = new List<Id>();
                    duplicateIds.add(fItem.Id);
                    duplicateCheck.put(key, duplicateIds);
                    System.debug('Non Duplicate');
                }
                else{
                    List<Id> duplicateIds = duplicateCheck.get(key);
                    duplicateIds.add(fItem.Id);
                    duplicateCheck.put(key, duplicateIds);
                    fItemIdVsError.put(fItem.Id, 'Duplicate');
                    //fItemIdVsError.put(fItem.Id, 'Duplicate with ' + (String)duplicateIds[0]);
                    fItemIdVsForecastId.put(fItem.Id,fItem.Forecast__c);
                    System.debug('Duplicate Found');
                    System.debug('fItemIdVsError:'+fItemIdVsError);
                }
            }
        }
        for(CP_Forecast_Item__c fItem : newForecastingItem){
            String key = '' + fItem.CP_Contract__c + fItem.Property__c + fItem.CP_Product_Type__c + fItem.CP_Territory__c + fItem.Retailer__c;
            System.debug('CP_Contract__c' + fItem.CP_Contract__c);
            System.debug('Property__c' + fItem.Property__c);
            System.debug('CP_Product_Type__c' + fItem.CP_Product_Type__c);
            System.debug('CP_Territory__c' + fItem.CP_Territory__c);
            System.debug('Retailer__c' + fItem.Retailer__c);
            System.debug('Unique Id:' + key);
            if(!duplicateCheck.containsKey(key)){
                List<Id> duplicateIds = new List<Id>();
                duplicateIds.add(fItem.Id);
                duplicateCheck.put(key, duplicateIds);
                System.debug('Non Duplicate');
            }
            else{
                List<Id> duplicateIds = duplicateCheck.get(key);
                duplicateIds.add(fItem.Id);
                duplicateCheck.put(key, duplicateIds);
                fItemIdVsError.put(fItem.Id, 'Duplicate');
                //fItemIdVsError.put(fItem.Id, 'Duplicate with ' + (String)duplicateIds[0]);
                fItemIdVsForecastId.put(fItem.Id,fItem.Forecast__c);
                System.debug('Duplicate Found');
                System.debug('fItemIdVsError:'+fItemIdVsError);
            }
        }
        System.debug('Records:' + fItemIdVsError);
        for(Id key: fItemIdVsError.keyset()){
            CP_Forecast_Item__c fcItem = new CP_Forecast_Item__c();
            fcItem.id=key;
            System.debug('errors:'+fItemIdVsError.get(key));
            fcItem.Errors__c=fItemIdVsError.get(key);
            // fcItem.Forecast__c=fItemIdVsForecastId.get(key);
            fItemsUpdate.add(fcItem);
        }
        System.debug('fItemsUpdate:'+fItemsUpdate);
        return fItemsUpdate;
    }
    
    public static void populateForecastAdjustment(List<CP_Forecast_Item__c> forecastItems){
        Set<Id> idlist = new Set<Id>();
        for(CP_Forecast_Item__c fi : forecastItems ){
            idlist.add(fi.Id);
        }
        List<CP_Forecast_Item__c> forecastList = [SELECT Id,Q1__c,Q2__c,Q3__c,Q4__c,Q1_Adj__c,Q2_Adj__c,Q3_Adj__c,Q4_Adj__c FROM CP_Forecast_Item__c WHERE Id IN:idlist];
        for(CP_Forecast_Item__c flist :  forecastList){
            if(flist.Q1_Adj__c == null){ 
                flist.Q1_Adj__c = flist.Q1__c;
            }
            if(flist.Q2_Adj__c == null){
                flist.Q2_Adj__c = flist.Q2__c;
            }
            if(flist.Q3_Adj__c == null){
                flist.Q3_Adj__c = flist.Q3__c;
            }
            if(flist.Q4_Adj__c == null){
                flist.Q4_Adj__c = flist.Q4__c;
            }    
        }
        update forecastList;
    }
}