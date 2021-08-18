@isTest(SeeAllData=false)
public with sharing class WBCP_ParentChildLicenseeHandlerTest {
    public static testmethod void insertLicenseeRecord() {
        String licenseeRecTypeId = CP_ProductUtility.getRecordTypeId(Account.getSobjectType(),CP_ProductUtility.WBCP_LICENSEE); 
        String parentLicenseeRecTypeId = CP_ProductUtility.getRecordTypeId(Account.getSobjectType(),'WBCP Parent Licensee'); //add label in CP Product Utility
        List<Account> accountListToInsert = new List<Account>();

        for(Integer i=0; i < 5 ; i++){
            Account accRec = new Account();
            accRec.RecordTypeId = licenseeRecTypeId;
            accRec.Name = 'Test WBCP Account'+i;
            accRec.Clean_Licensee_Name__c = 'Group'+accRec.Name+i;
            accRec.cp_Licensee_Code__c = '000001234'+i;
            accRec.Parent_Code__c = '000012346'+i;
            accRec.Parent_Licensee_Name__c = 'AT&T'+i;
            accountListToInsert.add(accRec);
        }

        test.startTest();
        insert accountListToInsert;

        accountListToInsert[0].Parent_Code__c = '0000123468';
        accountListToInsert[0].Parent_Licensee_Name__c = 'AT&T8';
        update accountListToInsert[0];
       
        Account parentLicensee = [SELECT Id,Parent_Code__c FROM Account WHERE Parent_Code__c = '0000123468' AND RecordTypeId =: parentLicenseeRecTypeId LIMIT 1];
        Account accRec = new Account();
        accRec.RecordTypeId = licenseeRecTypeId;
        accRec.Name = 'Test WBCP Account Walmart';
        accRec.Clean_Licensee_Name__c = 'Group'+accRec.Name;
        accRec.cp_Licensee_Code__c = '000001234101';
        accRec.Parent_Code__c = parentLicensee.Parent_Code__c;
        accRec.Parent_Licensee_Name__c = 'AT&T Walmart';
        accRec.Set_Parent_Licensee__c = true;
        
        insert accRec;

        accRec.Parent_Code__c = parentLicensee.Parent_Code__c;
        accRec.Parent_Licensee_Name__c = 'AT&T Walmart';
        accRec.Clean_Licensee_Name__c = 'Group AT&T LTD';
        update accRec;

        test.stopTest();
    }
}