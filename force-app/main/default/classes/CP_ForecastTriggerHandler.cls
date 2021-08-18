/*========================================================================================================================
* @author: Ajit Singh
* @date: 07/07/2021
* @description: Trigger handler class for Forecast which implements all the trigger events like insert,update,delete
==========================================================================================================================*/
public class CP_ForecastTriggerHandler implements CP_TriggerInterface{
    
    public void BeforeInsert(List<CP_Forecast__c> newItems) { 
        
        Try{
            system.debug('-->Inside BeforeInsert');
            CP_ForecastTriggerHelper.preventForecastInsert(newItems);
            //CP_ForecastTriggerHelper.addVersionToForecast(newItems);
         }Catch(System.Exception ex){
  
        }
   }
    
    public void BeforeUpdate(Map<Id, sObject> newRecordsMap, Map<Id, sObject> oldRecordsMap) { 
        Try{
            system.debug('Inside BeforeUpdate');
            CP_ForecastTriggerHelper.closeForecast(newRecordsMap,oldRecordsMap);
            CP_ForecastTriggerHelper.updateStatustToDraft(newRecordsMap,oldRecordsMap);
            CP_ForecastTriggerHelper.sendEmailToForecastOwner(newRecordsMap,oldRecordsMap);
            //CP_ForecastTriggerHelper.cloneNewVersionForecast(newRecordsMap,oldRecordsMap);
            //CP_ForecastTriggerHelper.sendEmailToLicensees();
            
 		   }Catch(System.Exception ex){
              
	       }
    }
    
    public void BeforeDelete(List<sObject> oldRecordsList , Map<Id, SObject> oldItems) {
       /* Try{
            system.debug('Inside BeforeDelete');            
        }Catch(System.Exception ex){      
        }*/
        
        
    }
    
    public void AfterInsert(List<sObject> newRecordsList , Map<Id, sObject> newItems) {
        Try{
            System.debug('AfterInsert:');
            CP_ForecastTriggerHelper.updateOwnerOnForecast(newRecordsList,newItems);
            CP_ForecastTriggerHelper.shareForecastRecordWithAgent(newRecordsList,newItems);
            
        }Catch(System.Exception ex){
        }
        
    }
    
   public void AfterUpdate(Map<Id, SObject> newItems, Map<Id, SObject> oldItems) {
        Try{
            
            SYSTEM.debug('AfterUpdate');
            //CP_ForecastTriggerHelper.massApproveForecast(newItems,oldItems);
               CP_ForecastTriggerHelper.cloneNewVersionForecast(newItems,oldItems);
               
        }Catch(System.Exception ex){

		}
    }
    
    // public void AfterDelete(Map<Id, SObject> oldItems) {}
    
    // public void AfterUndelete(List<sObject> newRecordsList , Map<Id, sObject> newItems) {}
    
}