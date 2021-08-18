global class WBCP_Batch_AssignParentLicensee implements Database.Batchable<sObject>,Schedulable{

    global String SchedulerName;
    global String query = '';

    global WBCP_Batch_AssignParentLicensee(string Scheduler){
        SchedulerName = Scheduler;
    }

    global void execute(SchedulableContext sc)
    {
        WBCP_Batch_AssignParentLicensee wb = new WBCP_Batch_AssignParentLicensee(SchedulerName);
       database.executebatch(wb,1);
    }

    global WBCP_Batch_AssignParentLicensee(){
        
    }

    global Database.QueryLocator start(Database.BatchableContext BC){
       query = 'SELECT Id,Name,Parent_Licensee_Name__c,Parent_Code__c,Parent.Id,Set_Parent_Licensee__c,RecordTypeId FROM Account WHERE Set_Parent_Licensee__c = True';
       return Database.getQueryLocator(query);
    }

    global void execute(Database.BatchableContext BC, List<Account> scope){

        system.debug(LoggingLevel.INFO,'scope:'+scope);
        List<Account> licenseeListToUpdate = new List<Account>();
        if(scope != Null && scope.size()>0){
            licenseeListToUpdate = WBCP_ParentChildLicenseeHandler.handleLicenseeInsert(scope,CP_ProductUtility.WBCP_BATCH,Null);
            system.debug(LoggingLevel.INFO,'licenseeListToUpdate:'+licenseeListToUpdate);
            if(licenseeListToUpdate != Null && licenseeListToUpdate.size()>0){
                Database.SaveResult[] saveResultList = Database.update(licenseeListToUpdate,false);
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
        }
    }

    global void finish(Database.BatchableContext BC){
    }
}