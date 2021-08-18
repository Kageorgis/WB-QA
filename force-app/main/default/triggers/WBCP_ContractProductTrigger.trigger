trigger WBCP_ContractProductTrigger on Contract_Product__c (before insert,before update) {
    if(Trigger.isBefore && trigger.isInsert){
        set<string> contractNoSets = new set<string>();
        set<string> productDetlSets = new set<string>();
        
        Map<string,ID> contactMap;
        Map<string,ID> productDetlsMap;
        for(Contract_Product__c contractProd : Trigger.new){
            contractNoSets.add(contractProd.Contract_No__c);
            productDetlSets.add(contractProd.Product_Detail__c);
        }
        contactMap = CP_ProductUtility.getContractMap(contractNoSets);
        productDetlsMap = CP_ProductUtility.getProductMap(productDetlSets);
        for(Contract_Product__c contractProd : Trigger.new){
            contractProd.Contract__c= contactMap.get(contractProd.Contract_No__c);
            contractProd.cp_Product__c= productDetlsMap.get(contractProd.Product_Detail__c);
        } 
        
    }
}