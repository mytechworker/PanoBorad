import styled from 'styled-components';

export const SupervisorWrapper = styled.div`
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
    }
`;
export const SupervisorContentBox = styled.div`
    .supervisor_box {
        background: #FFFFFF;
        border-radius: 15px;
        padding: 14px;
        letter-spacing: 0.02em;
        margin-bottom:20px;

        .text_circle {
            min-width: 145px;
            height: 145px;
            border-radius:50%;
            margin-right:36px;
        }

        .text_box {
            position: relative;
            width:90%;
            h5 {
                color: #212121;
                font-weight: 600;
                font-size: 16px;
                line-height: 184%;
                margin-bottom:0;
            }
            .ant-divider-horizontal {
                // width: 102%;
                // position: absolute;
                // right: -14px;
                margin: 16px 0;
            }
            p {
                font-weight: 600;
                font-size: 14px;
                line-height: 184%;
                color: #9C9C9C;
                // margin-top:35px;
            }
        }

        .gray_box_text {
            background: rgb(218 218 218 / 20%);
            border-radius: 0px 0px 15px 15px;
            padding:14px 32px 16px 16px;
            font-weight: 600;
            font-size: 14px;
            line-height: 184%;
            color: #9C9C9C;
            margin-bottom:0;
        }

       
        @media screen and (max-width: 767px) {
            .text_circle {
                margin-right:0px;
                margin-bottom:20px;
            }
            .text_box {
                width:100%;
            }
        }
    }
`;
