import styled from 'styled-components';

export const TableDrawerWrapper = styled.div`
@media screen and (max-width: 767px) {
    .table-drawer .ant-drawer-content-wrapper {
        width: 100% !important;
    }
    .table-drawer .ant-table-body {
        max-height: 400px !important;
    }
}
`;
export const DrawerHeader = styled.div`
.schedule_header {
    background: #dcdcdc;
    width:100%;
    @media screen and (max-width: 767px) {
        overflow-x:auto;
    }
    ul {
        @media screen and (max-width: 767px) {
            width: max-content;
        }
        display:flex;
        align-content: stretch;
        justify-content: space-around;
        list-style-type: none;
        color: #000;
        width: 100%;
        margin: 0;
        padding: 0;

        li{
            @media screen and (max-width: 767px) {
               padding:10px;
            }
            flex: 1 1 100%;
            max-width: 16.6%;
            text-align: center;
            border-right: 1px solid white;
            padding: 8px 0;

            p {
                font-size: 1rem;
                line-height: 1.2;
                margin-bottom: 4px;
                font-weight: 700;
            }

            h2 {
                font-weight: 800;
                font-size: 1.5rem;
                line-height: 1.2;
                letter-spacing: -.8px;
                margin-bottom: 4px;
            }
            h5 {
                font-size: .875rem;
                font-weight: 800;
                letter-spacing: normal;
                color: #39c088!important;
                margin-bottom: 0px;
            }
        }
    }
}
`;

export const DrawerTable = styled.div`

.ant-table.ant-table-fixed-header {
    @media screen and (max-width: 1280px) {
        overflow-x: auto;
    }
    table {
        // @media screen and (max-width: 1280px) {
        //     width: max-content;
        // }
        thead {
            height: 60px;

            tr {
                th:nth-child(2) {
                    text-align:left;
                }
                th{
                    border-bottom:none;
                    color: #61778c;
                    font-size: 14px;
                    font-weight: 800;
                    letter-spacing: normal;
                    text-align:center;

                    &:before {
                        display:none;
                    }
                }
            }
        }
        tbody {
            tr {
                td:first-child {
                    color: #667b98;
                    font-size: 14px;
                    font-weight: 400;
                    width:10%;
                }
                td:nth-child(2) {
                    text-align:left;
                    width:36%;
                }
                td:nth-child(3) {
                    width:14.5%; 
                }
                td:nth-child(4) {
                    width:14.5%; 
                }
                td:nth-child(5) {
                    color:#e6525a;
                    width:13.5%;
                }
                th:nth-child(6) {
                    width:11.5%; 
                }
                td {
                    text-align:center;
                    color:#000;
                    font-size:16px;
                }
            }
            tr:nth-child(6) {
                background: repeating-linear-gradient(
                    45deg,#34ba8300,#34ba8300 10px,#a1b3bc33 10px,#a1b3bc33 20px);
                height: 60px; {
                    &:hover {
                        td {
                            background:transparent;
                        }
                    }
                }
                td:nth-child(2) {
                    .patient_details {
                        display:none;
                    }
                }
            }
            tr:nth-child(8) {
                background: repeating-linear-gradient(
                    45deg,#34ba8300,#34ba8300 10px,#a1b3bc33 10px,#a1b3bc33 20px);
                height: 60px; {
                    &:hover {
                        td {
                            background:transparent;
                        }
                    }
                }
                td:nth-child(2) {
                    .patient_details {
                        display:none;
                    }
                }
            }
        }
    }
}
.patient_details {
    font-size:16px;
    line-height:1.2;
    h3 {
        font-weight:700;
        margin-bottom:0;
    }
}
`;

