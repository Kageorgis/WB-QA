/*******************************************************************************************************************************************
* File Name     :   WB_AddAttendeesCtrl_Test
* Description   :   Test class for WB_AddAttendeesCtrl
* @author       :   CTS
* Modification Log
===================================================================================================
* Ver.    Date              Author              Modification
---------------------------------------------------------------------------------------------------
* 1.0     21 July.2021      CTS                 Created the Test Class.
********************************************************************************************************************************************/
@isTest 
public class WB_AddAttendeesCtrl_Test{

    @testSetup
    static void setupTestData(){ 
        List<Account> brands = new List<Account>();
        Id rtypeId = Schema.SObjectType.Account.getRecordTypeInfosByDeveloperName().get('Brand_CRM').getRecordTypeId();
        for(integer i=0;i<2;i++){
            Account brand = new Account();
            brand.Name = 'Test_Brnad_'+i;
            brand.RecordTypeId = rtypeId;
            brands.add(brand);
        }
        insert brands;
        
        List<Contact> contacts = new List<Contact>();
        Id conRtypeId = Schema.SObjectType.Contact.getRecordTypeInfosByDeveloperName().get('Brand_CRM').getRecordTypeId();
        for(integer i=0;i<5;i++){
            Contact con = new Contact();
            con.FirstName = 'Test';
            con.LastName = 'Con '+i;
            con.RecordTypeId = conRtypeId;
            con.Email = 'test_Con_'+i+'@test.com';
            con.AccountID = brands[0].Id;
            contacts.add(con);
        }
        insert contacts;
        
        Brand_Engagement_Project__c BEP = new Brand_Engagement_Project__c();
        BEP.Name = 'Test BEP';
        insert BEP;
        
        Brand_Engagement__c BO = new Brand_Engagement__c();
        BO.Brand__c = brands[1].Id;
        BO.Privacy_and_Data_Strategy_Project__c = BEP.Id;
        BO.Status__c = 'In Progress';
        insert BO;
        
        List<Brand_Contact__c> BCList = new List<Brand_Contact__c>();
        for(Contact con : contacts){
            Brand_Contact__c bcon = new Brand_Contact__c();
            bcon.Account__c = brands[1].Id;
            bcon.Contact__c = con.Id;
            bcon.Role__c = 'Stakeholder';
            BCList.add(bcon);
        }
        insert BCList;
    }
    
    static testMethod void AddAttendees_Test() {
        List<Brand_Engagement__c> BEList = [Select Id from Brand_Engagement__c];
        WB_AddAttendeesCtrl.BrandConMainWrap bcw = WB_AddAttendeesCtrl.getBrandContacts(BEList[0].Id);
        system.assertEquals(bcw.BCWList.size(),5);
        
        WB_AddAttendeesCtrl.addAttendeesToBE(bcw.BCWList,BEList[0].Id);
        system.assertEquals([Select count() From Attendees__c],5,'Attendees gets added to Brnad Outreach');
    }
}