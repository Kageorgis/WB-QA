/* 
==========================================================================================================
* @author: Kalash Rastogi
* @date: 10/07/2021
* @description: Javascript handler class for LWC.
==========================================================================================================
*/
import { api, LightningElement, track } from 'lwc';
import Id from '@salesforce/user/Id';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import getProfile from '@salesforce/apex/CP_ForecastingItemController.getProfile'
import getForecastingItem from '@salesforce/apex/CP_ForecastingItemController.getForecastingItemsForPOC'
import createForecastingItem from '@salesforce/apex/CP_ForecastingItemController.createForecastingItemForPOC'
import deleteForecastingItem from '@salesforce/apex/CP_ForecastingItemController.deleteForecastingItemsForPOC'
import updateForecastingItem from '@salesforce/apex/CP_ForecastingItemController.updateForecastingItemForPOC'
import FORECASTING_ITEM_OBJECT from '@salesforce/schema/CP_Forecast_Item__c';
import REVENUE_TYPE from '@salesforce/schema/CP_Forecast_Item__c.Revenue_Type__c'
import PRODUCT_TYPE from '@salesforce/schema/CP_Forecast_Item__c.CP_Product_Type__c'
import PROPERTY from '@salesforce/schema/CP_Forecast_Item__c.Property__c'
import CURRENCY from '@salesforce/schema/CP_Forecast_Item__c.Forecast_Currency__c'
import CONTRACT from '@salesforce/schema/CP_Forecast_Item__c.CP_Contract__c'
import Q1 from '@salesforce/schema/CP_Forecast_Item__c.Q1__c'
import Q2 from '@salesforce/schema/CP_Forecast_Item__c.Q2__c'
import Q3 from '@salesforce/schema/CP_Forecast_Item__c.Q3__c'
import Q4 from '@salesforce/schema/CP_Forecast_Item__c.Q4__c'
import RETAILER from '@salesforce/schema/CP_Forecast_Item__c.Retailer__c'
import ROYALTY_RATE from '@salesforce/schema/CP_Forecast_Item__c.Royalty_Rate__c'
import TERRITORY from '@salesforce/schema/CP_Forecast_Item__c.CP_Territory__c'
import FORECAST from '@salesforce/schema/CP_Forecast_Item__c.Forecast__c'


import { loadScript } from 'lightning/platformResourceLoader';
import PARSER from '@salesforce/resourceUrl/CP_CSV_Parser';

export default class Cp_forecastingItem_dataTable extends LightningElement {

    forecastingItemObject = FORECASTING_ITEM_OBJECT
    forecastingItemFields = [
        { fieldAPIName: CONTRACT, Id: '0' },
        { fieldAPIName: CURRENCY, Id: '1' },
        { fieldAPIName: PROPERTY, Id: '2' },
        { fieldAPIName: PRODUCT_TYPE, Id: '3' },
        { fieldAPIName: TERRITORY, Id: '4' },
        { fieldAPIName: RETAILER, Id: '5' },
        { fieldAPIName: REVENUE_TYPE, Id: '6' },
        { fieldAPIName: ROYALTY_RATE, Id: '7' },
        { fieldAPIName: Q1, Id: '8' },
        { fieldAPIName: Q2, Id: '9' },
        { fieldAPIName: Q3, Id: '10' },
        { fieldAPIName: Q4, Id: '11' }
    ]

    forecastObject = FORECAST
    @api recordId;
    userId = Id;
    @track relatedForecastingItemData = []
    @track errorCount = 0
    @track errorReported = false
    @track loadingSpinner = false
    @track spinnerInModal = false
    @track modalOpen = false
    @track fileUploaded = false
    @track fileData = []
    @track rowShow = false
    @track underValidation = true
    @track submitted = false;
    @track showOptionalNote = false;
    @track deleteButton = false;
    @track maximized = false;
    @track cycleClosed = false;

    @track columns = [
        // { label: 'Budget Cycle', fieldName: 'BudgetCycle', editable: true },
        { label: 'Contract', fieldName: 'Contract', editable: true, wrapText: true },
        { label: 'Forecast Currency', fieldName: 'ForecastCurrency', editable: true, wrapText: true },
        { label: 'Property Description', fieldName: 'PropertyDescription', editable: true, wrapText: true },
        { label: 'Product Type Description', fieldName: 'ProductTypeDescription', editable: true, wrapText: true },
        { label: 'Territory', fieldName: 'Territory', editable: true, wrapText: true },
        { label: 'Retailer Description', fieldName: 'RetailerDescription', editable: true, wrapText: true },
        { label: 'Revenue Type', fieldName: 'RevenueType', editable: true, wrapText: true },
        // { label: 'Amount Type', fieldName: 'AmountType', editable: true },
        // { label: 'Royalty Rate Type', fieldName: 'RoyaltyRateType', editable: true },
        { label: 'Royalty Rate %', fieldName: 'RoyaltyRate', editable: true, wrapText: true },
        { label: 'Q1', fieldName: 'Q1', editable: true, wrapText: true },
        { label: 'Q2', fieldName: 'Q2', editable: true, wrapText: true },
        { label: 'Q3', fieldName: 'Q3', editable: true, wrapText: true },
        { label: 'Q4', fieldName: 'Q4', editable: true, wrapText: true },
        { label: 'Total Amount', fieldName: 'TotalAmount', editable: true, wrapText: true }
    ]

    @track columnsError = [
        {
            label: 'Error Check', fieldName: 'Errors', editable: false, cellAttributes: {
                class: { fieldName: 'errorColor' }
            }
        },
        // { label: 'Budget Cycle', fieldName: 'BudgetCycle', editable: true },
        { label: 'Contract', fieldName: 'Contract', editable: true, wrapText: true },
        { label: 'Forecast Currency', fieldName: 'ForecastCurrency', editable: true, wrapText: true },
        { label: 'Property Description', fieldName: 'PropertyDescription', editable: true, wrapText: true },
        { label: 'Product Type Description', fieldName: 'ProductTypeDescription', editable: true, wrapText: true },
        { label: 'Territory', fieldName: 'Territory', editable: true, wrapText: true },
        { label: 'Retailer Description', fieldName: 'RetailerDescription', editable: true, wrapText: true },
        { label: 'Revenue Type', fieldName: 'RevenueType', editable: true, wrapText: true },
        // { label: 'Amount Type', fieldName: 'AmountType', editable: true, wrapText: true },
        // { label: 'Royalty Rate Type', fieldName: 'RoyaltyRateType', editable: true, wrapText: true },
        { label: 'Royalty Rate %', fieldName: 'RoyaltyRate', editable: true, wrapText: true },
        { label: 'Q1', fieldName: 'Q1', editable: true, wrapText: true },
        { label: 'Q2', fieldName: 'Q2', editable: true, wrapText: true },
        { label: 'Q3', fieldName: 'Q3', editable: true, wrapText: true },
        { label: 'Q4', fieldName: 'Q4', editable: true, wrapText: true },
        { label: 'Total Amount', fieldName: 'TotalAmount', editable: true, wrapText: true }
    ]

    @track columnsSubmit = [
        // { label: 'Budget Cycle', fieldName: 'BudgetCycle', editable: false },
        { label: 'Contract', fieldName: 'Contract', editable: false },
        { label: 'Forecast Currency', fieldName: 'ForecastCurrency', editable: false },
        { label: 'Property Description', fieldName: 'PropertyDescription', editable: false },
        { label: 'Product Type Description', fieldName: 'ProductTypeDescription', editable: false },
        { label: 'Territory', fieldName: 'Territory', editable: false },
        { label: 'Retailer Description', fieldName: 'RetailerDescription', editable: false },
        { label: 'Revenue Type', fieldName: 'RevenueType', editable: false },
        // { label: 'Amount Type', fieldName: 'AmountType', editable: false },
        // { label: 'Royalty Rate Type', fieldName: 'RoyaltyRateType', editable: false },
        { label: 'Royalty Rate %', fieldName: 'RoyaltyRate', editable: false },
        { label: 'Q1', fieldName: 'Q1', editable: false },
        { label: 'Q2', fieldName: 'Q2', editable: false },
        { label: 'Q3', fieldName: 'Q3', editable: false },
        { label: 'Q4', fieldName: 'Q4', editable: false },
        { label: 'Total Amount', fieldName: 'TotalAmount', editable: false }
    ]

    @track tableData = []
    @track itemList = [
        {
            id: 0
        }
    ];
    keyIndex = 0
    editedValues = []

    dataLoadedFromRenderedCallBack = false
    scriptLoadedFrromRenderedCallBack = false
    renderedCallback() {
        if (!this.scriptLoadedFrromRenderedCallBack) {
            loadScript(this, PARSER)
                .then(() => {
                    this.scriptLoadedFrromRenderedCallBack = true;
                    console.log('parser script loaded...')
                })
                .catch(error => console.error(error));
        }
        if (!this.dataLoadedFromRenderedCallBack && this.recordId) {
            getForecastingItem({ recordId: this.recordId }).then((result) => {
                // console.log(JSON.parse(JSON.stringify(result)))
                this.dataLoadedFromRenderedCallBack = true
                this.relatedForecastingItemData = result
                this.cleanDataFromRelations()
                console.log('------Cleaned Data--------')
                // console.log(JSON.parse(JSON.stringify(this.tableData)))
            }).catch(error => {
                console.log(error)
            })
        }
    }
    cleanDataFromRelations() {
        console.log('Cleaning Apex data')
        this.tableData = []
        this.errorCount = 0
        //Contract and Royalty Rate Type still left
        console.log(JSON.stringify(this.relatedForecastingItemData))
        this.relatedForecastingItemData.forEach((fItem) => {
            var cleanRecord = {};
            cleanRecord["AmountType"] = fItem["Forecast__r"] ? (fItem["Forecast__r"].Forecast_Type__c ? fItem["Forecast__r"].Forecast_Type__c : "") : "";
            cleanRecord["BudgetCycle"] = fItem["Forecast__r"] ? (fItem["Forecast__r"].Forecast_Cycle__r ? (fItem["Forecast__r"].Forecast_Cycle__r.Forecast_Cycle_Name__c ? fItem["Forecast__r"].Forecast_Cycle__r.Forecast_Cycle_Name__c : "") : "") : ""
            cleanRecord["Territory"] = fItem["CP_Territory__r"] ? (fItem["CP_Territory__r"].Name ? (fItem["CP_Territory__r"].Name) : "") : ""
            cleanRecord["PropertyDescription"] = fItem["Property__r"] ? (fItem["Property__r"].Name ? fItem["Property__r"].Name : "") : "";
            cleanRecord["RetailerDescription"] = fItem["Retailer__r"] ? (fItem["Retailer__r"].Name ? fItem["Retailer__r"].Name : "") : "";
            cleanRecord["ProductTypeDescription"] = fItem["CP_Product_Type__r"] ? (fItem["CP_Product_Type__r"].Name ? fItem["CP_Product_Type__r"].Name : "") : ""
            cleanRecord["ForecastCurrency"] = fItem["Forecast_Currency__r"] ? (fItem["Forecast_Currency__r"].Name ? fItem["Forecast_Currency__r"].Name : "") : "";
            cleanRecord["Contract"] = fItem["CP_Contract__r"] ? (fItem["CP_Contract__r"].Name ? fItem["CP_Contract__r"].Name : "") : "";
            cleanRecord["RoyaltyRate"] = fItem["Royalty_Rate__c"] ? fItem["Royalty_Rate__c"] : "";
            cleanRecord["TotalAmount"] = fItem["Total_Amount__c"] ? fItem["Total_Amount__c"] : "";
            cleanRecord["RevenueType"] = fItem["Revenue_Type__c"] ? fItem["Revenue_Type__c"] : "";
            cleanRecord["Q1"] = fItem["Q1__c"] ? fItem["Q1__c"] : "";
            cleanRecord["Q2"] = fItem["Q2__c"] ? fItem["Q2__c"] : "";
            cleanRecord["Q3"] = fItem["Q3__c"] ? fItem["Q3__c"] : "";
            cleanRecord["Q4"] = fItem["Q4__c"] ? fItem["Q4__c"] : "";
            cleanRecord["Id"] = fItem["Id"] ? fItem["Id"] : "";
            cleanRecord["Name"] = fItem["Name"] ? fItem["Name"] : "";
            cleanRecord["Errors"] = fItem["Errors__c"] ? fItem["Errors__c"] : "No Errors";
            cleanRecord["RoyaltyRateType"] = "";
            cleanRecord["errorColor"] = (cleanRecord["Errors"] != 'No Errors') ? 'slds-text-color_error' : 'slds-text-color_success';
            this.errorCount += parseInt((cleanRecord["Errors"] != 'No Errors') ? 1 : 0)
            const status = fItem["Forecast__r"] ? (fItem["Forecast__r"].Forecast_Status__c ? fItem["Forecast__r"].Forecast_Status__c : '') : '';
            if (status == 'Pending Approval' || status == 'Submitted') {
                this.submitted = true;
            }
            this.cycleClosed = fItem["Forecast__r"] ? (fItem["Forecast__r"].Forecast_Cycle__r ? (fItem["Forecast__r"].Forecast_Cycle__r.Forecast_Cycle_Name__c ? (fItem["Forecast__r"].Forecast_Cycle__r.Status__c == "Closed") : false) : false) : false
            // console.log(fItem["Forecast__r"] ? (fItem["Forecast__r"].Forecast_Cycle__r ? (fItem["Forecast__r"].Forecast_Cycle__r.Forecast_Cycle_Name__c ? (fItem["Forecast__r"].Forecast_Cycle__r.Status__c) : '') : '') : '')
            // console.log(this.cycleClosed);
            //console.log(fItem["CP_Territory__r"].Name)
            this.tableData.push(cleanRecord);
        })
        console.log(this.tableData)
        this.loadingSpinner = false
        console.log('Apex data cleaned')
    }
    cleanFileData() {
        console.log('cleaning file data...')
        var cleanedData = []
        this.fileData.forEach(item => {
            var record = {}
            if (Object.keys(item).length < 10) {
                console.log('Invalid Record: ' + item)
            }
            else {
                record["Royalty_Rate__c"] = parseFloat(item["Royalty Rate %"])
                record["Revenue_Type__c"] = item["Revenue Type"]
                record["ForecastCurrency"] = item["Forecast Currency"]
                record["Q1__c"] = item["Q1"] ? (parseInt(item["Q1"].replaceAll(',', ''))) : 0
                record["Q2__c"] = item["Q2"] ? (parseInt(item["Q2"].replaceAll(',', ''))) : 0
                record["Q3__c"] = item["Q3"] ? (parseInt(item["Q3"].replaceAll(',', ''))) : 0
                record["Q4__c"] = item["Q4"] ? (parseInt(item["Q4"].replaceAll(',', ''))) : 0
                record["PropertyDescription"] = item["Property Description"]
                record["RetailerDescription"] = item["Retailer Description"]
                record["ProductTypeDescription"] = item["Product Type Description"]
                record["Contract"] = item["Contract"]
                record["AmountType"] = item["Amount Type"]
                record["BudgetCycle"] = item["Budget Cycle"]
                record["Territory"] = item["Territory"]
                record["RoyaltyRateType"] = item["Royalty Rate Type"]
                record["Forecast__c"] = this.recordId
                cleanedData.push(record)
            }
        })
        console.log('file data cleaned')
        console.log(cleanedData)
        return cleanedData;
    }
    insertFileData(data) {
        console.log('inserting data...')
        console.log(JSON.stringify(data));
        createForecastingItem({ data: JSON.stringify(data), forecastId: this.recordId }).then((result) => {
            console.log('Records Inserted');
            // console.log(result)
            this.relatedForecastingItemData = result;
            this.cleanDataFromRelations();
            this.spinnerInModal = false;
            this.modalOpen = false;
            this.fileUploaded = false
        }).catch((err) => {
            console.log('Error' + JSON.stringify(err));
            this.spinnerInModal = false;
            this.modalOpen = false;
            this.fileUploaded = false
            if(this.cycleClosed){
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: 'Can not perform operation for CLOSED cycle.',
                        variant: 'error',
                        mode: 'dismissable'
                    })
                );
            }
        });
    }
    deleteAndReplaceRecords(Ids, data) {
        console.log('Overwriting records')
        deleteForecastingItem({
            recordIds: Ids,
            data: JSON.stringify(data),
            forecastId: this.recordId
        }).then((result) => {
            console.log('Records overwrited')
            this.relatedForecastingItemData = result;
            this.cleanDataFromRelations();
            this.spinnerInModal = false
            this.modalOpen = false
            this.fileUploaded = false
        }).catch(err => {
            console.log('Error:' + err)
            this.spinnerInModal = false
            this.modalOpen = false
            this.fileUploaded = false
            if(this.cycleClosed){
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: 'Can not perform operation for CLOSED cycle.',
                        variant: 'error',
                        mode: 'dismissable'
                    })
                );
            }
        })
    }
    saveChangesDatatable(event) {
        console.log('saving changes...')
        this.loadingSpinner = true
        var recordsToBeUpdated = []
        this.editedValues = JSON.parse(JSON.stringify(event.detail.draftValues));
        // console.log(this.editedValues)
        this.editedValues.forEach(item => {
            var record = {}
            // console.log(item)
            record["Id"] = this.tableData[parseInt(item["key"].slice(4))].Id
            console.log(item)
            if (item["Territory"] != undefined)
                record["Territory"] = item["Territory"]
            if (item["RetailerDescription"] != undefined)
                record["RetailerDescription"] = item["RetailerDescription"]
            if (item["ForecastCurrency"] != undefined)
                record["ForecastCurrency"] = item["ForecastCurrency"]
            if (item["PropertyDescription"] != undefined)
                record["PropertyDescription"] = item["PropertyDescription"]
            if (item["Contract"] != undefined)
                record["Contract"] = item["Contract"]
            if (item["ProductTypeDescription"] != undefined)
                record["ProductTypeDescription"] = item["ProductTypeDescription"]
            if (item["RevenueType"] != undefined)
                record["Revenue_Type__c"] = item["RevenueType"]
            if (item["RoyaltyRate"] != undefined)
                record["Royalty_Rate__c"] = parseFloat(item["RoyaltyRate"])
            if (item["Q1"] != undefined)
                record["Q1__c"] = parseFloat(item["Q1"])
            if (item["Q2"] != undefined)
                record["Q2__c"] = parseFloat(item["Q2"])
            if (item["Q3"] != undefined)
                record["Q3__c"] = parseFloat(item["Q3"])
            if (item["Q4"] != undefined)
                record["Q4__c"] = parseFloat(item["Q4"])
            //console.log(record)
            recordsToBeUpdated.push(record);
        })
        console.log(JSON.stringify(recordsToBeUpdated))
        setTimeout(function () {
            updateForecastingItem({
                data: JSON.stringify(recordsToBeUpdated),
                forecastId: this.recordId
            }).then((result) => {
                console.log(JSON.parse(JSON.stringify(result)))
                this.relatedForecastingItemData = result
                this.cleanDataFromRelations();
                this.loadingSpinner = false;
                console.log('Data updated')
                this.editedValues = null;
            }).catch(err => {
                console.log(err);
                this.loadingSpinner = false;
                this.editedValues = null;
            })
        }.bind(this), 1000);
    }
    importClicked(event) {
        console.log('import clicked')
        this.modalOpen = true
    }
    modalClose(event) {
        this.modalOpen = false;
        this.showOptionalNote = false;
        this.maximized = false;
    }
    uploadedFileHandler(event) {
        console.log('uploadedFileHandler')
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            Papa.parse(file, {
                quoteChar: '"',
                header: 'true',
                complete: (results) => {
                    this.fileUploaded = true;
                    console.log(results.data);
                    this.fileData = results.data
                },
                error: (error) => {
                    console.error(error);
                }
            })
        }
    }
    overwriteExistingClicked(event) {
        console.log('Overwrite Existing')
        this.spinnerInModal = true
        var dataForApex = this.cleanFileData()
        var recordsToBeDeleted = this.getCurrentRecordIds()
        this.deleteAndReplaceRecords(recordsToBeDeleted, dataForApex)
    }
    getCurrentRecordIds() {
        var Ids = []
        this.tableData.forEach(item => {
            Ids.push(item["Id"])
        })
        return Ids
    }
    addToExistingClicked(event) {
        console.log('Add to existing')
        this.spinnerInModal = true
        var dataForApex = this.cleanFileData()
        this.insertFileData(dataForApex)
    }
    validateClicked(event) {
        console.log('validate clicked')
        this.loadingSpinner = true;
        // if (this.errorCount)
        this.errorReported = true;
        setTimeout(function () {
            this.loadingSpinner = false;
        }.bind(this), 2000);
        this.underValidation = false;
    }
    addRowClicked(event) {
        console.log('add row clicked')
        this.rowShow = true
    }
    addRow() {
        ++this.keyIndex;
        var newItem = [{ id: this.keyIndex }];
        this.itemList = this.itemList.concat(newItem);
    }
    removeRow(event) {
        if (this.itemList.length >= 2) {
            this.itemList = this.itemList.filter(function (element) {
                return parseInt(element.id) !== parseInt(event.target.accessKey);
            });
        }
    }
    addData() {
        console.log('adding data...')
        var isVal = true;
        this.loadingSpinner = true
        this.rowShow = false
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            isVal = isVal && element.reportValidity();
            // console.log(element);
        });
        if (isVal) {
            this.template.querySelectorAll('lightning-record-edit-form').forEach(element => {
                element.submit();
            });
        } else {
            console.log('Error saving data')
        }
        setTimeout(function () {
            getForecastingItem({ recordId: this.recordId }).then((result) => {
                this.relatedForecastingItemData = result
                this.cleanDataFromRelations()
                console.log('Data Added')
            }).catch(error => {
                console.log(error)
                if(this.cycleClosed){
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: 'Can not perform operation for CLOSED cycle.',
                            variant: 'error',
                            mode: 'dismissable'
                        })
                    );
                }
            })
        }.bind(this), 3000);
    }
    cancelAddRow() {
        this.rowShow = false;
        this.itemList = [
            {
                id: 0
            }
        ];
        this.keyIndex = 0
    }
    submitClicked(event) {

        console.log('submit clicked')
        this.loadingSpinner = true
        if (this.errorCount != 0) {
            this.loadingSpinner = false
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Can not submit, please remove all the errors before submitting.',
                    variant: 'error',
                    mode: 'dismissable'
                })
            );
        }
        else {
            this.errorReported = false
            var profileName = '';
            getProfile().then((result) => {
                profileName = result
                console.log(result)
                const fields = {};
                fields['Id'] = this.recordId;
                if (profileName === 'CP Partner Community User') {
                    fields['Forecast_Status__c'] = 'Pending Approval'
                }
                else {
                    fields['Forecast_Status__c'] = 'Submitted'
                }
                const recordInput = { fields };
                this.showOptionalNote = true
                updateRecord(recordInput)
                    .then(() => {
                        this.submitted = true
                        this.loadingSpinner = false
                    })
                    .catch(error => {
                        console.log(error);
                        if(this.cycleClosed){
                            this.dispatchEvent(
                                new ShowToastEvent({
                                    title: 'Error',
                                    message: 'Can not perform operation for CLOSED cycle.',
                                    variant: 'error',
                                    mode: 'dismissable'
                                })
                            );
                        }
                        this.loadingSpinner = false
                    });
            }).catch(err => {
                console.log(err);
            })
            this.loadingSpinner = false;
        }
    }
    showDelete() {
        this.deleteButton = true;
    }
    deleteClicked(event) {
        this.loadingSpinner = true
        console.log('delete clicked')
        var idsToBeDeleted = new Set()
        var checkedRows = this.template.querySelector('lightning-datatable');
        var selectedRows = JSON.parse(JSON.stringify(checkedRows.selectedRows))
        selectedRows.forEach(element => {
            idsToBeDeleted.add(this.tableData[parseInt(element.slice(4))].Id)
        })
        console.log(idsToBeDeleted)
        this.template.querySelector('lightning-datatable').selectedRows = [];
        setTimeout(function () {
            deleteForecastingItem({
                recordIds: Array.from(idsToBeDeleted),
                data: 'onlyDelete',
                forecastId: this.recordId
            }).then((result) => {
                console.log(JSON.parse(JSON.stringify(result)))
                this.relatedForecastingItemData = result;
                this.cleanDataFromRelations()
                this.loadingSpinner = false
                this.deleteButton = false;
            }).catch(err => {
                console.log(err)
                this.loadingSpinner = false;
                if(this.cycleClosed){
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: 'Can not perform operation for CLOSED cycle.',
                            variant: 'error',
                            mode: 'dismissable'
                        })
                    );
                }
            })
        }.bind(this), 1000);
    }
    maximizeDatatable() {
        this.maximized = true;
    }
}