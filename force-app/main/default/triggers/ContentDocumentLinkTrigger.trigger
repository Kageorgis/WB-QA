/*
    @Author : Ajit Singh
    @Date :  20-07-2021
    @Description : ContentDocTrigger that will call the RUN methods of CP_TriggerDispatcher class
    
*/

    trigger ContentDocumentLinkTrigger on ContentDocumentLink (before insert, after insert, before update, after update, before delete, after delete, after undelete) {
       
        CP_TriggerDispatcher.run(new CP_ContentDocTriggerHandler() , 'ContentDocumentLink');
        
    }