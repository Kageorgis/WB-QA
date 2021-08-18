@isTest(SeeAllData=false)
public with sharing class WBCP_Batch_AssignParentLicenseeTest {
    public static testmethod void batchMethodTest(){

        test.startTest();
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
            accRec.Set_Parent_Licensee__c = true;
            accountListToInsert.add(accRec);
        }

        insert accountListToInsert;
        string Scheduler;
        WBCP_Batch_AssignParentLicensee wb2 = new WBCP_Batch_AssignParentLicensee(Scheduler);

        WBCP_Batch_AssignParentLicensee wb = new WBCP_Batch_AssignParentLicensee();
        Database.executebatch(wb);

        test.stopTest();
    }
}