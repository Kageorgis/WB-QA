/*========================================================================================================================
* @author Ajit Singh
* @date 02/07/2021
* @description: Trigger handler class for ContentDoc which implements all the trigger events like insert,update,delete
==========================================================================================================================*/
public class CP_ContentDocTriggerHandler implements CP_TriggerInterface{
    
    public void BeforeInsert(List<ContentDocumentLink> newItems) { 
        
       /* Try{
            system.debug('-->Inside CP_ContentDocTriggerHandler BeforeInsert');
            
        }Catch(System.Exception ex){
            
            
        }*/
        
    }
    
    public void BeforeUpdate(Map<Id, SObject> newItems, Map<Id, SObject> oldItems) { 
        Try{
            system.debug('Inside BeforeUpdate');
            
            
        }Catch(System.Exception ex){
            
            
        }
    }
    
    public void BeforeDelete(List<sObject> oldRecordsList , Map<Id, SObject> oldItems) {
            /*  Try{
    system.debug('Inside BeforeDelete');
    
    
    }Catch(System.Exception ex){
    
    
    }*/
        
        
    }
    
    public void AfterInsert(List<sObject> newRecordsList , Map<Id, sObject> newItems) {
        Try{
            System.debug('AfterInsert:');
            CP_ContentDocTriggerHelper.uploadFilesToForecast(newRecordsList,newItems);
            
        }Catch(System.Exception ex){
        }
        
    }
    
    public void AfterUpdate(Map<Id, SObject> newItems, Map<Id, SObject> oldItems) {
       /* Try{
            
            SYSTEM.debug('AfterUpdate');
            
            
        }Catch(System.Exception ex){}*/
    }
    
    // public void AfterDelete(Map<Id, SObject> oldItems) {}
    
    // public void AfterUndelete(List<sObject> newRecordsList , Map<Id, sObject> newItems) {}
    
}