import styled from 'styled-components';

export const TriggersWrapper = styled.div`
    margin:24px;
    .heading_text {
        color: black;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 0.02em;
        margin-right: 15px;
    }
    @media screen and (max-width: 767px) {
        .sc-fmlJrY { flex-wrap: wrap !important; }
        .heading_text { margin-bottom: 20px; }
        .trigger_header_btns button:first-child {
            margin-bottom: 10px;
        }
    }
    
`;
export const TriggersContent = styled.div`
    background: #FFFFFF;
    border-radius: 15px;
    padding:20px 20px 100px 20px;

    .ant-divider-horizontal {
        margin:0;
    }

    .dropdown_wrapper {
        white-space: nowrap;

        @media screen and (max-width: 767px) {
            button span {
                font-size: 14px;
            }
            .draft_btn, .more_btn {
                height: auto !important;
                padding: 5px !important;
            }
        }
        
    }

    .trigger_box {
        padding:15px 0 15px 10px;
        .blue_text {
            font-weight: 600;
            font-size: 13px;
            line-height: 16px;
            color: #5A8DEE;
            margin-bottom:0;
            padding-right:15px;
        }
        .draft_btn {
            background: rgb(111 125 151 / 10%);
            border-radius: 3px;
            color: #6F7D97;
            border-color: transparent;
            margin-right: 10px;
            padding:10px; 
        }
        .more_btn {
            background: rgb(90 141 238 / 10%);
            border-radius: 3px;
            color: #5A8DEE;
            border-color: transparent;
            padding:10px;
            
            .anticon-more svg {
                transform: scale(1.5);
            }
        }
        @media screen and (max-width: 767px) {
            .blue_text {
                padding-right:0px;
                padding-bottom:15px;
            }
        }
    }
`;

export const TriggersDetailsWrapper = styled.div`
    margin:24px;
    .active_btn {
        background: #FFFFFF;
        border-radius: 5px;
        border-color: transparent;
        color: #6F7D97;
    }
    .heading_text {
        color: black;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 0.02em;
        margin-right: 15px;
    }

    @media screen and (max-width: 767px) {
        .heading_text { margin-bottom: 20px; }
        .trigger_header_btns button:first-child, .trigger_header_btns button:nth-child(2) {
            margin-bottom: 10px;
        }
    }
`;

export const TriggersDetailsContent = styled.div`
    background: #FFFFFF;
    border-radius: 15px;
    padding:20px;

    .trigger_boxs {
        .w50 {
            width:50%;
        }
        h2 {
            font-weight: bold;
            font-size: 17px;
            line-height: 21px;
            color: #212121;
            margin-bottom:20px;
        }
        p {
            color: #6F7D97;
            margin-bottom:8px;
        }
        .que_box {
            margin-bottom:20px;
            .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
                height: 52px;
                align-items: center;
            }
            .ant-select:not(.ant-select-customize-input) .ant-select-selector {
                border-radius: 5px;
                border-color: #dadada;
            }
            .ant-select {
                color: #939CA7;
            }
            .slect_boxs {
                @media screen and (max-width: 576px) {
                    flex-wrap: wrap;
                    .ant-select {
                        width: 100% !important;
                        margin-right: 0 !important;
                        margin-bottom: 10px;
                    }
                }
            }
            @media screen and (max-width: 576px) {
                .single_select {
                    margin-top: 0px !important;
                }
            }

        }
        .add_filtr_btn {
            padding: 0;
            border: none;
            color: #5A8DEE;
            height: auto !important;
            text-align:right;
            box-shadow: none;
            &:hover {
                filter: unset;
            }
            .anticon {
                vertical-align: middle;
                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }
        .divider-vertical{
            position: relative;
            margin-right:20px;
            padding-right:20px;
            padding-bottom:250px;

            &:after {
                content: "";
                border-right: 1px solid #dadada;
                position: absolute;
                right: 0;
                height: 100%;
                top: 0;
            }
        }

        @media screen and (max-width: 992px) {
            flex-wrap:wrap;
            .w50 {
                width:100%;
            }
            .divider-vertical{
                padding-bottom: 20px;
                padding-right: 0;
                margin-right: 0;

                &:after {
                    display:none;
                }
            }
        }
        
    }
    
`;

