public with sharing class AccountManager {
    
    public AccountManager() {}

    //@AuraEnabled
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(Integer numberOfRecords) {
        return [SELECT Id, Name, Phone FROM Account Limit :numberOfRecords];
    }


}
