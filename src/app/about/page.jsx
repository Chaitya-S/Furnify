import { ivymode, montserrat } from "@/Fonts/FontMan";
import ProfileCard from "@/components/Utility/ProfileCard";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 pt-6 text-[#553939]">
        <div className="col-span-3 sm:col-span-2 p-3 sm:p-6 md:p-20">
          <h1 className={`text-5xl mb-4 ${ivymode}`}>About Us</h1>
          <p className={`my-9 ${montserrat}`}>
            Welcome to Furnify, your premier destination for high-quality
            furniture and home decor.
          </p>
          <h1 className={`text-3xl mb-4 ${ivymode}`}>Our Story</h1>
          <p className={`my-9 ${montserrat}`}>
            At Furnify, we believe that furniture isn't just about function –
            it's about transforming spaces and creating experiences. Our journey
            began 5th April, 2024 with a passion for craftsmanship and a vision
            to redefine the way people furnish their homes. Since then, we've
            grown into a trusted name in the industry, known for our commitment
            to quality, style, and exceptional customer service.
          </p>
          <h1 className={`text-3xl mb-4 ${ivymode}`}>Our Mission</h1>
          <p className={`my-9 ${montserrat}`}>
            Our mission at Furnify is simple: to inspire and empower individuals
            to create spaces they love. Whether you're furnishing a cozy
            apartment, a family home, or a stylish office, we're here to help
            you bring your vision to life. We believe that every piece of
            furniture tells a story and that your home should reflect your
            unique personality and lifestyle.
          </p>
          <h1 className={`text-3xl mb-4 ${ivymode}`}>Our Values</h1>
          <p className={`mt-9 ${montserrat}`}>
            At the heart of everything we do are our core values :
          </p>
          <ul className={`mb-9 list-disc ${montserrat}`}>
            <li>
              <span className="font-bold">Quality :</span> We hand-select each
              piece in our collection to ensure superior craftsmanship and
              durability.
            </li>
            <li>
              <span className="font-bold">Style :</span> From timeless classics
              to modern designs, we offer a curated selection of furniture to
              suit every taste and aesthetic.
            </li>
            <li>
              <span className="font-bold">Customer Service :</span> Your
              satisfaction is our top priority. Our knowledgeable team is here
              to assist you every step of the way, from product selection to
              delivery and beyond.
            </li>
          </ul>
          <h1 className={`text-3xl mb-4 ${ivymode}`}>Connect With Us</h1>
          <p className={`mt-9 ${montserrat}`}>
            Join the Furnify community and stay up-to-date with the latest
            trends, design tips, and exclusive offers. Follow us on social media
            and subscribe to our newsletter for inspiration straight to your
            inbox.
          </p>
        </div>
        <div className="invisible md:visible">
          <Image alt="image" src="/images/about.png" height={400} width={400} />
        </div>
      </div>
      <p
        className={`${montserrat} text-xl pb-9 text-[#553939] flex-row text-center`}
      >
        Thank you for choosing Furnify. We look forward to helping you create
        the home of your dreams!
      </p>

      <ProfileCard name="Bhavya Jain" designation="Timepass" />
    </>
  );
}
export default About;
