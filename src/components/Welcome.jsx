import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import Loader from './Loader.jsx'

const Input = ({ placeholder, name, value, type, handleChange }) => {
    return (
        <input 
            type={type}
            placeholder={placeholder} 
            step = "0.0001"
            value={value}
            onChange={(e) => handleChange(e, name)}
            className='welcome-input'
        />
    )
}

const Welcome = () => {

    const connectWallet = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div className="welcome">
            <div className="welcome-frame">
                <h1 className="welcome-title">
                    Send Crypto <br /> across the world
                </h1>
                <p className="welcome-desc">
                    Explore the crypto world. Buy and sell cryptocurrencies easily on Crypto.
                </p>
                <button type="button" onClick={connectWallet} className="btn btn-welcome">Connect Wallet</button>

                <div className="welcome-table">
                    <div className="welcome-table_item welcome-table_lt">
                        Reliability
                    </div>
                    <div className="welcome-table_item">
                        Reliability
                    </div>
                    <div className="welcome-table_item welcome-table_rt">
                        Reliability
                    </div>
                    <div className="welcome-table_item welcome-table_lb">
                        Reliability
                    </div>
                    <div className="welcome-table_item">
                        Reliability
                    </div>
                    <div className="welcome-table_item welcome-table_rb">
                        Reliability
                    </div>
                </div>
            </div>
            <div className="welcome-frame">
                <div className="welcome-box">
                    <div className="welcome-card eth-card white-glassmorphism">
                        <div className="welcome-card_header">
                            <div className='welcome-card_circle'>
                                <SiEthereum className='welcome-card_icon' />
                            </div>
                            <BsInfoCircle className='welcome-card_note' />
                        </div>
                        <div className="welcome-card_footer">
                            <p className="welcome-card_address">
                                Address
                            </p>
                            <p className="welcome-card_namecard">
                                Ethereum
                            </p>
                        </div>
                    </div>

                    <div className="welcome-form">
                        <Input placeholder='Address To' name='addressTo' type='text' handleChange={() => {}}/>
                        <Input placeholder='Amount (ETH)' name='amount' type='value' handleChange={() => {}}/>
                        <Input placeholder='Keyword' name='keyword' type='text' handleChange={() => {}}/>
                        <Input placeholder='Enter Message' name='message' type='text' handleChange={() => {}}/>

                        <div className="bulkhead-form"></div>

                        {
                            false ? (
                                <Loader />
                            ) : (
                                <button 
                                    type='button' 
                                    onClick={handleSubmit}
                                    className='btn btn-form'
                                >
                                    Send now
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;