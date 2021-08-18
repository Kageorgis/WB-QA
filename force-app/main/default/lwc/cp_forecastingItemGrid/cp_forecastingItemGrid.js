/* 
==========================================================================================================
* @author: Kalash Rastogi
* @date: 10/07/2021
* @description: Javascript handler class for LWC.
==========================================================================================================
*/
import { api, LightningElement, track, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import getProfile from '@salesforce/apex/CP_ForecastingItemController.getProfile'
import getLookUps from '@salesforce/apex/CP_ForecastingItemController.getLookUpsForPOC'
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
export default class Cp_forecastingItemGrid extends NavigationMixin(LightningElement) {

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
    @track itemList = [
        {
            id: 0
        }
    ];
    keyIndex = 0
    editedValues = []
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
    @track cycleClosed = false;
    @track internalUser = false;
    @track pendingApproval = false;
    @track CustomTableloaded = false;
    @track tableData = [];
    @track tableDataPortal = [];
    @track draftValues = []
    fileName = ''
    lastSavedData = [];
    relatedForecastingItemData = [];
    testTableData = [];
    dummyData = [];
    columnsCustom = [];
    columnsErrorCustom = []
    columnsCustomPortal = [];
    columnsErrorCustomPortal = []
    error;
    fileNotSupported = false;

    @track columnsStdPortal = [
        // { label: 'Budget Cycle', fieldName: 'BudgetCycle', editable: true },
        { label: 'Contract', fieldName: 'Contract',initialWidth : 94, editable: false, wrapText: true },
        { label: 'Forecast Currency', fieldName: 'ForecastCurrency',initialWidth : 149, editable: false, wrapText: true },
        { label: 'Property Description', fieldName: 'PropertyDescription',initialWidth : 169, editable: false, wrapText: true },
        { label: 'Product Type Description', fieldName: 'ProductTypeDescription',initialWidth : 195, editable: false, wrapText: true },
        { label: 'Territory', fieldName: 'Territory',initialWidth : 94, editable: false, wrapText: true },
        { label: 'Retailer Description', fieldName: 'RetailerDescription',initialWidth : 162, editable: false, wrapText: true },
        { label: 'Revenue Type', fieldName: 'RevenueType',initialWidth : 125, editable: false, wrapText: true },
        // { label: 'Amount Type', fieldName: 'AmountType', editable: true },
        // { label: 'Royalty Rate Type', fieldName: 'RoyaltyRateType', editable: true },
        { label: 'Royalty Rate %', fieldName: 'RoyaltyRate',initialWidth : 132, editable: false, wrapText: true },
        { label: 'Q1', fieldName: 'Q1',initialWidth : 59, editable: false, wrapText: true, type : "number" },
        { label: 'Q2', fieldName: 'Q2',initialWidth : 59, editable: false, wrapText: true, type : "number" },
        { label: 'Q3', fieldName: 'Q3',initialWidth : 59, editable: false, wrapText: true, type : "number" },
        { label: 'Q4', fieldName: 'Q4',initialWidth : 59, editable: false, wrapText: true, type : "number" },
        { label: 'Total Amount', fieldName: 'TotalAmount',initialWidth : 125, editable: false, wrapText: true, type : "number" }
    ]

    @track columnsStd = [
        // { label: 'Budget Cycle', fieldName: 'BudgetCycle', editable: true },
        { label: 'Contract', fieldName: 'Contract',initialWidth : 94, editable: false, wrapText: true },
        { label: 'Forecast Currency', fieldName: 'ForecastCurrency',initialWidth : 149, editable: false, wrapText: true },
        { label: 'Property Description', fieldName: 'PropertyDescription',initialWidth : 169, editable: false, wrapText: true },
        { label: 'Product Type Description', fieldName: 'ProductTypeDescription',initialWidth : 195, editable: false, wrapText: true },
        { label: 'Territory', fieldName: 'Territory',initialWidth : 94, editable: false, wrapText: true },
        { label: 'Retailer Description', fieldName: 'RetailerDescription',initialWidth : 162, editable: false, wrapText: true },
        { label: 'Revenue Type', fieldName: 'RevenueType',initialWidth : 125, editable: false, wrapText: true },
        // { label: 'Amount Type', fieldName: 'AmountType', editable: true },
        // { label: 'Royalty Rate Type', fieldName: 'RoyaltyRateType', editable: true },
        { label: 'Royalty Rate %', fieldName: 'RoyaltyRate', editable: false, wrapText: true },
        { label: 'Q1', fieldName: 'Q1',initialWidth : 59, editable: false, wrapText: true, type : "number"  },
        { label: 'Q2', fieldName: 'Q2',initialWidth : 59, editable: false, wrapText: true, type : "number"  },
        { label: 'Q3', fieldName: 'Q3',initialWidth : 59, editable: false, wrapText: true, type : "number"  },
        { label: 'Q4', fieldName: 'Q4',initialWidth : 59, editable: false, wrapText: true, type : "number"  },
        { label: 'Q1 Adj', fieldName: 'Q1Adj',initialWidth : 82, editable: false, wrapText: true, type : "number"  },
        { label: 'Q2 Adj', fieldName: 'Q2Adj',initialWidth : 82, editable: false, wrapText: true, type : "number"  },
        { label: 'Q3 Adj', fieldName: 'Q3Adj',initialWidth : 82, editable: false, wrapText: true, type : "number"  },
        { label: 'Q4 Adj', fieldName: 'Q4Adj',initialWidth : 82, editable: false, wrapText: true, type : "number"  },
        { label: 'Total Amount', fieldName: 'TotalAmount',initialWidth : 125, editable: false, wrapText: true, type : "number"  }
    ]

    @track columnsSubmitStdPortal = [
        // { label: 'Budget Cycle', fieldName: 'BudgetCycle', editable: false },
        { label: 'Contract', fieldName: 'Contract',initialWidth : 94, editable: false },
        { label: 'Forecast Currency', fieldName: 'ForecastCurrency',initialWidth : 149, editable: false },
        { label: 'Property Description', fieldName: 'PropertyDescription',initialWidth : 169, editable: false },
        { label: 'Product Type Description', fieldName: 'ProductTypeDescription',initialWidth : 195, editable: false },
        { label: 'Territory', fieldName: 'Territory',initialWidth : 94, editable: false },
        { label: 'Retailer Description', fieldName: 'RetailerDescription',initialWidth : 162, editable: false },
        { label: 'Revenue Type', fieldName: 'RevenueType',initialWidth : 125, editable: false },
        // { label: 'Amount Type', fieldName: 'AmountType', editable: false },
        // { label: 'Royalty Rate Type', fieldName: 'RoyaltyRateType', editable: false },
        { label: 'Royalty Rate %', fieldName: 'RoyaltyRate',initialWidth : 132, editable: false },
        { label: 'Q1', fieldName: 'Q1',initialWidth : 59, editable: false, type : "number"  },
        { label: 'Q2', fieldName: 'Q2',initialWidth : 59, editable: false, type : "number"  },
        { label: 'Q3', fieldName: 'Q3',initialWidth : 59, editable: false, type : "number"  },
        { label: 'Q4', fieldName: 'Q4',initialWidth : 59, editable: false, type : "number"  },
        { label: 'Total Amount', fieldName: 'TotalAmount',initialWidth : 125, editable: false, type : "number"  }
    ]

    @track columnsSubmitStd = [
        // { label: 'Budget Cycle', fieldName: 'BudgetCycle', editable: false },
        { label: 'Contract', fieldName: 'Contract',initialWidth : 94, editable: false },
        { label: 'Forecast Currency', fieldName: 'ForecastCurrency',initialWidth : 149, editable: false },
        { label: 'Property Description', fieldName: 'PropertyDescription',initialWidth : 169, editable: false },
        { label: 'Product Type Description', fieldName: 'ProductTypeDescription',initialWidth : 195, editable: false },
        { label: 'Territory', fieldName: 'Territory',initialWidth : 94, editable: false },
        { label: 'Retailer Description', fieldName: 'RetailerDescription',initialWidth : 162, editable: false },
        { label: 'Revenue Type', fieldName: 'RevenueType',initialWidth : 125, editable: false },
        // { label: 'Amount Type', fieldName: 'AmountType', editable: false },
        // { label: 'Royalty Rate Type', fieldName: 'RoyaltyRateType', editable: false },
        { label: 'Royalty Rate %', fieldName: 'RoyaltyRate',initialWidth : 132, editable: false },
        { label: 'Q1', fieldName: 'Q1',initialWidth : 59, editable: false, type : "number"  },
        { label: 'Q2', fieldName: 'Q2',initialWidth : 59, editable: false, type : "number"  },
        { label: 'Q3', fieldName: 'Q3',initialWidth : 59, editable: false, type : "number"  },
        { label: 'Q4', fieldName: 'Q4',initialWidth : 59, editable: false, type : "number"  },
        { label: 'Q1 Adj', fieldName: 'Q1Adj',initialWidth : 82, editable: false, type : "number"  },
        { label: 'Q2 Adj', fieldName: 'Q2Adj',initialWidth : 82, editable: false, type : "number"  },
        { label: 'Q3 Adj', fieldName: 'Q3Adj',initialWidth : 82, editable: false, type : "number"  },
        { label: 'Q4 Adj', fieldName: 'Q4Adj',initialWidth : 82, editable: false, type : "number"  },
        { label: 'Total Amount', fieldName: 'TotalAmount',initialWidth : 125, editable: false , type : "number" }
    ]

    columnsRendered = false;
    scriptLoadedFrromRenderedCallBack = false
    profileInformationLoadedRenderedCallback = false
    connectedCallback() {
        if (!this.scriptLoadedFrromRenderedCallBack) {
            loadScript(this, PARSER)
                .then(() => {
                    this.scriptLoadedFrromRenderedCallBack = true;
                    console.log('parser script loaded...')
                })
                .catch(error => console.error(error));
        }
        if (!this.columnsRendered) {
            console.log('inside conneted callback')
            getForecastingItem({ recordId: this.recordId }).then((result) => {
                console.log('inside conneted callback > get Forecasting Items')
                this.relatedForecastingItemData = result;
                var currencyOptions = []
                var contractOptions = []
                var propertyOptions = []
                var retailerOptions = []
                var productOptions = []
                var territoryOptions = []
                getLookUps({}).then((result) => {
                    console.log('inside conneted callback > get lookups')
                    // console.log(result);
                    result.forEach((element, index) => {
                        // console.log(index + ':' + JSON.stringify(element));
                        switch (index) {
                            case 0:
                                Object.keys(element).forEach(Id => {
                                    // console.log(Id + ':' + element[Id]);
                                    currencyOptions.push({ label: element[Id], value: element[Id] })
                                })
                                break;
                            case 1:
                                Object.keys(element).forEach(Id => {
                                    // console.log(Id + ':' + element[Id]);
                                    productOptions.push({ label: element[Id], value: element[Id] })
                                })
                                break;
                            case 2:
                                Object.keys(element).forEach(Id => {
                                    // console.log(Id + ':' + element[Id]);
                                    retailerOptions.push({ label: element[Id], value: element[Id] })
                                })
                                break;
                            case 3:
                                Object.keys(element).forEach(Id => {
                                    // console.log(Id + ':' + element[Id]);
                                    propertyOptions.push({ label: element[Id], value: element[Id] })
                                })
                                break;
                            case 4:
                                Object.keys(element).forEach(Id => {
                                    // console.log(Id + ':' + element[Id]);
                                    territoryOptions.push({ label: element[Id], value: element[Id] })
                                })
                                break;
                            case 5:
                                Object.keys(element).forEach(Id => {
                                    // console.log(Id + ':' + element[Id]);
                                    contractOptions.push({ label: element[Id], value: element[Id] })
                                })
                                break;
                            default:
                                break;
                        }
                    })
                    this.columnsErrorCustom = [
                        {
                            label: 'Error Check', fieldName: 'Errors', editable: false, cellAttributes: {
                                class: { fieldName: 'errorColor' }
                            }
                        },
                        {
                            label: 'Contract', fieldName: 'Contract', type: 'picklist', initialWidth: 94 ,typeAttributes: {
                                placeholder: '--None--', options: contractOptions
                                , value: { fieldName: 'Contract' }
                                , context: { fieldName: 'Id' }
                                , label: 'Contract'
                            }, wrapText: true
                        },
                        {
                            label: 'Forecast Currency', fieldName: 'ForecastCurrency', type: 'picklist',initialWidth : 149 , typeAttributes: {
                                placeholder: '--None--', options: currencyOptions
                                , value: { fieldName: 'ForecastCurrency' }
                                , context: { fieldName: 'Id' }
                                , label: 'ForecastCurrency'
                            }, wrapText: true
                        },
                        {
                            label: 'Property Description', fieldName: 'PropertyDescription', type: 'picklist',initialWidth:169, typeAttributes: {
                                placeholder: '--None--', options: propertyOptions
                                , value: { fieldName: 'PropertyDescription' }
                                , context: { fieldName: 'Id' }
                                , label: 'PropertyDescription'
                            }, wrapText: true
                        },
                        {
                            label: 'Product Type Description', fieldName: 'ProductTypeDescription', type: 'picklist',initialWidth:195, typeAttributes: {
                                placeholder: '--None--', options: productOptions
                                , value: { fieldName: 'ProductTypeDescription' }
                                , context: { fieldName: 'Id' }
                                , label: 'ProductTypeDescription'
                            }, wrapText: true
                        },
                        {
                            label: 'Territory', fieldName: 'Territory', type: 'picklist',initialWidth:94, typeAttributes: {
                                placeholder: '--None--', options: territoryOptions
                                , value: { fieldName: 'Territory' }
                                , context: { fieldName: 'Id' }
                                , label: 'Territory'
                            }, wrapText: true
                        },
                        {
                            label: 'Retailer Description', fieldName: 'RetailerDescription', type: 'picklist',initialWidth:162, typeAttributes: {
                                placeholder: '--None--', options: retailerOptions
                                , value: { fieldName: 'RetailerDescription' }
                                , context: { fieldName: 'Id' }
                                , label: 'RetailerDescription'
                            }, wrapText: true
                        },
                        {
                            label: 'Revenue Type', fieldName: 'RevenueType', type: 'picklist',initialWidth:125, typeAttributes: {
                                placeholder: '--None--', options: [
                                    { label: '1-Royalties', value: '1-Royalties' },
                                    { label: '5-Other - Flat Fees', value: '5-Other - Flat Fees' },
                                ]
                                , value: { fieldName: 'RevenueType' }
                                , context: { fieldName: 'Id' }
                                , label: 'RevenueType'
                            }, wrapText: true
                        },

                        { label: 'Royalty Rate %', fieldName: 'RoyaltyRate',initialWidth:132, editable: true, wrapText: true },
                        { label: 'Q1', fieldName: 'Q1',initialWidth:59, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q2', fieldName: 'Q2',initialWidth:59, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q3', fieldName: 'Q3',initialWidth:59, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q4', fieldName: 'Q4',initialWidth:59, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q1 Adj', fieldName: 'Q1Adj',initialWidth:82, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q2 Adj', fieldName: 'Q2Adj',initialWidth:82, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q3 Adj', fieldName: 'Q3Adj',initialWidth:82, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q4 Adj', fieldName: 'Q4Adj',initialWidth:82, editable: true, wrapText: true, type : "number"  },
                        { label: 'Total Amount', fieldName: 'TotalAmount',initialWidth:125, editable: true, wrapText: true, type : "number"  }
                    ]
                    this.columnsErrorCustomPortal = [
                        {
                            label: 'Error Check', fieldName: 'Errors', editable: false, cellAttributes: {
                                class: { fieldName: 'errorColor' }
                            }
                        },
                        {
                            label: 'Contract', fieldName: 'Contract', type: 'picklist',initialWidth : 94, typeAttributes: {
                                placeholder: '--None--', options: contractOptions
                                , value: { fieldName: 'Contract' }
                                , context: { fieldName: 'Id' }
                                , label: 'Contract'
                            }, wrapText: true
                        },
                        {
                            label: 'Forecast Currency', fieldName: 'ForecastCurrency', type: 'picklist',initialWidth : 149, typeAttributes: {
                                placeholder: '--None--', options: currencyOptions
                                , value: { fieldName: 'ForecastCurrency' }
                                , context: { fieldName: 'Id' }
                                , label: 'ForecastCurrency',
                            }, wrapText: true
                        },
                        {
                            label: 'Property Description', fieldName: 'PropertyDescription', type: 'picklist',initialWidth : 169, typeAttributes: {
                                placeholder: '--None--', options: propertyOptions
                                , value: { fieldName: 'PropertyDescription' }
                                , context: { fieldName: 'Id' }
                                , label: 'PropertyDescription'
                            }, wrapText: true
                        },
                        {
                            label: 'Product Type Description', fieldName: 'ProductTypeDescription', type: 'picklist',initialWidth : 195, typeAttributes: {
                                placeholder: '--None--', options: productOptions
                                , value: { fieldName: 'ProductTypeDescription' }
                                , context: { fieldName: 'Id' }
                                , label: 'ProductTypeDescription'
                            }, wrapText: true
                        },
                        {
                            label: 'Territory', fieldName: 'Territory', type: 'picklist',initialWidth : 94, typeAttributes: {
                                placeholder: '--None--', options: territoryOptions
                                , value: { fieldName: 'Territory' }
                                , context: { fieldName: 'Id' }
                                , label: 'Territory'
                            }, wrapText: true
                        },
                        {
                            label: 'Retailer Description', fieldName: 'RetailerDescription',initialWidth : 162, type: 'picklist', typeAttributes: {
                                placeholder: '--None--', options: retailerOptions
                                , value: { fieldName: 'RetailerDescription' }
                                , context: { fieldName: 'Id' }
                                , label: 'RetailerDescription'
                            }, wrapText: true
                        },
                        {
                            label: 'Revenue Type', fieldName: 'RevenueType', type: 'picklist',initialWidth : 125, typeAttributes: {
                                placeholder: '--None--', options: [
                                    { label: '1-Royalties', value: '1-Royalties' },
                                    { label: '5-Other - Flat Fees', value: '5-Other - Flat Fees' },
                                ]
                                , value: { fieldName: 'RevenueType' }
                                , context: { fieldName: 'Id' }
                                , label: 'RevenueType'
                            }, wrapText: true
                        },

                        { label: 'Royalty Rate %', fieldName: 'RoyaltyRate',initialWidth : 132, editable: true, wrapText: true },
                        { label: 'Q1', fieldName: 'Q1',initialWidth : 59, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q2', fieldName: 'Q2',initialWidth : 59, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q3', fieldName: 'Q3',initialWidth : 59, editable: true, wrapText: true, type : "number"  },
                        { label: 'Q4', fieldName: 'Q4',initialWidth : 59, editable: true, wrapText: true, type : "number"  },
                        { label: 'Total Amount', fieldName: 'TotalAmount',initialWidth : 125, editable: true, wrapText: true, type : "number"  }
                    ]
                    this.columnsRendered = true;
                    console.log('outside conneted callback > get lookups')
                }).catch(e => {
                    console.log('error getting lookups' + e);
                })
                this.cleanDataFromRelations();
                console.log('outside conneted callback > get Forecasting Items')
            }).catch(error => {
                console.log(error);
            })
            console.log('outside conneted callback')
        }
        if (!this.profileInformationLoadedRenderedCallback) {
            var profileName = '';
            getProfile().then((result) => {
                profileName = result
                console.log(result)
                if (profileName == 'CP - Category Manager' || profileName == 'System Administrator' || profileName == 'CP - Global Ops') {
                    this.internalUser = true
                }
                this.profileInformationLoadedRenderedCallback = true;
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    cleanDataFromRelations() {
        console.log('inside clean data from relations')
        this.tableData = [];
        this.errorCount = 0;
        // console.log(JSON.parse(JSON.stringify(this.relatedForecastingItemData)));
        this.relatedForecastingItemData.forEach((fItem) => {
            var cleanRecord = {};
            cleanRecord["Territory"] = fItem["CP_Territory__r"] ? (fItem["CP_Territory__r"].Name ? (fItem["CP_Territory__r"].Name) : "") : ""
            cleanRecord["PropertyDescription"] = fItem["Property__r"] ? (fItem["Property__r"].Name ? fItem["Property__r"].Name : "") : "";
            cleanRecord["RetailerDescription"] = fItem["Retailer__r"] ? (fItem["Retailer__r"].Name ? fItem["Retailer__r"].Name : "") : "";
            cleanRecord["ProductTypeDescription"] = fItem["CP_Product_Type__r"] ? (fItem["CP_Product_Type__r"].Name ? fItem["CP_Product_Type__r"].Name : "") : ""
            cleanRecord["ForecastCurrency"] = fItem["Forecast_Currency__r"] ? (fItem["Forecast_Currency__r"].Name ? fItem["Forecast_Currency__r"].Name : "") : "";
            cleanRecord["Contract"] = fItem["CP_Contract__r"] ? (fItem["CP_Contract__r"].Name ? fItem["CP_Contract__r"].Name : "") : "";
            cleanRecord["RoyaltyRate"] = fItem["Royalty_Rate__c"] ? (fItem["Royalty_Rate__c"] + '%') : "" ;
            cleanRecord["TotalAmount"] = fItem["Total_Amount__c"] ? fItem["Total_Amount__c"] : "";
            cleanRecord["RevenueType"] = fItem["Revenue_Type__c"] ? fItem["Revenue_Type__c"] : "";
            cleanRecord["Q1"] = fItem["Q1__c"] ? fItem["Q1__c"] : "";
            cleanRecord["Q2"] = fItem["Q2__c"] ? fItem["Q2__c"] : "";
            cleanRecord["Q3"] = fItem["Q3__c"] ? fItem["Q3__c"] : "";
            cleanRecord["Q4"] = fItem["Q4__c"] ? fItem["Q4__c"] : "";
            cleanRecord["Q1Adj"] = fItem["Q1_Adj__c"] ? fItem["Q1_Adj__c"] : "";
            cleanRecord["Q2Adj"] = fItem["Q2_Adj__c"] ? fItem["Q2_Adj__c"] : "";
            cleanRecord["Q3Adj"] = fItem["Q3_Adj__c"] ? fItem["Q3_Adj__c"] : "";
            cleanRecord["Q4Adj"] = fItem["Q4_Adj__c"] ? fItem["Q4_Adj__c"] : "";
            cleanRecord["Id"] = fItem["Id"] ? fItem["Id"] : "";
            cleanRecord["Name"] = fItem["Name"] ? fItem["Name"] : "";
            cleanRecord["Errors"] = fItem["Errors__c"] ? fItem["Errors__c"] : "No Errors";
            cleanRecord["errorColor"] = (cleanRecord["Errors"] != 'No Errors') ? 'slds-text-color_error' : 'slds-text-color_success';
            this.errorCount += parseInt((cleanRecord["Errors"] != 'No Errors') ? 1 : 0)
            const status = fItem["Forecast__r"] ? (fItem["Forecast__r"].Forecast_Status__c ? fItem["Forecast__r"].Forecast_Status__c : '') : '';
            if (status == 'Submitted' || status == 'Rejected') {
                this.submitted = true;
            }
            if (status == 'Pending Approval') {
                this.pendingApproval = true;
            }

            this.tableData.push(cleanRecord);
        })
        console.log(this.tableData)
        this.lastSavedData = JSON.parse(JSON.stringify(this.tableData));
        this.loadingSpinner = false
        console.log('outside clean data from relations')
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
            if (this.cycleClosed) {
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
    importClicked(event) {
        console.log('import clicked')
        this.modalOpen = true
    }
    modalClose(event) {
        this.modalOpen = false;
        this.showOptionalNote = false;
        this.fileName = ''
        this.fileUploaded = false;
    }
    uploadedFileHandler(event) {
        console.log('uploadedFileHandler')
        this.fileName = event.target.files[0].name;
        if (!this.fileName.includes('.csv')) {
            this.fileNotSupported = true;
            this.fileUploaded = false;
        }
        else {
            this.fileNotSupported = false;
        }
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            Papa.parse(file, {
                quoteChar: '"',
                header: 'true',
                complete: (results) => {
                    if (!this.fileNotSupported)
                        this.fileUploaded = true;
                    console.log(results)
                    console.log(results.data);
                    this.fileData = results.data
                },
                error: (error) => {
                    console.error(error);
                }
            })
        }
    }
    addToExistingClicked(event) {
        console.log('Add to existing')
        this.spinnerInModal = true
        var dataForApex = this.cleanFileData()
        this.insertFileData(dataForApex)
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
                record["Q1__c"] = item["Q1"] ? (Number(item["Q1"].replaceAll(',', ''))) : 0
                record["Q2__c"] = item["Q2"] ? (Number(item["Q2"].replaceAll(',', ''))) : 0
                record["Q3__c"] = item["Q3"] ? (Number(item["Q3"].replaceAll(',', ''))) : 0
                record["Q4__c"] = item["Q4"] ? (Number(item["Q4"].replaceAll(',', ''))) : 0
                record["PropertyDescription"] = item["Property Description"]
                record["RetailerDescription"] = item["Retailer Description"]
                record["ProductTypeDescription"] = item["Product Type Description"]
                record["Contract"] = item["Contract"]
                // record["AmountType"] = item["Amount Type"]
                // record["BudgetCycle"] = item["Budget Cycle"]
                record["Territory"] = item["Territory"]
                // record["RoyaltyRateType"] = item["Royalty Rate Type"]
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
        //console.log(JSON.stringify(data));
        createForecastingItem({ data: JSON.stringify(data), forecastId: this.recordId }).then((result) => {
            console.log('Records Inserted');
            // console.log(JSON.parse(JSON.stringify(result)))
            this.relatedForecastingItemData = result;
            this.cleanDataFromRelations();
            // this.tableData = []
            this.spinnerInModal = false;
            this.modalOpen = false;
            this.fileUploaded = false
        }).catch((err) => {
            console.log('Error' + JSON.stringify(err));
            this.spinnerInModal = false;
            this.modalOpen = false;
            this.fileUploaded = false
            if (this.cycleClosed) {
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
    validateClicked(event) {
        console.log('validate clicked')
        // this.loadingSpinner = true;
        // if (this.errorCount)
        this.errorReported = true;
        setTimeout(function () {
            this.loadingSpinner = false;
        }.bind(this), 2000);
        this.underValidation = false;
    }
    hideValidations(event) {
        this.errorReported = false;
        this.underValidation = true;
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
                if (this.cycleClosed) {
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
                        if (this.cycleClosed) {
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
    showDelete(){
        this.deleteButton = true;
    }
    deleteClicked(event) {
        this.loadingSpinner = true
        console.log('delete clicked')
        var idsToBeDeleted = new Set()
        if (this.underValidation)
            var checkedRows = this.template.querySelector('lightning-datatable');
        else
            var checkedRows = this.template.querySelector('c-cp_custom-data-table');
        var selectedRows = JSON.parse(JSON.stringify(checkedRows.selectedRows))
        console.log(selectedRows)
        selectedRows.forEach(element => {
            // console.log(element)
            idsToBeDeleted.add(element)
        })
        console.log(idsToBeDeleted)
        if (this.underValidation)
            this.template.querySelector('lightning-datatable').selectedRows = [];
        else
            this.template.querySelector('c-cp_custom-data-table').selectedRows = [];
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
                if (this.cycleClosed) {
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
    updateDataValues(updateItem) {
        console.log('in update data values')
        let copyData = [... this.tableData];
        console.log(copyData)
        copyData.forEach(item => {
            if (item.Id === updateItem.Id) {
                for (let field in updateItem) {
                    item[field] = updateItem[field];
                }
            }
        });

        //write changes back to original data
        this.data = [...copyData];
        console.log(this.data)
    }

    updateDraftValues(updateItem) {
        console.log('in update draft values')
        let draftValueChanged = false;
        let copyDraftValues = [...this.draftValues];
        console.log(copyDraftValues)
        //store changed value to do operations
        //on save. This will enable inline editing &
        //show standard cancel & save button
        copyDraftValues.forEach(item => {
            if (item.Id === updateItem.Id) {
                for (let field in updateItem) {
                    item[field] = updateItem[field];
                }
                draftValueChanged = true;
            }
        });

        if (draftValueChanged) {
            this.draftValues = [...copyDraftValues];
            console.log(this.draftValues)
        } else {
            this.draftValues = [...copyDraftValues, updateItem];
            console.log(this.draftValues)
        }
    }

    //listener handler to get the context and data
    //updates datatable
    picklistChanged(event) {
        console.log('in picklist changed')
        event.stopPropagation();
        let dataRecieved = event.detail.data;
        console.log(dataRecieved)
        console.log(dataRecieved.value)
        console.log(dataRecieved.Id)
        console.log(dataRecieved.field)
        let updatedItem;
        if (dataRecieved.field == "Contract")
            updatedItem = { Id: dataRecieved.Id, Contract: dataRecieved.value};
        else if (dataRecieved.field == "ForecastCurrency")
            updatedItem = { Id: dataRecieved.Id, ForecastCurrency: dataRecieved.value};
        else if (dataRecieved.field == "PropertyDescription")
            updatedItem = { Id: dataRecieved.Id, PropertyDescription: dataRecieved.value};
        else if (dataRecieved.field == "ProductTypeDescription")
            updatedItem = { Id: dataRecieved.Id, ProductTypeDescription: dataRecieved.value};
        else if (dataRecieved.field == "Territory")
            updatedItem = { Id: dataRecieved.Id, Territory: dataRecieved.value};
        else if (dataRecieved.field == "RetailerDescription")
            updatedItem = { Id: dataRecieved.Id, RetailerDescription: dataRecieved.value};
        else if (dataRecieved.field == "RevenueType")
            updatedItem = { Id: dataRecieved.Id, RevenueType: dataRecieved.value};
        console.log(updatedItem)
        this.updateDraftValues(updatedItem);
        this.updateDataValues(updatedItem);
    }

    handleSelection(event) {
        event.stopPropagation();
        console.log('in handle selection')
        let dataRecieved = event.detail.data;
        let updatedItem = { Id: dataRecieved.key, ParentId: dataRecieved.selectedId };
        this.updateDraftValues(updatedItem);
        this.updateDataValues(updatedItem);
    }

    //handler to handle cell changes & update values in draft values
    handleCellChange(event) {
        console.log('in handle cell change')
        console.log(event.detail.draftValues[0])
        this.updateDraftValues(event.detail.draftValues[0]);
    }

    handleSave(event) {
        console.log('in handle save')
        console.log('Updated items', this.draftValues);
        //save last saved copy
        this.lastSavedData = JSON.parse(JSON.stringify(this.tableData));
        console.log(JSON.parse(JSON.stringify(this.draftValues)))
        console.log(this.tableData)

        this.saveChangesDatatable(JSON.parse(JSON.stringify(this.draftValues)))

        this.draftValues = [];
    }

    handleCancel(event) {
        //remove draftValues & revert data changes
        console.log('in handle cancel')
        this.tableData = JSON.parse(JSON.stringify(this.lastSavedData));
        this.draftValues = [];
    }
    saveChangesDatatable(editedValues) {
        console.log('saving changes...')
        this.loadingSpinner = true
        var recordsToBeUpdated = []
        // this.editedValues = JSON.parse(JSON.stringify(event.detail.draftValues));
        console.log(editedValues)
        editedValues.forEach(item => {
            var record = {}
            // console.log(item)
            record["Id"] = item.Id
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
                record["Royalty_Rate__c"] = parseFloat(item["RoyaltyRate"])?parseFloat(item["RoyaltyRate"]):0;
            if (item["Q1"] != undefined)
                record["Q1__c"] = Number(item["Q1"])
            if (item["Q2"] != undefined)
                record["Q2__c"] = Number(item["Q2"])
            if (item["Q3"] != undefined)
                record["Q3__c"] = Number(item["Q3"])
            if (item["Q4"] != undefined)
                record["Q4__c"] = Number(item["Q4"])
            if (item["Q1Adj"] != undefined)
                record["Q1_Adj__c"] = Number(item["Q1Adj"])
            if (item["Q2Adj"] != undefined)
                record["Q2_Adj__c"] = Number(item["Q2Adj"])
            if (item["Q3Adj"] != undefined)
                record["Q3_Adj__c"] = Number(item["Q3Adj"])
            if (item["Q4Adj"] != undefined)
                record["Q4_Adj__c"] = Number(item["Q4Adj"])
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
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record updated',
                        variant: 'success'
                    })
                );
                console.log('Data updated')
            }).catch(err => {
                console.log(err);
                this.loadingSpinner = false;
            })
        }.bind(this), 1000);
    }
    maximizeDatatable() {
        /*
        https://wb--cptechup.lightning.force.com
        https://cptechup-wbpartner.cs195.force.com
        */
        if (window.location.origin.includes('lightning')) {
            this[NavigationMixin.Navigate]({
                "type": "standard__component",
                "attributes": {
                    "componentName": "c__CP_MaximizedForecastingItemGrid",
                },
                state: {
                    c__recordId: this.recordId
                }
            });
        }
        if (!window.location.origin.includes('lightning')) {
            this[NavigationMixin.Navigate]({
                type: 'comm__namedPage',
                attributes: {
                    name: 'maximized_grid_view__c'
                },
                state: {
                    recordId: this.recordId
                }
            })
        }
    }
    minimizeDatatable() {
        if (window.location.origin.includes('lightning')) {
            this[NavigationMixin.Navigate]({
                type: "standard__recordPage",
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'CP_Forecast__c',
                    actionName: 'view'

                },
            });
        }
        if (!window.location.origin.includes('lightning')) {
            this[NavigationMixin.Navigate]({
                type: "standard__recordPage",
                attributes: {
                    recordId: this.recordId,
                    objectApiName: 'CP_Forecast__c',
                    actionName: 'view'

                },
            });
        }
    }
}