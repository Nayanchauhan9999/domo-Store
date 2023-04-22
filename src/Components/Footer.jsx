import React from "react";
import { FaMapMarkerAlt, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-3" >
      <div className="p-11 max-sm:p-4 rounded main_div_footer">
        <section className="top_footer_content border-b border-gray-400 pb-3 mb-3">
          <div className="get_in_touch">
            <h2>get in touch</h2>
            <div className="get_in_touch_links">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus asperiores voluptates doloribu.
              </p>
              <div className="address_details_footer">
                <div>
                  <i>
                    <FaMapMarkerAlt />
                  </i>
                  <address> 123 Street, New York, USA</address>
                </div>
                <div>
                  <i>
                    <MdEmail />
                  </i>
                  <p>nayanchauhan9999@gmail.com</p>
                </div>
                <div>
                  <i>
                    <IoCallSharp />
                  </i>
                  <p>+91-9904392234</p>
                </div>
              </div>
            </div>
          </div>
          <div className="quick_shop">
            <h2> Quick Shop </h2>
            <div className="quick_links">
              <div className="quick_link_home">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Home</span>
              </div>
              <div className="quick_link_ourshop">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Our Shop</span>
              </div>
              <div className="quick_link_details">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Our Details</span>
              </div>
              <div className="quick_link_shopingcart">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Shoping Cart</span>
              </div>
              <div className="quick_link_contact">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Contact Us</span>
              </div>
            </div>
          </div>
          <div className="my_account">
            <h2>My Account</h2>
            <div className="my_account_links">
              <div className="my_account_link_profile">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Profile</span>
              </div>
              <div className="my_account_link_save_cards">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Saved Cards and wallet</span>
              </div>
              <div className="my_account_link_wishlist">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Your Wishlist</span>
              </div>
              <div className="my_account_link_orders">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Your Orders</span>
              </div>
              <div className="my_account_link_saved_address">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>Saved Address</span>
              </div>
              <div className="my_account_link_coupons">
                <i>
                  <BsArrowRightShort />
                </i>
                <span>My Coupons</span>
              </div>
            </div>
          </div>
          <div className="news_latter">
            <h2>News Latter</h2>
            <div className="news_latter_links">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                quos.
              </p>
              <div className="send_mail">
                <input type="text" placeholder="Enter Your Email" />
                <button className="">sign Up</button>
              </div>
              <div className="social_media_toaster">
                <h3>follow us</h3>
                <div className="social_media_icons">
                  <i>
                    <AiOutlineTwitter className="twitter"/>
                  </i>
                  <i>
                    <FaFacebookSquare  className="facebook"/>
                  </i>
                  <i>
                    <ImLinkedin className="linkedin"/>
                  </i>
                  <i>
                    <AiOutlineInstagram className="instagram"/>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom_footer_content">
          <div className="copyright_text">
            <p>
              &copy; <span>demostore.</span> All Rights Reserved. Designed by
              <span> &nbsp; Nayan Chauhan</span>
            </p>
          </div>
          <div className="payment_options max-sm:mt-5" >
            <Image src="/images/payments.png" width={300} height={40} alt="payment_image"></Image>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
