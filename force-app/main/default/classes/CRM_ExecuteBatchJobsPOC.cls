public class CRM_ExecuteBatchJobsPOC {
    public String selectedJob {get;set;}
    
    public CRM_ExecuteBatchJobsPOC() {}

    public SelectOption[] getlistBatchJobs() {
        SelectOption[] listBatchJobs  = new SelectOption[]{};
        
        listBatchJobs.add(new SelectOption('MOVE_COUNTRY_PLANS','01. Move Country Plans'));
        listBatchJobs.add(new SelectOption('AUTO_TARGET_ON_PRODUCT','02. Automatic Target Creation on Product Insert'));
        listBatchJobs.add(new SelectOption('AUTO_TARGET_ON_PBEP_ACCOUNT','03. Automatic Target Creation on PBEP/Account Insert'));
        
        listBatchJobs.add(new SelectOption('NR_PHYSICAL','04. Auto Physical NR Deal Creation'));
        listBatchJobs.add(new SelectOption('NR_DIGITAL','05. Auto Digital NR Deal Creation'));
        
        listBatchJobs.add(new SelectOption('TARGET_ROLLUP','06. Target Rollup'));
        
        listBatchJobs.add(new SelectOption('INSERT_PBEP_BATCH','07. Insert PBEP On Product ListPrice'));
        listBatchJobs.add(new SelectOption('RBA_DEALS_BATCH','08. Process Account Batch For RBA Deal Creation'));
        
        listBatchJobs.add(new SelectOption('PROCESS_DEAL_PRODUCTS','09. Process Deal Products Batch'));
        listBatchJobs.add(new SelectOption('DEAL_PRODUCT_ROLLUP','10. Deal Product Roll up Batch (NOT IN USE)'));
        
        return listBatchJobs;
    }
    
    public PageReference executeJob(){
        system.debug('selectedJob---->'+selectedJob);
        
        if(selectedJob == 'MOVE_COUNTRY_PLANS') {
            CRM_MoveCountryPlanTargetsBatch batchInstance = new CRM_MoveCountryPlanTargetsBatch();
            Database.executebatch(batchInstance, 100);
        }
        else if(selectedJob == 'NR_PHYSICAL') {
            CRM_Batch_Size__c batchSizeInstance = CRM_Batch_Size__c.getInstance('Auto Physical NR Deal Creation Batch');
            Integer defaultBatchSize = batchSizeInstance != null ? (Integer) batchSizeInstance.Batch_Size__c : 25;
            CRM_AutoPhysicalNRDealCreationBatch batchInstance = new CRM_AutoPhysicalNRDealCreationBatch();
            Database.executebatch(batchInstance, defaultBatchSize);
        }
        else if(selectedJob == 'NR_DIGITAL') {
            CRM_Batch_Size__c batchSizeInstance = CRM_Batch_Size__c.getInstance('Auto Digital NR Deal Creation Batch');
            Integer defaultBatchSize = batchSizeInstance != null ? (Integer) batchSizeInstance.Batch_Size__c : 25;
            CRM_AutodigitalNRDealCreationBatch batchInstance = new CRM_AutoDigitalNRDealCreationBatch();
            Database.executebatch(batchInstance, defaultBatchSize);
        }
        else if(selectedJob == 'TARGET_ROLLUP') {
            CRM_BatchTargetRollUp_V2 batchTarget = new CRM_BatchTargetRollUp_V2();
            CRM_Batch_Size__c objBatchSize = CRM_Batch_Size__c.getInstance('Target_Rollup_Batch-Products');
            Integer nBatchSize = Integer.Valueof((objBatchSize != null && objBatchSize.Batch_Size__c != null)? objBatchSize.Batch_Size__c : 1);
            Database.executeBatch(batchTarget, nBatchSize);
        }
        
        else if(selectedJob == 'AUTO_TARGET_ON_PRODUCT') {
            //Batch instance 
            CRM_AutoTargetCreationProductInsertBatch batchInstance = new CRM_AutoTargetCreationProductInsertBatch();
            //Execute Batch
            
            Decimal batchSize =  10;
            CRM_Batch_Size__c setting = CRM_Batch_Size__c.getInstance('Auto Target Product Batch');
            if(setting != null && setting.Batch_Size__c != null){
                batchSize = setting.Batch_Size__c;
            }
            
            Database.executeBatch(batchInstance,Integer.valueOf(batchSize));
        }
        
        else if(selectedJob == 'AUTO_TARGET_ON_PBEP_ACCOUNT') {
            //Batch instance 
            CRM_AutoTargetCreationPBEPInsertBatch batchInstance = new CRM_AutoTargetCreationPBEPInsertBatch();
            //Execute Batch
            
            Decimal batchSize =  10;
            CRM_Batch_Size__c setting = CRM_Batch_Size__c.getInstance('Auto Target PBEP Batch');
            if(setting != null && setting.Batch_Size__c != null){
                batchSize = setting.Batch_Size__c;
            }
            
            Database.executeBatch(batchInstance,Integer.valueOf(batchSize));
        }
        
        else if(selectedJob == 'INSERT_PBEP_BATCH') {
            //Batch instance 
            CRM_InsertPBEPOnProductListPriceBatch batchInstance = new CRM_InsertPBEPOnProductListPriceBatch();
            //Execute Batch
            Decimal batchSize =  100;
            CRM_Batch_Size__c setting = CRM_Batch_Size__c.getInstance('Insert PBEPOnProdListPrice Batch');
            if(setting != null && setting.Batch_Size__c != null){
                batchSize = setting.Batch_Size__c;
            } 
            Database.executeBatch(batchInstance,Integer.valueOf(batchSize));
        }
        
        else if(selectedJob == 'RBA_DEALS_BATCH') {
            CRM_Batch_Size__c batchSizeInstance = CRM_Batch_Size__c.getInstance(System.Label.CRM_Process_Account_Batch_For_RBA);
            Integer defaultBatchSize = batchSizeInstance != null ? (Integer) batchSizeInstance.Batch_Size__c : 10;
            Database.executebatch(new CRM_ProcessAccountBatchForRBA(), defaultBatchSize);
        }
        
        else if(selectedJob == 'PROCESS_DEAL_PRODUCTS') {
            CRM_Batch_Size__c batchSizeInstance = CRM_Batch_Size__c.getInstance('Process Deal Products Batch');
            Integer defaultBatchSize = batchSizeInstance != null ? (Integer) batchSizeInstance.Batch_Size__c : 50;
            Database.executebatch(new CRM_ProcessDealProductsBatch(), defaultBatchSize);
        }
        
        else if(selectedJob == 'DEAL_PRODUCT_ROLLUP') {
        }
        
        ApexPages.Message myMsg = new ApexPages.Message(ApexPages.Severity.CONFIRM,'Batch Job has been Started.');
        ApexPages.addMessage(myMsg);
            
        return null;
    }
}