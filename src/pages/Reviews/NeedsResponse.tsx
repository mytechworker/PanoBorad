import { EnvironmentOutlined } from '@ant-design/icons';
import './Review.css';
import NeedsResponseFilterModal from './NeedsResponseFilterModal';
import { Rate } from 'antd';

const NeedsResponse =  () => {    
    return (
        <>
           <div className="review_wrapper">
                <div className="review_header d_flex">
                    <span className="r_title">Needs Response</span>
                    <div className="filer_btn_wrapper">
                        <NeedsResponseFilterModal/>
                        <button type="submit" className="add_employ_btn">
                        Generate Reports
                        </button>
                    </div>
                </div>
                <div className="need_response_container">
                    <h3 className="location_name"><EnvironmentOutlined />Moradi Signature Smiles
                        <p>3992 S Bascom Ave #3, San Jose, CA 95124, USA</p>
                    </h3>
                        
                    <div className="response_content_wrapper">
                        <div className="response_title_wrapper">
                        <div className="google_img_wrapper d_flex">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                <path d="M23.0935 9.91404L13.3042 9.91357C12.8719 9.91357 12.5215 10.2639 12.5215 10.6962V13.8235C12.5215 14.2557 12.8719 14.6061 13.3041 14.6061H18.8169C18.2132 16.1727 17.0865 17.4847 15.6491 18.3183L17.9997 22.3875C21.7704 20.2067 23.9997 16.3804 23.9997 12.097C23.9997 11.4871 23.9548 11.0511 23.8649 10.5602C23.7965 10.1872 23.4727 9.91404 23.0935 9.91404Z" fill="#167EE6"/>
                                <path d="M12.0003 19.3047C9.30242 19.3047 6.94723 17.8306 5.68231 15.6494L1.61328 17.9948C3.68398 21.5836 7.56308 24.0003 12.0003 24.0003C14.177 24.0003 16.2309 23.4143 18.0003 22.3929V22.3873L15.6496 18.3181C14.5744 18.9417 13.3302 19.3047 12.0003 19.3047Z" fill="#12B347"/>
                                <path d="M18 22.3922V22.3866L15.6494 18.3174C14.5741 18.941 13.33 19.304 12 19.304V23.9996C14.1767 23.9996 16.2308 23.4135 18 22.3922Z" fill="#0F993E"/>
                                <path d="M4.69566 11.9998C4.69566 10.67 5.05856 9.42588 5.68205 8.35071L1.61302 6.00537C0.586031 7.76913 0 9.81748 0 11.9998C0 14.1821 0.586031 16.2304 1.61302 17.9942L5.68205 15.6489C5.05856 14.5737 4.69566 13.3296 4.69566 11.9998Z" fill="#FFD500"/>
                                <path d="M12.0003 4.69566C13.7595 4.69566 15.3755 5.32078 16.6377 6.36061C16.9491 6.61711 17.4017 6.59859 17.6869 6.31336L19.9027 4.09758C20.2263 3.77395 20.2033 3.24422 19.8575 2.94431C17.7428 1.10967 14.9912 0 12.0003 0C7.56308 0 3.68398 2.41673 1.61328 6.00558L5.68231 8.35092C6.94723 6.16969 9.30242 4.69566 12.0003 4.69566Z" fill="#FF4B26"/>
                                <path d="M16.6374 6.36061C16.9488 6.61711 17.4015 6.59859 17.6867 6.31336L19.9024 4.09758C20.226 3.77395 20.203 3.24422 19.8573 2.94431C17.7425 1.10963 14.991 0 12 0V4.69566C13.7592 4.69566 15.3752 5.32078 16.6374 6.36061Z" fill="#D93F21"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="response_title d_flex">
                                <div>
                                    <h2>Cyndi Edinger</h2>
                                    <Rate allowHalf defaultValue={4.9} />
                                </div>
                                <span className="date_text">SAT, 19 MAR 2020, 01:30 PM</span>
                        </div>
                        </div>
                        <div className="response_content">
                            
                            <p className="response_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
                            <div className="d_flex">
                                <div className="response_from_owner">
                                    <span>Response from the owner</span>
                                    <span>We think youre pretty great yourself!</span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1881 0.75C13.9589 0.75 13.7206 0.841667 13.5464 1.01583L11.8689 2.69333L15.3064 6.13083L16.9839 4.45333C17.3414 4.09583 17.3414 3.51833 16.9839 3.16083L14.8389 1.01583C14.6556 0.8325 14.4264 0.75 14.1881 0.75ZM10.8883 6.26841L11.7316 7.11174L3.4266 15.4167H2.58327V14.5734L10.8883 6.26841ZM0.75 13.8124L10.8883 3.67408L14.3258 7.11158L4.1875 17.2499H0.75V13.8124Z" fill="#5A8DEE"/>
                                    </svg>
                                </div>
                                <div className="date_text">SAT, 20 DEC 2020, 2:00 AM</div>
                            </div>
                            <div className="textarea_wrap">
                                <textarea name="" id=""  rows={5}></textarea>
                                <div className="text_right"><button className="btn_fill"><span>Reply</span></button></div>
                            </div>
                        </div>
                    </div>
                </div>
                
           </div>
        </>
    )
}

export default NeedsResponse
