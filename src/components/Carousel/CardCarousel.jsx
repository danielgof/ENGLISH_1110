import React from 'react';
// import Carousel from 'react-carousel-3d';
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

const CardCarousel = () => {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen="https://stories.starbucks.com/uploads/sites/17/2020/08/WEBSITE_HEADER_STORIES.png"
        title="Loyalty Programs" 
        textCard="Starbucks Rewards: Starbucks Rewards is a loyalty program that offers customers free drinks and food items after they accumulate a certain number of stars. This program encourages customers to keep coming back to Starbucks to earn rewards, and it benefits Starbucks by increasing sales."
        link="/lotaltyprograms"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen="https://www.apple.com/v/iphone/home/bn/images/meta/iphone__ky2k6x5u6vue_og.png"
        title="Bundling Products"
        textCard="Apple's iPhone Bundle: Apple offers a bundle deal for its iPhone that includes a phone case, AppleCare+ protection plan, and a set of AirPods. This bundle deal encourages customers to buy all the products together, and it benefits Apple by increasing sales."
        link="/bundlingproducts"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen="https://www.nj.com/resizer/5jNldxX9u5MwHsJlzWfCP6HH7SE=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/5QSHZDKCXVGZXEBVGHV2ONBQYI.png" 
        title="Free Trials"
        textCard="Paramount Free Trial: Paramount offers a one-month free trial to new customers. This encourages customers to try out the streaming service without committing to a purchase, and it benefits Netflix by increasing the likelihood that customers will become paying subscribers."
        link="/freetrials"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen="https://assets-prd.ignimgs.com/2022/06/27/10-things-to-know-before-prime-day-starts-ign-2022-1656329456923.png" 
        title="Discounts"
        textCard="Amazon Prime Day: Amazon's Prime Day event offers discounts on a wide range of products for Amazon Prime members. This encourages customers to make purchases on Amazon, and it benefits Amazon by increasing sales."
        link="/discounts"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen="https://imageio.forbes.com/specials-images/imageserve/61db66d0faa11c03fff8d8c0/McDonald-s-French-Fries/0x0.jpg?format=jpg&crop=1976,1391,x19,y247,safe&width=960" 
        title="Buy One Get One Free"
        textCard="McDonald's BOGO Deal: McDonald's frequently offers BOGO deals on its menu items, such as buy one Big Mac, get one for free. This encourages customers to buy more of the product, and it benefits McDonald's by increasing sales."
        link="/byonegetone"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
        imagen="https://vlivetricks.com/wp-content/uploads/2019/04/dropbox-referral-program.jpg" 
        title="Referral Programs"
        textCard="Dropbox Referral Program: Dropbox offers a referral program where users can earn extra storage space for free by inviting their friends to sign up for Dropbox. This benefits the user by giving them extra storage space, and it benefits Dropbox by increasing the number of users on the platform."
        link="/referralprograms"
        />
      )
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="600px"
        width="55%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  )
};

export default CardCarousel;
