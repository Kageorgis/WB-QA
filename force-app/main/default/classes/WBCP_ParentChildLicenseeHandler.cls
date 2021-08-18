/*
   @Author: Tejasvini Telangi
   @name WBCP_ParentChildLicenseeHandler
   @CreateDate 25 May 2021
   @Description: Apex Class to handle logic for ER-006607 - Parent & Child Global Roll-Out.
   @Version 52
  */
public with sharing class WBCP_ParentChildLicenseeHandler {
   
    public static List<Account> handleLicenseeInsert(List<Account> newAccountList,String operation,Map<Id,Account> oldMap){

        Set<String> parentCodeSet = new Set<String>();
        List<Account> parentAccountList = new List<Account>();
        Map<String,Account> parentAccountMap = new Map<String,Account>();
        String licenseeRecTypeId = CP_ProductUtility.getRecordTypeId(Account.getSobjectType(),CP_ProductUtility.WBCP_LICENSEE); 
        String parentLicenseeRecTypeId = CP_ProductUtility.getRecordTypeId(Account.getSobjectType(),CP_ProductUtility.WBCP_PARENT_LICENSEE);
        Set<Account> parentAccountToInsertSet = new Set<Account>();
        List<Account> parentAccountListToInsert = new List<Account>();
        List<Account> updateLicenseeRecords = new List<Account>();
        Set<Account> parentAccountToUpdateSet = new Set<Account>();
        List<Account> parentAccountListToUpdate = new List<Account>();
        
        for(Account accRec : newAccountList){

            //Check if RecordType is WBCP Licensee and Parent Code is not Null
            if(accRec.RecordTypeId == licenseeRecTypeId && accRec.Parent_Code__c != Null){
                parentCodeSet.add(accRec.Parent_Code__c);
            }
        }

        if(parentCodeSet != Null && parentCodeSet.size()>0){
            parentAccountList = [SELECT Id,Parent_Code__c,Name From Account WHERE Parent_Code__c IN : parentCodeSet AND RecordTypeId =: parentLicenseeRecTypeId];
            for(Account parentAccRec : parentAccountList){
                parentAccountMap.put(parentAccRec.Parent_Code__c,parentAccRec);
            }
            
            Account newParentAccount;
            for(Account accRec : newAccountList){
                if(accRec.RecordTypeId == licenseeRecTypeId && accRec.Parent_Code__c != Null){
                    if(parentAccountMap != Null && parentAccountMap.containsKey(accRec.Parent_Code__c)){
                        accRec.ParentId = parentAccountMap.get(accRec.Parent_Code__c).Id;
                        if(parentAccountMap.get(accRec.Parent_Code__c).Name != accRec.Parent_Licensee_Name__c){
                            parentAccountMap.get(accRec.Parent_Code__c).Name = accRec.Parent_Licensee_Name__c;
                            parentAccountToUpdateSet.add(parentAccountMap.get(accRec.Parent_Code__c));
                        }
                        
                        if(operation == CP_ProductUtility.WBCP_BATCH && accRec.Set_Parent_Licensee__c){
                            accRec.Set_Parent_Licensee__c = false;
                            updateLicenseeRecords.add(accRec);
                        }
                    }
                    if((parentAccountMap != Null && !parentAccountMap.containsKey(accRec.Parent_Code__c)) || parentAccountMap.size() == 0){
                        newParentAccount = new Account();
                        newParentAccount.RecordTypeId = parentLicenseeRecTypeId;
                        newParentAccount.Parent_Code__c = accRec.Parent_Code__c;
                        newParentAccount.Name = accRec.Parent_Licensee_Name__c;
                        parentAccountToInsertSet.add(newParentAccount);

                        accRec.Set_Parent_Licensee__c = true;
                    }
                }
            }
        }

        if(parentAccountToInsertSet != Null && parentAccountToInsertSet.size()>0){
            parentAccountListToInsert.addAll(parentAccountToInsertSet);
            Database.SaveResult[] saveResultList = Database.insert(parentAccountListToInsert,false);
            Integer i=0;
            // Process the save results
            for(Database.SaveResult sr : saveResultList){
                if(!sr.isSuccess()){
                    Database.Error err = sr.getErrors()[0];
                    system.debug(LoggingLevel.INFO,'Error in Parent Child Licensee:'+err);
                }
                i++;
            }
        }

        if(parentAccountToUpdateSet != Null && parentAccountToUpdateSet.size()>0){
            parentAccountListToUpdate.addAll(parentAccountToUpdateSet);
            Database.SaveResult[] saveResultList = Database.update(parentAccountListToUpdate,false);
            Integer i=0;
            // Process the save results
            for(Database.SaveResult sr : saveResultList){
                if(!sr.isSuccess()){
                    Database.Error err = sr.getErrors()[0];
                    system.debug(LoggingLevel.INFO,'Error in Parent Child Licensee Update:'+err);
                }
                i++;
            }
        }

        if(operation == CP_ProductUtility.WBCP_BATCH && updateLicenseeRecords != Null && updateLicenseeRecords.size()>0){
            return updateLicenseeRecords;
        }else
            return Null;
    }

    public static void updateLicenseeParentSchedule(List<Account> newAccountList){
        String licenseeRecTypeId = CP_ProductUtility.getRecordTypeId(Account.getSobjectType(),CP_ProductUtility.WBCP_LICENSEE);
        Boolean scheduleBatch = false;

        if(newAccountList != Null && newAccountList.size()>0){
            for(Account accRec:newAccountList){
                if(accRec.RecordTypeId == licenseeRecTypeId && accRec.Set_Parent_Licensee__c){
                    scheduleBatch = true;
                    break;
                }
            }
        }

        if(scheduleBatch){
            Datetime ScheduleTime = system.now().addSeconds(40);
            String cronExp = ScheduleTime.second()+' '+ScheduleTime.minute()+' '+ScheduleTime.hour()+' '+ScheduleTime.day()+' '+ScheduleTime.month()+' ? '+ScheduleTime.year();
            String SchedulerName = 'WBCP Batch Assign Parent'  +system.now() + ' ' + system.now().millisecond() ;
            if(!Test.isRunningTest())
                System.schedule(SchedulerName, cronExp, new WBCP_Batch_AssignParentLicensee(SchedulerName));
        }
    }
}