import React, { ReactNode, SetStateAction } from "react";

export type changePasswordProps = {
  OldPassword: string;
  NewPassword: string;
  ConfirmNewPassword: string;
};

export interface DropdownMenuProps {
  children: ReactNode;
  trigger: ReactNode;
  customeClass: string;
  direction: string;
  menuClass?: string;
}

export type savePreferencesProps = {
  IsReceiveEmail: boolean;
  Tags: string[];
};

export interface ProfileData {
  Name: string;
  BirthDate: string;
  GenderId: number;
  Email: string;
  Guid?: any;
  Description?: string;
  WebsiteUrl?: string;
  PersonImageFile?: File | null;
}

export interface CampaignData {
  Id?: number;
  Name: string;
  Content: string;
  LogoName?: string;
  DigitalCurrencyId?: number;
  Budget?: number;
  Logo?: File | null;
  StatusId: number;
  Guid?: string;
  UserId?: number;
  FullName?: string;
  Status?: string;
  CreatedDateTime?: string;
  DigitalCurrency?: string;
  DigitalCurrencyLogo?: string;
  AmountSpent?: number;
  Impressions?: number;
  Clicks?: number;
  Conversions?: number;
}

export interface OptionType {
  value: string;
  label: string;
}

export interface StatusItems {
  Id: string;
  Title: string;
}

interface Condition {
  Name?: string;
  Value?: string;
  Comparison?: string;
}

interface OrderBy {
  OrderName?: string;
  Ascending?: boolean;
}

export interface CampaignsProps {
  PageIndex: number;
  PageSize: number;
  Conditions: Condition[];
  OrderBy: OrderBy;
}

export interface CampaignsList {
  TotalCount: number;
  PageSize: number;
  PageIndex: number;
  PageCount: number;
  Data: CampaignData[];
}

export interface AgeGroup {
  Id: string;
  Max: number;
  Min: number;
  Title: string;
}

export type Gender = {
  Title: string;
  Id: number;
};

export interface MyTimerProps {
  expiryTimestamp: Date;
}

export interface AdSet {
  Id: number;
  Guid: string;
  CampaignGuid: string;
  CampaignName: string;
  Title: string;
  Budget: number;
  DigitalCurrencyLogo: string;
  DigitalCurrencyTitle: string;
  PerAnswered: number;
  EmailNotificationTypeId: number;
  StartDate: string;
  StartTime: string;
  EndDate: string;
  EndTime: string;
  Genders: [];
  GenderTags: [];
  Locations: [];
  LocationTags: [];
  AgeGroups: [];
  AgeGroupTags: [];
}
