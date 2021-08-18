/******* 
WBCP_ContractProductTrigger_Test
Creation Date- 22 July 2021
Description- This class is to do code coverage for WBCP_ContractProductTrigger
Author- Nilesh Jha
*******/
@isTest
public class WBCP_ContractProductTrigger_Test {
    static testMethod void ProductTest(){
        Test.startTest();
        string RecTypeid=Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Licensee').getRecordTypeId();
        String licenseeRecTypeId = CP_ProductUtility.getRecordTypeId(CP_Contract__c.getSobjectType(),'WBCP Contracts'); 
        Id retRecTypeid = Schema.SObjectType.Account.getRecordTypeInfosByName().get('WBCP Retailer').getRecordTypeId();
        
        Account acct= new Account(Name='test Account');
        acct.RecordTypeId=RecTypeid;
        acct.cp_Licensee_Code__c='10001';
        insert acct;
        
         Account retailerAcc = (Account)TestDataFactory.createSObject('Account', new Map<String,Object>{
        	'RecordTypeId' => retRecTypeid
        });
        
        
        
        CP_Contract__c contract = new CP_Contract__c(Name='TEST',Contract_No__c='10001');
        contract.RecordTypeId=licenseeRecTypeId;
        insert contract;
        
        WBCP_Country__c countryRecord = (WBCP_Country__c)TestDataFactory.createSObject('WBCP_Country__c',new Map<String,object>{
            'Name' => 'United States'
                });
        
        CP_Product__c prodRec =  (CP_Product__c)TestDataFactory.createSObject('CP_Product__c', new Map<String,Object>{
            'Licensee__c' => acct.Id,
                'WBCP_Country__c' => countryRecord.Id,
                'GTIN__c' => '024054817896',
                'MPN__c' => '8875823',
                'cp_Retailer_Description__c' => retailerAcc.Id,
                'Retailer_SKU__c' => '567021036',
                'Product_Detail_Code__c' =>'1014',
                'Sub_Category__c' => 'Vehicles / Remote Control'
                }); 
        
             Contract_Product__c contractProduct = new Contract_Product__c(Name='CP-01',Contract_No__c='10001',Product_Detail__c='1014');
             insert contractProduct;
        
        Test.stopTest(); 
    }
}