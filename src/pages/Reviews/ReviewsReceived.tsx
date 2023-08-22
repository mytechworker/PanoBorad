import './Review.css';
import { Progress, Rate } from 'antd';

const Review = () => {
    return (
        <>
            <div className="review_wrapper">
                <div className="review_header d_flex">
                    <span className="r_title">Reviews</span>
                    <button type="submit" className="add_employ_btn">
                        <span>+ Add Competitors</span>
                    </button>
                </div>
                <div className="review_container">
                    <div className="total_google_review">
                        <h2 className="review_title">Total Google Reviews</h2>
                        <div className="r_total">1456</div>
                        <div className="review_list">
                            <ol>
                                <li className="list_content">
                                    <div className="list_item">
                                        <span>Moradi Signature Smiles</span>
                                        <Progress percent={33} strokeColor="#FF9458" trailColor="#F4F7FB" />
                                    </div>
                                </li>

                                <li className="list_content">
                                    <div className="list_item">
                                        <span>Smile Program</span>
                                        <Progress percent={65} strokeColor="#F492A0" trailColor="#F4F7FB" />
                                    </div>
                                </li>

                                <li className="list_content">
                                    <div className="list_item">
                                        <span>The Dental Views</span>
                                        <Progress percent={30} strokeColor="#29C3A5" trailColor="#F4F7FB" />
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="total_google_review">
                        <h2 className="review_title">Total Google Ratings</h2>
                        <div className="r_total">4.9</div>
                        <div className="review_list">
                            <ol>
                                <li className="list_content">
                                    <div className="list_item d_flex">
                                        <span>Moradi Signature Smiles</span>
                                        <span className="rating_value" style={{ color: '#FF9458' }}>4.9</span>
                                    </div>
                                    <Rate allowHalf defaultValue={4.9} />
                                </li>

                                <li className="list_content">
                                    <div className="list_item d_flex">
                                        <span>Smile Program</span>
                                        <span className="rating_value" style={{ color: '#F492A0' }}>3.0</span>
                                    </div>
                                    <Rate allowHalf defaultValue={3.0} />
                                </li>

                                <li className="list_content">
                                    <div className="list_item d_flex">
                                        <span>The Dental Views</span>
                                        <span className="rating_value" style={{ color: '#29C3A5' }}>4.2</span>
                                    </div>
                                    <Rate allowHalf defaultValue={4.2} />
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="total_google_review">
                        <h2 className="review_title">Latest Google Reviews</h2>
                        <div className="r_total">5.0</div>
                        <div className="review_list">
                            <ol>
                                <li className="list_content">
                                    <div className="list_item d_flex">
                                        <span>Moradi Signature Smiles</span>
                                        <span className="rating_value" style={{ color: '#FF9458' }}>4.9</span>
                                    </div>
                                    <Rate allowHalf defaultValue={4.9} />
                                </li>

                                <li className="list_content">
                                    <div className="list_item d_flex">
                                        <span>Smile Program</span>
                                        <span className="rating_value" style={{ color: '#F492A0' }}>3.0</span>
                                    </div>
                                    <Rate allowHalf defaultValue={3.0} />
                                </li>

                                <li className="list_content">
                                    <div className="list_item d_flex">
                                        <span>The Dental Views</span>
                                        <span className="rating_value" style={{ color: '#29C3A5' }}>4.2</span>
                                    </div>
                                    <Rate allowHalf defaultValue={4.2} />
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
