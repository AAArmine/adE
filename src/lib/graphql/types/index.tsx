import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
  Decimal: any;
};

export type Address = {
  __typename?: 'Address';
  addressLine2?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  contactData?: Maybe<ContactData>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  eanNr?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  street?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  addressLine2?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contactData?: InputMaybe<ContactDataInput>;
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  eanNr?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  street?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type Ap24DeletePart = {
  __typename?: 'Ap24DeletePart';
  carItemNumber?: Maybe<Scalars['String']>;
  companyId: Scalars['ID'];
  dateTimeModified: Scalars['DateTime'];
  id: Scalars['ID'];
  itemNumber: Scalars['String'];
};

export type Ap24DeletePartsSearchResult = {
  __typename?: 'Ap24DeletePartsSearchResult';
  items: Array<Ap24DeletePart>;
  totalRows: Scalars['Int'];
};

export type Ap24Part = {
  __typename?: 'Ap24Part';
  alternativeNumbers?: Maybe<Scalars['String']>;
  bodyColor?: Maybe<Scalars['String']>;
  carBody?: Maybe<Scalars['String']>;
  carDoorsType?: Maybe<Scalars['String']>;
  carFirstRegistrationDate: Scalars['DateTime'];
  carItemNumber?: Maybe<Scalars['String']>;
  carItemTypeId?: Maybe<Scalars['ID']>;
  carTypeApprovalDate?: Maybe<Scalars['String']>;
  carTypeApprovalNo?: Maybe<Scalars['String']>;
  carVinCode?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  companyId: Scalars['ID'];
  condition?: Maybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  dateTimeModified: Scalars['DateTime'];
  engineCode?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  equipmentModel?: Maybe<Scalars['String']>;
  euroNorm?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  images: Array<ImageResource>;
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePrice?: Maybe<Scalars['Float']>;
  insuranceTxt?: Maybe<Scalars['String']>;
  interiorColor?: Maybe<Scalars['String']>;
  itemCode?: Maybe<Scalars['String']>;
  itemNumber: Scalars['String'];
  itemPartId: Scalars['ID'];
  itemTypeId: Scalars['ID'];
  kiloWatt?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  readOnPart?: Maybe<Scalars['String']>;
  registrationNo?: Maybe<Scalars['String']>;
  shelfNumber?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  transmissionCode?: Maybe<Scalars['String']>;
  transmissionType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  warehouseInputDate: Scalars['DateTime'];
  year?: Maybe<Scalars['Int']>;
};

export type Ap24PartsSearchInput = {
  companyId?: InputMaybe<Scalars['ID']>;
  dateHourBack?: InputMaybe<Scalars['Int']>;
  maxRows?: InputMaybe<Scalars['Int']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  pageSort?: InputMaybe<Scalars['String']>;
};

export type Ap24PartsSearchResult = {
  __typename?: 'Ap24PartsSearchResult';
  items: Array<Ap24Part>;
  totalRows: Scalars['Int'];
};

export type AuctionHouseMessage = {
  __typename?: 'AuctionHouseMessage';
  carItemNumber?: Maybe<Scalars['String']>;
  customerCompanyName?: Maybe<Scalars['String']>;
  customerCreatorUserName?: Maybe<Scalars['String']>;
  externalInvoice_Id: Scalars['ID'];
  fromCompany_Id: Scalars['ID'];
  fromUserId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  inWorkDate?: Maybe<Scalars['DateTime']>;
  invoice_Id: Scalars['ID'];
  itemCode?: Maybe<Scalars['String']>;
  itemId: Scalars['ID'];
  itemNumber?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  price1?: Maybe<Scalars['Float']>;
  priceBit: Scalars['Float'];
  priceOriginal?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  textStatus?: Maybe<Scalars['Int']>;
  toCompanyId: Scalars['ID'];
  toUserId?: Maybe<Scalars['ID']>;
};

export type AuctionHouseMessageSaveInput = {
  carItemNumber?: InputMaybe<Scalars['String']>;
  externalInvoiceId?: InputMaybe<Scalars['ID']>;
  fromCompanyId?: InputMaybe<Scalars['ID']>;
  fromUserId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  inWorkDate?: InputMaybe<Scalars['DateTime']>;
  invoiceId?: InputMaybe<Scalars['ID']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemId?: InputMaybe<Scalars['ID']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  priceBit?: InputMaybe<Scalars['Float']>;
  priceOriginal?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Int']>;
  toCompanyId?: InputMaybe<Scalars['ID']>;
  toUserId?: InputMaybe<Scalars['ID']>;
};

export type AuctionHouseUpdateBitInput = {
  id: Scalars['ID'];
  priceBid: Scalars['Float'];
  priceChange: Scalars['Float'];
};

export type BusinessPartner = {
  __typename?: 'BusinessPartner';
  accountNr?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<Address>>;
  addressesDefault?: Maybe<Array<Address>>;
  addressesShipTo?: Maybe<Array<Address>>;
  blockedStatus?: Maybe<Scalars['String']>;
  commingFromC5?: Maybe<Scalars['Int']>;
  contactPersons?: Maybe<Array<ContactPerson>>;
  externalCompanyId?: Maybe<Scalars['Int']>;
  financialInfo?: Maybe<BusinessPartnerFinancialInfo>;
  id?: Maybe<Scalars['ID']>;
  isExternalUpdated?: Maybe<Scalars['Boolean']>;
  isWebBusinessPartner?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type BusinessPartnerBalanceInfo = {
  __typename?: 'BusinessPartnerBalanceInfo';
  accountNr?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  dueDateTime: Scalars['DateTime'];
  invoiceNumber?: Maybe<Scalars['String']>;
};

export type BusinessPartnerFinancialInfo = {
  __typename?: 'BusinessPartnerFinancialInfo';
  balance?: Maybe<Scalars['Float']>;
  balanceMax?: Maybe<Scalars['Float']>;
  debt?: Maybe<Scalars['Float']>;
  financialEmail?: Maybe<Scalars['String']>;
  financialNotes?: Maybe<Scalars['String']>;
  group?: Maybe<BusinessPartnerGroup>;
  paymentTermsId?: Maybe<Scalars['Int']>;
  priceGroup?: Maybe<Scalars['String']>;
  vatNumber?: Maybe<Scalars['String']>;
  vatPercent?: Maybe<Scalars['Int']>;
};

export type BusinessPartnerFinancialInfoInput = {
  balance?: InputMaybe<Scalars['Float']>;
  balanceMax?: InputMaybe<Scalars['Float']>;
  debt?: InputMaybe<Scalars['Float']>;
  financialEmail?: InputMaybe<Scalars['String']>;
  financialNotes?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<BusinessPartnerGroupInput>;
  paymentTermsId?: InputMaybe<Scalars['Int']>;
  priceGroup?: InputMaybe<Scalars['String']>;
  vatNumber?: InputMaybe<Scalars['String']>;
  vatPercent?: InputMaybe<Scalars['Int']>;
};

export type BusinessPartnerGroup = {
  __typename?: 'BusinessPartnerGroup';
  code?: Maybe<Scalars['Int']>;
  discountAccountNumber?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  netSalesAccountNumber?: Maybe<Scalars['Int']>;
  nonVATAccountNumber?: Maybe<Scalars['Int']>;
  transportationAccountNumber?: Maybe<Scalars['Int']>;
  vatAccountNumber?: Maybe<Scalars['Int']>;
  vatPercent?: Maybe<Scalars['Int']>;
};

export type BusinessPartnerGroupInput = {
  code?: InputMaybe<Scalars['Int']>;
  discountAccountNumber?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  netSalesAccountNumber?: InputMaybe<Scalars['Int']>;
  nonVatAccountNumber?: InputMaybe<Scalars['Int']>;
  transportationAccountNumber?: InputMaybe<Scalars['Int']>;
  vatAccountNumber?: InputMaybe<Scalars['Int']>;
  vatPercent?: InputMaybe<Scalars['Int']>;
};

export type BusinessPartnerInput = {
  accountNr?: InputMaybe<Scalars['String']>;
  addresses?: InputMaybe<Array<AddressInput>>;
  addressesDefault?: InputMaybe<Array<AddressInput>>;
  addressesShipTo?: InputMaybe<Array<AddressInput>>;
  blockedStatus?: InputMaybe<Scalars['String']>;
  commingFromC5?: InputMaybe<Scalars['Int']>;
  contactPersons?: InputMaybe<Array<ContactPersonInput>>;
  externalCompanyId?: InputMaybe<Scalars['Int']>;
  financialInfo: BusinessPartnerFinancialInfoInput;
  id?: InputMaybe<Scalars['ID']>;
  isExternalUpdated?: InputMaybe<Scalars['Boolean']>;
  isWebBusinessPartner?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type BusinessPartnerSearchInput = {
  ediCustomersOnly?: InputMaybe<Scalars['Boolean']>;
  externalCompanyId?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
  webBusinessPartnersOnly?: InputMaybe<Scalars['Boolean']>;
};

export type BusinessPartnerSearchRecord = {
  __typename?: 'BusinessPartnerSearchRecord';
  accountNr?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressDescription?: Maybe<Scalars['String']>;
  addressId?: Maybe<Scalars['Int']>;
  balance?: Maybe<Scalars['Float']>;
  blockedStatus?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  commingFromC5?: Maybe<Scalars['Int']>;
  contactPersonId?: Maybe<Scalars['Int']>;
  contactPersonMobilePhone?: Maybe<Scalars['String']>;
  contactPersonName?: Maybe<Scalars['String']>;
  contactPersonPhone?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  eanNr?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  externalCompanyId?: Maybe<Scalars['Int']>;
  fax?: Maybe<Scalars['String']>;
  financialNotes?: Maybe<Scalars['String']>;
  fullAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isExternalUpdated?: Maybe<Scalars['Boolean']>;
  isWebBusinessPartner?: Maybe<Scalars['Boolean']>;
  mobilePhone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  priceGroup?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
  vatNumber?: Maybe<Scalars['String']>;
  webPage?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type Car = {
  __typename?: 'Car';
  appraiser?: Maybe<Scalars['String']>;
  availableDamages: Array<IdNameType>;
  availableEquipments: Array<EquipmentType>;
  availableInfoRollsOns: Array<IdNameType>;
  bodyType?: Maybe<Scalars['String']>;
  carDeal?: Maybe<Scalars['Int']>;
  carDisassembled: Scalars['Boolean'];
  carScraped?: Maybe<Scalars['Boolean']>;
  carServiceBook: Scalars['Boolean'];
  carUnderScrapping: Scalars['Boolean'];
  cardNumber?: Maybe<Scalars['String']>;
  codes?: Maybe<CarCodes>;
  comments?: Maybe<Scalars['String']>;
  componentsNotes?: Maybe<Scalars['String']>;
  countryRegisteredIn?: Maybe<Scalars['String']>;
  damageNotes?: Maybe<Scalars['String']>;
  distanceRun?: Maybe<Scalars['Int']>;
  doors?: Maybe<Scalars['String']>;
  engine?: Maybe<CarEngine>;
  equipmentModel?: Maybe<Scalars['String']>;
  equipmentNotes?: Maybe<Scalars['String']>;
  euroNorm?: Maybe<Scalars['Int']>;
  extColor?: Maybe<FactoryColor>;
  extendedvatPercent?: Maybe<Scalars['Int']>;
  facelift?: Maybe<Scalars['String']>;
  finaldriveNotes?: Maybe<Scalars['String']>;
  gearboxNotes?: Maybe<Scalars['String']>;
  gearboxSn?: Maybe<Scalars['String']>;
  gearboxType?: Maybe<Scalars['String']>;
  genralDocumentFiles: Array<FileResource>;
  hasImages?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  initialsNotes?: Maybe<Scalars['String']>;
  insuranceCompany?: Maybe<Scalars['String']>;
  intColor?: Maybe<FactoryColor>;
  isCarSold: Scalars['Boolean'];
  isMainboard: Scalars['Boolean'];
  itemCode?: Maybe<Scalars['String']>;
  itemNumber?: Maybe<Scalars['String']>;
  itemTypeId?: Maybe<Scalars['Int']>;
  keys?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  leakage: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  mainBoardNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  otherNotes?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  platesDeliverTaxManBy?: Maybe<Scalars['String']>;
  platesDeliverTaxManDt?: Maybe<Scalars['DateTime']>;
  platesDismountBy?: Maybe<Scalars['String']>;
  platesDismountDt?: Maybe<Scalars['DateTime']>;
  prodCountry?: Maybe<Scalars['String']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  receivedDate?: Maybe<Scalars['DateTime']>;
  registrationNo?: Maybe<Scalars['String']>;
  registriesDt?: Maybe<Scalars['DateTime']>;
  removedPayingTaxesDt?: Maybe<Scalars['DateTime']>;
  repairPrice?: Maybe<Scalars['Float']>;
  reportFiles: Array<FileResource>;
  reprintedVin: Scalars['Boolean'];
  retailPrice?: Maybe<Scalars['Float']>;
  rimSize?: Maybe<Scalars['Int']>;
  specialNotes?: Maybe<Scalars['String']>;
  status?: Maybe<CarStatus>;
  subtype?: Maybe<Scalars['String']>;
  supplierAccountNo?: Maybe<Scalars['String']>;
  supplierAddress1?: Maybe<Scalars['String']>;
  supplierAddress2?: Maybe<Scalars['String']>;
  supplierCountry?: Maybe<Scalars['String']>;
  supplierLicenceNo?: Maybe<Scalars['String']>;
  supplierName?: Maybe<Scalars['String']>;
  supplierPhone?: Maybe<Scalars['String']>;
  supplierPickupLocation?: Maybe<Scalars['String']>;
  supplierPostalCity?: Maybe<Scalars['String']>;
  supplierReceiver?: Maybe<Scalars['String']>;
  totalEarningsNotes?: Maybe<Scalars['String']>;
  transportationPrice?: Maybe<Scalars['Float']>;
  typeApprovalDt?: Maybe<Scalars['String']>;
  typeApprovalNm?: Maybe<Scalars['String']>;
  van: Scalars['Boolean'];
  vin?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type CarCodes = {
  __typename?: 'CarCodes';
  immobilizerCode?: Maybe<Scalars['String']>;
  keyCode?: Maybe<Scalars['String']>;
  radioCode?: Maybe<Scalars['String']>;
};

export type CarCodesInput = {
  immobilizerCode?: InputMaybe<Scalars['String']>;
  keyCode?: InputMaybe<Scalars['String']>;
  radioCode?: InputMaybe<Scalars['String']>;
};

export type CarEngine = {
  __typename?: 'CarEngine';
  code?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  power?: Maybe<Scalars['Float']>;
  powerType?: Maybe<Scalars['String']>;
  rpm?: Maybe<Scalars['Int']>;
  serialNm?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CarEngineInput = {
  code?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['Float']>;
  powerType?: InputMaybe<Scalars['String']>;
  rpm?: InputMaybe<Scalars['Int']>;
  serialNm?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type CarInput = {
  appraiser?: InputMaybe<Scalars['String']>;
  availableDamages: Array<IdNameTypeInput>;
  availableEquipments: Array<EquipmentTypeInput>;
  availableInfoRollsOns: Array<IdNameTypeInput>;
  bodyType?: InputMaybe<Scalars['String']>;
  carDeal?: InputMaybe<Scalars['Int']>;
  carDisassembled: Scalars['Boolean'];
  carScraped?: InputMaybe<Scalars['Boolean']>;
  carServiceBook: Scalars['Boolean'];
  carUnderScrapping: Scalars['Boolean'];
  cardNumber?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<CarCodesInput>;
  comments?: InputMaybe<Scalars['String']>;
  componentsNotes?: InputMaybe<Scalars['String']>;
  countryRegisteredIn?: InputMaybe<Scalars['String']>;
  damageNotes?: InputMaybe<Scalars['String']>;
  distanceRun?: InputMaybe<Scalars['Int']>;
  doors?: InputMaybe<Scalars['String']>;
  engine?: InputMaybe<CarEngineInput>;
  equipmentModel?: InputMaybe<Scalars['String']>;
  equipmentNotes?: InputMaybe<Scalars['String']>;
  euroNorm?: InputMaybe<Scalars['Int']>;
  extColor?: InputMaybe<FactoryColorInput>;
  extendedvatPercent?: InputMaybe<Scalars['Int']>;
  facelift?: InputMaybe<Scalars['String']>;
  finaldriveNotes?: InputMaybe<Scalars['String']>;
  gearboxNotes?: InputMaybe<Scalars['String']>;
  gearboxSn?: InputMaybe<Scalars['String']>;
  gearboxType?: InputMaybe<Scalars['String']>;
  hasImages?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  initialsNotes?: InputMaybe<Scalars['String']>;
  insuranceCompany?: InputMaybe<Scalars['String']>;
  intColor?: InputMaybe<FactoryColorInput>;
  isCarSold: Scalars['Boolean'];
  isMainboard: Scalars['Boolean'];
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  itemTypeId?: InputMaybe<Scalars['Int']>;
  keys?: InputMaybe<Scalars['Int']>;
  kilometrage?: InputMaybe<Scalars['Int']>;
  leakage: Scalars['Boolean'];
  location?: InputMaybe<Scalars['String']>;
  mainBoardNumber?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  otherNotes?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Int']>;
  platesDeliverTaxManBy?: InputMaybe<Scalars['String']>;
  platesDeliverTaxManDt?: InputMaybe<Scalars['DateTime']>;
  platesDismountBy?: InputMaybe<Scalars['String']>;
  platesDismountDt?: InputMaybe<Scalars['DateTime']>;
  prodCountry?: InputMaybe<Scalars['String']>;
  purchasePrice?: InputMaybe<Scalars['Float']>;
  receivedDate?: InputMaybe<Scalars['DateTime']>;
  registrationNo?: InputMaybe<Scalars['String']>;
  registriesDt?: InputMaybe<Scalars['DateTime']>;
  removedPayingTaxesDt?: InputMaybe<Scalars['DateTime']>;
  repairPrice?: InputMaybe<Scalars['Float']>;
  reprintedVin: Scalars['Boolean'];
  retailPrice?: InputMaybe<Scalars['Float']>;
  rimSize?: InputMaybe<Scalars['Int']>;
  specialNotes?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<CarStatusInput>;
  subtype?: InputMaybe<Scalars['String']>;
  supplierAccountNo?: InputMaybe<Scalars['String']>;
  supplierAddress1?: InputMaybe<Scalars['String']>;
  supplierAddress2?: InputMaybe<Scalars['String']>;
  supplierCountry?: InputMaybe<Scalars['String']>;
  supplierLicenceNo?: InputMaybe<Scalars['String']>;
  supplierName?: InputMaybe<Scalars['String']>;
  supplierPhone?: InputMaybe<Scalars['String']>;
  supplierPickupLocation?: InputMaybe<Scalars['String']>;
  supplierPostalCity?: InputMaybe<Scalars['String']>;
  supplierReceiver?: InputMaybe<Scalars['String']>;
  totalEarningsNotes?: InputMaybe<Scalars['String']>;
  transportationPrice?: InputMaybe<Scalars['Float']>;
  typeApprovalDt?: InputMaybe<Scalars['String']>;
  typeApprovalNm?: InputMaybe<Scalars['String']>;
  van: Scalars['Boolean'];
  vin?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type CarMainBoardItem = {
  __typename?: 'CarMainBoardItem';
  id: Scalars['ID'];
  mainBoardNumber: Scalars['String'];
};

export type CarSaveInput = {
  car: CarInput;
  newSeriesId?: InputMaybe<Scalars['String']>;
};

export type CarSearchRecord = {
  __typename?: 'CarSearchRecord';
  cardNumber?: Maybe<Scalars['String']>;
  hasImages?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  itemCode?: Maybe<Scalars['String']>;
  itemTypeId?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  receivedDate?: Maybe<Scalars['DateTime']>;
  registrationNo?: Maybe<Scalars['String']>;
  repairPrice?: Maybe<Scalars['Float']>;
  retailPrice?: Maybe<Scalars['Float']>;
  transportationPrice?: Maybe<Scalars['Float']>;
  vin?: Maybe<Scalars['String']>;
};

export type CarStatus = {
  __typename?: 'CarStatus';
  cardCreatedBy?: Maybe<Scalars['String']>;
  cardCreatedDt: Scalars['DateTime'];
  envProcBy?: Maybe<Scalars['String']>;
  envProcDeadlineDt?: Maybe<Scalars['DateTime']>;
  envProcDt?: Maybe<Scalars['DateTime']>;
  envProcFinalRemovalBy?: Maybe<Scalars['String']>;
  envProcFinalRemovalDt?: Maybe<Scalars['DateTime']>;
  freeDt?: Maybe<Scalars['DateTime']>;
  leakageControlBy?: Maybe<Scalars['String']>;
  leakageControlDt?: Maybe<Scalars['DateTime']>;
  paidDt?: Maybe<Scalars['DateTime']>;
  postedScrapCertificate: Scalars['Boolean'];
  pssDt?: Maybe<Scalars['DateTime']>;
  pssText?: Maybe<Scalars['String']>;
  purchasedBy?: Maybe<Scalars['String']>;
  purchasedDt?: Maybe<Scalars['DateTime']>;
  purpose?: Maybe<Scalars['String']>;
  recCancellation: Scalars['Boolean'];
  recRegCertificate: Scalars['Boolean'];
  recScrapCertificate: Scalars['Boolean'];
  recScrapping: Scalars['Boolean'];
  receivedDt?: Maybe<Scalars['DateTime']>;
  scrapCertificateIssued: Scalars['Boolean'];
  scrappingPremiums?: Maybe<Scalars['Float']>;
};

export type CarStatusInput = {
  cardCreatedBy?: InputMaybe<Scalars['String']>;
  cardCreatedDt: Scalars['DateTime'];
  envProcBy?: InputMaybe<Scalars['String']>;
  envProcDeadlineDt?: InputMaybe<Scalars['DateTime']>;
  envProcDt?: InputMaybe<Scalars['DateTime']>;
  envProcFinalRemovalBy?: InputMaybe<Scalars['String']>;
  envProcFinalRemovalDt?: InputMaybe<Scalars['DateTime']>;
  freeDt?: InputMaybe<Scalars['DateTime']>;
  leakageControlBy?: InputMaybe<Scalars['String']>;
  leakageControlDt?: InputMaybe<Scalars['DateTime']>;
  paidDt?: InputMaybe<Scalars['DateTime']>;
  postedScrapCertificate: Scalars['Boolean'];
  pssDt?: InputMaybe<Scalars['DateTime']>;
  pssText?: InputMaybe<Scalars['String']>;
  purchasedBy?: InputMaybe<Scalars['String']>;
  purchasedDt?: InputMaybe<Scalars['DateTime']>;
  purpose?: InputMaybe<Scalars['String']>;
  recCancellation: Scalars['Boolean'];
  recRegCertificate: Scalars['Boolean'];
  recScrapCertificate: Scalars['Boolean'];
  recScrapping: Scalars['Boolean'];
  receivedDt?: InputMaybe<Scalars['DateTime']>;
  scrapCertificateIssued: Scalars['Boolean'];
  scrappingPremiums?: InputMaybe<Scalars['Float']>;
};

export type CardType = {
  __typename?: 'CardType';
  code: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  length?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  sortNumber?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type CarsSearchInput = {
  mainboardNumber?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  pagination: PaginationInput;
  registrationNo?: InputMaybe<Scalars['String']>;
  vinCode?: InputMaybe<Scalars['String']>;
};

export type CarsSearchResult = {
  __typename?: 'CarsSearchResult';
  items: Array<CarSearchRecord>;
  pagination: PaginationOutput;
};

export type ClientCar = {
  __typename?: 'ClientCar';
  comment?: Maybe<Scalars['String']>;
  createdByCompanyName?: Maybe<Scalars['String']>;
  createdByName?: Maybe<Scalars['String']>;
  createdCompanyDate?: Maybe<Scalars['DateTime']>;
  curCompanyRequests?: Maybe<Scalars['Int']>;
  doorsType?: Maybe<Scalars['String']>;
  engineCode?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemCode: Scalars['String'];
  itemTypeId?: Maybe<Scalars['Int']>;
  kiloWatt?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  otherCompaniesRequests?: Maybe<Scalars['Int']>;
  registrationDate?: Maybe<Scalars['DateTime']>;
  registrationNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  transmissionCode?: Maybe<Scalars['String']>;
  transmissionType?: Maybe<Scalars['String']>;
  vinCode?: Maybe<Scalars['String']>;
};

export type ClientCarInput = {
  comment?: InputMaybe<Scalars['String']>;
  createdByCompanyName?: InputMaybe<Scalars['String']>;
  createdByName?: InputMaybe<Scalars['String']>;
  curCompanyRequests?: InputMaybe<Scalars['Int']>;
  doorsType?: InputMaybe<Scalars['String']>;
  engineCode?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  itemCode: Scalars['String'];
  itemTypeId?: InputMaybe<Scalars['Int']>;
  kiloWatt?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  otherCompaniesRequests?: InputMaybe<Scalars['Int']>;
  registrationDate?: InputMaybe<Scalars['DateTime']>;
  registrationNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  transmissionCode?: InputMaybe<Scalars['String']>;
  transmissionType?: InputMaybe<Scalars['String']>;
  vinCode?: InputMaybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  bankAccountNo?: Maybe<Scalars['String']>;
  bankAccountRegNo?: Maybe<Scalars['String']>;
  bankBranch?: Maybe<Scalars['String']>;
  cVRNumber?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  iBANNumber?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  postalCity?: Maybe<Scalars['String']>;
  swiftCode?: Maybe<Scalars['String']>;
  vATPercent?: Maybe<Scalars['Float']>;
};

export type CompanyInput = {
  address1?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  bankAccountNo?: InputMaybe<Scalars['String']>;
  bankAccountRegNo?: InputMaybe<Scalars['String']>;
  bankBranch?: InputMaybe<Scalars['String']>;
  cVRNumber?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  eMail?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  iBANNumber?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  postalCity?: InputMaybe<Scalars['String']>;
  swiftCode?: InputMaybe<Scalars['String']>;
  vATPercent?: InputMaybe<Scalars['Float']>;
};

export type CompanyMap = {
  __typename?: 'CompanyMap';
  address1?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  financialEmail?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type ContactData = {
  __typename?: 'ContactData';
  email?: Maybe<Scalars['String']>;
  fax?: Maybe<Scalars['String']>;
  mobilePhone?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  webPage?: Maybe<Scalars['String']>;
};

export type ContactDataInput = {
  email?: InputMaybe<Scalars['String']>;
  fax?: InputMaybe<Scalars['String']>;
  mobilePhone?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  webPage?: InputMaybe<Scalars['String']>;
};

export type ContactPerson = {
  __typename?: 'ContactPerson';
  contactData?: Maybe<ContactData>;
  department?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type ContactPersonInput = {
  contactData?: InputMaybe<ContactDataInput>;
  department?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type CurrencyInput = {
  code: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Int']>;
};

export type Deviation = {
  __typename?: 'Deviation';
  companyName?: Maybe<Scalars['String']>;
  creatorUserId: Scalars['ID'];
  creditNoteNumber?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['ID']>;
  customerName?: Maybe<Scalars['String']>;
  deviationComments?: Maybe<Scalars['String']>;
  deviationDateTimeCreated?: Maybe<Scalars['DateTime']>;
  deviationReasonId?: Maybe<Scalars['ID']>;
  deviationReasonName?: Maybe<Scalars['String']>;
  deviationResolutionId?: Maybe<Scalars['ID']>;
  deviationResolutionName?: Maybe<Scalars['String']>;
  deviationSpendAmount?: Maybe<Scalars['Float']>;
  deviationSpendMinute?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  invoiceId?: Maybe<Scalars['ID']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  invoiceType?: Maybe<Scalars['Int']>;
  isDeviationCustomerDissatisfied?: Maybe<Scalars['Boolean']>;
  status: Scalars['Int'];
};

export type DeviationReasonReportRecord = {
  __typename?: 'DeviationReasonReportRecord';
  createdBy?: Maybe<Scalars['String']>;
  deviationCount: Scalars['Int'];
  deviationPercentage: Scalars['Float'];
  deviationReasonName?: Maybe<Scalars['String']>;
  deviationReasonPercent: Scalars['Float'];
  deviationSpendAmount: Scalars['Float'];
  deviationSpendMinute: Scalars['Int'];
  dissatisfiedCustomers: Scalars['Int'];
};

export type DeviationResolutionReportRecord = {
  __typename?: 'DeviationResolutionReportRecord';
  createdBy?: Maybe<Scalars['String']>;
  deviationCount: Scalars['Int'];
  deviationPercentage: Scalars['Float'];
  deviationResolutionName?: Maybe<Scalars['String']>;
  deviationResolutionPercent: Scalars['Float'];
  deviationSpendAmount: Scalars['Float'];
  deviationSpendMinute: Scalars['Int'];
  dissatisfiedCustomers: Scalars['Int'];
};

export type DeviationSaveInput = {
  deviationComments?: InputMaybe<Scalars['String']>;
  deviationDateTimeCreated?: InputMaybe<Scalars['DateTime']>;
  deviationReasonId?: InputMaybe<Scalars['ID']>;
  deviationResolutionId?: InputMaybe<Scalars['ID']>;
  deviationSpendAmount?: InputMaybe<Scalars['Float']>;
  deviationSpendMinute?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  isDeviationCustomerDissatisfied: Scalars['Boolean'];
};

export type EquipmentType = {
  __typename?: 'EquipmentType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  selectedByCompanyAdmin: Scalars['Int'];
};

export type EquipmentTypeInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  selectedByCompanyAdmin: Scalars['Int'];
};

export type FactoryColor = {
  __typename?: 'FactoryColor';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FactoryColorInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileResource = {
  __typename?: 'FileResource';
  description?: Maybe<Scalars['String']>;
  fileName: Scalars['String'];
  fileSize: Scalars['Int'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  isDefault: Scalars['Boolean'];
  isParent?: Maybe<Scalars['Boolean']>;
  sequenceNumberId?: Maybe<Scalars['Int']>;
};

export type FileResourceMetadataInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isDefault?: InputMaybe<Scalars['Boolean']>;
  sequenceId?: InputMaybe<Scalars['Int']>;
};

export type GlobalMessage = {
  __typename?: 'GlobalMessage';
  creatorCompanyId?: Maybe<Scalars['Int']>;
  creatorUserId?: Maybe<Scalars['Int']>;
  dateTimeCreated?: Maybe<Scalars['DateTime']>;
  fromCompanyId?: Maybe<Scalars['Int']>;
  fromUserId?: Maybe<Scalars['Int']>;
  isRead?: Maybe<Scalars['Boolean']>;
  messageData?: Maybe<Scalars['String']>;
  messageType?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  toCompanyId?: Maybe<Scalars['Int']>;
  toUserId?: Maybe<Scalars['Int']>;
};

export type IdListItemInput = {
  id: Scalars['Int'];
};

export type IdNameType = {
  __typename?: 'IdNameType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type IdNameTypeInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ImageResource = {
  __typename?: 'ImageResource';
  originUrl: Scalars['String'];
  thumbnail120Url?: Maybe<Scalars['String']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  associatedCreatorUser_Id?: Maybe<Scalars['Int']>;
  cashAccountNumber?: Maybe<Scalars['Int']>;
  client_Id?: Maybe<Scalars['Int']>;
  company_Id: Scalars['Int'];
  contactPersonName?: Maybe<Scalars['String']>;
  contactPerson_Id?: Maybe<Scalars['Int']>;
  creatorUserName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customInvoiceLines?: Maybe<Scalars['String']>;
  customerAccountNumber?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  customerVatNumber?: Maybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  dateTimeProcessed?: Maybe<Scalars['DateTime']>;
  defaultInvoiceLines?: Maybe<Scalars['String']>;
  deliverTo?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<Scalars['String']>;
  deliveryContactPerson?: Maybe<Scalars['String']>;
  deliveryPhone?: Maybe<Scalars['String']>;
  deviationDateTimeCreated?: Maybe<Scalars['DateTime']>;
  discountAmount?: Maybe<Scalars['Float']>;
  discountPercent?: Maybe<Scalars['Float']>;
  engineCertComment?: Maybe<Scalars['String']>;
  externalCompanyId?: Maybe<Scalars['Int']>;
  externalInvoiceNumber?: Maybe<Scalars['String']>;
  hasCreditNotes: Scalars['Boolean'];
  id: Scalars['ID'];
  invoiceNumber?: Maybe<Scalars['String']>;
  invoiceRequisitionNumber?: Maybe<Scalars['String']>;
  invoiceType: Scalars['Int'];
  isSharesales: Scalars['Boolean'];
  isVatFreeSale: Scalars['Boolean'];
  isVatFreeSale_IncludeVat?: Maybe<Scalars['Boolean']>;
  items: Array<InvoiceDetailItem>;
  orderId?: Maybe<Scalars['Int']>;
  paymentTermCode?: Maybe<Scalars['String']>;
  paymentTerms?: Maybe<Scalars['String']>;
  postAction?: Maybe<Scalars['Int']>;
  printSettings?: Maybe<Scalars['String']>;
  refInvoiceId?: Maybe<Scalars['Int']>;
  refInvoiceNumber?: Maybe<Scalars['String']>;
  refInvoiceStatus?: Maybe<Scalars['Int']>;
  sharesalesComment?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  totalAmount?: Maybe<Scalars['Float']>;
  transportCompany?: Maybe<Scalars['String']>;
  transportCompanyId?: Maybe<Scalars['Int']>;
  transportationAmount?: Maybe<Scalars['Float']>;
  vatAmount?: Maybe<Scalars['Float']>;
  vatPercent?: Maybe<Scalars['Float']>;
};

export type InvoiceAccountTransferEdiGlDailyJournalRecord = {
  __typename?: 'InvoiceAccountTransferEdiGlDailyJournalRecord';
  amount: Scalars['Float'];
  dateTimeCreated: Scalars['DateTime'];
  externalInvoiceDateTimeProcessed: Scalars['DateTime'];
  externalInvoiceNumber?: Maybe<Scalars['String']>;
  invoiceNumber: Scalars['String'];
  linkedInvoiceNumber?: Maybe<Scalars['String']>;
  netSalesAccountNumber?: Maybe<Scalars['Int']>;
  totalAmount: Scalars['Float'];
  transportationAccountNumber?: Maybe<Scalars['Int']>;
  transportationAmount: Scalars['Float'];
  type?: Maybe<Scalars['String']>;
  vatAccountNumber?: Maybe<Scalars['Int']>;
  vatAmount: Scalars['Float'];
  vendorAccountNumber?: Maybe<Scalars['String']>;
  vendorName?: Maybe<Scalars['String']>;
};

export type InvoiceAccountTransferGlDailyJournalRecord = {
  __typename?: 'InvoiceAccountTransferGlDailyJournalRecord';
  amount: Scalars['Float'];
  currency: Scalars['String'];
  customerAccountNumber?: Maybe<Scalars['String']>;
  dateTimeProcessed: Scalars['DateTime'];
  discountAccountNumber?: Maybe<Scalars['Int']>;
  discountAmount: Scalars['Float'];
  extraDays: Scalars['Int'];
  invoiceNumber: Scalars['String'];
  isVatFreeSale: Scalars['Boolean'];
  netSalesAccountNumber?: Maybe<Scalars['Int']>;
  payDueMonth: Scalars['Int'];
  totalAmount: Scalars['Float'];
  transportationAccountNumber?: Maybe<Scalars['Int']>;
  transportationAmount: Scalars['Float'];
  type: Scalars['String'];
  vatAccountNumber?: Maybe<Scalars['Int']>;
  vatAmount: Scalars['Float'];
};

export type InvoiceAccountTransferGroupRecord = {
  __typename?: 'InvoiceAccountTransferGroupRecord';
  amount: Scalars['Float'];
  invoiceNumber?: Maybe<Scalars['String']>;
  netSalesAccountNumber?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type InvoiceAddItemInput = {
  cashAccountNumber?: InputMaybe<Scalars['Int']>;
  clientAddress?: InputMaybe<Scalars['String']>;
  clientAddressId?: InputMaybe<Scalars['Int']>;
  clientId?: InputMaybe<Scalars['Int']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  contactPersonId?: InputMaybe<Scalars['Int']>;
  currency?: InputMaybe<Scalars['String']>;
  deliveryAddress?: InputMaybe<Scalars['String']>;
  invoiceId?: InputMaybe<Scalars['ID']>;
  isVatFreeSale: Scalars['Boolean'];
  isVatFreeSaleIncludeVat: Scalars['Boolean'];
  itemDetails?: InputMaybe<InvoiceDetailItemInput>;
  paymentTerms?: InputMaybe<Scalars['String']>;
  paymentTermsCode?: InputMaybe<Scalars['String']>;
  vatPercent?: InputMaybe<Scalars['Float']>;
};

export type InvoiceCreateCreditNoteInput = {
  clientId?: InputMaybe<Scalars['Int']>;
  currency?: InputMaybe<Scalars['String']>;
  invoiceRequisitionNumber?: InputMaybe<Scalars['String']>;
  isVatFreeSale: Scalars['Boolean'];
  isVatFreeSaleIncludeVat: Scalars['Boolean'];
  paymentTermCode?: InputMaybe<Scalars['String']>;
  paymentTerms?: InputMaybe<Scalars['String']>;
  refInvoiceId?: InputMaybe<Scalars['Int']>;
  transportationCompanyId?: InputMaybe<Scalars['Int']>;
  vatPercent?: InputMaybe<Scalars['Float']>;
};

export type InvoiceDetailItem = {
  __typename?: 'InvoiceDetailItem';
  carItemNumber?: Maybe<Scalars['String']>;
  carItemType_Id?: Maybe<Scalars['Int']>;
  carType?: Maybe<Scalars['String']>;
  cardNr?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  costAmount?: Maybe<Scalars['Float']>;
  detailType: Scalars['Int'];
  discountAmount?: Maybe<Scalars['Float']>;
  discountPercent?: Maybe<Scalars['Float']>;
  externalCompanyId?: Maybe<Scalars['Int']>;
  externalCompanyName?: Maybe<Scalars['String']>;
  externalItemId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  invoice_Id: Scalars['Int'];
  isIdle?: Maybe<Scalars['Boolean']>;
  isNewPart?: Maybe<Scalars['Boolean']>;
  itemCode?: Maybe<Scalars['String']>;
  itemPreviousStatus?: Maybe<Scalars['Int']>;
  itemStatus?: Maybe<Scalars['Int']>;
  itemType?: Maybe<Scalars['String']>;
  itemType_Id?: Maybe<Scalars['Int']>;
  item_Id?: Maybe<Scalars['Int']>;
  newPartParentId?: Maybe<Scalars['Int']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  refInvoiceDateTimeCreated?: Maybe<Scalars['DateTime']>;
  refInvoiceId?: Maybe<Scalars['Int']>;
  shelfNr?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  vareGroup?: Maybe<Scalars['String']>;
};

export type InvoiceDetailItemInput = {
  carItemNumber?: InputMaybe<Scalars['String']>;
  carItemTypeId?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  costAmount?: InputMaybe<Scalars['Float']>;
  detailType: Scalars['String'];
  discountAmount?: InputMaybe<Scalars['Float']>;
  discountPercent?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  isIdle?: InputMaybe<Scalars['Boolean']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemId?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  itemTypeId?: InputMaybe<Scalars['String']>;
  orderIndex?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Float']>;
  tag?: InputMaybe<Scalars['String']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  unitPrice?: InputMaybe<Scalars['Float']>;
  vareGroup?: InputMaybe<Scalars['String']>;
};

export type InvoiceDetailNewItem = {
  __typename?: 'InvoiceDetailNewItem';
  availableQuantity?: Maybe<Scalars['Float']>;
  comments?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invoiceId?: Maybe<Scalars['Int']>;
  itemId?: Maybe<Scalars['Int']>;
  onHand?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type InvoiceEdiBuffer = {
  __typename?: 'InvoiceEdiBuffer';
  invoiceId: Scalars['ID'];
  msgNotes?: Maybe<Scalars['String']>;
  toCompanyId: Scalars['ID'];
};

export type InvoiceExtraLine = {
  __typename?: 'InvoiceExtraLine';
  id: Scalars['ID'];
  itemCode: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  status: Scalars['Int'];
  text: Scalars['String'];
};

export type InvoiceExtraLineSaveInput = {
  itemCode: Scalars['String'];
  price: Scalars['Float'];
  status: Scalars['Int'];
  text: Scalars['String'];
};

export type InvoiceLastExportNumber = {
  __typename?: 'InvoiceLastExportNumber';
  lastPurchaesInvoicenumber: Scalars['Int'];
  lastSalesInvoicenumber: Scalars['Int'];
  maxPurchaseInvoiceNumber: Scalars['Int'];
  maxSalgesInvoiceNumber: Scalars['Int'];
};

export type InvoiceNote = {
  __typename?: 'InvoiceNote';
  comments?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invoiceId: Scalars['ID'];
};

export type InvoiceNoteSaveInput = {
  comments?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  invoiceId: Scalars['ID'];
};

export type InvoicePrinterSettning = {
  __typename?: 'InvoicePrinterSettning';
  stringValue?: Maybe<Scalars['String']>;
};

export type InvoiceProcessInput = {
  contactPersonId?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  postAction: Scalars['String'];
  printSettings?: InputMaybe<Scalars['String']>;
};

export type InvoiceReportSellersStatisticsInput = {
  creatorUserId: Scalars['Int'];
  processDateFrom: Scalars['DateTime'];
  processDateTo?: InputMaybe<Scalars['DateTime']>;
};

export type InvoiceReportSellersStatisticsRecord = {
  __typename?: 'InvoiceReportSellersStatisticsRecord';
  amountDifference?: Maybe<Scalars['Float']>;
  costAmount?: Maybe<Scalars['Float']>;
  dateTimeCreated?: Maybe<Scalars['DateTime']>;
  dateTimeProcessed?: Maybe<Scalars['DateTime']>;
  fullName?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  returnedAmount?: Maybe<Scalars['Float']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId: Scalars['Int'];
};

export type InvoiceSaveInput = {
  address?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Float']>;
  associatedCreatorUserId?: InputMaybe<Scalars['Int']>;
  businessPartnerAddress?: InputMaybe<Scalars['String']>;
  businessPartnerAddressId?: InputMaybe<Scalars['Int']>;
  businessPartnerId?: InputMaybe<Scalars['Int']>;
  cashAccountNumber?: InputMaybe<Scalars['Int']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  contactPersonId?: InputMaybe<Scalars['Int']>;
  currency?: InputMaybe<Scalars['String']>;
  customerAccountNumber?: InputMaybe<Scalars['String']>;
  customerEmail?: InputMaybe<Scalars['String']>;
  customerName?: InputMaybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  dateTimeProcessed?: InputMaybe<Scalars['DateTime']>;
  deliverTo?: InputMaybe<Scalars['String']>;
  deliveryAddress?: InputMaybe<Scalars['String']>;
  deliveryContactPerson?: InputMaybe<Scalars['String']>;
  deliveryPhone?: InputMaybe<Scalars['String']>;
  discountAmount?: InputMaybe<Scalars['Float']>;
  discountPercent?: InputMaybe<Scalars['Float']>;
  engineCertComment?: InputMaybe<Scalars['String']>;
  externalCompanyId?: InputMaybe<Scalars['Int']>;
  externalInvoiceNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  invoiceRequisitionNumber?: InputMaybe<Scalars['String']>;
  invoiceType?: InputMaybe<Scalars['Int']>;
  isSharesales?: InputMaybe<Scalars['Boolean']>;
  isVatFreeSale?: InputMaybe<Scalars['Boolean']>;
  isVatFreeSaleIncludeVat?: InputMaybe<Scalars['Boolean']>;
  items: Array<InvoiceDetailItemInput>;
  orderId?: InputMaybe<Scalars['Int']>;
  paymentTermCode?: InputMaybe<Scalars['String']>;
  paymentTerms?: InputMaybe<Scalars['String']>;
  printSettings?: InputMaybe<Scalars['String']>;
  refInvoiceId?: InputMaybe<Scalars['Int']>;
  totalAmount?: InputMaybe<Scalars['Float']>;
  transportationAmount?: InputMaybe<Scalars['Float']>;
  transportationCompany?: InputMaybe<Scalars['String']>;
  transportationCompanyId?: InputMaybe<Scalars['Int']>;
  vatAmount?: InputMaybe<Scalars['Float']>;
  vatPercent?: InputMaybe<Scalars['Float']>;
};

export type InvoiceSearchInput = {
  address?: InputMaybe<Scalars['String']>;
  businessPartnerId?: InputMaybe<Scalars['Int']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  creationDateFrom?: InputMaybe<Scalars['DateTime']>;
  creationDateTo?: InputMaybe<Scalars['DateTime']>;
  creatorUserId?: InputMaybe<Scalars['Int']>;
  customer?: InputMaybe<Scalars['String']>;
  deviationCreationDateFrom?: InputMaybe<Scalars['DateTime']>;
  deviationCreationDateTo?: InputMaybe<Scalars['DateTime']>;
  deviationReasonId?: InputMaybe<Scalars['Int']>;
  deviationResolutionId?: InputMaybe<Scalars['Int']>;
  engineType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<IdListItemInput>>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  invoiceRequisitionNumber?: InputMaybe<Scalars['String']>;
  isSharesales?: InputMaybe<Scalars['Boolean']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  postAction?: InputMaybe<Scalars['String']>;
  processDateFrom?: InputMaybe<Scalars['DateTime']>;
  processDateTo?: InputMaybe<Scalars['DateTime']>;
  refInvoiceId?: InputMaybe<Scalars['Int']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  showCompletedOnly?: InputMaybe<Scalars['Boolean']>;
  showIncompletedOnly?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type InvoiceSearchRecord = {
  __typename?: 'InvoiceSearchRecord';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  cashAccountNumber?: Maybe<Scalars['Int']>;
  contactPersonName?: Maybe<Scalars['String']>;
  creatorUserName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customerAccountNumber?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  customerName?: Maybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  dateTimeProcessed?: Maybe<Scalars['DateTime']>;
  deliveryAddress?: Maybe<Scalars['String']>;
  discountPercent?: Maybe<Scalars['Float']>;
  hasCreditNotes?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  invoiceNumber?: Maybe<Scalars['String']>;
  invoiceType?: Maybe<Scalars['Int']>;
  isSharesales?: Maybe<Scalars['Boolean']>;
  itemCode?: Maybe<Scalars['String']>;
  itemsCount: Scalars['Int'];
  itemsQuantity?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Int']>;
  paymentTerms?: Maybe<Scalars['String']>;
  postAction?: Maybe<Scalars['Int']>;
  priceReductions?: Maybe<Scalars['Float']>;
  status: Scalars['Int'];
  totalAmount?: Maybe<Scalars['Float']>;
  transportCompany?: Maybe<Scalars['String']>;
  transportationAmount?: Maybe<Scalars['Float']>;
  vatAmount?: Maybe<Scalars['Float']>;
};

export type InvoiceSellerStatisticsReportRecord = {
  __typename?: 'InvoiceSellerStatisticsReportRecord';
  amountDifference: Scalars['Float'];
  costAmount: Scalars['Float'];
  fullName: Scalars['String'];
  returnedAmount: Scalars['Float'];
  totalAmount: Scalars['Float'];
  userId: Scalars['ID'];
};

export type InvoiceShareSalesLocal = {
  __typename?: 'InvoiceShareSalesLocal';
  companyName?: Maybe<Scalars['String']>;
  company_Id: Scalars['String'];
  dateTimeProcessed?: Maybe<Scalars['DateTime']>;
  externalCompanyId?: Maybe<Scalars['String']>;
  externalInvoiceNumber?: Maybe<Scalars['String']>;
  invoiceNumber: Scalars['String'];
};

export type InvoiceStatisticsReportInput = {
  dateFrom: Scalars['DateTime'];
  dateTo?: InputMaybe<Scalars['DateTime']>;
  invoiceCreatorUserId?: InputMaybe<Scalars['ID']>;
  itemCode?: InputMaybe<Scalars['String']>;
  top?: InputMaybe<Scalars['Int']>;
};

export type InvoiceStatisticsReportRecord = {
  __typename?: 'InvoiceStatisticsReportRecord';
  carType?: Maybe<Scalars['String']>;
  itemCode?: Maybe<Scalars['String']>;
  partType?: Maybe<Scalars['String']>;
  quantity: Scalars['Decimal'];
  type?: Maybe<Scalars['String']>;
  uid: Scalars['ID'];
  year: Scalars['Int'];
};

export type ItemImageResourcesInput = {
  itemId: Scalars['ID'];
  maxCount?: InputMaybe<Scalars['Int']>;
  orderPicOptions?: InputMaybe<Scalars['String']>;
  withParents: Scalars['Boolean'];
};

export type ItemSeries = {
  __typename?: 'ItemSeries';
  id: Scalars['ID'];
  lastItemNumber: Scalars['String'];
  maxSequenceNumber: Scalars['Int'];
  sequenceNumber: Scalars['Int'];
  series: Scalars['String'];
  type: Scalars['String'];
};

export type ItemSeriesInput = {
  id?: InputMaybe<Scalars['ID']>;
  lastItemNumber: Scalars['String'];
  maxSequenceNumber: Scalars['Int'];
  sequenceNumber: Scalars['Int'];
  series: Scalars['String'];
  type: Scalars['String'];
};

export type ItemTypeGroup = {
  __typename?: 'ItemTypeGroup';
  accountingValue: Scalars['Int'];
  groupIndex: Scalars['Int'];
  groupNumber: Scalars['Int'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ItemTypeGroupInput = {
  accountingValue: Scalars['Int'];
  groupIndex: Scalars['Int'];
  groupNumber: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type KoedDeletePart = {
  __typename?: 'KoedDeletePart';
  carItemNumber?: Maybe<Scalars['String']>;
  companyId: Scalars['ID'];
  dateTimeModified: Scalars['DateTime'];
  id: Scalars['ID'];
  itemNumber: Scalars['String'];
};

export type KoedDeletePartsSearchResult = {
  __typename?: 'KoedDeletePartsSearchResult';
  items: Array<KoedDeletePart>;
  totalRows: Scalars['Int'];
};

export type KoedPart = {
  __typename?: 'KoedPart';
  alternativeNumbers?: Maybe<Scalars['String']>;
  bodyColor?: Maybe<Scalars['String']>;
  carBody?: Maybe<Scalars['String']>;
  carDoorsType?: Maybe<Scalars['String']>;
  carFirstRegistrationDate?: Maybe<Scalars['DateTime']>;
  carItemNumber?: Maybe<Scalars['String']>;
  carItemTypeId?: Maybe<Scalars['ID']>;
  carName?: Maybe<Scalars['String']>;
  carTypeApprovalDate?: Maybe<Scalars['String']>;
  carTypeApprovalNo?: Maybe<Scalars['String']>;
  carVinCode?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['ID']>;
  compositeComments?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  dateTimeCreated?: Maybe<Scalars['DateTime']>;
  dateTimeModified?: Maybe<Scalars['DateTime']>;
  engineCode?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  equipmentModel?: Maybe<Scalars['String']>;
  euroNorm?: Maybe<Scalars['Int']>;
  fuel?: Maybe<Scalars['String']>;
  horsepower?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  images: Array<ImageResource>;
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePrice?: Maybe<Scalars['Float']>;
  insuranceTxt?: Maybe<Scalars['String']>;
  interiorColor?: Maybe<Scalars['String']>;
  itemCode?: Maybe<Scalars['String']>;
  itemNumber?: Maybe<Scalars['String']>;
  itemPartId?: Maybe<Scalars['ID']>;
  itemTypeId?: Maybe<Scalars['ID']>;
  kiloWatt?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  readOnPart?: Maybe<Scalars['String']>;
  registrationNo?: Maybe<Scalars['String']>;
  shelfNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  transmissionCode?: Maybe<Scalars['String']>;
  transmissionType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  warehouseInputDate?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export type KoedPartsSearchInput = {
  companyId: Scalars['ID'];
  dateHourBack?: InputMaybe<Scalars['Int']>;
  maxRows?: InputMaybe<Scalars['Int']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  pageSort?: InputMaybe<Scalars['String']>;
};

export type KoedPartsSearchResult = {
  __typename?: 'KoedPartsSearchResult';
  items: Array<KoedPart>;
  totalRows: Scalars['Int'];
};

export type LockedItem = {
  __typename?: 'LockedItem';
  isLock?: Maybe<Scalars['Boolean']>;
  lockerUserId?: Maybe<Scalars['Int']>;
  lockerUserName?: Maybe<Scalars['String']>;
};

export type Manufacturer = {
  __typename?: 'Manufacturer';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  auctionHouseSaveMessage: Scalars['ID'];
  auctionHouseUpdateBit: Scalars['Int'];
  auctionHouseUpdateExternalInvoiceIdByLocalInvoice: Scalars['Int'];
  auctionHouseUpdateStatus: Scalars['Int'];
  businessPartnerClone: Scalars['Int'];
  businessPartnerDeleteAnonymized: Scalars['Int'];
  businessPartnerGroupDelete: Scalars['Int'];
  businessPartnerGroupSave: BusinessPartnerGroup;
  businessPartnerSave: BusinessPartner;
  businessPartnerUpdateExternalCompanyId: Scalars['Int'];
  businessPartnersCheckByAccount: Scalars['Int'];
  carDisassemble: Scalars['Int'];
  carEquipmentTypeSave: Scalars['Int'];
  carItemTypeGroupDelete: Scalars['Int'];
  carItemTypeGroupSave: ItemTypeGroup;
  carSave: Car;
  carTransferToOtherDatabase: Scalars['Int'];
  clientCarSave: ClientCar;
  companyUpdate?: Maybe<User>;
  currencyDelete: Scalars['Int'];
  currencyUpdate: Scalars['Int'];
  deviationReasonDelete: Scalars['Int'];
  deviationReasonSave: IdNameType;
  deviationResolutionDelete: Scalars['Int'];
  deviationResolutionSave: IdNameType;
  deviationSave: Scalars['Int'];
  fileResourceDelete: Scalars['Int'];
  fileResourcesMetadataSave: Scalars['Int'];
  invoiceAddDefaultInvoiceLines: Scalars['Int'];
  invoiceAddEngineCertComment: Scalars['Int'];
  invoiceAddGlobal: Scalars['Int'];
  invoiceAddInvoiceCustomLines: Scalars['Int'];
  invoiceAddItem: Scalars['ID'];
  invoiceAddShareSalesComment: Scalars['Int'];
  invoiceCancel: Scalars['Int'];
  invoiceCreateCreditNote: Scalars['ID'];
  invoiceEdiSend: Scalars['Int'];
  invoiceNoteSave: Scalars['Int'];
  invoiceProcess: Scalars['Int'];
  invoiceResetOrderId: Scalars['Int'];
  invoiceSave: Invoice;
  invoiceStartNumber: Scalars['Int'];
  invoiceUpdateEdiBuffer: Scalars['Int'];
  invoiceUpdateLastExportNumber: Scalars['Int'];
  itemSeriesDelete: Scalars['Int'];
  itemSeriesSave: ItemSeries;
  lockerIslockedItem: LockedItem;
  lockerTryLockItem: LockedItem;
  lockerUnlockItem: Scalars['Boolean'];
  messageReadStatus?: Maybe<Scalars['Int']>;
  orderAddReservedItem: Scalars['ID'];
  orderDelete: Scalars['Int'];
  orderSaveReservedItems: OrderSaveReservedItemsResult;
  partAssignToShelf: Scalars['Int'];
  partCarCalcSave: Scalars['Int'];
  partClientCarInterestsSave: Scalars['Int'];
  partCloneFromGlobalPart: Part;
  partDeleteGlobalCopy: Scalars['Int'];
  partExternalItemSave: Scalars['Int'];
  partInvoiceDetailItemCostDataSave: Scalars['Int'];
  partInvoiceExtraLineSave: Scalars['Int'];
  partItemDimensionsSave: Scalars['Int'];
  partItemInfoFileSave: Scalars['ID'];
  partItemInfoSave: Scalars['ID'];
  partItemTypeSortNumberSave: Scalars['Int'];
  partMissingItemsSave: Scalars['Int'];
  partNewUpdateChildren: Scalars['Int'];
  partNewUpdateParent: Scalars['Int'];
  partNewUpdateParentCostAmount: Scalars['Int'];
  partOemStandardSave: Scalars['Int'];
  partSave: Part;
  partSoldUndo: Scalars['Boolean'];
  partTrash: Scalars['Int'];
  partTypeInfoSave: Scalars['Int'];
  partUntrash: Scalars['Int'];
  partUpdateExtendedVatTransferredMonthly: Scalars['Int'];
  partUpdatePrice: Scalars['Int'];
  partWorkFlowItemSave: Scalars['ID'];
  partsBulkSetIsPrinted: Scalars['Int'];
  partsBulkUpdate: Scalars['Int'];
  patchNotes?: Maybe<Scalars['Int']>;
  paymentTermsDelete: Scalars['Int'];
  paymentTermsUpdate: PaymentTerms;
  purchaseInvoiceSave: Scalars['ID'];
  purchaseOrderCancel: Scalars['Int'];
  purchaseOrderProcess: Scalars['Int'];
  purchaseOrderSave: Scalars['ID'];
  purchaseReceivedOrderProcess: Scalars['Int'];
  purchaseReceivedOrderSave: Scalars['ID'];
  settingsCreate?: Maybe<SettingValue>;
  settingsSaveValue: Scalars['Int'];
  settingsUpdate?: Maybe<SettingValue>;
  settingsUpdateValueByIdAndName: Scalars['Int'];
  shareSalesCompanySave: Scalars['Int'];
  soldCarUndo: Scalars['Int'];
  sortOrderConfigCompanies?: Maybe<Scalars['Int']>;
  tntProcessShippingData: Scalars['Int'];
  tntSubmitConsignmentNumberRange: Scalars['Int'];
  transportCompanyDelete: Scalars['Int'];
  transportCompanySave: TransportCompany;
  userCreate?: Maybe<User>;
  userDelete?: Maybe<Scalars['Int']>;
  userLastReadNote?: Maybe<Scalars['Int']>;
  userLoginValidate?: Maybe<User>;
  userUpdate?: Maybe<User>;
  workflowUserUpdate?: Maybe<WorkflowUser>;
};


export type MutationAuctionHouseSaveMessageArgs = {
  input: AuctionHouseMessageSaveInput;
};


export type MutationAuctionHouseUpdateBitArgs = {
  input: AuctionHouseUpdateBitInput;
};


export type MutationAuctionHouseUpdateExternalInvoiceIdByLocalInvoiceArgs = {
  externalInvoiceId: Scalars['ID'];
  invoiceId: Scalars['ID'];
};


export type MutationAuctionHouseUpdateStatusArgs = {
  id: Scalars['ID'];
  status: Scalars['Int'];
};


export type MutationBusinessPartnerCloneArgs = {
  id: Scalars['ID'];
};


export type MutationBusinessPartnerDeleteAnonymizedArgs = {
  id: Scalars['ID'];
};


export type MutationBusinessPartnerGroupDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationBusinessPartnerGroupSaveArgs = {
  input: BusinessPartnerGroupInput;
};


export type MutationBusinessPartnerSaveArgs = {
  input: BusinessPartnerInput;
};


export type MutationBusinessPartnerUpdateExternalCompanyIdArgs = {
  externalCompanyId?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type MutationBusinessPartnersCheckByAccountArgs = {
  searchTerm: Scalars['String'];
};


export type MutationCarDisassembleArgs = {
  id: Scalars['ID'];
};


export type MutationCarEquipmentTypeSaveArgs = {
  id: Scalars['ID'];
  selectedByCompanyAdmin?: InputMaybe<Scalars['String']>;
};


export type MutationCarItemTypeGroupDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationCarItemTypeGroupSaveArgs = {
  input: ItemTypeGroupInput;
};


export type MutationCarSaveArgs = {
  input: CarSaveInput;
};


export type MutationCarTransferToOtherDatabaseArgs = {
  input: CarSaveInput;
};


export type MutationClientCarSaveArgs = {
  input: ClientCarInput;
};


export type MutationCompanyUpdateArgs = {
  input: CompanyInput;
};


export type MutationCurrencyDeleteArgs = {
  code: Scalars['ID'];
};


export type MutationCurrencyUpdateArgs = {
  input: CurrencyInput;
};


export type MutationDeviationReasonDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationDeviationReasonSaveArgs = {
  input: IdNameTypeInput;
};


export type MutationDeviationResolutionDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationDeviationResolutionSaveArgs = {
  input: IdNameTypeInput;
};


export type MutationDeviationSaveArgs = {
  input: DeviationSaveInput;
};


export type MutationFileResourceDeleteArgs = {
  itemId: Scalars['ID'];
  resourceId: Scalars['ID'];
};


export type MutationFileResourcesMetadataSaveArgs = {
  itemId: Scalars['ID'];
  itemResourceFileMetadata: Array<FileResourceMetadataInput>;
};


export type MutationInvoiceAddDefaultInvoiceLinesArgs = {
  defaultInvoiceLines?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationInvoiceAddEngineCertCommentArgs = {
  engineCertComment?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationInvoiceAddGlobalArgs = {
  input: InvoiceSaveInput;
  processedDate: Scalars['DateTime'];
};


export type MutationInvoiceAddInvoiceCustomLinesArgs = {
  id: Scalars['ID'];
  lines?: InputMaybe<Scalars['String']>;
};


export type MutationInvoiceAddItemArgs = {
  input: InvoiceAddItemInput;
};


export type MutationInvoiceAddShareSalesCommentArgs = {
  id: Scalars['ID'];
  shareSalesComment?: InputMaybe<Scalars['String']>;
};


export type MutationInvoiceCancelArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceCreateCreditNoteArgs = {
  input: InvoiceCreateCreditNoteInput;
};


export type MutationInvoiceEdiSendArgs = {
  input: InvoiceSaveInput;
};


export type MutationInvoiceNoteSaveArgs = {
  input: InvoiceNoteSaveInput;
};


export type MutationInvoiceProcessArgs = {
  input: InvoiceProcessInput;
};


export type MutationInvoiceResetOrderIdArgs = {
  id: Scalars['ID'];
};


export type MutationInvoiceSaveArgs = {
  input: InvoiceSaveInput;
};


export type MutationInvoiceStartNumberArgs = {
  invoiceNumber: Scalars['String'];
};


export type MutationInvoiceUpdateEdiBufferArgs = {
  invoiceId: Scalars['ID'];
  notes?: InputMaybe<Scalars['String']>;
  toCompanyId?: InputMaybe<Scalars['ID']>;
};


export type MutationInvoiceUpdateLastExportNumberArgs = {
  lastPurchaseInvoiceNumber?: InputMaybe<Scalars['String']>;
  lastSalesInvoicenumber?: InputMaybe<Scalars['String']>;
};


export type MutationItemSeriesDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationItemSeriesSaveArgs = {
  input: ItemSeriesInput;
};


export type MutationLockerIslockedItemArgs = {
  itemid: Scalars['Int'];
  lockeruserid: Scalars['Int'];
  lockerusername: Scalars['String'];
};


export type MutationLockerTryLockItemArgs = {
  itemid: Scalars['Int'];
  lockeruserid: Scalars['Int'];
  lockerusername?: InputMaybe<Scalars['String']>;
  locldurmn: Scalars['Int'];
};


export type MutationLockerUnlockItemArgs = {
  itemid: Scalars['Int'];
};


export type MutationMessageReadStatusArgs = {
  isRead?: InputMaybe<Scalars['Boolean']>;
  messageId?: InputMaybe<Scalars['Int']>;
};


export type MutationOrderAddReservedItemArgs = {
  input: OrderAddReservedItemInput;
};


export type MutationOrderDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationOrderSaveReservedItemsArgs = {
  input: OrderSaveReservedItemsInput;
};


export type MutationPartAssignToShelfArgs = {
  input: PartAssignToShelfInput;
};


export type MutationPartCarCalcSaveArgs = {
  input: PartCalcInput;
};


export type MutationPartClientCarInterestsSaveArgs = {
  input: PartClientCarInput;
};


export type MutationPartCloneFromGlobalPartArgs = {
  input: PartGlobalInput;
};


export type MutationPartDeleteGlobalCopyArgs = {
  id: Scalars['ID'];
  itemNumber?: InputMaybe<Scalars['String']>;
};


export type MutationPartExternalItemSaveArgs = {
  input: PartExternalItemInput;
};


export type MutationPartInvoiceDetailItemCostDataSaveArgs = {
  costAmount?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  isGlobal?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPartInvoiceExtraLineSaveArgs = {
  input: InvoiceExtraLineSaveInput;
};


export type MutationPartItemDimensionsSaveArgs = {
  id: Scalars['ID'];
  input: PartItemDimensionsInput;
};


export type MutationPartItemInfoFileSaveArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: PartFileInfoSaveInput;
};


export type MutationPartItemInfoSaveArgs = {
  id?: InputMaybe<Scalars['ID']>;
  itemCode: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
};


export type MutationPartItemTypeSortNumberSaveArgs = {
  id: Scalars['ID'];
  sortNumber?: InputMaybe<Scalars['Int']>;
};


export type MutationPartMissingItemsSaveArgs = {
  input: PartsMissingItemsSaveInput;
};


export type MutationPartNewUpdateChildrenArgs = {
  input: PartInput;
};


export type MutationPartNewUpdateParentArgs = {
  itemId: Scalars['ID'];
};


export type MutationPartNewUpdateParentCostAmountArgs = {
  costAmount: Scalars['Float'];
  itemId: Scalars['ID'];
};


export type MutationPartOemStandardSaveArgs = {
  input: PartOemStandardSaveInput;
};


export type MutationPartSaveArgs = {
  input: PartSaveInput;
};


export type MutationPartSoldUndoArgs = {
  id: Scalars['ID'];
};


export type MutationPartTrashArgs = {
  id: Scalars['ID'];
  quantity: Scalars['Float'];
};


export type MutationPartTypeInfoSaveArgs = {
  input: PartTypeInfoSaveInput;
};


export type MutationPartUntrashArgs = {
  id: Scalars['ID'];
  quantity: Scalars['Float'];
};


export type MutationPartUpdateExtendedVatTransferredMonthlyArgs = {
  input: PartUpdateExtendedVatTransferredMonthlyInput;
};


export type MutationPartUpdatePriceArgs = {
  id: Scalars['ID'];
  input: PartPriceInput;
};


export type MutationPartWorkFlowItemSaveArgs = {
  id?: InputMaybe<Scalars['ID']>;
  input: PartWorkflowLineInput;
};


export type MutationPartsBulkSetIsPrintedArgs = {
  items: Array<IdListItemInput>;
};


export type MutationPartsBulkUpdateArgs = {
  input: PartBulkUpdateInput;
  items: Array<IdListItemInput>;
};


export type MutationPatchNotesArgs = {
  lastReadNote?: InputMaybe<Scalars['DateTime']>;
  patchNotes?: InputMaybe<Scalars['String']>;
};


export type MutationPaymentTermsDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationPaymentTermsUpdateArgs = {
  input: PaymentTermsInput;
};


export type MutationPurchaseInvoiceSaveArgs = {
  input: PurchaseInvoiceInput;
};


export type MutationPurchaseOrderCancelArgs = {
  orderId: Scalars['ID'];
};


export type MutationPurchaseOrderProcessArgs = {
  orderId: Scalars['ID'];
};


export type MutationPurchaseOrderSaveArgs = {
  businessPartnerId?: InputMaybe<Scalars['ID']>;
  contactPersonId?: InputMaybe<Scalars['ID']>;
  items: Array<PurchaseOrderDetailItemInput>;
  orderId?: InputMaybe<Scalars['ID']>;
};


export type MutationPurchaseReceivedOrderProcessArgs = {
  isNewPartChildrenActive: Scalars['Boolean'];
  receiveId: Scalars['ID'];
};


export type MutationPurchaseReceivedOrderSaveArgs = {
  input: PurchaseReceivedOrderSaveInput;
};


export type MutationSettingsCreateArgs = {
  input: SettingValueInput;
};


export type MutationSettingsSaveValueArgs = {
  input: SettingValueInput;
};


export type MutationSettingsUpdateArgs = {
  input: SettingValueInput;
};


export type MutationSettingsUpdateValueByIdAndNameArgs = {
  settingsTypeName: Scalars['String'];
  settingsValue: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationShareSalesCompanySaveArgs = {
  input: ShareSalesCompanySaveInput;
};


export type MutationSoldCarUndoArgs = {
  cardNumber?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationSortOrderConfigCompaniesArgs = {
  id: Scalars['Int'];
  sortCompany_Id: Scalars['Int'];
  sortsequenceId: Scalars['Int'];
};


export type MutationTntSubmitConsignmentNumberRangeArgs = {
  max: Scalars['Int'];
  min: Scalars['Int'];
};


export type MutationTransportCompanyDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTransportCompanySaveArgs = {
  input: TransportCompanyInput;
};


export type MutationUserCreateArgs = {
  input: UserInput;
};


export type MutationUserDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationUserLastReadNoteArgs = {
  id: Scalars['Int'];
  lastReadNote: Scalars['DateTime'];
};


export type MutationUserLoginValidateArgs = {
  input: UserLoginValidateInput;
};


export type MutationUserUpdateArgs = {
  input: UserInput;
};


export type MutationWorkflowUserUpdateArgs = {
  input: WorkflowUserInput;
};

export type NameType = {
  __typename?: 'NameType';
  name?: Maybe<Scalars['String']>;
};

export type NemdelPart = {
  __typename?: 'NemdelPart';
  alternativeNumbers?: Maybe<Scalars['String']>;
  carDoorsType?: Maybe<Scalars['String']>;
  carTypeCode?: Maybe<Scalars['String']>;
  carTypeName?: Maybe<Scalars['String']>;
  carVinCode?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  companyAddress?: Maybe<Scalars['String']>;
  companyEmail?: Maybe<Scalars['String']>;
  companyId: Scalars['ID'];
  companyName?: Maybe<Scalars['String']>;
  companyPhone?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  engineCode?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  images: Array<ImageResource>;
  insuranceNumber?: Maybe<Scalars['String']>;
  itemCode?: Maybe<Scalars['String']>;
  itemNumber?: Maybe<Scalars['String']>;
  itemPartId: Scalars['ID'];
  kilometrage?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  partTypeCode?: Maybe<Scalars['String']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  readOnPart?: Maybe<Scalars['String']>;
  registrationNo?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type NemdelPartsSearchInput = {
  carItemNumber?: InputMaybe<Scalars['String']>;
  carVinCode?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Scalars['String']>;
  engineCode?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  pageSort?: InputMaybe<Scalars['String']>;
  searchTerm?: InputMaybe<Scalars['String']>;
  transmissionCode?: InputMaybe<Scalars['String']>;
};

export type NemdelPartsSearchResult = {
  __typename?: 'NemdelPartsSearchResult';
  items: Array<NemdelPart>;
  totalRows: Scalars['Int'];
};

export type Order = {
  __typename?: 'Order';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  businessPartnerAccountNumber?: Maybe<Scalars['String']>;
  businessPartnerId?: Maybe<Scalars['ID']>;
  businessPartnerName?: Maybe<Scalars['String']>;
  contactPersonId?: Maybe<Scalars['ID']>;
  contactPersonName?: Maybe<Scalars['String']>;
  creatorUserName?: Maybe<Scalars['String']>;
  creatorUser_Id?: Maybe<Scalars['ID']>;
  dateTimeCreated: Scalars['DateTime'];
  expireDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  itemsCount: Scalars['Int'];
  itemsQuantity?: Maybe<Scalars['Decimal']>;
  noOfChildren: Scalars['Int'];
  orderNumber?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
};

export type OrderAddReservedItemInput = {
  clientAddress?: InputMaybe<Scalars['String']>;
  clientAddressId?: InputMaybe<Scalars['ID']>;
  clientId?: InputMaybe<Scalars['String']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  contactPersonId?: InputMaybe<Scalars['ID']>;
  expireDateTime?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  itemDetails: OrderDetailItemInput;
};

export type OrderDetailItem = {
  __typename?: 'OrderDetailItem';
  amount: Scalars['Float'];
  availableQuantity?: Maybe<Scalars['Float']>;
  carItemNumber?: Maybe<Scalars['String']>;
  carType?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  discountAmount: Scalars['Float'];
  discountPercent: Scalars['Float'];
  id?: Maybe<Scalars['ID']>;
  itemCode?: Maybe<Scalars['String']>;
  itemId: Scalars['ID'];
  itemNumber: Scalars['String'];
  itemType: Scalars['String'];
  onHand?: Maybe<Scalars['Float']>;
  orderId: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  quantity: Scalars['Float'];
  shelfNumber?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  tag?: Maybe<Scalars['String']>;
  totalAmount: Scalars['Float'];
};

export type OrderDetailItemInput = {
  comments?: InputMaybe<Scalars['String']>;
  discountAmount?: InputMaybe<Scalars['Float']>;
  discountPercent?: InputMaybe<Scalars['Float']>;
  itemId: Scalars['ID'];
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  tag?: InputMaybe<Scalars['String']>;
  totalAmount?: InputMaybe<Scalars['Float']>;
};

export type OrderSaveReservedItemsInput = {
  expireDateTime?: InputMaybe<Scalars['DateTime']>;
  generateInvoice?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  itemDetails: Array<OrderDetailItemInput>;
  status: Scalars['Int'];
};

export type OrderSaveReservedItemsResult = {
  __typename?: 'OrderSaveReservedItemsResult';
  generatedInvoiceId?: Maybe<Scalars['ID']>;
  orderId: Scalars['ID'];
};

export type OrdersSearchInput = {
  businessPartner?: InputMaybe<Scalars['String']>;
  businessPartnerId?: InputMaybe<Scalars['Int']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  creationDateFrom?: InputMaybe<Scalars['DateTime']>;
  creationDateTo?: InputMaybe<Scalars['DateTime']>;
  creatorUserId?: InputMaybe<Scalars['Int']>;
  engineType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
};

export type PaginationInput = {
  pageDirection?: InputMaybe<Scalars['Int']>;
  pageId?: InputMaybe<Scalars['Int']>;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  pageSort?: InputMaybe<Scalars['String']>;
  searchSessionID?: InputMaybe<Scalars['Int']>;
};

export type PaginationOutput = {
  __typename?: 'PaginationOutput';
  pageId?: Maybe<Scalars['Int']>;
  searchSessionID?: Maybe<Scalars['Int']>;
  totalRows?: Maybe<Scalars['Int']>;
};

export type Part = {
  __typename?: 'Part';
  alertNote?: Maybe<Scalars['String']>;
  alternativeNumbers?: Maybe<Scalars['String']>;
  carBody?: Maybe<Scalars['String']>;
  carBodyColor?: Maybe<Scalars['String']>;
  carCardNumber?: Maybe<Scalars['String']>;
  carCode?: Maybe<Scalars['String']>;
  carEngineCode?: Maybe<Scalars['String']>;
  carFirstRegistrationDate?: Maybe<Scalars['DateTime']>;
  carPartInfo?: Maybe<Scalars['String']>;
  carPurchasePrice?: Maybe<Scalars['Float']>;
  carType?: Maybe<Scalars['String']>;
  carTypeApprovalDate?: Maybe<Scalars['String']>;
  carTypeApprovalNo?: Maybe<Scalars['String']>;
  carTypeId?: Maybe<Scalars['Int']>;
  carVinCode?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  companyPhone?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  costAmount?: Maybe<Scalars['Float']>;
  dateTimeShelfNumberChanged?: Maybe<Scalars['DateTime']>;
  discountPrice?: Maybe<Scalars['Float']>;
  ebayHeadlineLower?: Maybe<Scalars['String']>;
  ebayHeadlineUpper?: Maybe<Scalars['String']>;
  ebayNoteEnglish?: Maybe<Scalars['String']>;
  ebayNoteGerman?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  euroNorm?: Maybe<Scalars['Int']>;
  extendedvatPercent?: Maybe<Scalars['Int']>;
  hasImages?: Maybe<Scalars['Boolean']>;
  haveInfoText?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  inputDate?: Maybe<Scalars['DateTime']>;
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePrice?: Maybe<Scalars['Float']>;
  insuranceTxt?: Maybe<Scalars['String']>;
  invoiceComments?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  isInGlobalDb?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  isPartShowPriceonGlobal?: Maybe<Scalars['Boolean']>;
  isPrinted?: Maybe<Scalars['Boolean']>;
  isUploadToEBay?: Maybe<Scalars['Boolean']>;
  itemCode?: Maybe<Scalars['String']>;
  itemTypeId?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  maxQuantity?: Maybe<Scalars['Float']>;
  minQuantity?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  newPartParentId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  onHand?: Maybe<Scalars['Float']>;
  onOrder?: Maybe<Scalars['Float']>;
  onPurchaseOrder?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Int']>;
  partCode?: Maybe<Scalars['String']>;
  partHeight?: Maybe<Scalars['Float']>;
  partLength?: Maybe<Scalars['Float']>;
  partType?: Maybe<Scalars['String']>;
  partWeight?: Maybe<Scalars['Float']>;
  partWidth?: Maybe<Scalars['Float']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  readOnPart?: Maybe<Scalars['String']>;
  receivedItemOrder_Id?: Maybe<Scalars['Int']>;
  shelfNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  supplier?: Maybe<Scalars['String']>;
  supplierContactPerson?: Maybe<Scalars['String']>;
  supplierContactPersonId?: Maybe<Scalars['Int']>;
  supplierId?: Maybe<Scalars['Int']>;
  supplierNumber?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type PartAssignToShelfInput = {
  dateTimeShelfNumberChanged?: InputMaybe<Scalars['DateTime']>;
  itemNumber: Scalars['String'];
  shelfNumber: Scalars['String'];
};

export type PartBulkUpdateInput = {
  carItemTypeId?: InputMaybe<Scalars['Int']>;
  engineType?: InputMaybe<Scalars['String']>;
  insuranceNumber?: InputMaybe<Scalars['String']>;
  insurancePrice?: InputMaybe<Scalars['Float']>;
  isLabelPrinted?: InputMaybe<Scalars['Boolean']>;
  kilometrage?: InputMaybe<Scalars['Int']>;
  price1?: InputMaybe<Scalars['Float']>;
  price2?: InputMaybe<Scalars['Float']>;
  price3?: InputMaybe<Scalars['Float']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type PartCalc = {
  __typename?: 'PartCalc';
  carCardNumber?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invoiceComments?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  invoice_ID?: Maybe<Scalars['Int']>;
  itemTypeID?: Maybe<Scalars['Int']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  rowType?: Maybe<Scalars['Int']>;
  sourceCarCardNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  targetCarCardNumber?: Maybe<Scalars['String']>;
};

export type PartCalcInput = {
  carCardNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  invoiceComments?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  itemTypeId?: InputMaybe<Scalars['Int']>;
  price1?: InputMaybe<Scalars['Float']>;
  rowType: Scalars['Int'];
  targetCarCardNumber?: InputMaybe<Scalars['String']>;
};

export type PartClientCarInput = {
  body?: InputMaybe<Scalars['String']>;
  bodyColor?: InputMaybe<Scalars['String']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  carItemTypeId?: InputMaybe<Scalars['Int']>;
  clientCarId?: InputMaybe<Scalars['Int']>;
  comments?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  companyName?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Scalars['String']>;
  doorsType?: InputMaybe<Scalars['String']>;
  engineCode?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  equipmentModel?: InputMaybe<Scalars['String']>;
  firstRegistrationDate?: InputMaybe<Scalars['DateTime']>;
  gId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageFiles?: InputMaybe<Scalars['String']>;
  interiorColor?: InputMaybe<Scalars['String']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  itemTypeId?: InputMaybe<Scalars['Int']>;
  kiloWatt?: InputMaybe<Scalars['Float']>;
  kilometrage?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  oemMNumber?: InputMaybe<Scalars['String']>;
  parent_Id?: InputMaybe<Scalars['Int']>;
  phone?: InputMaybe<Scalars['String']>;
  price1?: InputMaybe<Scalars['Float']>;
  price2?: InputMaybe<Scalars['Float']>;
  price3?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  registrationNo?: InputMaybe<Scalars['String']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  transmissionCode?: InputMaybe<Scalars['String']>;
  transmissionType?: InputMaybe<Scalars['String']>;
  typeApprovalDate?: InputMaybe<Scalars['String']>;
  typeApprovalNo?: InputMaybe<Scalars['String']>;
  vinCode?: InputMaybe<Scalars['String']>;
  warehouseInputDate?: InputMaybe<Scalars['DateTime']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type PartCostAmount = {
  __typename?: 'PartCostAmount';
  costAmount?: Maybe<Scalars['Float']>;
  globalCostAmount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
};

export type PartEngineCertReportRecord = {
  __typename?: 'PartEngineCertReportRecord';
  carName?: Maybe<Scalars['String']>;
  cvrNumber?: Maybe<Scalars['String']>;
  dateTimeProcessed?: Maybe<Scalars['String']>;
  engineCertComment?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  kilometrage?: Maybe<Scalars['String']>;
  partName?: Maybe<Scalars['String']>;
};

export type PartExtendedVatInvoicePrice = {
  __typename?: 'PartExtendedVatInvoicePrice';
  amount?: Maybe<Scalars['Float']>;
  amountCalculationVat?: Maybe<Scalars['Float']>;
  dateTimeProcessed?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  invoiceNumber?: Maybe<Scalars['String']>;
  itemNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PartExtendedVatPurchasePrice = {
  __typename?: 'PartExtendedVatPurchasePrice';
  id: Scalars['ID'];
  itemNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  purchaseDate?: Maybe<Scalars['DateTime']>;
  purchasePrice?: Maybe<Scalars['Float']>;
  receivedDate?: Maybe<Scalars['DateTime']>;
  vinCode?: Maybe<Scalars['String']>;
};

export type PartExtendedVatTransferredMonthly = {
  __typename?: 'PartExtendedVatTransferredMonthly';
  company_Id?: Maybe<Scalars['Int']>;
  creatorUser_Id?: Maybe<Scalars['Int']>;
  dateTimeCreated?: Maybe<Scalars['DateTime']>;
  dateTimeModified?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isCompleted?: Maybe<Scalars['Boolean']>;
  lastModifierUser_Id?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['DateTime']>;
  status?: Maybe<Scalars['Int']>;
  totalAmountMonthly?: Maybe<Scalars['Float']>;
};

export type PartExtendedVatTransferredMonthlyReportInput = {
  month?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['Int']>;
  quarter?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type PartExternal = {
  __typename?: 'PartExternal';
  alertNote?: Maybe<Scalars['String']>;
  alternativeNumbers?: Maybe<Scalars['String']>;
  carBody?: Maybe<Scalars['String']>;
  carBodyColor?: Maybe<Scalars['String']>;
  carCardNumber?: Maybe<Scalars['String']>;
  carCode?: Maybe<Scalars['String']>;
  carEngineCode?: Maybe<Scalars['String']>;
  carFirstRegistrationDate?: Maybe<Scalars['DateTime']>;
  carPartInfo?: Maybe<Scalars['String']>;
  carPurchasePrice?: Maybe<Scalars['Float']>;
  carType?: Maybe<Scalars['String']>;
  carTypeApprovalDate?: Maybe<Scalars['String']>;
  carTypeApprovalNo?: Maybe<Scalars['String']>;
  carTypeId?: Maybe<Scalars['Int']>;
  carVinCode?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  companyPhone?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  costAmount?: Maybe<Scalars['Float']>;
  dateTimeShelfNumberChanged?: Maybe<Scalars['DateTime']>;
  discountPrice?: Maybe<Scalars['Float']>;
  ebayHeadlineLower?: Maybe<Scalars['String']>;
  ebayHeadlineUpper?: Maybe<Scalars['String']>;
  ebayNoteEnglish?: Maybe<Scalars['String']>;
  ebayNoteGerman?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  euroNorm?: Maybe<Scalars['Int']>;
  extendedvatPercent?: Maybe<Scalars['Int']>;
  externalCompanyId?: Maybe<Scalars['Int']>;
  externalCompanyName?: Maybe<Scalars['String']>;
  externalItemId?: Maybe<Scalars['Int']>;
  hasImages?: Maybe<Scalars['Boolean']>;
  haveInfoText?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  inputDate?: Maybe<Scalars['DateTime']>;
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePrice?: Maybe<Scalars['Float']>;
  insuranceTxt?: Maybe<Scalars['String']>;
  invoiceComments?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  isInGlobalDb?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  isPartShowPriceonGlobal?: Maybe<Scalars['Boolean']>;
  isPrinted?: Maybe<Scalars['Boolean']>;
  isUploadToEBay?: Maybe<Scalars['Boolean']>;
  itemCode?: Maybe<Scalars['String']>;
  itemTypeId?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  maxQuantity?: Maybe<Scalars['Float']>;
  minQuantity?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  newPartParentId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  onHand?: Maybe<Scalars['Float']>;
  onOrder?: Maybe<Scalars['Float']>;
  onPurchaseOrder?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Int']>;
  partCode?: Maybe<Scalars['String']>;
  partHeight?: Maybe<Scalars['Float']>;
  partLength?: Maybe<Scalars['Float']>;
  partType?: Maybe<Scalars['String']>;
  partWeight?: Maybe<Scalars['Float']>;
  partWidth?: Maybe<Scalars['Float']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  readOnPart?: Maybe<Scalars['String']>;
  receivedItemOrder_Id?: Maybe<Scalars['Int']>;
  shelfNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  supplier?: Maybe<Scalars['String']>;
  supplierContactPerson?: Maybe<Scalars['String']>;
  supplierContactPersonId?: Maybe<Scalars['Int']>;
  supplierId?: Maybe<Scalars['Int']>;
  supplierNumber?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type PartExternalItem = {
  __typename?: 'PartExternalItem';
  comments?: Maybe<Scalars['String']>;
  externalCompanyId: Scalars['Int'];
  externalItemId: Scalars['Int'];
};

export type PartExternalItemGetInput = {
  companyId: Scalars['Int'];
  externalItemId: Scalars['Int'];
};

export type PartExternalItemInput = {
  comments?: InputMaybe<Scalars['String']>;
  externalCompanyId: Scalars['Int'];
  externalItemId: Scalars['Int'];
};

export type PartFileInfoSaveInput = {
  itemCode: Scalars['String'];
  itemInfoId: Scalars['Int'];
  name: Scalars['String'];
  resourceType: Scalars['String'];
  status: Scalars['Int'];
};

export type PartGlobal = {
  __typename?: 'PartGlobal';
  body?: Maybe<Scalars['String']>;
  bodyColor?: Maybe<Scalars['String']>;
  carDoorsType?: Maybe<Scalars['String']>;
  carItemTypeId?: Maybe<Scalars['Int']>;
  carNumber?: Maybe<Scalars['String']>;
  carType?: Maybe<Scalars['String']>;
  carVinCode?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  companyAddress?: Maybe<Scalars['String']>;
  companyEmail?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['Int']>;
  companyName?: Maybe<Scalars['String']>;
  companyPhone?: Maybe<Scalars['String']>;
  companyShortName?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  engineCode?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  equipmentModel?: Maybe<Scalars['String']>;
  extendedvatPercent?: Maybe<Scalars['Int']>;
  externalUrl?: Maybe<Scalars['String']>;
  hasImages?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  interiorColor?: Maybe<Scalars['String']>;
  itemCode?: Maybe<Scalars['String']>;
  itemNumber?: Maybe<Scalars['String']>;
  itemPartId?: Maybe<Scalars['Int']>;
  itemTypeId?: Maybe<Scalars['Int']>;
  kiloWatt?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  manufacturerId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  partType?: Maybe<Scalars['String']>;
  price1?: Maybe<Scalars['Float']>;
  registrationNo?: Maybe<Scalars['String']>;
  shelfNumber?: Maybe<Scalars['String']>;
  transmissionCode?: Maybe<Scalars['String']>;
  transmissionType?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type PartGlobalInput = {
  body?: InputMaybe<Scalars['String']>;
  bodyColor?: InputMaybe<Scalars['String']>;
  carDoorsType?: InputMaybe<Scalars['String']>;
  carItemTypeId?: InputMaybe<Scalars['Int']>;
  carNumber?: InputMaybe<Scalars['String']>;
  carType?: InputMaybe<Scalars['String']>;
  carVinCode?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  companyAddress?: InputMaybe<Scalars['String']>;
  companyEmail?: InputMaybe<Scalars['String']>;
  companyId?: InputMaybe<Scalars['Int']>;
  companyName?: InputMaybe<Scalars['String']>;
  companyPhone?: InputMaybe<Scalars['String']>;
  companyShortName?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Scalars['String']>;
  engineCode?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  equipmentModel?: InputMaybe<Scalars['String']>;
  extendedvatPercent?: InputMaybe<Scalars['Int']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  interiorColor?: InputMaybe<Scalars['String']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  itemPartId?: InputMaybe<Scalars['Int']>;
  itemTypeId?: InputMaybe<Scalars['Int']>;
  kiloWatt?: InputMaybe<Scalars['Int']>;
  kilometrage?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  partType?: InputMaybe<Scalars['String']>;
  price1?: InputMaybe<Scalars['Float']>;
  registrationNo?: InputMaybe<Scalars['String']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  transmissionCode?: InputMaybe<Scalars['String']>;
  transmissionType?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type PartImage = {
  __typename?: 'PartImage';
  id: Scalars['ID'];
  images: Array<ImageResource>;
};

export type PartInput = {
  alertNote?: InputMaybe<Scalars['String']>;
  alternativeNumbers?: InputMaybe<Scalars['String']>;
  carBody?: InputMaybe<Scalars['String']>;
  carBodyColor?: InputMaybe<Scalars['String']>;
  carCardNumber?: InputMaybe<Scalars['String']>;
  carCode?: InputMaybe<Scalars['String']>;
  carEngineCode?: InputMaybe<Scalars['String']>;
  carFirstRegistrationDate?: InputMaybe<Scalars['DateTime']>;
  carPartInfo?: InputMaybe<Scalars['String']>;
  carPurchasePrice?: InputMaybe<Scalars['Float']>;
  carType?: InputMaybe<Scalars['String']>;
  carTypeApprovalDate?: InputMaybe<Scalars['String']>;
  carTypeApprovalNo?: InputMaybe<Scalars['String']>;
  carTypeId?: InputMaybe<Scalars['Int']>;
  carVinCode?: InputMaybe<Scalars['String']>;
  cardNumber?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  companyPhone?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Scalars['String']>;
  costAmount?: InputMaybe<Scalars['Float']>;
  dateTimeShelfNumberChanged?: InputMaybe<Scalars['DateTime']>;
  discountPrice?: InputMaybe<Scalars['Float']>;
  ebayHeadlineLower?: InputMaybe<Scalars['String']>;
  ebayHeadlineUpper?: InputMaybe<Scalars['String']>;
  ebayNoteEnglish?: InputMaybe<Scalars['String']>;
  ebayNoteGerman?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  euroNorm?: InputMaybe<Scalars['Int']>;
  extendedvatPercent?: InputMaybe<Scalars['Int']>;
  hasImages?: InputMaybe<Scalars['Boolean']>;
  haveInfoText?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  inputDate?: InputMaybe<Scalars['DateTime']>;
  insuranceNumber?: InputMaybe<Scalars['String']>;
  insurancePrice?: InputMaybe<Scalars['Float']>;
  insuranceTxt?: InputMaybe<Scalars['String']>;
  invoiceComments?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  isInGlobalDB?: InputMaybe<Scalars['Boolean']>;
  isNew?: InputMaybe<Scalars['Boolean']>;
  isPartShowPriceonGlobal?: InputMaybe<Scalars['Boolean']>;
  isPrinted?: InputMaybe<Scalars['Boolean']>;
  isUploadToEbay?: InputMaybe<Scalars['Boolean']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemTypeId?: InputMaybe<Scalars['Int']>;
  kilometrage?: InputMaybe<Scalars['Int']>;
  maxQuantity?: InputMaybe<Scalars['Float']>;
  minQuantity?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  newPartParentId?: InputMaybe<Scalars['Int']>;
  notes?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  onHand?: InputMaybe<Scalars['Float']>;
  onOrder?: InputMaybe<Scalars['Float']>;
  onPurchaseOrder?: InputMaybe<Scalars['Float']>;
  parentId?: InputMaybe<Scalars['Int']>;
  partCode?: InputMaybe<Scalars['String']>;
  partHeight?: InputMaybe<Scalars['Float']>;
  partLength?: InputMaybe<Scalars['Float']>;
  partType?: InputMaybe<Scalars['String']>;
  partWeight?: InputMaybe<Scalars['Float']>;
  partWidth?: InputMaybe<Scalars['Float']>;
  price1?: InputMaybe<Scalars['Float']>;
  price2?: InputMaybe<Scalars['Float']>;
  price3?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  readOnPart?: InputMaybe<Scalars['String']>;
  receivedItemOrder_Id?: InputMaybe<Scalars['Int']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  supplier?: InputMaybe<Scalars['String']>;
  supplierContactPerson?: InputMaybe<Scalars['String']>;
  supplierContactPersonId?: InputMaybe<Scalars['Int']>;
  supplierId?: InputMaybe<Scalars['Int']>;
  supplierNumber?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type PartInventoryReportInput = {
  carItemNumber?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Scalars['String']>;
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  engineCode?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  estimationPercent?: InputMaybe<Scalars['Int']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  kilometrage?: InputMaybe<Scalars['Int']>;
  partStandartPrice?: InputMaybe<Scalars['Int']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  shelfNumberTo?: InputMaybe<Scalars['String']>;
  showOnlyNewPartsInReport?: InputMaybe<Scalars['Boolean']>;
  transmissionCode?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type PartInventoryReportRecord = {
  __typename?: 'PartInventoryReportRecord';
  amount?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  estimatedAmount?: Maybe<Scalars['Float']>;
  groupCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onStock?: Maybe<Scalars['Float']>;
};

export type PartItemDimensionsInput = {
  partHeight?: InputMaybe<Scalars['Float']>;
  partLength?: InputMaybe<Scalars['Float']>;
  partWeight?: InputMaybe<Scalars['Float']>;
  partWidth?: InputMaybe<Scalars['Float']>;
};

export type PartItemFileInfo = {
  __typename?: 'PartItemFileInfo';
  fileName: Scalars['String'];
  fileType: Scalars['String'];
  id: Scalars['ID'];
  itemCode: Scalars['String'];
  status?: Maybe<Scalars['Int']>;
};

export type PartItemInfo = {
  __typename?: 'PartItemInfo';
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  itemCode: Scalars['String'];
};

export type PartItemNumberEdges = {
  __typename?: 'PartItemNumberEdges';
  nextItemId?: Maybe<Scalars['Int']>;
  nextItemNumber?: Maybe<Scalars['String']>;
  prevItemId?: Maybe<Scalars['Int']>;
  prevItemNumber?: Maybe<Scalars['String']>;
};

export type PartItemShelfNumber = {
  __typename?: 'PartItemShelfNumber';
  itemNumber: Scalars['String'];
  shelfNumber: Scalars['String'];
};

export type PartItemShelfNumberInput = {
  itemNumber: Scalars['String'];
  shelfNumber: Scalars['String'];
};

export type PartMainBoardCalc = {
  __typename?: 'PartMainBoardCalc';
  carItemNumber?: Maybe<Scalars['String']>;
  dB?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  isMainboard: Scalars['Boolean'];
  priceSoldParts?: Maybe<Scalars['Float']>;
  priceUnmountedParts?: Maybe<Scalars['Float']>;
  totalBalance?: Maybe<Scalars['Float']>;
  totalExpenses?: Maybe<Scalars['Float']>;
  totalExternal_Expenses?: Maybe<Scalars['Float']>;
  totalInternal_Expenses?: Maybe<Scalars['Float']>;
  totalPurchasePrice?: Maybe<Scalars['Float']>;
  totalRepairPrice?: Maybe<Scalars['Float']>;
  totalRetailPrice?: Maybe<Scalars['Float']>;
  totalSoldParts?: Maybe<Scalars['Int']>;
  totalTransportationPrice?: Maybe<Scalars['Float']>;
  totalUnmountedParts?: Maybe<Scalars['Int']>;
};

export type PartMissingItem = {
  __typename?: 'PartMissingItem';
  creatorUser_Id?: Maybe<Scalars['Int']>;
  dateTimeCreated?: Maybe<Scalars['DateTime']>;
  dateTimeModified?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  engineCode?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemCode?: Maybe<Scalars['String']>;
  lastModifierUser_Id?: Maybe<Scalars['Int']>;
  oemNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  transmissionCode?: Maybe<Scalars['String']>;
  userFullName?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type PartMissingItemsReportInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  engineCode?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  itemCode?: InputMaybe<Scalars['String']>;
  lastModifierUser_Id?: InputMaybe<Scalars['Int']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  transmissionCode?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type PartNewReportInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  supplierBusinessPartnerId?: InputMaybe<Scalars['Int']>;
};

export type PartNewReportRecord = {
  __typename?: 'PartNewReportRecord';
  accountNumber?: Maybe<Scalars['String']>;
  alertNote?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  costAmount?: Maybe<Scalars['Float']>;
  itemCode?: Maybe<Scalars['String']>;
  itemNumber?: Maybe<Scalars['String']>;
  maxQuantity?: Maybe<Scalars['Float']>;
  minQuantity?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  onHand?: Maybe<Scalars['Float']>;
};

export type PartNewSold = {
  __typename?: 'PartNewSold';
  lastSaleDt?: Maybe<Scalars['DateTime']>;
  soldLastMonth: Scalars['Float'];
  soldLastYear: Scalars['Float'];
  soldThisMonth: Scalars['Float'];
  soldThisYear: Scalars['Float'];
};

export type PartNewSummaryReportInput = {
  dateFrom?: InputMaybe<Scalars['DateTime']>;
  dateTo?: InputMaybe<Scalars['DateTime']>;
  newPartType?: InputMaybe<Scalars['Int']>;
};

export type PartNewSummaryReportRecord = {
  __typename?: 'PartNewSummaryReportRecord';
  amount?: Maybe<Scalars['Float']>;
  costAmount?: Maybe<Scalars['Float']>;
  itemCode?: Maybe<Scalars['String']>;
  itemNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profit?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type PartOemNumberType = {
  __typename?: 'PartOemNumberType';
  alertNote?: Maybe<Scalars['String']>;
  alternativeNumbers?: Maybe<Scalars['String']>;
  countAmount?: Maybe<Scalars['Int']>;
  ebayHeadlineLower?: Maybe<Scalars['String']>;
  ebayHeadlineUpper?: Maybe<Scalars['String']>;
  ebayNoteEnglish?: Maybe<Scalars['String']>;
  ebayNoteGerman?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePrice?: Maybe<Scalars['Float']>;
  oemTxt?: Maybe<Scalars['String']>;
  partHeight?: Maybe<Scalars['Float']>;
  partLength?: Maybe<Scalars['Float']>;
  partWeight?: Maybe<Scalars['Float']>;
  partWidth?: Maybe<Scalars['Float']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
};

export type PartOemStandardSaveInput = {
  alertNote?: InputMaybe<Scalars['String']>;
  alternativeNumbers?: InputMaybe<Scalars['String']>;
  ebayHeadlineLower?: InputMaybe<Scalars['String']>;
  ebayHeadlineUpper?: InputMaybe<Scalars['String']>;
  ebayNoteEnglish?: InputMaybe<Scalars['String']>;
  ebayNoteGerman?: InputMaybe<Scalars['String']>;
  insuranceNumber?: InputMaybe<Scalars['String']>;
  insurancePrice?: InputMaybe<Scalars['Float']>;
  oemTxt?: InputMaybe<Scalars['String']>;
  oldInsuranceNumber?: InputMaybe<Scalars['String']>;
  partHeight?: InputMaybe<Scalars['Float']>;
  partLength?: InputMaybe<Scalars['Float']>;
  partWeight?: InputMaybe<Scalars['Float']>;
  partWidth?: InputMaybe<Scalars['Float']>;
  price1?: InputMaybe<Scalars['Float']>;
  price2?: InputMaybe<Scalars['Float']>;
  price3?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type PartPriceInput = {
  price1?: InputMaybe<Scalars['Float']>;
  price2?: InputMaybe<Scalars['Float']>;
  price3?: InputMaybe<Scalars['Float']>;
};

export type PartSaveInput = {
  newSeriesId?: InputMaybe<Scalars['Int']>;
  part: PartInput;
};

export type PartSellable = {
  __typename?: 'PartSellable';
  alertNote?: Maybe<Scalars['String']>;
  alternativeNumbers?: Maybe<Scalars['String']>;
  carBody?: Maybe<Scalars['String']>;
  carBodyColor?: Maybe<Scalars['String']>;
  carCardNumber?: Maybe<Scalars['String']>;
  carCode?: Maybe<Scalars['String']>;
  carEngineCode?: Maybe<Scalars['String']>;
  carFirstRegistrationDate?: Maybe<Scalars['DateTime']>;
  carPartInfo?: Maybe<Scalars['String']>;
  carPurchasePrice?: Maybe<Scalars['Float']>;
  carType?: Maybe<Scalars['String']>;
  carTypeApprovalDate?: Maybe<Scalars['String']>;
  carTypeApprovalNo?: Maybe<Scalars['String']>;
  carTypeId?: Maybe<Scalars['Int']>;
  carVinCode?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  companyPhone?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  costAmount?: Maybe<Scalars['Float']>;
  dateTimeShelfNumberChanged?: Maybe<Scalars['DateTime']>;
  discountPrice?: Maybe<Scalars['Float']>;
  ebayHeadlineLower?: Maybe<Scalars['String']>;
  ebayHeadlineUpper?: Maybe<Scalars['String']>;
  ebayNoteEnglish?: Maybe<Scalars['String']>;
  ebayNoteGerman?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  euroNorm?: Maybe<Scalars['Int']>;
  extendedvatPercent?: Maybe<Scalars['Int']>;
  hasImages?: Maybe<Scalars['Boolean']>;
  haveInfoText?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  inputDate?: Maybe<Scalars['DateTime']>;
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePrice?: Maybe<Scalars['Float']>;
  insuranceTxt?: Maybe<Scalars['String']>;
  invoiceComments?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  isInGlobalDb?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  isPartShowPriceonGlobal?: Maybe<Scalars['Boolean']>;
  isPrinted?: Maybe<Scalars['Boolean']>;
  isUploadToEBay?: Maybe<Scalars['Boolean']>;
  itemCode?: Maybe<Scalars['String']>;
  itemTypeId?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  maxQuantity?: Maybe<Scalars['Float']>;
  minQuantity?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  newPartParentId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  onHand?: Maybe<Scalars['Float']>;
  onOrder?: Maybe<Scalars['Float']>;
  onPurchaseOrder?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  partCode?: Maybe<Scalars['String']>;
  partHeight?: Maybe<Scalars['Float']>;
  partLength?: Maybe<Scalars['Float']>;
  partType?: Maybe<Scalars['String']>;
  partWeight?: Maybe<Scalars['Float']>;
  partWidth?: Maybe<Scalars['Float']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  readOnPart?: Maybe<Scalars['String']>;
  receivedItemOrder_Id?: Maybe<Scalars['Int']>;
  shelfNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  supplier?: Maybe<Scalars['String']>;
  supplierContactPerson?: Maybe<Scalars['String']>;
  supplierContactPersonId?: Maybe<Scalars['Int']>;
  supplierId?: Maybe<Scalars['Int']>;
  supplierNumber?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type PartSold = {
  __typename?: 'PartSold';
  alertNote?: Maybe<Scalars['String']>;
  alternativeNumbers?: Maybe<Scalars['String']>;
  carBody?: Maybe<Scalars['String']>;
  carBodyColor?: Maybe<Scalars['String']>;
  carCardNumber?: Maybe<Scalars['String']>;
  carCode?: Maybe<Scalars['String']>;
  carEngineCode?: Maybe<Scalars['String']>;
  carFirstRegistrationDate?: Maybe<Scalars['DateTime']>;
  carPartInfo?: Maybe<Scalars['String']>;
  carPurchasePrice?: Maybe<Scalars['Float']>;
  carType?: Maybe<Scalars['String']>;
  carTypeApprovalDate?: Maybe<Scalars['String']>;
  carTypeApprovalNo?: Maybe<Scalars['String']>;
  carTypeId?: Maybe<Scalars['Int']>;
  carVinCode?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  companyPhone?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  costAmount?: Maybe<Scalars['Float']>;
  dateTimeShelfNumberChanged?: Maybe<Scalars['DateTime']>;
  discountPrice?: Maybe<Scalars['Float']>;
  ebayHeadlineLower?: Maybe<Scalars['String']>;
  ebayHeadlineUpper?: Maybe<Scalars['String']>;
  ebayNoteEnglish?: Maybe<Scalars['String']>;
  ebayNoteGerman?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  euroNorm?: Maybe<Scalars['Int']>;
  extendedvatPercent?: Maybe<Scalars['Int']>;
  hasImages?: Maybe<Scalars['Boolean']>;
  haveInfoText?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  inputDate?: Maybe<Scalars['DateTime']>;
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePrice?: Maybe<Scalars['Float']>;
  insuranceTxt?: Maybe<Scalars['String']>;
  invoiceComments?: Maybe<Scalars['String']>;
  invoiceDateTimeProcessed?: Maybe<Scalars['DateTime']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  invoicePrice?: Maybe<Scalars['Float']>;
  invoiceQuantity?: Maybe<Scalars['Float']>;
  isInGlobalDb?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  isPartShowPriceonGlobal?: Maybe<Scalars['Boolean']>;
  isPrinted?: Maybe<Scalars['Boolean']>;
  isUploadToEBay?: Maybe<Scalars['Boolean']>;
  itemCode?: Maybe<Scalars['String']>;
  itemTypeId?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  maxQuantity?: Maybe<Scalars['Float']>;
  minQuantity?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  newPartParentId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  onHand?: Maybe<Scalars['Float']>;
  onOrder?: Maybe<Scalars['Float']>;
  onPurchaseOrder?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  partCode?: Maybe<Scalars['String']>;
  partHeight?: Maybe<Scalars['Float']>;
  partLength?: Maybe<Scalars['Float']>;
  partType?: Maybe<Scalars['String']>;
  partWeight?: Maybe<Scalars['Float']>;
  partWidth?: Maybe<Scalars['Float']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  readOnPart?: Maybe<Scalars['String']>;
  receivedItemOrder_Id?: Maybe<Scalars['Int']>;
  shelfNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  supplier?: Maybe<Scalars['String']>;
  supplierContactPerson?: Maybe<Scalars['String']>;
  supplierContactPersonId?: Maybe<Scalars['Int']>;
  supplierId?: Maybe<Scalars['Int']>;
  supplierNumber?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type PartStat = {
  __typename?: 'PartStat';
  available: Scalars['Int'];
  itemCode: Scalars['String'];
  itemTypeId: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  onHand: Scalars['Int'];
  onOrder: Scalars['Int'];
  sold: Scalars['Int'];
  totalQuantity: Scalars['Int'];
};

export type PartTypeInfoSaveInput = {
  carItemTypeId: Scalars['ID'];
  comments: Scalars['String'];
  partItemTypeId: Scalars['ID'];
};

export type PartUpdateExtendedVatTransferredMonthlyInput = {
  id?: InputMaybe<Scalars['Int']>;
  isCompleted: Scalars['Boolean'];
  period: Scalars['DateTime'];
  status: Scalars['Int'];
  totalAmountMonthly: Scalars['Float'];
};

export type PartWorkflowLine = {
  __typename?: 'PartWorkflowLine';
  carItemCode?: Maybe<Scalars['String']>;
  carType?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  closeMessage?: Maybe<Scalars['String']>;
  hasImages?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  inWorkDate: Scalars['DateTime'];
  invoiceId?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  partId?: Maybe<Scalars['Int']>;
  partName?: Maybe<Scalars['String']>;
  partType?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  startMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  transportName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  workerName?: Maybe<Scalars['String']>;
};

export type PartWorkflowLineInput = {
  carItemName?: InputMaybe<Scalars['String']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  checkOnly?: InputMaybe<Scalars['Boolean']>;
  dateTimeProcessed?: InputMaybe<Scalars['DateTime']>;
  groupIndex?: InputMaybe<Scalars['Int']>;
  initialsNotes?: InputMaybe<Scalars['String']>;
  invoiceId?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  login?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  partItemTypeId?: InputMaybe<Scalars['Int']>;
  partNumber?: InputMaybe<Scalars['String']>;
  partTypeCode?: InputMaybe<Scalars['String']>;
  shippingCompany?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['Int']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type PartWorkflowPrintReportRecord = {
  __typename?: 'PartWorkflowPrintReportRecord';
  carItemCode?: Maybe<Scalars['String']>;
  carType?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  closeMessage?: Maybe<Scalars['String']>;
  inWorkDate?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  partType?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['String']>;
  startMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transportName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
  workerName?: Maybe<Scalars['String']>;
};

export type PartWorkflowSearchInput = {
  businessPartnerId?: InputMaybe<Scalars['Int']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  creatorUserId?: InputMaybe<Scalars['Int']>;
  customer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<IdListItemInput>>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  processDateFrom?: InputMaybe<Scalars['DateTime']>;
  processDateTo?: InputMaybe<Scalars['DateTime']>;
};

export type PartWorkflowSearchRecord = {
  __typename?: 'PartWorkflowSearchRecord';
  carItemCode?: Maybe<Scalars['String']>;
  carType?: Maybe<Scalars['String']>;
  cardNumber?: Maybe<Scalars['String']>;
  closeMessage?: Maybe<Scalars['String']>;
  creatorUserName?: Maybe<Scalars['String']>;
  customerName?: Maybe<Scalars['String']>;
  hasImages?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  inWorkDate: Scalars['DateTime'];
  invoiceId?: Maybe<Scalars['Int']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  itemCode?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  partId?: Maybe<Scalars['Int']>;
  partName?: Maybe<Scalars['String']>;
  partType?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  startMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  transportName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Float']>;
  workerName?: Maybe<Scalars['String']>;
};

export type PartsMissingItemsSaveInput = {
  description?: InputMaybe<Scalars['String']>;
  engineCode?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  itemCode?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  transmissionCode?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['String']>;
};

export type PartsSearchFilterInput = {
  carItemNumber?: InputMaybe<Scalars['String']>;
  carRegistrationNo?: InputMaybe<Scalars['String']>;
  columnPurchasePrice?: InputMaybe<Scalars['String']>;
  columnSalesPrice?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  includeOnlyLowQuantityParts?: InputMaybe<Scalars['Boolean']>;
  includeOnlySoldParts?: InputMaybe<Scalars['Boolean']>;
  includeOnlyTrashedParts?: InputMaybe<Scalars['Boolean']>;
  includeReservedItems?: InputMaybe<Scalars['Boolean']>;
  includeSoldItems?: InputMaybe<Scalars['Boolean']>;
  insuranceNumber?: InputMaybe<Scalars['String']>;
  invoiceId?: InputMaybe<Scalars['Int']>;
  isSpecificSearch?: InputMaybe<Scalars['Boolean']>;
  isSpecificSelectedIDs?: InputMaybe<Scalars['Boolean']>;
  isTransferPrices?: InputMaybe<Scalars['Boolean']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  kilometrage?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['Int']>;
  searchInSession?: InputMaybe<Scalars['Boolean']>;
  selectedIds?: InputMaybe<Array<IdListItemInput>>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  shelfNumberTo?: InputMaybe<Scalars['String']>;
  showNewPartParent?: InputMaybe<Scalars['Boolean']>;
  showNewPartsInLocalSearch?: InputMaybe<Scalars['Boolean']>;
  showOnlyNewPartParents?: InputMaybe<Scalars['Boolean']>;
  supplierBusinessPartnerId?: InputMaybe<Scalars['Int']>;
  supplierNumber?: InputMaybe<Scalars['String']>;
  topSeach?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  unprintedItemsOnly?: InputMaybe<Scalars['Boolean']>;
  warehouseInputDateFrom?: InputMaybe<Scalars['DateTime']>;
  warehouseInputDateTo?: InputMaybe<Scalars['DateTime']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type PartsSearchGlobalFilterInput = {
  carItemName?: InputMaybe<Scalars['String']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  carItemTypeId?: InputMaybe<Scalars['Int']>;
  comments?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<Scalars['String']>;
  engineCode?: InputMaybe<Scalars['String']>;
  engineType?: InputMaybe<Scalars['String']>;
  excludePseudoParts?: InputMaybe<Scalars['Boolean']>;
  isSpecificSearch?: InputMaybe<Scalars['Boolean']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  itemTypeId?: InputMaybe<Scalars['Int']>;
  kilometrageFrom?: InputMaybe<Scalars['Int']>;
  kilometrageTo?: InputMaybe<Scalars['Int']>;
  manufacturerId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  searchTherm?: InputMaybe<Scalars['String']>;
  selectedIds?: InputMaybe<Array<IdListItemInput>>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  showNewPartsInGlobalSearch?: InputMaybe<Scalars['Boolean']>;
  transmissionCode?: InputMaybe<Scalars['String']>;
  yearFrom?: InputMaybe<Scalars['Int']>;
  yearTo?: InputMaybe<Scalars['Int']>;
};

export type PartsSearchGlobalInput = {
  filter: PartsSearchGlobalFilterInput;
  pagination: PaginationInput;
};

export type PartsSearchGlobalResult = {
  __typename?: 'PartsSearchGlobalResult';
  items: Array<PartGlobal>;
  pagination: PaginationOutput;
};

export type PartsSearchInput = {
  filter: PartsSearchFilterInput;
  pagination: PaginationInput;
};

export type PartsSearchResult = {
  __typename?: 'PartsSearchResult';
  items: Array<Part>;
  pagination: PaginationOutput;
};

export type PartsSellableSearchResult = {
  __typename?: 'PartsSellableSearchResult';
  items: Array<PartSellable>;
  pagination: PaginationOutput;
};

export type PartsSoldSearchFilterInput = {
  carItemTypeId?: InputMaybe<Scalars['Int']>;
  includeServices?: InputMaybe<Scalars['Boolean']>;
  itemTypeId?: InputMaybe<Scalars['Int']>;
};

export type PartsSoldSearchInput = {
  filter: PartsSoldSearchFilterInput;
  pagination: PaginationInput;
};

export type PartsSoldSearchResult = {
  __typename?: 'PartsSoldSearchResult';
  items: Array<PartSold>;
  pagination: PaginationOutput;
};

export type PatchNote = {
  __typename?: 'PatchNote';
  dateTimeCreated?: Maybe<Scalars['DateTime']>;
  dateTimeModified?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  status?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type PaymentTerms = {
  __typename?: 'PaymentTerms';
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extraDays?: Maybe<Scalars['Int']>;
  extraMonths?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  payDueMonth?: Maybe<Scalars['String']>;
};

export type PaymentTermsInput = {
  code?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extraDays?: InputMaybe<Scalars['Int']>;
  extraMonths?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  payDueMonth: Scalars['String'];
};

export type PurchaseInvoice = {
  __typename?: 'PurchaseInvoice';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  contactPerson?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customInvoiceLines?: Maybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  dateTimeProcessed?: Maybe<Scalars['DateTime']>;
  defaultInvoiceLines?: Maybe<Scalars['String']>;
  deliverTo?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  discountPercent?: Maybe<Scalars['Float']>;
  externalCompanyId?: Maybe<Scalars['ID']>;
  externalCreatorUserName?: Maybe<Scalars['String']>;
  externalCustomerAccountNumber?: Maybe<Scalars['String']>;
  externalCustomerName?: Maybe<Scalars['String']>;
  externalInvoiceDateTimeProcessed?: Maybe<Scalars['DateTime']>;
  externalInvoiceNumber?: Maybe<Scalars['String']>;
  externalRefInvoiceNumber?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invoiceNumber?: Maybe<Scalars['String']>;
  invoiceRequisitionNumber?: Maybe<Scalars['String']>;
  isSharesales: Scalars['Boolean'];
  items: Array<PurchaseInvoiceDetailItem>;
  linkedSalesInvoiceId?: Maybe<Scalars['ID']>;
  paymentTermCode?: Maybe<Scalars['String']>;
  paymentTermExtraDays?: Maybe<Scalars['Int']>;
  paymentTermExtraMonths?: Maybe<Scalars['Int']>;
  paymentTermPayDueMonth?: Maybe<Scalars['String']>;
  paymentTerms?: Maybe<Scalars['String']>;
  printSettings?: Maybe<Scalars['String']>;
  refInvoiceId?: Maybe<Scalars['ID']>;
  refInvoiceNumber?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
  totalAmountSale?: Maybe<Scalars['Float']>;
  totalAmountSaleDif?: Maybe<Scalars['Float']>;
  transportationAmount?: Maybe<Scalars['Float']>;
  transportationCompany?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vatAmount?: Maybe<Scalars['Float']>;
  vatPercent?: Maybe<Scalars['Float']>;
  vendorAccountNumber?: Maybe<Scalars['String']>;
  vendorName?: Maybe<Scalars['String']>;
};

export type PurchaseInvoiceDetailItem = {
  __typename?: 'PurchaseInvoiceDetailItem';
  amount?: Maybe<Scalars['Float']>;
  carItemCode?: Maybe<Scalars['String']>;
  carItemNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Float']>;
  discountAmount?: Maybe<Scalars['Float']>;
  discountPercent?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  invoiceId?: Maybe<Scalars['ID']>;
  itemCode?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['ID']>;
  itemNumber?: Maybe<Scalars['String']>;
  orderIndex: Scalars['Int'];
  quantity?: Maybe<Scalars['Float']>;
  tag?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
  vareGroup?: Maybe<Scalars['String']>;
};

export type PurchaseInvoiceDetailItemInput = {
  amount?: InputMaybe<Scalars['Float']>;
  carItemCode?: InputMaybe<Scalars['String']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Float']>;
  discountAmount?: InputMaybe<Scalars['Float']>;
  discountPercent?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  invoiceId?: InputMaybe<Scalars['ID']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemId?: InputMaybe<Scalars['ID']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  orderIndex: Scalars['Int'];
  quantity?: InputMaybe<Scalars['Float']>;
  tag?: InputMaybe<Scalars['String']>;
  totalAmount?: InputMaybe<Scalars['Float']>;
  vareGroup?: InputMaybe<Scalars['String']>;
};

export type PurchaseInvoiceInput = {
  address?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Float']>;
  contactPerson?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  customInvoiceLines?: InputMaybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  dateTimeProcessed?: InputMaybe<Scalars['DateTime']>;
  defaultInvoiceLines?: InputMaybe<Scalars['String']>;
  deliverTo?: InputMaybe<Scalars['String']>;
  deliveryAddress?: InputMaybe<Scalars['String']>;
  discountAmount?: InputMaybe<Scalars['Float']>;
  discountPercent?: InputMaybe<Scalars['Float']>;
  externalCompanyId?: InputMaybe<Scalars['ID']>;
  externalCreatorUserName?: InputMaybe<Scalars['String']>;
  externalCustomerAccountNumber?: InputMaybe<Scalars['String']>;
  externalCustomerName?: InputMaybe<Scalars['String']>;
  externalInvoiceDateTimeProcessed?: InputMaybe<Scalars['DateTime']>;
  externalInvoiceNumber?: InputMaybe<Scalars['String']>;
  externalRefInvoiceNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  invoiceRequisitionNumber?: InputMaybe<Scalars['String']>;
  isSharesales: Scalars['Boolean'];
  items: Array<PurchaseInvoiceDetailItemInput>;
  linkedSalesInvoiceId?: InputMaybe<Scalars['ID']>;
  paymentTermCode?: InputMaybe<Scalars['String']>;
  paymentTermExtraDays?: InputMaybe<Scalars['Int']>;
  paymentTermExtraMonths?: InputMaybe<Scalars['Int']>;
  paymentTermPayDueMonth?: InputMaybe<Scalars['String']>;
  paymentTerms?: InputMaybe<Scalars['String']>;
  printSettings?: InputMaybe<Scalars['String']>;
  refInvoiceId?: InputMaybe<Scalars['ID']>;
  refInvoiceNumber?: InputMaybe<Scalars['String']>;
  totalAmount?: InputMaybe<Scalars['Float']>;
  totalAmountSale?: InputMaybe<Scalars['Float']>;
  totalAmountSaleDif?: InputMaybe<Scalars['Float']>;
  transportationAmount?: InputMaybe<Scalars['Float']>;
  transportationCompany?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  vatAmount?: InputMaybe<Scalars['Float']>;
  vatPercent?: InputMaybe<Scalars['Float']>;
  vendorAccountNumber?: InputMaybe<Scalars['String']>;
  vendorName?: InputMaybe<Scalars['String']>;
};

export type PurchaseInvoiceSearchInput = {
  address?: InputMaybe<Scalars['String']>;
  businessPartnerId?: InputMaybe<Scalars['ID']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  creationDateFrom?: InputMaybe<Scalars['DateTime']>;
  creationDateTo?: InputMaybe<Scalars['DateTime']>;
  creatorUserId?: InputMaybe<Scalars['ID']>;
  engineType?: InputMaybe<Scalars['String']>;
  externalCompanyId?: InputMaybe<Scalars['ID']>;
  externalInvoiceNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<IdListItemInput>>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  linkedSalesInvoiceId?: InputMaybe<Scalars['ID']>;
  linkedSalesInvoiceNumber?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  processDateFrom?: InputMaybe<Scalars['DateTime']>;
  processDateTo?: InputMaybe<Scalars['DateTime']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  showCompletedOnly?: InputMaybe<Scalars['Boolean']>;
  showIncompletedOnly?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  vendor?: InputMaybe<Scalars['String']>;
};

export type PurchaseOrder = {
  __typename?: 'PurchaseOrder';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  businessPartnerAccountNumber?: Maybe<Scalars['String']>;
  businessPartnerId?: Maybe<Scalars['ID']>;
  businessPartnerName?: Maybe<Scalars['String']>;
  contactPersonId?: Maybe<Scalars['ID']>;
  contactPersonName?: Maybe<Scalars['String']>;
  creatorUserName?: Maybe<Scalars['String']>;
  creatorUser_Id?: Maybe<Scalars['ID']>;
  dateTimeCreated: Scalars['DateTime'];
  id: Scalars['ID'];
  itemsCount: Scalars['Int'];
  itemsQuantity?: Maybe<Scalars['Float']>;
  noOfChildren: Scalars['Int'];
  orderNumber?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
};

export type PurchaseOrderDetailItem = {
  __typename?: 'PurchaseOrderDetailItem';
  amount: Scalars['Float'];
  carType?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  discountAmount: Scalars['Float'];
  discountPercent: Scalars['Float'];
  id?: Maybe<Scalars['ID']>;
  itemCode?: Maybe<Scalars['String']>;
  itemId: Scalars['ID'];
  itemNumber: Scalars['String'];
  itemType: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  orderId: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  quantity: Scalars['Float'];
  remainedQuantity: Scalars['Float'];
  status: Scalars['Int'];
  supplierNumber?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  totalAmount: Scalars['Float'];
};

export type PurchaseOrderDetailItemInput = {
  comments?: InputMaybe<Scalars['String']>;
  cost?: InputMaybe<Scalars['Float']>;
  discountAmount?: InputMaybe<Scalars['Float']>;
  discountPercent?: InputMaybe<Scalars['Float']>;
  itemId: Scalars['ID'];
  quantity?: InputMaybe<Scalars['Float']>;
  tag?: InputMaybe<Scalars['String']>;
  totalAmount?: InputMaybe<Scalars['Float']>;
};

export type PurchaseOrderSearchInput = {
  businessPartner?: InputMaybe<Scalars['String']>;
  businessPartnerId?: InputMaybe<Scalars['ID']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  creationDateFrom?: InputMaybe<Scalars['DateTime']>;
  creationDateTo?: InputMaybe<Scalars['DateTime']>;
  creatorUserId?: InputMaybe<Scalars['ID']>;
  engineType?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  includeCompleted?: InputMaybe<Scalars['Boolean']>;
  includeNotReceived?: InputMaybe<Scalars['Boolean']>;
  includeNotSent?: InputMaybe<Scalars['Boolean']>;
  includeOnlyActiveOrders?: InputMaybe<Scalars['Boolean']>;
  includePartialReceived?: InputMaybe<Scalars['Boolean']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  orderNumber?: InputMaybe<Scalars['String']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  supplierNumber?: InputMaybe<Scalars['String']>;
};

export type PurchaseReceivedOrder = {
  __typename?: 'PurchaseReceivedOrder';
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Decimal']>;
  businessPartnerAccountNumber?: Maybe<Scalars['String']>;
  businessPartnerId?: Maybe<Scalars['ID']>;
  businessPartnerName?: Maybe<Scalars['String']>;
  contactPersonId?: Maybe<Scalars['ID']>;
  contactPersonName?: Maybe<Scalars['String']>;
  creatorUserName?: Maybe<Scalars['String']>;
  creatorUser_Id?: Maybe<Scalars['ID']>;
  dateTimeCreated: Scalars['DateTime'];
  dateTimeReceived?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  itemsCount: Scalars['Int'];
  itemsQuantity?: Maybe<Scalars['Decimal']>;
  noOfChildren: Scalars['Int'];
  orderId?: Maybe<Scalars['ID']>;
  orderNumber?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  transactionNumber?: Maybe<Scalars['String']>;
};

export type PurchaseReceivedOrderDetailItem = {
  __typename?: 'PurchaseReceivedOrderDetailItem';
  amount: Scalars['Float'];
  carType?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  dateTimeCreated: Scalars['DateTime'];
  discountAmount: Scalars['Float'];
  discountPercent: Scalars['Float'];
  id?: Maybe<Scalars['ID']>;
  isCompleted: Scalars['Boolean'];
  itemCode?: Maybe<Scalars['String']>;
  itemId: Scalars['ID'];
  itemNumber: Scalars['String'];
  itemType: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  orderId: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  quantity: Scalars['Float'];
  remainedQuantity: Scalars['Float'];
  status: Scalars['Int'];
  supplierNumber?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  totalAmount: Scalars['Float'];
};

export type PurchaseReceivedOrderDetailItemInput = {
  comments?: InputMaybe<Scalars['String']>;
  discountAmount?: InputMaybe<Scalars['Float']>;
  discountPercent?: InputMaybe<Scalars['Float']>;
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  itemId: Scalars['ID'];
  price?: InputMaybe<Scalars['Float']>;
  quantity?: InputMaybe<Scalars['Float']>;
  tag?: InputMaybe<Scalars['String']>;
  totalAmount?: InputMaybe<Scalars['Float']>;
};

export type PurchaseReceivedOrderSaveInput = {
  items: Array<PurchaseReceivedOrderDetailItemInput>;
  orderId?: InputMaybe<Scalars['ID']>;
  receiveId?: InputMaybe<Scalars['ID']>;
  receivedDate: Scalars['DateTime'];
};

export type PurchaseReceivedOrderSearchInput = {
  businessPartner?: InputMaybe<Scalars['String']>;
  businessPartnerId?: InputMaybe<Scalars['ID']>;
  carItemNumber?: InputMaybe<Scalars['String']>;
  creationDateFrom?: InputMaybe<Scalars['DateTime']>;
  creationDateTo?: InputMaybe<Scalars['DateTime']>;
  creatorUserId?: InputMaybe<Scalars['ID']>;
  engineType?: InputMaybe<Scalars['String']>;
  includeCompleted?: InputMaybe<Scalars['Boolean']>;
  includeOnlyActiveOrders?: InputMaybe<Scalars['Boolean']>;
  includeOnlyActiveReceives?: InputMaybe<Scalars['Boolean']>;
  includePartialReceived?: InputMaybe<Scalars['Boolean']>;
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
  oemNumber?: InputMaybe<Scalars['String']>;
  orderCreationDateFrom?: InputMaybe<Scalars['DateTime']>;
  orderCreationDateTo?: InputMaybe<Scalars['DateTime']>;
  orderCreatorUserId?: InputMaybe<Scalars['ID']>;
  orderId?: InputMaybe<Scalars['ID']>;
  orderNumber?: InputMaybe<Scalars['String']>;
  receivedDateFrom?: InputMaybe<Scalars['DateTime']>;
  receivedDateTo?: InputMaybe<Scalars['DateTime']>;
  shelfNumber?: InputMaybe<Scalars['String']>;
  supplierNumber?: InputMaybe<Scalars['String']>;
  transactionId?: InputMaybe<Scalars['ID']>;
  transactionNumber?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  ap24DeletePartsSearch: Ap24DeletePartsSearchResult;
  ap24PartsSearch: Ap24PartsSearchResult;
  auctionHouseMessages: Array<AuctionHouseMessage>;
  auctionHouseMessagesByInvoiceId: Array<AuctionHouseMessage>;
  auctionHouseMessagesByItemId: Array<AuctionHouseMessage>;
  businessPartner?: Maybe<BusinessPartner>;
  businessPartnerBalanceInfos: Array<BusinessPartnerBalanceInfo>;
  businessPartnerGroup?: Maybe<BusinessPartnerGroup>;
  businessPartnerGroups: Array<BusinessPartnerGroup>;
  businessPartnerSearch: Array<BusinessPartnerSearchRecord>;
  cSapEdiGlDailyJournalRecords: Array<InvoiceAccountTransferEdiGlDailyJournalRecord>;
  cSapGlDailyJournalRecords: Array<InvoiceAccountTransferGlDailyJournalRecord>;
  cSapGroupData: Array<InvoiceAccountTransferGroupRecord>;
  car?: Maybe<Car>;
  carCardTypes: Array<CardType>;
  carDamageTypesAll: Array<IdNameType>;
  carDoorsTypesAll: Array<NameType>;
  carEnviromentalReport: Array<Maybe<CarSearchRecord>>;
  carEquipmentTypesAll: Array<EquipmentType>;
  carGetByCardNumber?: Maybe<Car>;
  carGetByCardNumberExact?: Maybe<Car>;
  carInfoRollsOnTypesAll: Array<IdNameType>;
  carItemTypeGroup: ItemTypeGroup;
  carItemTypeGroups: Array<ItemTypeGroup>;
  carTransmissionTypesAll: Array<NameType>;
  carsMainBoardItems: Array<CarMainBoardItem>;
  carsSearch: CarsSearchResult;
  clientCar?: Maybe<ClientCar>;
  clientCars: Array<ClientCar>;
  companies: Array<CompanyMap>;
  company: Company;
  companyById: CompanyMap;
  contactPerson?: Maybe<ContactPerson>;
  currencies: Array<Currency>;
  deviationByInvoiceId?: Maybe<Deviation>;
  deviationReasons: Array<IdNameType>;
  deviationResolutions: Array<IdNameType>;
  deviationsReasonReport: Array<DeviationReasonReportRecord>;
  deviationsResolutionReport: Array<DeviationResolutionReportRecord>;
  deviationsSearch: Array<Deviation>;
  eConomicEdiGlDailyJournalRecords: Array<InvoiceAccountTransferEdiGlDailyJournalRecord>;
  eConomicGlDailyJournalRecords: Array<InvoiceAccountTransferGlDailyJournalRecord>;
  eConomicGroupData: Array<InvoiceAccountTransferGroupRecord>;
  globalMessageByID: GlobalMessage;
  iNVPRINTTXTSETTINGSInSystem: InvoicePrinterSettning;
  invoice: Invoice;
  invoiceDetailNewItem?: Maybe<InvoiceDetailNewItem>;
  invoiceEdiBuffers: Array<InvoiceEdiBuffer>;
  invoiceGlobalExists: Scalars['Boolean'];
  invoiceIdByItemNumber?: Maybe<Scalars['ID']>;
  invoiceLastExportNumbers: Array<InvoiceLastExportNumber>;
  invoiceNote?: Maybe<InvoiceNote>;
  invoiceReportSellersStatistics: Array<InvoiceReportSellersStatisticsRecord>;
  invoiceSellerStatisticsReport: Array<InvoiceSellerStatisticsReportRecord>;
  invoiceShareSalesLocal: Array<InvoiceShareSalesLocal>;
  invoiceStartNumber?: Maybe<Scalars['String']>;
  invoiceStatisticsReport: Array<InvoiceStatisticsReportRecord>;
  invoicesSearch: Array<InvoiceSearchRecord>;
  itemImageFileResources: Array<FileResource>;
  itemSeries: Array<ItemSeries>;
  itemThumbnail120ImageFileResources: Array<FileResource>;
  koedDeletePartsSearch: KoedDeletePartsSearchResult;
  koedPartsSearch: KoedPartsSearchResult;
  lastNote: Array<PatchNote>;
  manufacturers: Array<Manufacturer>;
  nemdelPartsSearch: NemdelPartsSearchResult;
  order?: Maybe<Order>;
  orderDetailItem?: Maybe<OrderDetailItem>;
  orderDetailItems: Array<OrderDetailItem>;
  ordersSearch: Array<Order>;
  part: Part;
  partCardTypes: Array<CardType>;
  partExtendedVatTransferredMonthlyReport?: Maybe<PartExtendedVatTransferredMonthly>;
  partExternal: PartExternal;
  partExternalItem?: Maybe<PartExternalItem>;
  partExternalItems: Array<PartExternalItem>;
  partGetByPartNumber?: Maybe<Part>;
  partGlobalBySearchTerm?: Maybe<PartGlobal>;
  partGlobalClientCarExists: Scalars['Boolean'];
  partGlobalClientCarInterests?: Maybe<PartGlobal>;
  partInvoiceDetailItemCostData?: Maybe<PartCostAmount>;
  partInvoiceExtraLines: Array<InvoiceExtraLine>;
  partItemInfo?: Maybe<PartItemInfo>;
  partItemNumberEdges?: Maybe<PartItemNumberEdges>;
  partItemsFileInfo: Array<PartItemFileInfo>;
  partMissingItems: Array<PartMissingItem>;
  partNewReceivedLastCreatedItem: Scalars['Int'];
  partNewSold?: Maybe<PartNewSold>;
  partOemNumberTypes: Array<PartOemNumberType>;
  partTypeInfo?: Maybe<Scalars['String']>;
  partWorkFlowItems: Array<PartWorkflowSearchRecord>;
  partWorkFlowLinesByInvoiceId: Array<PartWorkflowLine>;
  partWorkflowLineByInvoiceId?: Maybe<PartWorkflowLine>;
  partWorkflowLines: Array<PartWorkflowLine>;
  partWorkflowPrintReport: Array<PartWorkflowPrintReportRecord>;
  partsCarCalc: Array<PartCalc>;
  partsCarMainboardCalc: Array<PartMainBoardCalc>;
  partsCarSheet: Array<Part>;
  partsCarStat: Array<PartStat>;
  partsClientCarInterests: Array<PartSellable>;
  partsEngineCertReport: Array<PartEngineCertReportRecord>;
  partsExtendedVatInvoicePrice: Array<PartExtendedVatInvoicePrice>;
  partsExtendedVatPurchasePrice: Array<PartExtendedVatPurchasePrice>;
  partsGlobalClientCarInterests: Array<PartGlobal>;
  partsImages: Array<PartImage>;
  partsInventoryReport: Array<PartInventoryReportRecord>;
  partsIsAssignedToShelf: Scalars['Boolean'];
  partsNewNewlyReceived: Array<Part>;
  partsNewReport: Array<PartNewReportRecord>;
  partsNewSummaryReport: Array<PartNewSummaryReportRecord>;
  partsSearch: PartsSearchResult;
  partsSearchGlobal: PartsSearchGlobalResult;
  partsSearchGlobalVersion1: PartsSearchGlobalResult;
  partsSellableSearch: PartsSellableSearchResult;
  partsShelfLeftover: Array<PartItemShelfNumber>;
  partsSoldSearch: PartsSoldSearchResult;
  paymentTerms?: Maybe<PaymentTerms>;
  paymentTermsAll: Array<PaymentTerms>;
  paymentTermsByCode?: Maybe<PaymentTerms>;
  purchaseInvoice?: Maybe<PurchaseInvoice>;
  purchaseInvoicesSearch: Array<PurchaseInvoice>;
  purchaseOrder?: Maybe<PurchaseOrder>;
  purchaseOrderDetailItems: Array<PurchaseOrderDetailItem>;
  purchaseOrdersSearch: Array<PurchaseOrder>;
  purchaseReceivedOrderDetailItems: Array<PurchaseReceivedOrderDetailItem>;
  purchaseReceivedOrdersSearch: Array<PurchaseReceivedOrder>;
  schmiedmannOemNumbers: Array<SchmiedmannOemNumber>;
  schmiedmannPartOemStatisticsReport: Array<SchmiedmannPartOemStatisticsReportRecord>;
  schmiedmannPartPrices: Array<SchmiedmannPartPrice>;
  seek4CarsDeletePartsSearch: Seek4CarsDeletePartsSearchResult;
  seek4CarsPartsSearch: Seek4CarsPartsSearchResult;
  seek4CarsPartsSpecificSearch: Seek4CarsPartsSearchResult;
  settingsAll: Array<SettingValue>;
  settingsValue?: Maybe<Scalars['String']>;
  settingsValueByIdAndName?: Maybe<Scalars['String']>;
  shareSalesBusinessPartnerId?: Maybe<Scalars['ID']>;
  shareSalesCompanies: Array<ShareSalesCompany>;
  shareSalesIsAllowed: Scalars['Boolean'];
  shareSalesMaxPriceChange: Scalars['Float'];
  smptSetting: SmptSetting;
  sortOrderConfigCompanies: Array<SortOrderConfigType>;
  tntGenerateConsignmentNumber: Scalars['String'];
  tntRemainingConsignmentNumber: Scalars['Int'];
  tntShippingData?: Maybe<TntShippingData>;
  transportCompanies: Array<TransportCompany>;
  transportCompaniesSystem: Array<TransportCompany>;
  transportCompany?: Maybe<TransportCompany>;
  unicontaEdiGlDailyJournalRecords: Array<InvoiceAccountTransferEdiGlDailyJournalRecord>;
  unicontaGlDailyJournalRecords: Array<InvoiceAccountTransferGlDailyJournalRecord>;
  unicontaGroupData: Array<InvoiceAccountTransferGroupRecord>;
  userById: User;
  users: Array<User>;
  workflowUsers: Array<WorkflowUser>;
};


export type QueryAp24DeletePartsSearchArgs = {
  input: Ap24PartsSearchInput;
};


export type QueryAp24PartsSearchArgs = {
  input: Ap24PartsSearchInput;
};


export type QueryAuctionHouseMessagesArgs = {
  fromCompanyId?: InputMaybe<Scalars['ID']>;
  toCompanyId?: InputMaybe<Scalars['ID']>;
};


export type QueryAuctionHouseMessagesByInvoiceIdArgs = {
  invoiceId: Scalars['ID'];
};


export type QueryAuctionHouseMessagesByItemIdArgs = {
  itemId: Scalars['ID'];
};


export type QueryBusinessPartnerArgs = {
  id: Scalars['ID'];
};


export type QueryBusinessPartnerBalanceInfosArgs = {
  id: Scalars['ID'];
};


export type QueryBusinessPartnerGroupArgs = {
  id: Scalars['ID'];
};


export type QueryBusinessPartnerSearchArgs = {
  input: BusinessPartnerSearchInput;
};


export type QueryCSapEdiGlDailyJournalRecordsArgs = {
  dateFrom: Scalars['DateTime'];
  dateTo: Scalars['DateTime'];
  useProductGroups: Scalars['Boolean'];
};


export type QueryCSapGlDailyJournalRecordsArgs = {
  dateFrom: Scalars['DateTime'];
  dateTo: Scalars['DateTime'];
  useProductGroups: Scalars['Int'];
};


export type QueryCSapGroupDataArgs = {
  invoiceNumber: Scalars['String'];
};


export type QueryCarArgs = {
  id: Scalars['ID'];
};


export type QueryCarGetByCardNumberArgs = {
  cardNumber: Scalars['String'];
};


export type QueryCarGetByCardNumberExactArgs = {
  cardNumber: Scalars['String'];
};


export type QueryCarItemTypeGroupArgs = {
  id: Scalars['ID'];
};


export type QueryCarsSearchArgs = {
  input: CarsSearchInput;
};


export type QueryClientCarArgs = {
  registrationNumber?: InputMaybe<Scalars['String']>;
  vinCode?: InputMaybe<Scalars['String']>;
};


export type QueryClientCarsArgs = {
  comments: Scalars['String'];
};


export type QueryCompanyArgs = {
  companyid: Scalars['ID'];
};


export type QueryCompanyByIdArgs = {
  companyid: Scalars['ID'];
};


export type QueryContactPersonArgs = {
  id: Scalars['ID'];
};


export type QueryDeviationByInvoiceIdArgs = {
  invoiceId: Scalars['ID'];
};


export type QueryDeviationsReasonReportArgs = {
  dateFrom: Scalars['DateTime'];
  dateTo?: InputMaybe<Scalars['DateTime']>;
};


export type QueryDeviationsResolutionReportArgs = {
  dateFrom: Scalars['DateTime'];
  dateTo?: InputMaybe<Scalars['DateTime']>;
};


export type QueryDeviationsSearchArgs = {
  input: InvoiceSearchInput;
};


export type QueryEConomicEdiGlDailyJournalRecordsArgs = {
  purchaseInvoiceNumberFrom: Scalars['String'];
  purchaseInvoiceNumberTo: Scalars['String'];
  useProductGroups: Scalars['Boolean'];
};


export type QueryEConomicGlDailyJournalRecordsArgs = {
  salesInvoiceNumberFrom: Scalars['String'];
  salesInvoiceNumberTo: Scalars['String'];
  useProductGroups: Scalars['Boolean'];
};


export type QueryEConomicGroupDataArgs = {
  invoiceNumber: Scalars['String'];
};


export type QueryInvoiceArgs = {
  id: Scalars['ID'];
};


export type QueryInvoiceDetailNewItemArgs = {
  invoiceId: Scalars['ID'];
  itemId: Scalars['ID'];
};


export type QueryInvoiceGlobalExistsArgs = {
  companyId: Scalars['ID'];
  invoiceNumber: Scalars['String'];
};


export type QueryInvoiceIdByItemNumberArgs = {
  itemNumber: Scalars['String'];
};


export type QueryInvoiceNoteArgs = {
  id: Scalars['ID'];
};


export type QueryInvoiceReportSellersStatisticsArgs = {
  input: InvoiceReportSellersStatisticsInput;
};


export type QueryInvoiceSellerStatisticsReportArgs = {
  dateFrom: Scalars['DateTime'];
  dateTo?: InputMaybe<Scalars['DateTime']>;
  includeDeletedUsers: Scalars['Boolean'];
};


export type QueryInvoiceShareSalesLocalArgs = {
  processDateFrom?: InputMaybe<Scalars['DateTime']>;
  processDateTo?: InputMaybe<Scalars['DateTime']>;
};


export type QueryInvoiceStatisticsReportArgs = {
  input: InvoiceStatisticsReportInput;
};


export type QueryInvoicesSearchArgs = {
  input: InvoiceSearchInput;
};


export type QueryItemImageFileResourcesArgs = {
  input: ItemImageResourcesInput;
};


export type QueryItemSeriesArgs = {
  itemType?: InputMaybe<Scalars['String']>;
};


export type QueryItemThumbnail120ImageFileResourcesArgs = {
  input: ItemImageResourcesInput;
};


export type QueryKoedDeletePartsSearchArgs = {
  input: KoedPartsSearchInput;
};


export type QueryKoedPartsSearchArgs = {
  input: KoedPartsSearchInput;
};


export type QueryManufacturersArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryNemdelPartsSearchArgs = {
  input: NemdelPartsSearchInput;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrderDetailItemArgs = {
  itemId: Scalars['ID'];
  orderId: Scalars['ID'];
};


export type QueryOrderDetailItemsArgs = {
  orderId: Scalars['ID'];
};


export type QueryOrdersSearchArgs = {
  input: OrdersSearchInput;
};


export type QueryPartArgs = {
  id: Scalars['ID'];
};


export type QueryPartExtendedVatTransferredMonthlyReportArgs = {
  input: PartExtendedVatTransferredMonthlyReportInput;
};


export type QueryPartExternalArgs = {
  id: Scalars['ID'];
};


export type QueryPartExternalItemArgs = {
  externalCompanyId: Scalars['Int'];
  externalItemId: Scalars['Int'];
};


export type QueryPartExternalItemsArgs = {
  input: Array<InputMaybe<PartExternalItemGetInput>>;
};


export type QueryPartGetByPartNumberArgs = {
  partNumber: Scalars['String'];
};


export type QueryPartGlobalBySearchTermArgs = {
  searchTerm: Scalars['String'];
};


export type QueryPartGlobalClientCarExistsArgs = {
  id: Scalars['ID'];
};


export type QueryPartGlobalClientCarInterestsArgs = {
  id: Scalars['ID'];
};


export type QueryPartInvoiceDetailItemCostDataArgs = {
  id: Scalars['ID'];
  isGlobal?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPartInvoiceExtraLinesArgs = {
  searchTerm?: InputMaybe<Scalars['String']>;
};


export type QueryPartItemInfoArgs = {
  itemCode: Scalars['String'];
};


export type QueryPartItemNumberEdgesArgs = {
  itemNumber: Scalars['String'];
};


export type QueryPartItemsFileInfoArgs = {
  itemInfoId: Scalars['ID'];
};


export type QueryPartMissingItemsArgs = {
  input: PartMissingItemsReportInput;
};


export type QueryPartNewReceivedLastCreatedItemArgs = {
  newPartParentId: Scalars['ID'];
};


export type QueryPartNewSoldArgs = {
  id: Scalars['ID'];
  showParent: Scalars['Boolean'];
};


export type QueryPartOemNumberTypesArgs = {
  searchTerm?: InputMaybe<Scalars['String']>;
};


export type QueryPartTypeInfoArgs = {
  carTypeId: Scalars['ID'];
  partTypeId: Scalars['ID'];
};


export type QueryPartWorkFlowItemsArgs = {
  input: PartWorkflowSearchInput;
};


export type QueryPartWorkFlowLinesByInvoiceIdArgs = {
  invoiceId: Scalars['ID'];
};


export type QueryPartWorkflowLineByInvoiceIdArgs = {
  invoiceId: Scalars['ID'];
  partId: Scalars['ID'];
};


export type QueryPartWorkflowLinesArgs = {
  type: Scalars['Int'];
};


export type QueryPartWorkflowPrintReportArgs = {
  id: Scalars['ID'];
};


export type QueryPartsCarCalcArgs = {
  carId: Scalars['ID'];
};


export type QueryPartsCarMainboardCalcArgs = {
  carId: Scalars['ID'];
  details?: InputMaybe<Scalars['Boolean']>;
  itemNumber: Scalars['String'];
};


export type QueryPartsCarSheetArgs = {
  carId: Scalars['ID'];
};


export type QueryPartsCarStatArgs = {
  carTypeCode: Scalars['String'];
};


export type QueryPartsClientCarInterestsArgs = {
  id: Scalars['ID'];
};


export type QueryPartsEngineCertReportArgs = {
  invoiceId: Scalars['ID'];
};


export type QueryPartsExtendedVatInvoicePriceArgs = {
  input: PartExtendedVatTransferredMonthlyReportInput;
  selectedCalculationVat: Scalars['Float'];
};


export type QueryPartsExtendedVatPurchasePriceArgs = {
  input: PartExtendedVatTransferredMonthlyReportInput;
};


export type QueryPartsGlobalClientCarInterestsArgs = {
  id: Scalars['ID'];
};


export type QueryPartsImagesArgs = {
  ids: Array<IdListItemInput>;
};


export type QueryPartsInventoryReportArgs = {
  input: PartInventoryReportInput;
};


export type QueryPartsIsAssignedToShelfArgs = {
  itemNumber: Scalars['String'];
  shelfNumber: Scalars['String'];
};


export type QueryPartsNewNewlyReceivedArgs = {
  id: Scalars['ID'];
  orderId: Scalars['Int'];
};


export type QueryPartsNewReportArgs = {
  input: PartNewReportInput;
};


export type QueryPartsNewSummaryReportArgs = {
  input: PartNewSummaryReportInput;
};


export type QueryPartsSearchArgs = {
  input: PartsSearchInput;
};


export type QueryPartsSearchGlobalArgs = {
  input: PartsSearchGlobalInput;
};


export type QueryPartsSearchGlobalVersion1Args = {
  input: PartsSearchGlobalInput;
};


export type QueryPartsSellableSearchArgs = {
  input: PartsSearchInput;
};


export type QueryPartsShelfLeftoverArgs = {
  items: Array<PartItemShelfNumberInput>;
};


export type QueryPartsSoldSearchArgs = {
  input: PartsSoldSearchInput;
};


export type QueryPaymentTermsArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentTermsByCodeArgs = {
  code: Scalars['String'];
};


export type QueryPurchaseInvoiceArgs = {
  id: Scalars['ID'];
};


export type QueryPurchaseInvoicesSearchArgs = {
  input: PurchaseInvoiceSearchInput;
};


export type QueryPurchaseOrderArgs = {
  id: Scalars['ID'];
};


export type QueryPurchaseOrderDetailItemsArgs = {
  orderId: Scalars['ID'];
};


export type QueryPurchaseOrdersSearchArgs = {
  input: PurchaseOrderSearchInput;
};


export type QueryPurchaseReceivedOrderDetailItemsArgs = {
  orderId?: InputMaybe<Scalars['ID']>;
  receiveId?: InputMaybe<Scalars['ID']>;
};


export type QueryPurchaseReceivedOrdersSearchArgs = {
  input: PurchaseReceivedOrderSearchInput;
};


export type QuerySchmiedmannOemNumbersArgs = {
  dateHourBack: Scalars['Int'];
};


export type QuerySchmiedmannPartOemStatisticsReportArgs = {
  dateHourBack: Scalars['Int'];
};


export type QuerySchmiedmannPartPricesArgs = {
  dateFrom?: InputMaybe<Scalars['DateTime']>;
};


export type QuerySeek4CarsDeletePartsSearchArgs = {
  input: Seek4CarsPartsSearchInput;
};


export type QuerySeek4CarsPartsSearchArgs = {
  input: Seek4CarsPartsSearchInput;
};


export type QuerySeek4CarsPartsSpecificSearchArgs = {
  input: Seek4CarsPartsSpecificSearchInput;
};


export type QuerySettingsValueArgs = {
  input: SettingValueInput;
};


export type QuerySettingsValueByIdAndNameArgs = {
  settingsTypeName: Scalars['String'];
  userId: Scalars['Int'];
};


export type QueryShareSalesBusinessPartnerIdArgs = {
  fromCompanyId: Scalars['ID'];
};


export type QueryShareSalesIsAllowedArgs = {
  toCompanyId: Scalars['ID'];
};


export type QueryShareSalesMaxPriceChangeArgs = {
  toCompanyId: Scalars['ID'];
};


export type QueryTntShippingDataArgs = {
  lockRecord: Scalars['Boolean'];
};


export type QueryTransportCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryUnicontaEdiGlDailyJournalRecordsArgs = {
  purchaseInvoiceNumberFrom: Scalars['String'];
  purchaseInvoiceNumberTo: Scalars['String'];
  useProductGroups: Scalars['Boolean'];
};


export type QueryUnicontaGlDailyJournalRecordsArgs = {
  salesInvoiceNumberFrom: Scalars['String'];
  salesInvoiceNumberTo: Scalars['String'];
  useProductGroups: Scalars['Boolean'];
};


export type QueryUnicontaGroupDataArgs = {
  invoiceNumber: Scalars['String'];
};


export type QueryUserByIdArgs = {
  userid: Scalars['ID'];
};

export type SmptSetting = {
  __typename?: 'SMPTSetting';
  stringValue?: Maybe<Scalars['String']>;
};

export type SchmiedmannOemNumber = {
  __typename?: 'SchmiedmannOemNumber';
  alertNote?: Maybe<Scalars['String']>;
  alternativeNumbers?: Maybe<Scalars['String']>;
  companyId: Scalars['ID'];
  creatorUserId: Scalars['ID'];
  dateTimeCreated: Scalars['DateTime'];
  dateTimeModified: Scalars['DateTime'];
  ebayHeadlineLower?: Maybe<Scalars['String']>;
  ebayHeadlineUpper?: Maybe<Scalars['String']>;
  ebayNoteEnglish?: Maybe<Scalars['String']>;
  ebayNoteGerman?: Maybe<Scalars['String']>;
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePrice?: Maybe<Scalars['Float']>;
  lastModifierUserId: Scalars['ID'];
  oemTxt?: Maybe<Scalars['String']>;
  partHeight?: Maybe<Scalars['Float']>;
  partLength?: Maybe<Scalars['Float']>;
  partWeight?: Maybe<Scalars['Float']>;
  partWidth?: Maybe<Scalars['Float']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  status: Scalars['Int'];
};

export type SchmiedmannPartOemStatisticsReportRecord = {
  __typename?: 'SchmiedmannPartOemStatisticsReportRecord';
  itemNumber?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
};

export type SchmiedmannPartPrice = {
  __typename?: 'SchmiedmannPartPrice';
  dateTimeModified?: Maybe<Scalars['DateTime']>;
  itemNumber?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
};

export type Seek4CarsDeletePart = {
  __typename?: 'Seek4CarsDeletePart';
  carItemNumber?: Maybe<Scalars['String']>;
  companyId: Scalars['ID'];
  dateTimeModified: Scalars['DateTime'];
  id: Scalars['ID'];
  itemNumber: Scalars['String'];
};

export type Seek4CarsDeletePartsSearchResult = {
  __typename?: 'Seek4CarsDeletePartsSearchResult';
  items: Array<Seek4CarsDeletePart>;
  totalRows: Scalars['Int'];
};

export type Seek4CarsPart = {
  __typename?: 'Seek4CarsPart';
  alternativeNumbers?: Maybe<Scalars['String']>;
  bodyColor?: Maybe<Scalars['String']>;
  carBody?: Maybe<Scalars['String']>;
  carDoorsType?: Maybe<Scalars['String']>;
  carFirstRegistrationDate?: Maybe<Scalars['DateTime']>;
  carItemNumber?: Maybe<Scalars['String']>;
  carItemTypeId?: Maybe<Scalars['ID']>;
  carName?: Maybe<Scalars['String']>;
  carTypeApprovalDate?: Maybe<Scalars['String']>;
  carTypeApprovalNo?: Maybe<Scalars['String']>;
  carVinCode?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['ID']>;
  compositeComments?: Maybe<Scalars['String']>;
  condition?: Maybe<Scalars['String']>;
  dateTimeCreated?: Maybe<Scalars['DateTime']>;
  dateTimeModified?: Maybe<Scalars['DateTime']>;
  engineCode?: Maybe<Scalars['String']>;
  engineType?: Maybe<Scalars['String']>;
  equipmentModel?: Maybe<Scalars['String']>;
  euroNorm?: Maybe<Scalars['Int']>;
  fuel?: Maybe<Scalars['String']>;
  horsepower?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  images: Array<ImageResource>;
  insuranceNumber?: Maybe<Scalars['String']>;
  insurancePrice?: Maybe<Scalars['Float']>;
  insuranceTxt?: Maybe<Scalars['String']>;
  interiorColor?: Maybe<Scalars['String']>;
  itemCode?: Maybe<Scalars['String']>;
  itemNumber?: Maybe<Scalars['String']>;
  itemPartId?: Maybe<Scalars['ID']>;
  itemTypeId?: Maybe<Scalars['ID']>;
  kiloWatt?: Maybe<Scalars['Int']>;
  kilometrage?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  oemNumber?: Maybe<Scalars['String']>;
  price1?: Maybe<Scalars['Float']>;
  price2?: Maybe<Scalars['Float']>;
  price3?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  readOnPart?: Maybe<Scalars['String']>;
  registrationNo?: Maybe<Scalars['String']>;
  shelfNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  transmissionCode?: Maybe<Scalars['String']>;
  transmissionType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  warehouseInputDate?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export type Seek4CarsPartsSearchInput = {
  companyId: Scalars['ID'];
  dateHourBack?: InputMaybe<Scalars['Int']>;
  maxRows?: InputMaybe<Scalars['Int']>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  pageSort?: InputMaybe<Scalars['String']>;
};

export type Seek4CarsPartsSearchResult = {
  __typename?: 'Seek4CarsPartsSearchResult';
  items: Array<Seek4CarsPart>;
  totalRows: Scalars['Int'];
};

export type Seek4CarsPartsSpecificSearchInput = {
  companyId: Scalars['ID'];
  itemCode?: InputMaybe<Scalars['String']>;
  itemNumber?: InputMaybe<Scalars['String']>;
};

export type SettingValue = {
  __typename?: 'SettingValue';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SettingValueInput = {
  isGlobal: Scalars['Boolean'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ShareSalesCompany = {
  __typename?: 'ShareSalesCompany';
  businessPartner_Id?: Maybe<Scalars['ID']>;
  comapnyIsChecked: Scalars['Boolean'];
  companyAcountnumber?: Maybe<Scalars['String']>;
  defaultShipmentCost?: Maybe<Scalars['Float']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  maxPriceChange?: Maybe<Scalars['Float']>;
};

export type ShareSalesCompanySaveInput = {
  businessPartnerId?: InputMaybe<Scalars['ID']>;
  comapnyIsChecked: Scalars['Boolean'];
  companyAcountnumber?: InputMaybe<Scalars['String']>;
  defaultShipmentCost?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  maxPriceChange?: InputMaybe<Scalars['Float']>;
};

export type SortOrderConfigType = {
  __typename?: 'SortOrderConfigType';
  company_Id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  sortCompany_Fullname?: Maybe<Scalars['String']>;
  sortCompany_Id?: Maybe<Scalars['Int']>;
  sortsequenceId?: Maybe<Scalars['Int']>;
};

export type TntAddress = {
  __typename?: 'TNTAddress';
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  addressLine3?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  faxAreaCode?: Maybe<Scalars['String']>;
  faxNumber?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  telAreaCode?: Maybe<Scalars['String']>;
  telNumber?: Maybe<Scalars['String']>;
  tntAccountNo?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
};

export type TntArticle = {
  __typename?: 'TNTArticle';
  artDescription?: Maybe<Scalars['String']>;
  artLicenseNo?: Maybe<Scalars['String']>;
  articleAmount?: Maybe<Scalars['String']>;
  btn?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  custDoc?: Maybe<Scalars['String']>;
  grossWeight?: Maybe<Scalars['Float']>;
  insuranceCurrency?: Maybe<Scalars['String']>;
  insuranceValue?: Maybe<Scalars['String']>;
  netWeight?: Maybe<Scalars['Float']>;
  originCountry?: Maybe<Scalars['String']>;
  sampleCurrency?: Maybe<Scalars['String']>;
  sampleValue?: Maybe<Scalars['String']>;
  separatorInd?: Maybe<Scalars['String']>;
  simplifiedInd?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TntAttrString_Ind = {
  __typename?: 'TNTAttrString_Ind';
  ind?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type TntFreight = {
  __typename?: 'TNTFreight';
  cashOnDelivery?: Maybe<TntAttrString_Ind>;
  consignmentNumber?: Maybe<Scalars['String']>;
  customerReference?: Maybe<Scalars['String']>;
  customsControlled?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<TntAddress>;
  divisionInd?: Maybe<Scalars['String']>;
  exhibition?: Maybe<Scalars['String']>;
  handPrice?: Maybe<Scalars['String']>;
  hazardousGoods?: Maybe<TntAttrString_Ind>;
  highValueInsurance?: Maybe<Scalars['String']>;
  insuranceCurrency?: Maybe<Scalars['String']>;
  insuranceValue?: Maybe<Scalars['String']>;
  invoiceCurrency?: Maybe<Scalars['String']>;
  invoiceValue?: Maybe<Scalars['String']>;
  neutral?: Maybe<Scalars['String']>;
  noOfBoxes?: Maybe<Scalars['String']>;
  noOfPallets?: Maybe<Scalars['String']>;
  option1?: Maybe<Scalars['String']>;
  option2?: Maybe<Scalars['String']>;
  option3?: Maybe<Scalars['String']>;
  option4?: Maybe<Scalars['String']>;
  orderDepot?: Maybe<Scalars['String']>;
  paymentInd?: Maybe<Scalars['String']>;
  pickUpRequest?: Maybe<Scalars['String']>;
  pickUpTimeFrom1?: Maybe<Scalars['String']>;
  pickUpTimeFrom2?: Maybe<Scalars['String']>;
  pickUpTimeTo1?: Maybe<Scalars['String']>;
  pickUpTimeTo2?: Maybe<Scalars['String']>;
  pickupAddress?: Maybe<TntAddress>;
  pieces?: Maybe<Array<TntPiece>>;
  receiverAddress?: Maybe<TntAddress>;
  selfPickUp?: Maybe<Scalars['String']>;
  senderAddress?: Maybe<TntAddress>;
  serviceCode?: Maybe<Scalars['String']>;
  shippingInd?: Maybe<Scalars['String']>;
  shippingOrder?: Maybe<TntShippingOrder>;
  sourceCode?: Maybe<Scalars['String']>;
  specInstructions?: Maybe<Scalars['String']>;
  tDocId?: Maybe<Scalars['String']>;
  thirdParty?: Maybe<Scalars['String']>;
  totalNoOfPieces?: Maybe<Scalars['Int']>;
  totalVolume?: Maybe<Scalars['Float']>;
  totalWeight?: Maybe<Scalars['Float']>;
};

export type TntPiece = {
  __typename?: 'TNTPiece';
  articles?: Maybe<Array<Maybe<TntArticle>>>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  packing?: Maybe<Scalars['String']>;
  pieceAmount?: Maybe<Scalars['Int']>;
  pieceId?: Maybe<Scalars['Int']>;
  pieceReference?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type TntShippingData = {
  __typename?: 'TNTShippingData';
  freight?: Maybe<Array<TntFreight>>;
};

export type TntShippingOrder = {
  __typename?: 'TNTShippingOrder';
  shippingDate?: Maybe<Scalars['String']>;
  shippingTime?: Maybe<Scalars['String']>;
};

export type TransportCompany = {
  __typename?: 'TransportCompany';
  company_Id?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
};

export type TransportCompanyInput = {
  id?: InputMaybe<Scalars['ID']>;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  authenticationTicket?: Maybe<Scalars['String']>;
  companyID?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  emailPassword?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAccounting?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isCreateMaster?: Maybe<Scalars['Boolean']>;
  isCreateParts?: Maybe<Scalars['Boolean']>;
  isSales?: Maybe<Scalars['Boolean']>;
  isSystemAdmin?: Maybe<Scalars['Boolean']>;
  lastReadNote?: Maybe<Scalars['DateTime']>;
  login: Scalars['String'];
};

export type UserInput = {
  companyID?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isAccounting?: InputMaybe<Scalars['Boolean']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  isCreateMaster?: InputMaybe<Scalars['Boolean']>;
  isCreateParts?: InputMaybe<Scalars['Boolean']>;
  isSales?: InputMaybe<Scalars['Boolean']>;
  isSystemAdmin?: InputMaybe<Scalars['Boolean']>;
  lastReadNote?: InputMaybe<Scalars['DateTime']>;
  login?: InputMaybe<Scalars['String']>;
};

export type UserLoginValidateInput = {
  appName: Scalars['String'];
  appVersion: Scalars['Int'];
  login: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

export type WorkflowUser = {
  __typename?: 'WorkflowUser';
  fullName: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  status: Scalars['Int'];
};

export type WorkflowUserInput = {
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type CompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type CompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'CompanyMap', id: string, fullName: string, name: string, address1?: string | null, latitude?: number | null, longitude?: number | null, phone?: string | null, email?: string | null, web?: string | null }> };

export type ManufacturersQueryVariables = Exact<{ [key: string]: never; }>;


export type ManufacturersQuery = { __typename?: 'Query', manufacturers: Array<{ __typename?: 'Manufacturer', id: string, name: string }> };


export const CompaniesDocument = gql`
    query companies {
  companies {
    id
    fullName
    name
    address1
    latitude
    longitude
    phone
    email
    web
  }
}
    `;

/**
 * __useCompaniesQuery__
 *
 * To run a query within a React component, call `useCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, options);
      }
export function useCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompaniesQuery, CompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompaniesQuery, CompaniesQueryVariables>(CompaniesDocument, options);
        }
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>;
export type CompaniesLazyQueryHookResult = ReturnType<typeof useCompaniesLazyQuery>;
export type CompaniesQueryResult = Apollo.QueryResult<CompaniesQuery, CompaniesQueryVariables>;
export const ManufacturersDocument = gql`
    query manufacturers {
  manufacturers {
    id
    name
  }
}
    `;

/**
 * __useManufacturersQuery__
 *
 * To run a query within a React component, call `useManufacturersQuery` and pass it any options that fit your needs.
 * When your component renders, `useManufacturersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useManufacturersQuery({
 *   variables: {
 *   },
 * });
 */
export function useManufacturersQuery(baseOptions?: Apollo.QueryHookOptions<ManufacturersQuery, ManufacturersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ManufacturersQuery, ManufacturersQueryVariables>(ManufacturersDocument, options);
      }
export function useManufacturersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ManufacturersQuery, ManufacturersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ManufacturersQuery, ManufacturersQueryVariables>(ManufacturersDocument, options);
        }
export type ManufacturersQueryHookResult = ReturnType<typeof useManufacturersQuery>;
export type ManufacturersLazyQueryHookResult = ReturnType<typeof useManufacturersLazyQuery>;
export type ManufacturersQueryResult = Apollo.QueryResult<ManufacturersQuery, ManufacturersQueryVariables>;