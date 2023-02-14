import React from 'react'
import Footer from '../footer/Footer'

const TermsCondition = () => {
    return (
        <div>
            <div className='h-[400px] p-[10%] sm:pl-[20px] sm:p-0 sm:py-[40%] bg-[#ffd7ef]'>
                <h1>Terms & Conditions</h1>
            </div>
            <div style={{'borderBottomRightRadius':'80%'}} className='bg-[#ffd7ef] h-[100px]'>
                 
            </div>
            <div className='w-[40%] ml-[10%] mr-[40%] mt-[40px] sm:w-[90%] sm:mx-auto my-[18px]'>
                <p className='text-[14px] tracking-[1px] leading-[25px] py-[30px]'>
                    Terms and conditions (“Terms”) are a set of legal terms defined by the owner of a website. 
                    They set forth the terms and conditions governing the activities of the website visitors 
                    on the said website and the relationship between the site visitors and the website owner.  
                    Terms must be defined according to the specific needs and nature of each website. 
                    For example, a website offering products to customers in e-commerce transactions requires 
                    Terms that are different from the Terms of a website only providing information. Terms provide 
                    the website owner the ability to protect themselves from potential legal exposure.
                </p>
                <h2 className='text-[22px]'>
                    <b>
                    In general, what should you cover in your Terms & Conditions?
                    </b>
                </h2>
                <ul className='list-decimal text-[14px] tracking-[1px] pl-[25px] m-[15px] leading-[25px]'>
                    <li>Who can use your website; what are the requirements to create an account (if relevant)</li>
                    <li>
                        Key commercial Terms offered to customers
                    </li>
                    <li>
                        Retention of right to change offering
                    </li>
                    <li>
                        Warranties & responsibility for services and products
                    </li>
                    <li>
                        Ownership of intellectual property, copyrights and logos
                    </li>
                    <li>
                        Right to suspend or cancel member account
                    </li>
                    <li>
                        Indemnification
                    </li>
                    <li>
                        Limitation of liability
                    </li>
                    <li>
                        Preference of law and dispute resolution
                    </li>
                    <li>
                        Contact info
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default TermsCondition