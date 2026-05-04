import { LogoFacebook, LogoLinkedin } from '@gravity-ui/icons';
import Link from 'next/link';
import { FaMastodon } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white py-28">
      <div className="grid grid-cols-1 px-5 md:grid-cols-3 gap-10 container mx-auto ">
        <div>
          <h2 className="text-xl font-bold mb-5">About</h2>
          <ul>
            <li>We are here to serve you very beautiful cows</li>
            <li>Our cows imported from India</li>
            <li>As well as we offer Deshi Goru</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-5">Social Links</h2>

          <div className="flex items-center gap-2">
            <div>
              <Link
                target="_blank"
                href={'https://www.facebook.com/salmanshahibneriyaj'}
              >
                <LogoFacebook></LogoFacebook>
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href={'https://www.linkedin.com/in/salman-ibn-riyaj/'}
              >
                <LogoLinkedin></LogoLinkedin>
              </Link>
            </div>
            <div>
              <Link
                target="_blank"
                href={'https://mastodon.social/@salmanshahrz'}
              >
                <FaMastodon />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-5">Contact info</h2>

          <div>
            <p>Email: rajib.faysal.124@gmail.com</p>
            <p>Yahoo mail: rajib.faysal.124@yahoo.com</p>
            <p>WhatsApp: +880177228811</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
