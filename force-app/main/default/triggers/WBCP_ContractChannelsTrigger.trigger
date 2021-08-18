/*******************************************************************************************************************************************
* File Name     : WBCP_ContractTerritoryTriggerHandler  
@CreateDate July May 2021
* Description   :   Handler perform action to update contract based on contract code on before insert .
* @author       :   CTS
********************************************************************************************************************************************/

trigger WBCP_ContractChannelsTrigger on Contract_Channels__c (before insert) {
    if(Trigger.isBefore && trigger.isInsert ){
        set<string> contractNoSets = new set<string>();
        Map<string,ID> contactMap;
        for(Contract_Channels__c contractChannels : Trigger.new){
            contractNoSets.add(contractChannels.Contract_No__c);
        }
        contactMap = CP_ProductUtility.getContractMap(contractNoSets);
        for(Contract_Channels__c contractChannel : Trigger.new){
            contractChannel.Contract__c = contactMap.get(contractChannel.Contract_No__c);
        }
   }
}