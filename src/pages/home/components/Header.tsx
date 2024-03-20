import { LogoIcon } from "../../../assets";

const Header = () => {
  return (
    <div>
      <a href="/">
        <img
          className="mx-auto w-[100px] lg:w-[166px] mt-10"
          src={LogoIcon}
          alt=""
        />
      </a>
    </div>
  );
};

export default Header;
