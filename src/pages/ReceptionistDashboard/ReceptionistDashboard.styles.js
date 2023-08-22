import styled from 'styled-components';

export const DashboardWrapper = styled.div`
    margin:20px;
    .dashboard_box {
        margin-bottom:20px;
        padding:0 10px;

        .ant-select {
            color: #5A8DEE;
            font-weight: 600;
            .ant-select-selector {
                border: none;
            }
            .ant-select-arrow {
                color: #5A8DEE;
                right: 0;
            }
        }
        .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
            border-color: transparent;
            border-right-width: 0 !important;
            outline: 0;
            box-shadow: none;
        }
        // .ant-select-single.ant-select-open .ant-select-selection-item {
        //     color: #5A8DEE;
        // }
    }
`;

export const TaskBoxWrapper = styled.div`
    background: #FFFFFF;
    border-radius: 12px;
    padding:20px 10px;
    width: 32.3333%;
    min-width: 350px;
    min-height: 470px;

    @media screen and (max-width: 960px) {
        min-height: auto;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        min-width: auto;
    }

    .ant-checkbox-wrapper {
        border-radius: 6px;
        width: 100%;
        padding: 10px;
        justify-content: space-between;
        font-weight: 600;
        margin-bottom:20px;

        &:nth-child(1n) {
            background: rgb(249 115 134 / 10%);
            color: #570A16;
        }
        &:nth-child(2n) {
            background: rgb(241 180 76 / 10%);
            color: #BD8018;
        }
        &:nth-child(3n) {
            background: rgb(59 168 31 / 10%);
            color: #359B1B;
        }
        &:nth-child(4n) {
            background: rgb(0 136 185 / 10%);
            color: #0088B9;
        }

        .ant-checkbox-wrapper:hover .ant-checkbox-inner, 
        .ant-checkbox:hover .ant-checkbox-inner, 
        .ant-checkbox-input:focus + .ant-checkbox-inner {
            border-color: #3BA81F;
        }
        .ant-checkbox-inner::after {
            border: 2px solid #3BA81F;
            border-top: 0;
            border-left: 0;
            top: 49%;
            left: 23.5%;
        }
        .ant-checkbox-checked::after {
            border: 1px solid #3BA81F;
            border-radius: 50%;
        }
        .ant-checkbox-checked .ant-checkbox-inner {
            background-color: #fff;
        }
        .ant-checkbox {
            order: 2;
            .ant-checkbox-inner {
                border-radius: 50%;
                border: 1px solid #3BA81F;
                width: 20px;
                height: 20px;
            }
        }
    }
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
        margin-left: 0;
    }
`;

export const AppointmentBoxWrapper = styled.div` 
    background: #FFFFFF;
    border-radius: 12px;
    padding:20px 10px;
    width: 32.3333%;
    min-width: 350px;
    min-height: 470px;

    @media screen and (max-width: 960px) {
        min-height: auto;
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        min-width: auto;
        min-height: auto;
    }

    .appointments {
        padding:0 10px;
        .appoint_box {
            .appoint_content {
                color: #939CA7;
                h3 {
                    font-weight: 800;
                    font-size: 18px;
                    color: #6F7D97;
                    margin-bottom:0px;
                }
                p {
                    margin-bottom:0px;
                    font-weight: 700;
                }
            }
        }
        .booked {
            .anticon svg {
                fill: #07A287;
            }
        }
        .confirmed {
            .anticon svg {
                fill: #3E479B;
            }
        }
        .unconfirmed {
            .anticon svg {
                fill: #FC4D4C;
            }
        }
        .expected {
            .anticon svg {
                fill: #FEB161;
            }
        }
    }
`;

export const VisitsBoxWrapper = styled.div` 
    background: #FFFFFF;
    border-radius: 15px;
    padding: 20px 15px;
    width: 49%;
    min-width: 500px;
    min-height: 710px;

    @media screen and (max-width: 1200px) {
        min-height: auto;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        min-width: auto; 
    }
`;

export const ShowUpBoxWrapper = styled.div` 
    background: #FFFFFF;
    border-radius: 15px;
    padding: 20px 15px;
    width: 49%;
    min-width: 500px;

    @media screen and (max-width: 767px) {
        width: 100%;
        min-width: auto; 
    }
`;





