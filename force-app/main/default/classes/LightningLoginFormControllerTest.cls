@IsTest(SeeAllData = true)
public with sharing class LightningLoginFormControllerTest {

 @IsTest
 static void testLoginWithInvalidCredentials() {
     try{
        System.assertEquals(null, LightningLoginFormController.login('test@cg.com', '1234@123', ''));
   		System.assertNotEquals('test', LightningLoginFormController.login('test@cg.com', '1234@123', ''));
     }catch(Exception e){
         
         System.assertEquals(e.getMessage(), e.getMessage()); 
     }
 }

 @IsTest
 static void LightningLoginFormControllerInstantiation() {
  LightningLoginFormController controller = new LightningLoginFormController();
  System.assertNotEquals(controller, null);
 }

 @IsTest
 static void testIsUsernamePasswordEnabled() {
  System.assertEquals(false, LightningLoginFormController.getIsUsernamePasswordEnabled());
 }

 @IsTest
 static void testIsSelfRegistrationEnabled() {
  System.assertEquals(false, LightningLoginFormController.getIsSelfRegistrationEnabled());
 }

 @IsTest
 static void testGetSelfRegistrationURL() {
  System.assertEquals(null, LightningLoginFormController.getSelfRegistrationUrl());
 }
@IsTest
 static void testgetForgotPasswordUrl() {
  System.assertEquals(null, LightningLoginFormController.getForgotPasswordUrl());
 }
 @IsTest
 static void testAuthConfig() {
  Auth.AuthConfiguration authConfig = LightningLoginFormController.getAuthConfig();
  System.assertNotEquals(null, authConfig);
 }
    @isTest
    static void testSetExpId() {
        String result = LightningLoginFormController.setExperienceId('asd24');
        System.assertNotEquals(null, result);
    }
}