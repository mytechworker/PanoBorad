import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 5px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #f5f5f5;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #c5cad2;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #c5cad2;
  }
  .active-setting {
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.primary};
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
export const SearchWrapper = styled.div`
  .ant-input {
    margin-left: 10px;
    min-width: 456px;
    border-radius: 5px;
    border: none !important ;
    border-radius: 5px;
    height: 37px;
    outline: none !important;
    margin: 0 !important;
    font-weight: 400 !important;
    &:focus {
      border: none !important;
      box-shadow: unset !important;
    }
    span.ant-input-prefix {
      margin: 5px;
    }
  }
  .text-input {
    margin-bottom: 0 !important;
  }
  .ant-input-affix-wrapper {
    border: none !important;
    border-radius: 5px !important;
    outline: none !important;

    &:focus {
      border: none !important;
      box-shadow: unset !important;
    }
  }
  input.text-input {
    margin-bottom: 0 !important;
  }
  .ant-input-group-addon {
    display: none;
  }
`;
export const SelectWrapper = styled.span`
  cursor: pointer;
  .ant-select {
    .ant-select-selector {
      border: 0 !important;
      padding: 0 18px !important;
      background-color: white;
      border-radius: 5px;
      color: #6f7d97;
      height: 45px;
      align-items: center;
      min-width: 93px;
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.gray8};
    }
  }
`;

export const SelectTypeWrapper = styled.span`
  cursor: pointer;
  width: 100%;
  .ant-select {
    width: 100%;
    .ant-select-selector {
      border: 1px solid #dadada !important;
      background-color: white;
      border-radius: 5px;
      color: #6f7d97;
      height: 32px;
      align-items: center;
    }
    span.ant-select-selection-item {
      font-size: 11px;
      text-transform: capitalize;
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.gray8};
    }
  }

  .ant-select-dropdown {
    &::-webkit-scrollbar {
      height: 7px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
    .ant-select-item-option {
      text-transform: capitalize;
    }

    .ant-select-item.ant-select-item-option {
      .ant-select-item-option-content {
        font-size: 11px;
      }
    }
  }
`;
export const SelectDayWrapper = styled.span`
  cursor: pointer;
  margin-right: 5px;
  .ant-select {
    .ant-select-selector {
      border: 1px solid #dadada !important;
      min-width: 150px;
      /* margin-left: 10px; */
      max-width: 150px;
      padding: 0 5px !important;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      color: #6f7d97;
      height: 52px;
      align-items: center;
      overflow: auto;
      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${(props) => props.theme.colors.primary};
      }
      .span.ant-select-item-option-state {
        border: 1px solid #dadada !important;
      }
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.gray8};
    }
  }
  .ant-picker {
    height: 52px;
    border-radius: 5px;
    .ant-picker-input {
      input {
        color: ${(props) => props.theme.colors.gray1};
      }
    }
  }
  .ant-select-selection-overflow {
    display: flex !important;
    flex-direction: row !important;
    flex: 1;
    flex-wrap: nowrap !important;
    &::-webkit-scrollbar {
      width: 1px;
      height: 5px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
`;
export const SelectBlockDayWrapper = styled.div`
  cursor: pointer;
  margin-right: 5px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  .text {
    margin-bottom: 8px;
    color: ${(props) => props.theme.colors.gray8};
    font-size: 14px;
    font-weight: 400;
  }
  .ant-select {
    .ant-select-selector {
      border: 1px solid #dadada !important;
      min-width: 300px;
      padding: 0 18px !important;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      color: #6f7d97;
      height: 52px;
      align-items: center;
      overflow: auto;
      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${(props) => props.theme.colors.primary};
      }
      .span.ant-select-item-option-state {
        border: 1px solid #dadada !important;
      }
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.gray8};
    }
  }
  .ant-picker {
    height: 52px;
    border-radius: 5px;
    min-width: 300px;
    .ant-picker-input {
      input {
        color: ${(props) => props.theme.colors.gray1};
      }
    }
  }
  .ant-select-selection-overflow {
    display: flex !important;
    flex-direction: row !important;
    flex: 1;
    flex-wrap: nowrap !important;
    &::-webkit-scrollbar {
      width: 1px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
`;

export const SelectRepeatWrapper = styled.span`
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 23px;
  .ant-select {
    .ant-select-selector {
      border: 1px solid #dadada !important;
      min-width: 150px;
      margin-right: 5px;
      max-width: 150px;
      padding: 0 18px !important;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      color: #6f7d97;
      height: 52px;
      align-items: center;
      overflow: auto;
      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${(props) => props.theme.colors.primary};
      }
      .span.ant-select-item-option-state {
        border: 1px solid #dadada !important;
      }
      .ant-select-selection-placeholder {
        font-size: 13px !important;
      }
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.gray8};
    }
  }
  .ant-picker {
    height: 52px;
    border-radius: 5px;
    .ant-picker-input {
      input {
        color: ${(props) => props.theme.colors.gray1};
      }
    }
  }
`;

export const SelectTimeWrapper = styled.span`
  cursor: pointer;
  margin-right: 5px;
  .ant-select {
    .ant-select-selector {
      border: 1px solid #dadada !important;
      margin-left: 10px;
      max-width: 50px;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      color: #6f7d97;
      height: 52px;
      align-items: center;
      overflow: auto;
      text-align: center;

      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${(props) => props.theme.colors.primary};
      }
      .span.ant-select-item-option-state {
        border: 1px solid #dadada !important;
      }
      .ant-select-selection-placeholder {
        padding-right: unset !important;
      }
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      display: none;
    }
  }
`;
export const SelectBlockTimeWrapper = styled.span`
  cursor: pointer;
  .ant-select {
    .ant-select-selector {
      border: 1px solid #dadada !important;
      margin-left: 10px;
      max-width: 50px;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      color: #6f7d97;
      height: 52px;
      align-items: center;
      overflow: auto;
      text-align: center;
      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${(props) => props.theme.colors.primary};
      }
      .span.ant-select-item-option-state {
        border: 1px solid #dadada !important;
      }
      .ant-select-selection-placeholder {
        padding-right: unset !important;
      }
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
      padding-right: 0 !important;
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
      padding-right: 0 !important;
    }
    .ant-select-arrow {
      display: none;
    }
  }
`;
export const NotifWrapper = styled.span`
  margin: 5px;
  cursor: pointer;
  .ant-picker {
    padding: 11px 11px 11px;
    border: none;
    border-radius: 5px;
    min-width: 220px;
  }
`;

export const MapWrapper = styled.div`
  height: 87vh;
  width: 100%;
  border-radius: 15px;
`;
export const ButtonWrapper = styled.div`
  cursor: pointer;
  padding: 9px 20px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray2};
  box-sizing: border-box;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.gray1};
  font-weight: bold;
  &.selected-time {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const CustomizationProviderTable = styled.div`
  .ant-table {
    margin: 10px;
    color: ${(props) => props.theme.colors.black2};
    font-weight: 400;
    thead {
      tr {
        :first-child {
          th {
            :first-child {
              border-top-left-radius: 10px;
              border-color: ${(props) => props.theme.colors.gray2};
              min-width: 9rem;
              border-bottom: 0;
            }
          }
        }
        th {
          background: ${(props) => props.theme.colors.gray14} !important;
          color: ${(props) => props.theme.colors.gray8};
          padding-left: 10px;
          font-size: 12px;
          :last-child {
            border-top-right-radius: 10px !important;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          color: ${(props) => props.theme.colors.black2};
          padding-left: 10px;
          font-size: 12px;
          a {
            padding: 10px;
            background: ${(props) => props.theme.colors.gray2};
          }
        }
      }
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
`;
export const ImgStyle = styled('img')`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const SelectCustomizeWrapper = styled.div`
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding-right: 18px !important;
  }
  .ant-select-selector {
    padding: 7px 12px !important;
    border-radius: 5px;
    color: ${(props) => props.theme.colors[props.color]};
    height: 28px;
    align-items: center;
    min-width: 74px;
    border: none !important;
    background-color: #f1fbee !important;
  }
  .color {
    background-color: #6fd459;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  .ant-select-arrow {
    right: -20px !important;
    color: ${({ theme }) => theme.colors.gray8};
    cursor: pointer;
  }
  img {
    margin-right: 5px;
  }
`;
export const SelectCustomizeRedWrapper = styled.div`
  .ant-select-selector {
    padding: 7px 12px !important;
    border-radius: 5px;
    color: #fc4d4c;
    height: 28px;
    align-items: center;
    min-width: 74px;
    border: none !important;
    background-color: #ffeded !important;
  }

  .color {
    background-color: #6fd459;
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  .ant-select-arrow {
    right: -20px !important;
    color: ${({ theme }) => theme.colors.gray8};
  }
`;

export const SelectApptWrapper = styled.div`
  .ant-select-selector {
    margin: 10px;
    background-color: transparent !important;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 12px;
    font-weight: 700;
    border: none !important;
    outline: none;
    :focus {
      border: none !important;
      outline: none;
      box-shadow: unset !important;
    }
    :active {
      border: none !important;
      outline: none;
      box-shadow: unset !important;
    }
    .ant-select-item-option-content {
      color: ${({ theme }) => theme.colors.gray8};
      font-weight: 600;
      font-size: 11px;
    }
  }
  .ant-select-arrow {
    display: none;
  }
`;
export const TypeInput = styled.div`
  flex: 1;
  border-radius: 8px;
  height: 42px;
`;
export const InputWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #5a8dee;
  font-size: 12px;
  font-weight: 600;
  line-height: 15.06px;
  width: 100%;
  min-width: 120px;
  padding: 0px 5px 5px 0px;
  color: ${({ theme }) => theme.colors.black2};
  :focus {
    box-shadow: unset !important;
    background-color: ${({ theme }) => theme.colors.white}!important;
  }
`;
export const InputProviderWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #5a8dee;
  font-size: 12px;
  font-weight: 600;
  line-height: 15.06px;
  width: 100%;
  max-width: 102px;
  padding: 0px 5px 5px 0px;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.black2};
  :focus {
    box-shadow: unset !important;
    background-color: ${({ theme }) => theme.colors.white}!important;
  }
`;
export const InsuranceWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #5a8dee;
  font-size: 12px;
  font-weight: 600;
  line-height: 15.06px;
  width: 100%;
  padding: 5px;
  min-width: 403px !important;
  padding: 11px 0px;
`;
export const CalendarHeaderWrapper = styled.div`
  .prev-arrow {
    transform: rotate(90deg);
  }
  .next-arrow {
    transform: rotate(-90deg);
  }
`;

export const CalendarContainer = styled.div`
  padding: 24px;
  .fc {
    &.fc-media-screen {
      padding: 20px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 13px;
    }

    .fc-daygrid-day-top {
      padding-left: 16px;
      flex-direction: row;
    }
    .fc-daygrid-day-number {
      color: ${({ theme }) => theme.colors.black2};
      padding-top: 12px;
    }
    .fc-toolbar.fc-header-toolbar {
      .fc-toolbar-chunk {
        &:nth-child(2) {
          margin-left: 230px;
          div {
            display: flex;
            align-items: center;
            .fc-toolbar-title {
              font-size: 18px;
              line-height: 22px;
            }
            .fc-prev-button,
            .fc-next-button {
              background-color: transparent;
              color: ${({ theme }) => theme.colors.primary};
              border: none;
              :focus {
                outline: none;
                border: none;
                box-shadow: none;
              }
            }
          }
        }
        .fc-button-group {
          background-color: ${({ theme }) => theme.colors.gray10};
          border-radius: 25px;
          button.fc-button.fc-button-primary {
            background-color: ${({ theme }) => theme.colors.gray10};
            color: ${({ theme }) => theme.colors.gray1};
            border-color: transparent;
            text-transform: capitalize;
            padding: 10px 14px;
            border-radius: 25px;
            &:focus,
            &:hover {
              box-shadow: none;
            }
          }
          button.fc-button-active {
            border: 2px solid;
            border-color: ${({ theme }) => theme.colors.primary} !important;
            color: ${({ theme }) => theme.colors.primary} !important;
            font-weight: bold;
          }
        }
      }
    }
    .fc-view-harness {
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 13px;
      .fc-scrollgrid {
        border-radius: 13px;
        overflow: hidden;
        border: none;
        thead > tr > td {
          border-radius: 13px 13px 0 0;
          border-color: ${({ theme }) => theme.colors.gray14};
          .fc-col-header-cell {
            border: none;
            background-color: ${({ theme }) => theme.colors.gray14};
          }
        }
        tbody {
          tr {
            &.fc-scrollgrid-section > td {
              border: none;
            }
            &:nth-last-child() {
              td {
                border-radius: 0 0 13px 13px;
              }
            }
          }
        }
      }
      .fc-col-header-cell-cushion {
        padding: 17px;
        color: ${({ theme }) => theme.colors.gray8};
      }
    }
  }
`;
export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 11px;
  .ant-switch {
    min-width: 25.6px;
    height: 14px !important;
    background: ${({ theme }) => theme.colors.white} !important;
    border: 4px solid !important;
    border-color: ${({ theme }) => theme.colors.gray2} !important;

    padding: 6px 0px;
    margin-right: 5px;
    .ant-switch-handle {
      width: 8px;
      height: 8px;
      &::before {
        background-color: ${({ theme }) => theme.colors.gray2};
        width: 8px;
        height: 8px;
        left: 0 !important;
        top: -1px;
      }
    }
  }
  .ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.white} !important;
    border: 4px solid #1890ff !important;
    .ant-switch-handle {
      width: 8px;
      height: 8px;
      &::before {
        background-color: #1890ff !important;
        width: 8px;
        height: 8px;
        left: 10px !important;
      }
    }
  }
  .switch-content {
    font-size: 12px;
    font-weight: 700;
    line-height: 20.06px;
    color: ${({ theme }) => theme.colors.gray2};
    margin-left: 11px;
  }
  .switch-content-blue {
    font-size: 12px;
    font-weight: 700;
    line-height: 20.06px;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 11px;
  }
  .trash {
    margin-left: 11px;
    cursor: pointer;
  }
`;
export const SwitchHoursWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
  .ant-switch {
    min-width: 25.6px;
    height: 14px !important;
    background: ${({ theme }) => theme.colors.white} !important;
    border: 4px solid #dadada !important;
    padding: 6px 0px;
    margin-right: 5px;
    .ant-switch-handle {
      width: 8px;
      height: 8px;
      &::before {
        background-color: ${({ theme }) => theme.colors.gray2};
        width: 8px;
        height: 8px;
        left: 0 !important;
        top: -1px;
      }
    }
  }
  .ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.white} !important;
    border: 4px solid #1890ff !important;
    .ant-switch-handle {
      width: 8px;
      height: 8px;
      &::before {
        background-color: #1890ff !important;
        width: 8px;
        height: 8px;
        left: 10px !important;
      }
    }
  }
  .switch-content {
    font-size: 12px;
    font-weight: 700;
    line-height: 20.06px;
    color: ${({ theme }) => theme.colors.gray2};
    margin-left: 11px;
  }
  .switch-content-blue {
    font-size: 12px;
    font-weight: 700;
    line-height: 20.06px;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 11px;
  }
  .trash {
    margin-left: 11px;
    cursor: pointer;
  }
`;

export const TextWrapper = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray2};
  width: 100%;
  margin-left: 26px;
  margin-top: 8px;
  padding-bottom: 11px;
  padding-left: 15px;
  color: ${({ theme }) => theme.colors.black1};
`;

export const InuranceTextWrapper = styled.div`
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
  margin-top: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;
export const EditWrapper = styled.div`
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
  margin-left: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;

export const IconWrapper = styled.div`
  display: flex;
  position: relative;
  span {
    position: absolute;
    left: -1rem;
    bottom: -5px;
  }
`;
export const Picker = styled.div`
  .text {
    margin-bottom: 8px;
    color: ${(props) => props.theme.colors.gray8};
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
  }
  .ant-picker {
    margin-left: 10px;
    height: 52px;
    border-radius: 5px;
    border: 1px solid #dadada;
    max-width: 65px;
    svg {
      display: none !important;
    }

    .ant-picker-input {
      input {
        text-align: center !important;
        color: ${({ theme }) => theme.colors.gray1}!important;
      }
    }
  }
`;

export const FontWrapper = styled.div`
  .text {
    font-weight: bold;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray8}!important;
  }

  .text.nt {
    font-weight: normal;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray8}!important;
  }
`;

export const SelectInsuranceTwilio = styled.div`
  cursor: pointer;
  margin-left: 26px;
  margin-top: 20px;
  .ant-select {
    .ant-select-selector {
      border: 1px solid #dadada !important;
      padding: 0 5px !important;
      background-color: white;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.black2} !important;
      min-height: 48px;
      align-items: center;
      overflow: auto;
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.gray8};
    }
  }
  .ant-select-item-option-selected {
    background-color: white !important;
  }
  .ant-select-dropdown {
    &::-webkit-scrollbar {
      height: 7px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.black2};
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  .ant-select-selection-overflow {
    display: flex !important;
    flex-direction: row !important;
    flex: 1;
    flex-wrap: nowrap !important;
    cursor: pointer;
    &::-webkit-scrollbar {
      width: 1px;
      height: 5px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px #f5f5f5;
      border-radius: 1px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 1px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
`;
export const ActionItem = styled.div`
  .text {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
    font-size: 11px;
    font-weight: 700;
  }
  .ant-dropdown {
    ::before {
      .ant-dropdown-menu {
        .ant-dropdown-menu-item,
        .ant-dropdown-menu-submenu-title {
          color: ${({ theme }) => theme.colors.gray8}!important;
          font-size: 11px !important;
          font-weight: 600 !important;
        }
      }
    }
  }
`;

export const SelectDurationWrapper = styled.span`
  cursor: pointer;
  .ant-select {
    width: 100%;
    .ant-select-selector {
      border: 1px solid #dadada !important;
      padding: 0 18px !important;
      background-color: white;
      border-radius: 2px;
      color: ${({ theme }) => theme.colors.black2}!important;
      height: 35px;
      align-items: center;
      min-width: 93px;
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.gray8};
    }
  }
  .ant-select-item-option-selected {
    background-color: white !important;
  }
  .ant-select-dropdown {
    &::-webkit-scrollbar {
      height: 7px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const NotificationTableWrapper = styled.div`
  .ant-table {
    margin: 10px;
    color: ${(props) => props.theme.colors.black2};
    font-weight: 400;
    thead {
      tr {
        th {
          background: ${(props) => props.theme.colors.gray14} !important;
          color: ${(props) => props.theme.colors.gray8};
          padding-left: 10px;
          font-size: 12px;
          font-weight: 600;
          :first-child {
            border-top-left-radius: 13px !important;
          }
          :last-child {
            border-top-right-radius: 13px !important;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          color: ${(props) => props.theme.colors.black2};
          padding-left: 10px;
          font-size: 12px;
          a {
            padding: 10px;
            background: ${(props) => props.theme.colors.gray2};
          }
        }
      }
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
`;

export const SelectAppTypeWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  .ant-select {
    width: 100%;

    .ant-select-selector {
      border-radius: 5px;
      border: 1px solid #dadada !important;
      padding: 0 18px !important;
      background-color: ${({ theme }) => theme.colors.white}!important;
      color: ${({ theme }) => theme.colors.black2}!important;
      height: 45px;
      align-items: center;
      min-width: 93px;
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.gray8};
    }
    .ant-select-selection-item {
      color: ${(props) => props.theme.colors.gray8};
    }
  }
  .ant-select-item-option-selected {
    background-color: white !important;
  }
  .ant-select-dropdown {
    max-height: 10px;
    overflow: auto;
    &::-webkit-scrollbar {
      height: 7px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const CustomizationHourWrapper = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const ButtonCloseWrapper = styled.div`
  text-align: center;
  margin-top: 25px;
  .bu_c {
    background-color: ${(props) => props.theme.colors.red2}!important;
    border: none;
  }
`;
