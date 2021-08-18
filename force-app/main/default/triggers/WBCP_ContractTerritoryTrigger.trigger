/*******************************************************************************************************************************************
* File Name     : WBCP_ContractTerritoryTriggerHandler  
@CreateDate July May 2021
* Description   :  perform action to update contract based on contract code on before insert .
* @author       :   CTS
********************************************************************************************************************************************/

trigger WBCP_ContractTerritoryTrigger on Contract_Territory__c (before insert) {
    if(Trigger.isBefore && trigger.isInsert){
        set<string> contractNoSets = new set<string>();
        set<string> territoryCodeSets = new set<string>();
        Map<string,ID> contactMap;
        Map<string,ID> territoryMap;
         
        for(Contract_Territory__c contractTerritory : Trigger.new){
            contractNoSets.add(contractTerritory.Contract_No__c);
            territoryCodeSets.add(contractTerritory.Territory_Code__c);
        }
        contactMap = CP_ProductUtility.getContractMap(contractNoSets);
        territoryMap = CP_ProductUtility.getTerritoryMap(territoryCodeSets);
        
        for(Contract_Territory__c contractTerritory : Trigger.new){
            contractTerritory.Contract__c = contactMap.get(contractTerritory.Contract_No__c);  
            contractTerritory.Territory__c = territoryMap.get(contractTerritory.Territory_Code__c);  
        }
    }
}