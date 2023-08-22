import styled from 'styled-components';

export const TabsWrapper = styled.div`
    .ant-tabs-tab {
        display: flex;
        min-width: 125px;
        justify-content: center;
    }
`;

export const TabpenWrapper = styled.div`
    margin: 22px 25px;
`;

export const Subtitle = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #6F7D97;

    span {
        color: #E15150;
    }
`;

export const Boxwrapper = styled.div`
   display:flex;
   flex-wrap: wrap;
   margin-top:12px;
   letter-spacing: 0.02em;

    .unsched_box {
        background: #FFFFFF;
        box-shadow: 0px 4px 14px rgba(232, 232, 232, 0.25);
        border-radius: 10px;
        width:206px;
        padding:20px;
        margin-right:12px;
        margin-bottom:18px;
        cursor:pointer;

        h4, h5 {
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            color: #212121;
            margin-bottom:6px;
        }

        h5{
            color: #6F7D97;
            margin-top:4px;
        }

        .big_text {
            font-weight: 700;
            font-size: 22px;
            line-height: 28px;
        }
    }
`;

export const TableWrapper = styled.div`
    letter-spacing: 0.02em;
    border-radius: 10px;
    background:#fff;

    .ant-tabs-nav {
        border-radius: 10px 10px 0 0;

        .ant-tabs-tab {
            min-width:220px;
        }
    }

    .ant-table {
        text-align:center;
        font-size: 13px;
        line-height: 16px;
        color: #212121; 
        font-weight:400;

        .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
            display:none;
        }

        @media screen and (max-width: 1087px) {
            overflow-x: auto;
        }
        
        table {
            thead {
                tr {
                    th {
                        text-align:center;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 18px;
                        color: #6F7D97;
                        border:none; 
                    }
                }
            }
            tbody {
                tr:first-child {
                    .ant-avatar {
                        background-color: #FF9458;
                    }  
                }
                tr:nth-child(2) {
                    .ant-avatar {
                        background-color: #FF8ACC;
                    }  
                }
                tr:nth-child(3) {
                    .ant-avatar {
                        background-color: #F1B44C;
                    }  
                }
                tr:nth-child(4) {
                    .ant-avatar {
                        background-color: #50A5F1;
                    }  
                }
                tr:nth-child(5) {
                    .ant-avatar {
                        background-color: #29C3A5;
                    }  
                }
    
                tr {
                    td {
                        :first-child {
                            text-align:left !important;
                        }
                    }
                    td {
                        text-align:center;
                    }
                }
            }
            @media screen and (max-width: 1087px) {
                width: max-content;
            }
        }
        &::-webkit-scrollbar {
            height: 5px;
          }
    }
`;

export const MathBox = styled.div`
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    width: 100%;
    height: 161px;
    margin:15px 0;

    .equation {
        max-width:40%;
        flex: 1 1 100%;
        @media screen and (max-width: 992px) {
            max-width:100%;
        }
    }

    .progress_forcast {
        max-width:56%;
        flex: 1 1 100%;
        @media screen and (max-width: 992px) {
            max-width:100%;
        }

        .ant-progress-inner , .ant-progress-bg {
            border-radius: 0;
        }
        .ant-progress-bg {
            height: 20px !important;
        }
        .ant-progress-text {
            color: #fff;
            background-color: #1890ff;
            line-height: 16px;
            font-size: 12px;
            width: 100%;
            position: absolute;
            z-index: 3;
            top: 34px;
            width: 170px;
            left: calc(80% - 122px);
            display: inline-block;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            padding: .25em .6em;
            border-radius: 10rem;

            &::after {
                content: "";
                height: 14px;
                background: #007bff;
                width: 2px;
                display: inline-block;
                text-align: center;
                position: absolute;
                left: calc(50% - 2px);
                top: -14px;
            }
        }
        }
    }

    .w30 {
        max-width:30%;
        width:100%;
        text-align:center;
    }

    .w5 {
        max-width:5%;
        width:100%;
        text-align:center;
    }
`;

export const Matric = styled.div`
    button.edit_matrics_btn {
    color: #1890ff;
    border: none;
    background: transparent;
    display: block;
    margin-left: auto;
    font-size: .875rem;
    font-weight: 700;
    }

    .grid_box_container {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        position: relative;

        .white_box {
            display: block;
            width: 374px;
            height: 320px;
            margin: 9px 19px 9px 0;
            z-index: 1;
            background: #fff;
            color: #000;
            border-radius: 16px;

            .box_content {
                padding: 20px;
                h3 {
                    margin-bottom: 0;
                    font-weight: 800;
                    font-size: 1.125rem;
                }
                .box_subtitle {
                    color: grey;
                }
                h1 {
                    font-weight: 800;
                    font-size: 2rem;
                }
                .red_text .anticon, .red_text span{
                    color: red;
                    
                }
            }
        } 
    }
`;

export const Drawerwrap = styled.div`
    .ant-drawer.morning_huddle_drawer {
        .ant-drawer-header {
            background-color: #007eff;
            color: #fff;
            border-bottom: none !important;
        }
        .ant-drawer-body {
            padding: 0 !important;
        }
        .ant-drawer-close {
            color: #fff !important;
        }
    }

`;

export const DrawerContent = styled.div`
    .patients_list_wrapper {
        margin: 0 !important;
        padding: 0;
        list-style: none;
    }
    
    .patients_list_content {
        border-bottom: 1px solid rgba(0,0,0,.12);
        padding: 16px;

        .ant-avatar {
            margin-right: 10px;
        }
        b {
            font-size: 18px;
        }
        .patient_name {
            display:flex;
            align-items:center;
            cursor: pointer;
        }
        .blue_badge {
            font-weight: 800;
            letter-spacing: normal;
            padding: 2px 10px;
            white-space: nowrap;
            background-color: #0161dc!important;
            color: #fff;
            border-radius: 16px;
        }
        .np_badge {
            margin-left: 5px;
            flex-direction: row;
            display: flex;
            place-content: center;
            align-items: center;
            background-color: rgb(0, 123, 255);
            color: rgb(255, 255, 255);
            font-size: 8px;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            font-weight: 700;
        }
    }

`;










