/*========================================================================================================
* @author: Ajit Singh
* @date: 21/07/2021
* @description: Helper class that will implement the functionality of CP_ContentDocTriggerHandler

==========================================================================================================*/
public class CP_ContentDocTriggerHelper {
    
    /*When a file is uploaded to forecast cycle then that file should be uploaded to its related forceasts and those
      file should be visible to the portal users also*/    
    public static void uploadFilesToForecast(List<sObject> newRecordsList , Map<Id, sObject> newItems){
        system.debug('Inside uploadFilesToForecast newRecordsList:'+newRecordsList);
        
        List<ContentDocumentLink> contentDocLinkList = (List<ContentDocumentLink>) newRecordsList;
        Set<Id> linkedEntityId=new Set<Id>();
        Set<Id> contentDocumentId=new Set<Id>(); 
        Map<id,id> fcyleIdVsContentIdMap=new Map<id,id>();
        for(ContentDocumentLink cdl :contentDocLinkList){
            linkedEntityId.add(cdl.LinkedEntityId);
            contentDocumentId.add(cdl.ContentDocumentId);
            fcyleIdVsContentIdMap.put(cdl.LinkedEntityId,cdl.ContentDocumentId);
        }
        if(linkedEntityId!=null){
        List<CP_Forecast_Cycle__c> fcycleList= [Select id,name,(select id,name from forecasts__r) from CP_Forecast_Cycle__c where id IN:linkedEntityId ];
        Set<Id> forecastEntityId=new Set<Id>();
        for(CP_Forecast_Cycle__c fcl:fcycleList){
            for(CP_forecast__c fc:fcl.forecasts__r){
                system.debug('forecast id:'+fc.id);
                forecastEntityId.add(fc.id);
            }
            
        }    
         if(forecastEntityId!=null){
        List<CP_Forecast__c> foreCastList= [select id,name,Forecast_Cycle__r.name,Forecast_Cycle__r.id from CP_Forecast__c where id IN:forecastEntityId];
        system.debug(foreCastList);
        Map<id,id> forecastVsForecastCycleIdMap= new Map<id,id>();
        for(CP_Forecast__c fcId:foreCastList){
            forecastVsForecastCycleIdMap.put(fcId.id,fcId.Forecast_Cycle__r.id);
        }
        List<ContentDocumentLink> cdLink=new List<ContentDocumentLink>();
        for(Id fcId:forecastEntityId){
            ContentDocumentLink cDe = new ContentDocumentLink();
            Id foreCastCycleId=forecastVsForecastCycleIdMap.get(fcId);
            cDe.ContentDocumentId = fcyleIdVsContentIdMap.get(foreCastCycleId); 
            cDe.LinkedEntityId =fcId ; 
            cDe.ShareType = 'I'; 
            cDe.Visibility = 'AllUsers';
            cdLink.add(cDe);
        }
        insert cdLink;
         }
      }
        
    }
 
}